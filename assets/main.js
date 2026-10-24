(function () {
  "use strict";
  var BP = 768;
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var closeBtn = document.getElementById("mob-close");
  if (!toggle || !drawer) { return; }
  function openMenu() {
    drawer.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
    if (closeBtn) { closeBtn.focus(); }
  }
  function closeMenu() {
    drawer.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  }
  toggle.addEventListener("click", function () { if (drawer.hidden) { openMenu(); } else { closeMenu(); } });
  if (closeBtn) { closeBtn.addEventListener("click", function () { closeMenu(); toggle.focus(); }); }
  drawer.addEventListener("click", function (e) {
    var t = e.target;
    if (t && t.tagName === "A") { closeMenu(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !drawer.hidden) { closeMenu(); toggle.focus(); }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BP && !drawer.hidden) { closeMenu(); }
  });
})();
