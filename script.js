'use strict';

// Public GitHub user and YouTube channel shown on the page.
const GITHUB_USER = 'BenyHdezM';
const YT_CHANNEL = 'UCmqqoYYjcceK_UA2cX2XoOg';
// Client-side key: restrict it by HTTP referrer (and to YouTube Data API v3) in Google Cloud Console.
const YT_KEY = 'AIzaSyAaxGEBeYwTovjG344p447DH3iEzv_SBJc';

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

async function fill(containerId, url, toNodes, emptyMsg) {
  const box = document.getElementById(containerId);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const nodes = toNodes(await res.json());
    box.replaceChildren(...(nodes.length ? nodes : [el('p', { className: 'muted' }, emptyMsg)]));
  } catch (err) {
    box.replaceChildren(el('p', { className: 'muted' }, 'This section could not be loaded right now.'));
  }
}

fill(
  'projects-list',
  `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`,
  (repos) => repos
    .filter((r) => !r.fork)
    .map((r) => el('article', { className: 'repo' },
      el('h4', {}, link(r.html_url, r.name)),
      el('p', { className: 'clamp' }, r.description || 'No description.'),
      el('p', { className: 'meta' },
        ...(r.language ? [el('span', { className: 'lang' }, r.language)] : []),
        el('span', {}, `★ ${r.stargazers_count}`)))),
  'No public repositories yet.'
);

fill(
  'videos-list',
  `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=date&channelId=${YT_CHANNEL}&maxResults=12&key=${YT_KEY}`,
  (data) => (data.items || []).map((v) => {
    const s = v.snippet;
    const title = decodeEntities(s.title);
    const play = el('button', { type: 'button', className: 'play' });
    play.setAttribute('aria-label', `Play video: ${title}`);
    play.addEventListener('click', () => openVideo(v.id.videoId, title));
    const icon = el('span', { className: 'play-icon' });
    icon.setAttribute('aria-hidden', 'true');
    return el('article', { className: 'card video' },
      el('div', { className: 'thumb' },
        el('img', { src: s.thumbnails.high.url, alt: '', loading: 'lazy' }),
        icon),
      el('div', { className: 'card-body' },
        el('h4', { className: 'clamp' }, title),
        el('p', { className: 'clamp' }, decodeEntities(s.description))),
      play);
  }),
  'No videos yet.'
);

// YouTube returns titles with HTML entities (&amp;, &#39;); decode them as plain text.
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
