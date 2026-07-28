// Single page navigation enhancements
//
// Two pieces of chrome that look like they belong here are deliberately NOT recreated,
// because al-folio already ships them and a second copy would mean two elements
// fighting over one id:
//   * the reading-progress bar (`enable_progressbar` in _config.yml ->
//     _includes/header.liquid + assets/js/progress-bar.js)
//   * the back-to-top button (`back_to_top` in _config.yml -> _includes/scripts.liquid
//     + assets/js/vanilla-back-to-top.min.js). single-page.scss only lifts it above
//     the fixed social bar.
document.addEventListener("DOMContentLoaded", function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scrollBehavior = () => (reduceMotion.matches ? "auto" : "smooth");

  const navbar = document.querySelector("nav");
  const navItems = Array.from(document.querySelectorAll("#navbarNav .nav-item"));
  const sectionLinks = Array.from(document.querySelectorAll('#navbarNav .nav-link[href^="#"]'));
  // The "about" entry stays highlighted whenever no section is in view. The search
  // toggle also carries .nav-link but has no href at all, hence the `|| ""`.
  const aboutItem = navItems.find((item) => {
    const link = item.querySelector(".nav-link");
    return link && !(link.getAttribute("href") || "").startsWith("#");
  });

  const navHeight = () => (navbar ? navbar.offsetHeight : 0);

  // Published as a custom property so CSS `scroll-margin-top` can keep section
  // headings clear of the fixed navbar. Doing the offset in CSS rather than in
  // scroll maths here means it also covers the jumps this script never sees:
  // landing on /#publications directly, and the browser's back/forward restore.
  function publishNavOffset() {
    document.documentElement.style.setProperty("--nav-offset", navHeight() + "px");
  }

  function scrollToSection(target, behavior) {
    publishNavOffset();
    target.scrollIntoView({ behavior: behavior, block: "start" });
  }

  function setActive(link) {
    navItems.forEach((item) => item.classList.remove("active"));
    sectionLinks.forEach((l) => {
      l.classList.remove("active");
      l.removeAttribute("aria-current");
    });

    if (link) {
      link.classList.add("active");
      link.setAttribute("aria-current", "true");
      link.parentElement.classList.add("active");
    } else if (aboutItem) {
      aboutItem.classList.add("active");
    }
  }

  // Smooth scrolling for every in-page anchor, not just the navbar: the quick-stat
  // tiles link to #publications and #cv too, and without this they land underneath
  // the fixed header. Delegated so anchors rendered later are covered as well.
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const link = e.target.closest('a[href^="#"]');
    // data-toggle anchors are Bootstrap controls, not navigation.
    if (!link || link.hasAttribute("data-toggle")) return;

    const hash = link.getAttribute("href");
    if (hash.length < 2) return;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;

    e.preventDefault();
    scrollToSection(target, scrollBehavior());

    // Keep the URL shareable without letting the browser jump past the fixed header.
    history.replaceState(null, "", hash);
    setActive(sectionLinks.find((l) => l.getAttribute("href") === hash) || null);
  });

  // Scroll spy: highlight the section currently under the header
  const sections = Array.from(document.querySelectorAll("section[id]"));

  function scrollSpy() {
    const probe = window.scrollY + navHeight() + 50;
    let current = null;

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (probe >= top) current = section;
    });

    // At the very bottom the last section may never reach the probe line.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1] || current;
    }

    setActive(current ? document.querySelector(`#navbarNav .nav-link[href="#${current.id}"]`) : null);
  }

  // One rAF-throttled listener for all scroll-driven work
  let ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        scrollSpy();
        ticking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", publishNavOffset, { passive: true });

  publishNavOffset();

  // The browser's own jump to /#section happened before this script ran, while
  // --nav-offset was still the CSS fallback. Redo it once at the real header height.
  // No animation: the visitor asked for this position explicitly, and easing into it
  // from the top of a long page is just disorienting.
  if (window.location.hash.length > 1) {
    const landing = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (landing) scrollToSection(landing, "auto");
  }

  scrollSpy();

  // Reveal cards as they scroll into view (skipped when the visitor prefers reduced motion)
  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    const animateElements = document.querySelectorAll(
      ".expertise-item, .contribution-card, .stat-item, .impact-highlight, .current-focus, .supervision-card, .projects .card"
    );

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    animateElements.forEach((element) => {
      element.classList.add("will-animate");
      observer.observe(element);
    });
  }
});
