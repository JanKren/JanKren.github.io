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

  // Add animation to elements when they come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all expertise items, contribution cards, and stat items
  const animateElements = document.querySelectorAll(
    '.expertise-item, .contribution-card, .stat-item, .impact-highlight, .current-focus'
  );

  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
  });

  // Add CSS for animations
  const style = document.createElement('style');
  style.innerHTML = `
    .animate-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .stat-item {
      transition: all 0.3s ease;
    }

    .stat-item:hover {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);

  // Add back to top button functionality
  const backToTop = document.createElement('button');
  backToTop.id = 'back-to-top';
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTop.style.display = 'none';
  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '90px'; // Above the social bar
  backToTop.style.right = '20px';
  backToTop.style.backgroundColor = 'var(--global-theme-color)';
  backToTop.style.color = 'white';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '50%';
  backToTop.style.width = '50px';
  backToTop.style.height = '50px';
  backToTop.style.cursor = 'pointer';
  backToTop.style.zIndex = '1000';
  backToTop.style.transition = 'all 0.3s ease';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
      backToTop.style.opacity = '1';
    } else {
      backToTop.style.opacity = '0';
      setTimeout(() => {
        backToTop.style.display = 'none';
      }, 300);
    }
  });

  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add progress indicator for long pages
  const progressBar = document.createElement('div');
  progressBar.id = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--global-theme-color);
    width: 0%;
    z-index: 10000;
    transition: width 0.2s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
});