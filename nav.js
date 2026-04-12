(function() {
  const NAV_CSS = `
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.25rem 2rem;
  background: transparent;
  font-family: 'Nunito', sans-serif;
  height: 50px;
}
.nav-logo {
  font-size: 13px; font-weight: 400; letter-spacing: 0.01em;
  text-decoration: none; color: #111;
}
.nav-links {
  display: flex; gap: 2.5rem; list-style: none;
  align-items: center; margin: 0; padding: 0;
}
.nav-links a, .nav-label {
  font-size: 13px; font-weight: 400; letter-spacing: 0.01em;
  text-decoration: none; color: #aaa;
  transition: color 0.15s;
  cursor: pointer;
}
.nav-links a:hover, .nav-links a.active { color: #111; }
.nav-dropdown { position: relative; }
.dropdown {
  position: absolute; top: calc(100% + 0.75rem); right: 0;
  background: #fff; border: 1px solid #ebebeb;
  border-radius: 3px; padding: 4px 0; list-style: none;
  min-width: 120px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  opacity: 0; visibility: hidden;
  transition: opacity 0.18s, visibility 0.18s;
  pointer-events: none;
}
.nav-dropdown::after {
  content: ''; position: absolute;
  top: 100%; left: 0; right: 0;
  height: 0.75rem;
}
.nav-dropdown:hover .dropdown {
  opacity: 1; visibility: visible; pointer-events: auto;
}
.dropdown li a {
  display: block; padding: 7px 14px;
  font-size: 12px; color: #aaa;
  white-space: nowrap; text-decoration: none;
  letter-spacing: 0.01em;
}
.dropdown li a:hover { color: #111; }
`;

  const style = document.createElement('style');
  style.textContent = NAV_CSS;
  document.head.appendChild(style);

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isAbout = path === 'about.html';
  const isPalettes = path === 'palettes.html';

  const works = [
    { name: 'Pills', href: 'pills.html' },
  ];

  const workLinks = works.map(w =>
    `<li><a href="${w.href}"${path === w.href ? ' class="active"' : ''}>${w.name}</a></li>`
  ).join('\n        ');

  const nav = document.createElement('nav');
  nav.innerHTML = `
  <a class="nav-logo" href="index.html">hoks</a>
  <ul class="nav-links">
    <li class="nav-dropdown">
      <span class="nav-label">work</span>
      <ul class="dropdown">
        ${workLinks}
      </ul>
    </li>
    <li><a href="about.html"${isAbout ? ' class="active"' : ''}>about</a></li>
    <li><a href="palettes.html"${isPalettes ? ' class="active"' : ''}>palettes</a></li>
  </ul>`;

  document.body.insertBefore(nav, document.body.firstChild);
})();
