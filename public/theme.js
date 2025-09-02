(function () {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const apply = (mode) => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
    // uppdatera knappens ikon + aria
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-pressed", String(mode === "dark"));
  };

  // startläge: localStorage -> systempreferens -> light
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    apply(stored ?? (prefersDark ? "dark" : "light"));
  } catch {
    apply("light");
  }

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    apply(isDark ? "light" : "dark");
  });
})();
