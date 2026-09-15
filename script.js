// Tell CSS that the mobile menu script is available.
document.documentElement.setAttribute('data-ready', 'true');

// 1. LIGHT / DARK MODE
const themeButton = document.getElementById('theme-toggle');
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

try {
  const savedTheme = localStorage.getItem('huzentra-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') theme = savedTheme;
} catch (error) { /* The switch also works when storage is blocked. */ }

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  themeButton.textContent = nextTheme === 'light' ? 'Light mode' : 'Dark mode';
  themeButton.setAttribute('aria-label', 'Switch to ' + nextTheme + ' mode');
}

themeButton.hidden = false;
applyTheme();
themeButton.addEventListener('click', function () {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  try { localStorage.setItem('huzentra-theme', theme); } catch (error) {}
});

// 2. MOBILE NAVIGATION
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
menuButton.hidden = false;

function setMenu(open) {
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  if (open) navigation.querySelector('a').focus();
}

menuButton.addEventListener('click', function () {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', function (event) {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

// 3. PROJECT BRIEF DOWNLOAD (Home page only; no server or email service)
const form = document.getElementById('brief-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const text = 'HUZENTRA TECHNOLOGIES — PROJECT BRIEF\n\n'
      + 'Name: ' + values.get('name') + '\nEmail: ' + values.get('email')
      + '\nService: ' + values.get('service') + '\n\nPROJECT IDEA\n' + values.get('details');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'huzentra-project-brief.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    document.getElementById('form-status').textContent = 'Your brief has been downloaded. No inquiry has been sent.';
  });
  // Prevent accidental online submission if JavaScript is unavailable.
  form.querySelector('fieldset').disabled = false;
}
