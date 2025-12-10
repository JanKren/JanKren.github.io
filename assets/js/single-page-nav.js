// Single page navigation enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Calculate offset for fixed header
        const headerHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update active nav item
        updateActiveNavItem(this);
      }
    });
  });

  // Function to update active navigation item
  function updateActiveNavItem(activeLink) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      link.parentElement.classList.remove('active');
    });

    activeLink.classList.add('active');
    activeLink.parentElement.classList.add('active');
  }

  // Scroll spy functionality
  function scrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + document.querySelector('nav').offsetHeight + 50;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        const activeNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeNavLink) {
          updateActiveNavItem(activeNavLink);
        }
      }
    });
  }

  // Add scroll event listener for scroll spy
  window.addEventListener('scroll', scrollSpy);

  // Initial call to set active nav item
  scrollSpy();
});