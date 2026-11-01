'use strict';

// Public GitHub user and YouTube channel shown on the page.
const GITHUB_USER = 'BenyHdezM';
const YT_CHANNEL = 'UCmqqoYYjcceK_UA2cX2XoOg';
// Client-side key: restrict it by HTTP referrer (and to YouTube Data API v3) in Google Cloud Console.
const YT_KEY = 'AIzaSyAaxGEBeYwTovjG344p447DH3iEzv_SBJc';

// Cards visible before "show more" in the projects and videos grids.
const VISIBLE_CARDS = 6;

const START_YEAR = 2014;
const now = new Date().getFullYear();
document.getElementById('year').textContent = now;
for (const id of ['years', 'years-about']) {
  document.getElementById(id).textContent = now - START_YEAR;
}

// Highlight the nav link of the section currently in view.
const navLinks = [...document.querySelectorAll('.bar nav a[href^="#"]')];
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const a of navLinks) {
        const active = a.getAttribute('href') === `#${entry.target.id}`;
        if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => observer.observe(s));
}

function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

function link(href, text, className = '') {
  return el('a', { href, className, target: '_blank', rel: 'noopener noreferrer' }, text);
}

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.status);
  return res.json();
}

// Render cards into a grid; cards past VISIBLE_CARDS start hidden behind the toggle.
async function fill(containerId, load, toCard, emptyMsg) {
  const box = document.getElementById(containerId);
  try {
    const cards = (await load()).map(toCard);
    cards.forEach((card, i) => {
      if (i >= VISIBLE_CARDS) {
        card.hidden = true;
        card.classList.add('extra');
      }
    });
    box.replaceChildren(...(cards.length ? cards : [el('p', { className: 'muted' }, emptyMsg)]));
    return cards.length;
  } catch (err) {
    box.replaceChildren(el('p', { className: 'muted' }, 'This section could not be loaded right now.'));
    return 0;
  }
}

// "Show more" control under a grid: reveals or hides the extra cards.
function setupToggle(listId, toggleId, sectionId) {
  const extras = [...document.querySelectorAll(`#${listId} .extra`)];
  const toggle = document.getElementById(toggleId);
  if (!extras.length) return;

  const button = toggle.querySelector('button');
  const label = button.querySelector('.more-label');
  const count = button.querySelector('.more-count');
  count.textContent = `+${extras.length}`;
  toggle.hidden = false;

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    extras.forEach((card) => { card.hidden = !open; });
    button.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Show fewer' : 'Show all';
    count.hidden = open;
    if (open) {
      extras[0].querySelector('a, button').focus({ preventScroll: true });
    } else {
      document.getElementById(sectionId).scrollIntoView({ block: 'start' });
    }
  });
}

// ---------- GitHub projects ----------
fill(
  'projects-list',
  () => getJson(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`),
  (r) => el('article', { className: 'repo' },
    el('h4', {}, link(r.html_url, r.name)),
    el('p', { className: 'clamp' }, r.description || 'No description.'),
    el('p', { className: 'meta' },
      ...(r.language ? [el('span', { className: 'lang' }, r.language)] : []),
      el('span', {}, `★ ${r.stargazers_count}`))),
  'No public repositories yet.'
).then(() => setupToggle('projects-list', 'projects-more', 'projects'));

// ---------- YouTube videos ----------
// The channel's uploads playlist lists every video, newest first, and costs far
// less API quota than a search request.
async function loadUploads() {
  const playlist = `UU${YT_CHANNEL.slice(2)}`;
  const videos = [];
  let page = '';
  for (let i = 0; i < 5; i++) {
    const data = await getJson(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlist}&key=${YT_KEY}${page ? `&pageToken=${page}` : ''}`
    );
    for (const item of data.items || []) {
      const s = item.snippet;
      const thumb = s.thumbnails && (s.thumbnails.high || s.thumbnails.medium || s.thumbnails.default);
      if (!thumb) continue; // private or deleted videos have no thumbnail
      videos.push({ id: s.resourceId.videoId, title: s.title, description: s.description, thumb: thumb.url });
    }
    if (!data.nextPageToken) break;
    page = data.nextPageToken;
  }
  return videos;
}

fill(
  'videos-list',
  loadUploads,
  (v) => {
    const title = decodeEntities(v.title);
    const play = el('button', { type: 'button', className: 'play' });
    play.setAttribute('aria-label', `Play video: ${title}`);
    play.addEventListener('click', () => openVideo(v.id, title));
    const icon = el('span', { className: 'play-icon' });
    icon.setAttribute('aria-hidden', 'true');
    return el('article', { className: 'card video' },
      el('div', { className: 'thumb' },
        el('img', { src: v.thumb, alt: '', loading: 'lazy' }),
        icon),
      el('div', { className: 'card-body' },
        el('h4', { className: 'clamp' }, title),
        el('p', { className: 'clamp' }, decodeEntities(v.description))),
      play);
  },
  'No videos yet.'
).then(() => setupToggle('videos-list', 'videos-more', 'videos'));

// YouTube may return titles with HTML entities (&amp;, &#39;); decode them as plain text.
function decodeEntities(text) {
  const t = document.createElement('textarea');
  t.innerHTML = text;
  return t.value;
}

// Floating player: opens centered over the page; closing it stops the video.
const dialog = document.getElementById('video-dialog');
const frame = document.getElementById('video-frame');

function openVideo(id, title) {
  document.getElementById('video-title').textContent = title;
  frame.replaceChildren(el('iframe', {
    src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`,
    title,
    allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen',
    allowFullscreen: true,
    referrerPolicy: 'strict-origin-when-cross-origin',
  }));
  dialog.showModal();
}

dialog.addEventListener('close', () => frame.replaceChildren());
dialog.querySelector('.video-close').addEventListener('click', () => dialog.close());
// Click on the dimmed area outside the player closes it.
dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
