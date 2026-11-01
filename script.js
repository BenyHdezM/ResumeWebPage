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
// Also re-run after a language switch, because translated text replaces these spans.
function setYears() {
  for (const id of ['years', 'years-about']) {
    const node = document.getElementById(id);
    if (node) node.textContent = now - START_YEAR;
  }
}
setYears();

// ---------- Language (English / Spanish) ----------
// English is the text in index.html; Spanish comes from the ES dictionary (spanish_mx.js).
// Each element's original English is remembered so switching back restores it.
let lang = 'en';
const langListeners = [];
const original = new WeakMap();
const TEXT_SELECTOR = 'h1, h2, h3, h4, p, li, dt, dd, .btn, .bar nav a, .tags a, footer a, .skip, .dl-menu small';
const ATTRS = [
  ['[aria-label]:not(.play)', 'aria-label'],
  ['img[alt]:not([alt=""])', 'alt'],
  ['meta[name="description"], meta[property="og:description"]', 'content'],
];

function t(text) {
  return (lang === 'es' && ES[text]) || text;
}

// Years are live counters, so the dictionary writes them as "#".
const keyOf = (html) => html
  .replace(/(<span id="years(?:-about)?">)\d+(<\/span>)/, '$1#$2')
  .replace(/\s+/g, ' ')
  .trim();

function translateText() {
  for (const node of document.querySelectorAll(TEXT_SELECTOR)) {
    // Wrappers (a timeline <li> holding <p> and <ul>) are skipped: their children are
    // translated on their own, and rewriting the wrapper would undo that work.
    if (node.querySelector(TEXT_SELECTOR)) continue;
    // Buttons with an icon: translate only their text, not the <svg>.
    const textNode = node.querySelector(':scope > svg')
      ? [...node.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim())
      : null;
    const target = textNode || node;
    if (!original.has(target)) {
      original.set(target, textNode
        ? { raw: textNode.textContent, key: textNode.textContent.trim() }
        : { raw: node.innerHTML, key: keyOf(node.innerHTML) });
    }
    const { raw, key } = original.get(target);
    const scope = node.closest('.tags') ? 'tag' : node.tagName.toLowerCase();
    const es = lang === 'es' && (ES[`${scope}:${key}`] || ES[key]);
    const value = es || raw;
    if (textNode) {
      textNode.textContent = es || raw;
    } else if (node.innerHTML !== value) {
      node.innerHTML = value;
    }
  }
}

function translateAttrs() {
  for (const [selector, attr] of ATTRS) {
    for (const node of document.querySelectorAll(selector)) {
      const store = original.get(node) || {};
      if (!(attr in store)) { store[attr] = node.getAttribute(attr); original.set(node, store); }
      const base = store[attr];
      node.setAttribute(attr, (lang === 'es' && ES[base]) || base);
    }
  }
}

function applyLang() {
  translateText();
  translateAttrs();
  if (!original.has(document)) original.set(document, document.title);
  const baseTitle = original.get(document);
  document.title = (lang === 'es' && ES[baseTitle]) || baseTitle;
  document.documentElement.lang = lang;
  setYears();
  for (const btn of document.querySelectorAll('.play[data-title]')) {
    btn.setAttribute('aria-label', `${t('Play video:')} ${btn.dataset.title}`);
  }
  for (const btn of document.querySelectorAll('.lang button')) {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  }
  langListeners.forEach((fn) => fn());
}

function setLang(next) {
  lang = next;
  try { localStorage.setItem('lang', next); } catch { /* storage may be blocked */ }
  applyLang();
}

for (const btn of document.querySelectorAll('.lang button')) {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
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

// Mobile menu: toggle button, closes on link tap, Escape or outside tap.
const bar = document.querySelector('.bar');
const menuBtn = document.querySelector('.menu-toggle');
function setMenu(open) {
  bar.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenu(!bar.classList.contains('menu-open')));
bar.querySelector('nav').addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
document.addEventListener('click', (e) => { if (!bar.contains(e.target)) setMenu(false); });

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
    applyLang();
    return cards.length;
  } catch (err) {
    box.replaceChildren(el('p', { className: 'muted' }, 'This section could not be loaded right now.'));
    applyLang();
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

  const refreshLabel = () => {
    label.textContent = t(button.getAttribute('aria-expanded') === 'true' ? 'Show fewer' : 'Show all');
  };
  langListeners.push(refreshLabel);
  refreshLabel();

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    extras.forEach((card) => { card.hidden = !open; });
    button.setAttribute('aria-expanded', String(open));
    refreshLabel();
    count.hidden = open;
    if (open) {
      // Timeline entries have no link inside, so focus the entry itself.
      const first = extras[0];
      const target = first.querySelector('a, button') || first;
      if (target === first) first.tabIndex = -1;
      target.focus({ preventScroll: true });
    } else {
      document.getElementById(sectionId).scrollIntoView({ block: 'start' });
    }
  });
}

// ---------- Experience: older roles start collapsed ----------
setupToggle('timeline', 'experience-more', 'experience');

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
    play.dataset.title = title;
    play.setAttribute('aria-label', `${t('Play video:')} ${title}`);
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

// Download Resume: disclosure button + menu of links. Arrow keys move between options.
{
  const toggle = document.querySelector('.dl-toggle');
  const menu = document.getElementById('dl-menu');
  const items = [...menu.querySelectorAll('a')];
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const setDl = (open, focusIndex) => {
    toggle.setAttribute('aria-expanded', String(open));
    if (open && focusIndex !== undefined) items[focusIndex]?.focus();
  };
  toggle.addEventListener('click', () => setDl(!isOpen()));
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setDl(true, 0); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setDl(true, items.length - 1); }
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setDl(false); });
  menu.addEventListener('keydown', (e) => {
    const at = items.indexOf(document.activeElement);
    const go = { ArrowDown: at + 1, ArrowUp: at - 1, Home: 0, End: items.length - 1 }[e.key];
    if (go !== undefined) { e.preventDefault(); items[(go + items.length) % items.length].focus(); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) { setDl(false); toggle.focus(); }
  });
  // Tabbing out of the widget closes it; so does clicking anywhere else.
  document.querySelector('.dl').addEventListener('focusout', (e) => {
    if (isOpen() && !e.currentTarget.contains(e.relatedTarget)) setDl(false);
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.dl')) setDl(false); });
}

// ---------- Start: ?lang=es|en, then the saved choice, then the browser language ----------
{
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch { /* storage may be blocked */ }
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const browser = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  const pick = [fromUrl, saved, browser].find((v) => v === 'en' || v === 'es');
  lang = pick;
  applyLang();
}
