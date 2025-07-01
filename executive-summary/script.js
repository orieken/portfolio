// Oscar Rieken Executive Resume - JavaScript
// Premium interactions and animations for executive-level presentation

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initializeAnimations();
  initializeCounters();
  initializeInteractions();
  initializeParallax();
  initializePrintOptimization();
});

// Animation System
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Add staggered animation delays
  addStaggeredDelays();
}

function addStaggeredDelays() {
  // KPI Cards
  const kpiCards = document.querySelectorAll('.kpi-card');
  kpiCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Accomplishment Cards
  const accomplishmentCards = document.querySelectorAll('.accomplishment-card');
  accomplishmentCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
  });

  // Innovation Cards
  const innovationCards = document.querySelectorAll('.innovation-card');
  innovationCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });

  // Education Cards
  const educationCards = document.querySelectorAll('.education-card');
  educationCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Timeline Items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
  });

  // Leadership Stats
  const statBlocks = document.querySelectorAll('.stat-block');
  statBlocks.forEach((block, index) => {
    block.style.transitionDelay = `${index * 0.15}s`;
  });
}

// Counter Animation System
function initializeCounters() {
  const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      // Format the number based on the original text
      const originalText = element.getAttribute('data-target');
      const isPercentage = element.textContent.includes('%');
      const isDollar = element.textContent.includes('$');
      const hasPlus = element.textContent.includes('+');

      if (isDollar) {
        element.textContent = `$${current.toFixed(1)}M`;
      } else if (isPercentage) {
        element.textContent = `${Math.ceil(current)}%`;
      } else if (hasPlus) {
        element.textContent = `${Math.ceil(current)}+`;
      } else {
        element.textContent = Math.ceil(current);
      }
    }, 16);
  };

  // Setup counter observers
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseFloat(element.getAttribute('data-target'));

        if (!isNaN(target)) {
          animateCounter(element, target);
        }

        counterObserver.unobserve(element);
      }
    });
  }, { threshold: 0.5 });

  // Observe KPI numbers and stat values
  const counters = document.querySelectorAll('.kpi-number[data-target], .stat-value[data-target]');
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

// Interactive Elements
function initializeInteractions() {
  // Enhanced hover effects for cards
  const interactiveCards = document.querySelectorAll(
    '.kpi-card, .accomplishment-card, .innovation-card, .education-card, .stat-block'
  );

  interactiveCards.forEach(card => {
    card.addEventListener('mouseenter', handleCardHover);
    card.addEventListener('mouseleave', handleCardLeave);
    card.addEventListener('focus', handleCardFocus);
    card.addEventListener('blur', handleCardBlur);
  });

  // Timeline content hover effects
  const timelineContents = document.querySelectorAll('.timeline-content');
  timelineContents.forEach(content => {
    content.addEventListener('mouseenter', () => {
      content.style.transform = 'translateX(8px) scale(1.02)';
      content.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
    });

    content.addEventListener('mouseleave', () => {
      content.style.transform = 'translateX(0) scale(1)';
      content.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
    });
  });

  // Smooth scrolling enhancement
  document.documentElement.style.scrollBehavior = 'smooth';

  // Add keyboard navigation
  document.addEventListener('keydown', handleKeyboardNavigation);
}

function handleCardHover(event) {
  const card = event.currentTarget;
  card.style.transform = 'translateY(-8px) scale(1.02)';
  card.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';

  // Add subtle glow effect
  if (card.classList.contains('accomplishment-card')) {
    card.style.boxShadow = '0 20px 50px rgba(183,121,31,0.3)';
  }
}

function handleCardLeave(event) {
  const card = event.currentTarget;
  card.style.transform = 'translateY(0) scale(1)';
  card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';

  if (card.classList.contains('accomplishment-card')) {
    card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
  }
}

function handleCardFocus(event) {
  handleCardHover(event);
}

function handleCardBlur(event) {
  handleCardLeave(event);
}

function handleKeyboardNavigation(event) {
  // Add keyboard shortcuts for better accessibility
  if (event.ctrlKey || event.metaKey) {
    switch(event.key) {
      case 'p':
        event.preventDefault();
        window.print();
        break;
      case 'Home':
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'End':
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
    }
  }
}

// Parallax and Visual Effects
function initializeParallax() {
  const header = document.querySelector('.executive-header');
  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;

    if (header) {
      header.style.transform = `translateY(${rate}px)`;
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);

  // Add scroll-based opacity effects
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const headerHeight = header ? header.offsetHeight : 0;

    // Fade in scroll indicator
    if (scrolled > headerHeight * 0.8) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
}

// Print Optimization
function initializePrintOptimization() {
  window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');

    // Ensure all animations are completed for print
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });

    // Reset all hover states
    const interactiveElements = document.querySelectorAll(
      '.kpi-card, .accomplishment-card, .innovation-card, .education-card, .stat-block, .timeline-content'
    );
    interactiveElements.forEach(el => {
      el.style.transform = 'none';
      el.style.boxShadow = 'none';
    });
  });

  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
  });
}

// Performance Monitoring
function initializePerformanceMonitoring() {
  // Monitor animation performance
  let frameCount = 0;
  let lastTime = performance.now();

  function checkPerformance() {
    frameCount++;
    const currentTime = performance.now();

    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

      if (fps < 30) {
        // Reduce animations for better performance
        document.body.classList.add('reduced-motion');
      }

      frameCount = 0;
      lastTime = currentTime;
    }

    requestAnimationFrame(checkPerformance);
  }

  requestAnimationFrame(checkPerformance);
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Accessibility Enhancements
function initializeAccessibility() {
  // Add skip navigation
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #1a365d;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add main content id
  const mainContent = document.querySelector('.kpi-dashboard');
  if (mainContent) {
    mainContent.id = 'main-content';
  }

  // Enhance focus management
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );

  focusableElements.forEach(el => {
    el.addEventListener('focus', (e) => {
      e.target.style.outline = '2px solid #b7791f';
      e.target.style.outlineOffset = '2px';
    });

    el.addEventListener('blur', (e) => {
      e.target.style.outline = '';
      e.target.style.outlineOffset = '';
    });
  });
}

// Initialize accessibility on load
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Export functions for potential external use
window.OscarResumeJS = {
  initializeAnimations,
  initializeCounters,
  initializeInteractions,
  initializeParallax,
  initializePrintOptimization,
  debounce,
  throttle
};