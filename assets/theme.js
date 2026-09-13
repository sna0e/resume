document.getElementById("y").textContent = new Date().getFullYear();

(function () {
  function applyTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    var lightBtn = document.getElementById("theme-btn-light");
    var darkBtn = document.getElementById("theme-btn-dark");
    if (lightBtn && darkBtn) {
      lightBtn.setAttribute(
        "aria-pressed",
        theme === "light" ? "true" : "false",
      );
      darkBtn.setAttribute(
        "aria-pressed",
        theme === "dark" ? "true" : "false",
      );
    }
  }

  applyTheme(
    document.documentElement.getAttribute("data-theme") || "dark",
  );

  var btnLight = document.getElementById("theme-btn-light");
  var btnDark = document.getElementById("theme-btn-dark");
  if (btnLight)
    btnLight.addEventListener("click", function () {
      applyTheme("light");
    });
  if (btnDark)
    btnDark.addEventListener("click", function () {
      applyTheme("dark");
    });
})();

(function () {
  var link = document.getElementById("lang-switch");
  if (!link) return;
  var base = link.getAttribute("href").split("#")[0];
  if (location.protocol === "file:") base += "index.html";
  link.setAttribute("href", base);
  link.addEventListener("click", function (e) {
    var href = base + (location.hash || "");
    link.setAttribute("href", href);
    if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      location.replace(href);
    }
  });
})();
