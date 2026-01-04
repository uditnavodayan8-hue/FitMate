/**
 * FitMate Rentals - Interactive Components
 */

// Mobile Menu Toggle
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      const isActive = menu.classList.contains('active');
      toggle.setAttribute('aria-expanded', isActive);
      toggle.innerHTML = isActive ? '✕' : '☰';
    });

    // Close menu when clicking on a link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '☰';
      });
    });
  }
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default for empty hash or just "#"
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Show/Hide Sticky WhatsApp Button based on scroll
function initStickyButton() {
  const stickyButton = document.querySelector('.whatsapp-sticky');

  if (stickyButton) {
    // Show button after scrolling down a bit
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        stickyButton.style.opacity = '1';
        stickyButton.style.visibility = 'visible';
      } else {
        stickyButton.style.opacity = '0';
        stickyButton.style.visibility = 'hidden';
      }
    });

    // Initial state
    if (window.scrollY <= 300) {
      stickyButton.style.opacity = '0';
      stickyButton.style.visibility = 'hidden';
    }
  }
}

// Image Drag and Drop
function initDragAndDrop(dropZoneId, fileInputId, previewId) {
  const dropZone = document.getElementById(dropZoneId);
  const fileInput = document.getElementById(fileInputId);
  const preview = document.getElementById(previewId);

  if (!dropZone || !fileInput || !preview) return;

  // Click to selection
  dropZone.addEventListener('click', () => fileInput.click());

  // Drag over effects
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  ['dragleave', 'dragend'].forEach(type => {
    dropZone.addEventListener(type, () => {
      dropZone.classList.remove('dragover');
    });
  });

  // Handle drop
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  // Handle selection
  fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
  });

  function handleFiles(files) {
    if (files.length > 5) {
      alert('You can only upload up to 5 photos.');
      return;
    }

    // Clear previews (for demo purposes)
    preview.innerHTML = '';

    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const div = document.createElement('div');
        div.className = 'preview-item';
        div.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        preview.appendChild(div);
      };
      reader.readAsDataURL(file);
    });
  }
}

// Availability Check Logic
function initAvailability() {
  const availabilitySection = document.querySelector('.availability-check');
  if (!availabilitySection) return;

  const checkBtn = availabilitySection.querySelector('.btn-check-availability');
  const startDateInput = availabilitySection.querySelector('#startDate');
  const endDateInput = availabilitySection.querySelector('#endDate');
  const outfitName = availabilitySection.dataset.outfit || 'this outfit';

  if (checkBtn && startDateInput && endDateInput) {
    checkBtn.addEventListener('click', () => {
      const start = startDateInput.value;
      const end = endDateInput.value;

      if (!start || !end) {
        alert('Please select both start and end dates.');
        return;
      }

      const WhatsAppUrl = `https://wa.me/919876543210?text=Hi%20FitMate!%20I%20want%20to%20check%20availability%20for%20"${outfitName}"%20from%20${start}%20to%20${end}.`;
      window.open(WhatsAppUrl, '_blank');
    });
  }
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQ();
  initSmoothScroll();
  initStickyButton();
  initAvailability();
});

// WhatsApp Click Tracking (optional analytics)
function trackWhatsAppClick(location) {
  console.log('WhatsApp click from:', location);
  // Add your analytics tracking here (Google Analytics, etc.)
}
