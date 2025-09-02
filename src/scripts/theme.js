export function initThemeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  // Läs sparat val eller använd systempreferens som start
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const initial = stored ?? (prefersDark ? 'dark' : 'light');
  if (initial === 'dark') root.classList.add('dark');

  const render = () => {
    const dark = root.classList.contains('dark');
    if (btn) {
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      btn.textContent = dark ? '🌞' : '🌙';
      btn.title = dark ? 'Byt till ljust läge' : 'Byt till mörkt läge';
    }
  };

  render();

  btn?.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    render();
  });
}
