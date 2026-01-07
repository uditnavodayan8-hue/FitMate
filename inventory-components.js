/**
 * FitMate - Amazon-Style Inventory Components
 * Advanced image carousel, filters, and interactive features
 */

// ===================================
// Image Carousel Component
// ===================================
class ProductCarousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.slides = Array.from(container.querySelectorAll('.carousel-slide'));
        this.prevBtn = container.querySelector('.carousel-nav.prev');
        this.nextBtn = container.querySelector('.carousel-nav.next');
        this.indicators = Array.from(container.querySelectorAll('.carousel-indicator'));
        this.thumbnails = Array.from(container.querySelectorAll('.thumbnail-item'));

        this.currentIndex = 0;
        this.slideCount = this.slides.length;

        this.init();
    }

    init() {
        if (this.slideCount <= 1) return;

        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Thumbnails
        this.thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch/swipe support
        this.initTouchSupport();

        // Keyboard navigation
        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    initTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;

            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slideCount;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
        this.updateCarousel();
    }

    updateCarousel() {
        // Update track position
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });

        // Update thumbnails
        this.thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentIndex);
        });
    }
}

// ===================================
// Wishlist Functionality
// ===================================
class WishlistManager {
    constructor() {
        this.wishlist = this.loadWishlist();
        this.init();
    }

    init() {
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            const productId = btn.dataset.productId;
            if (this.wishlist.includes(productId)) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggle(productId, btn);
            });
        });
    }

    toggle(productId, btn) {
        if (this.wishlist.includes(productId)) {
            this.remove(productId, btn);
        } else {
            this.add(productId, btn);
        }
    }

    add(productId, btn) {
        this.wishlist.push(productId);
        btn.classList.add('active');
        this.saveWishlist();
        this.showNotification('Added to wishlist ❤️');
    }

    remove(productId, btn) {
        this.wishlist = this.wishlist.filter(id => id !== productId);
        btn.classList.remove('active');
        this.saveWishlist();
        this.showNotification('Removed from wishlist');
    }

    loadWishlist() {
        const saved = localStorage.getItem('fitmate_wishlist');
        return saved ? JSON.parse(saved) : [];
    }

    saveWishlist() {
        localStorage.setItem('fitmate_wishlist', JSON.stringify(this.wishlist));
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'wishlist-notification';
        notification.textContent = message;
        notification.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      background: #2C2C2C;
      color: #fff;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 500;
      z-index: 10000;
      animation: slideInUp 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

// ===================================
// Filter & Sort Functionality
// ===================================
class InventoryFilter {
    constructor() {
        this.products = Array.from(document.querySelectorAll('.product-card'));
        this.filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
        this.sortDropdown = document.querySelector('.sort-dropdown');
        this.resultsCount = document.querySelector('.results-count');

        this.currentFilter = 'all';
        this.currentSort = 'featured';

        this.init();
    }

    init() {
        // Filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.applyFilters();
            });
        });

        // Sort dropdown
        if (this.sortDropdown) {
            this.sortDropdown.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.applySort();
            });
        }
    }

    applyFilters() {
        let visibleCount = 0;

        this.products.forEach(product => {
            const category = product.dataset.category;
            const shouldShow = this.currentFilter === 'all' || category === this.currentFilter;

            if (shouldShow) {
                product.style.display = '';
                visibleCount++;
            } else {
                product.style.display = 'none';
            }
        });

        this.updateResultsCount(visibleCount);
        this.applySort();
    }

    applySort() {
        const visibleProducts = this.products.filter(p => p.style.display !== 'none');
        const container = document.querySelector('.product-grid');

        if (!container) return;

        const sorted = [...visibleProducts].sort((a, b) => {
            switch (this.currentSort) {
                case 'price-low':
                    return this.getPrice(a) - this.getPrice(b);
                case 'price-high':
                    return this.getPrice(b) - this.getPrice(a);
                case 'rating':
                    return this.getRating(b) - this.getRating(a);
                case 'newest':
                    return this.getDate(b) - this.getDate(a);
                default:
                    return 0;
            }
        });

        sorted.forEach(product => container.appendChild(product));
    }

    getPrice(product) {
        const priceText = product.querySelector('.current-price')?.textContent || '0';
        return parseInt(priceText.replace(/[^0-9]/g, ''));
    }

    getRating(product) {
        const stars = product.querySelectorAll('.star:not(.empty)').length;
        return stars;
    }

    getDate(product) {
        return parseInt(product.dataset.date || '0');
    }

    updateResultsCount(count) {
        if (this.resultsCount) {
            this.resultsCount.textContent = `${count} ${count === 1 ? 'product' : 'products'}`;
        }
    }
}

// ===================================
// Quick View Modal
// ===================================
class QuickViewModal {
    constructor() {
        this.modal = null;
        this.init();
    }

    init() {
        // Create modal if it doesn't exist
        if (!document.querySelector('.quick-view-modal')) {
            this.createModal();
        }

        this.modal = document.querySelector('.quick-view-modal');
        this.closeBtn = this.modal.querySelector('.modal-close');

        // Quick view buttons
        document.querySelectorAll('.btn-quick-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productCard = btn.closest('.product-card');
                this.open(productCard);
            });
        });

        // Close button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        // Click outside to close
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
      <div class="quick-view-content">
        <button class="modal-close" aria-label="Close">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <div class="modal-body"></div>
      </div>
    `;
        document.body.appendChild(modal);
    }

    open(productCard) {
        const modalBody = this.modal.querySelector('.modal-body');
        const clone = productCard.cloneNode(true);

        // Remove quick view button from clone
        const quickViewBtn = clone.querySelector('.btn-quick-view');
        if (quickViewBtn) quickViewBtn.remove();

        modalBody.innerHTML = '';
        modalBody.appendChild(clone);

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reinitialize carousel for cloned content
        const carouselContainer = clone.querySelector('.product-carousel');
        if (carouselContainer) {
            new ProductCarousel(carouselContainer);
        }
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===================================
// Image Zoom on Hover
// ===================================
function initImageZoom() {
    document.querySelectorAll('.zoom-container').forEach(container => {
        const img = container.querySelector('img');
        if (!img) return;

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            img.style.transformOrigin = `${x}% ${y}%`;
        });

        container.addEventListener('mouseleave', () => {
            img.style.transformOrigin = 'center center';
        });
    });
}

// ===================================
// Lazy Loading Images
// ===================================
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;

                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Initialize All Components
// ===================================
function initInventoryComponents() {
    // Initialize all carousels
    document.querySelectorAll('.product-carousel').forEach(carousel => {
        new ProductCarousel(carousel);
    });

    // Initialize wishlist
    new WishlistManager();

    // Initialize filters
    if (document.querySelector('.inventory-controls')) {
        new InventoryFilter();
    }

    // Initialize quick view
    new QuickViewModal();

    // Initialize image zoom
    initImageZoom();

    // Initialize lazy loading
    initLazyLoading();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInventoryComponents);
} else {
    initInventoryComponents();
}

// Export for manual initialization if needed
window.FitMateInventory = {
    ProductCarousel,
    WishlistManager,
    InventoryFilter,
    QuickViewModal,
    init: initInventoryComponents
};
