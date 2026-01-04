// FitMate Elite - Robust Catalog Management & Enhanced UX

// Product Catalog - Enhanced with Multi-Image Support
const productCatalog = [
    {
        id: 903, // Exclusive
        title: 'FitMate Exclusive: Millennial Pink Crystal Lehenga',
        category: 'lehenga',
        rentPrice: 5500,
        buyPrice: 95000,
        originalPrice: 140000,
        location: 'Mumbai (Elite)',
        owner: 'FitMate Elite Collection',
        rating: 5.0,
        description: 'A Zara-grade editorial masterpiece. Soft luxury pink silk with intricate silver crystal embroidery. Features a modern, lightweight drape perfect for the contemporary bride or bridesmaid.',
        image: 'images/dishita_pink_front.png',
        images: ['images/dishita_pink_front.png', 'images/dishita_pink_twirl.png', 'images/dishita_pink_detail.png']
    },
    {
        id: 902, // Exclusive
        title: 'FitMate Exclusive: Heritage Emerald Green Silk Saree',
        category: 'saree',
        rentPrice: 4200,
        buyPrice: 75000,
        originalPrice: 110000,
        location: 'Mumbai (Elite)',
        owner: 'FitMate Elite Collection',
        rating: 5.0,
        description: 'Timeless emerald green pure silk saree with a minimalist gold border. Paired with authentic Kundan jewelry styling. A symbol of quiet luxury and traditional elegance.',
        image: 'images/dishita_emerald_front.png',
        images: ['images/dishita_emerald_front.png', 'images/dishita_emerald_side.png', 'images/dishita_emerald_detail.png']
    },
    {
        id: 901, // Exclusive
        title: 'FitMate Exclusive: Ruby Red Bridal Leisure Lehenga',
        category: 'lehenga',
        rentPrice: 6500,
        buyPrice: 125000,
        originalPrice: 180000,
        location: 'Delhi (Elite)',
        owner: 'FitMate Elite Collection',
        rating: 5.0,
        description: 'The definitive bridal look. Deep ruby red velvet with heavy gold Zardozi hand-embroidery. Captures the essence of Indian royalty with a modern, youthful silhouette.',
        image: 'images/dishita_red_front.png',
        images: ['images/dishita_red_front.png', 'images/dishita_red_side.png', 'images/dishita_red_detail.png']
    },
    {
        id: 1,
        title: 'Red Bridal Lehenga with Gold Zardozi Embroidery',
        category: 'lehenga',
        rentPrice: 2500,
        buyPrice: 45000,
        originalPrice: 65000,
        location: 'Mumbai',
        owner: 'Priya Sharma',
        rating: 4.9,
        description: 'Exquisite red bridal lehenga featuring intricate gold zardozi embroidery. Perfect for grand wedding celebrations. Premium silk fabric with detailed handwork.',
        image: 'images/lehenga_red.png',
        images: ['images/lehenga_red.png', 'images/lehenga_red.png', 'images/lehenga_red.png'] // Placeholders until generation
    },
    {
        id: 101, // New Product
        title: 'Golden Bridal Lehenga with Diamond Work',
        category: 'lehenga',
        rentPrice: 4500,
        buyPrice: 85000,
        originalPrice: 120000,
        location: 'Mumbai',
        owner: 'Ritu Kumar',
        rating: 5.0,
        description: 'Stunning golden lehenga with intricate diamond and zardozi work. Royal look for the special day.',
        image: 'images/gold_lehenga_1.png',
        images: ['images/gold_lehenga_1.png', 'images/gold_lehenga_2.png', 'images/gold_lehenga_cloth.png']
    },
    {
        id: 102, // New Product
        title: 'Royal Blue Velvet Lehenga with Silver Zari',
        category: 'lehenga',
        rentPrice: 3200,
        buyPrice: 55000,
        originalPrice: 75000,
        location: 'Delhi',
        owner: 'Neha Sharma',
        rating: 4.9,
        description: 'Deep royal blue velvet lehenga with heavy silver zari embroidery. Perfect for reception.',
        image: 'images/blue_velvet_1.png',
        images: ['images/blue_velvet_1.png', 'images/blue_velvet_cloth.png']
    },
    {
        id: 103, // New Product
        title: 'Heritage Red Banarasi Silk Saree',
        category: 'saree',
        rentPrice: 1800,
        buyPrice: 32000,
        originalPrice: 45000,
        location: 'Kolkata',
        owner: 'Rekha Ji',
        rating: 4.8,
        description: 'Authentic red Banarasi silk saree with gold weaving. A timeless classic for brides.',
        image: 'images/banarasi_saree_1.png',
        images: ['images/banarasi_saree_1.png', 'images/banarasi_saree_cloth.png']
    },
    {
        id: 104, // New Product
        title: 'Silver Diamond Evening Gown',
        category: 'partywear',
        rentPrice: 2500,
        buyPrice: 40000,
        originalPrice: 60000,
        location: 'Mumbai',
        owner: 'Kiara Advani',
        rating: 4.9,
        description: 'Dazzling silver evening gown encrusted with Swarovski crystals. Red carpet ready.',
        image: 'images/gown_purple.png', // Placeholder
        images: ['images/gown_purple.png'] // Placeholder
    },
    {
        id: 2,
        title: 'Ivory Sherwani - Premium Groom Collection',
        category: 'sherwani',
        rentPrice: 3000,
        buyPrice: 52000,
        originalPrice: 75000,
        location: 'Delhi',
        owner: 'Rahul Mehta',
        rating: 4.8,
        description: 'Luxurious ivory sherwani with gold embroidery. Crafted from premium fabric with intricate threadwork. Ideal for grooms seeking regal elegance.',
        image: 'images/sherwani_ivory_gold_1767449753183.png',
        images: ['images/sherwani_ivory_gold_1767449753183.png']
    },
    {
        id: 3,
        title: 'Designer Pink Silk Saree with Golden Border',
        category: 'saree',
        rentPrice: 1500,
        buyPrice: 28000,
        originalPrice: 40000,
        location: 'Bangalore',
        owner: 'Anjali Kumar',
        rating: 5.0,
        description: 'Beautiful pink silk saree with traditional golden border. Perfect for festive occasions and weddings. Pure silk with elegant draping.',
        image: 'images/saree_pink.png',
        images: ['images/saree_pink.png']
    },
    {
        id: 4,
        title: 'Navy Blue Bandhgala Suit',
        category: 'suit',
        rentPrice: 2000,
        buyPrice: 35000,
        originalPrice: 48000,
        location: 'Ahmedabad',
        owner: 'Arjun Patel',
        rating: 4.7,
        description: 'Modern navy blue bandhgala suit with sophisticated tailoring. Perfect for formal events and receptions.',
        image: 'images/suit_navy_bandhgala_1767449790496.png',
        images: ['images/suit_navy_bandhgala_1767449790496.png']
    },
    {
        id: 5,
        title: 'Gold Sequin Evening Gown',
        category: 'partywear',
        rentPrice: 1800,
        buyPrice: 32000,
        originalPrice: 45000,
        location: 'Mumbai',
        owner: 'Nisha Reddy',
        rating: 4.9,
        description: 'Glamorous gold sequin evening gown perfect for cocktail parties.',
        image: 'images/gown_gold.png',
        images: ['images/gown_gold.png']
    },
    {
        id: 6,
        title: 'Maroon Velvet Sherwani',
        category: 'sherwani',
        rentPrice: 3500,
        buyPrice: 58000,
        originalPrice: 80000,
        location: 'Delhi',
        owner: 'Karan Singh',
        rating: 4.8,
        description: 'Regal maroon velvet sherwani with gold embroidery. Premium velvet fabric with luxurious feel.',
        image: 'images/sherwani_maroon_velvet_1767449836194.png',
        images: ['images/sherwani_maroon_velvet_1767449836194.png']
    },
    {
        id: 7,
        title: 'Pastel Pink Reception Lehenga',
        category: 'lehenga',
        rentPrice: 2800,
        buyPrice: 48000,
        originalPrice: 68000,
        location: 'Bangalore',
        owner: 'Meera Desai',
        rating: 5.0,
        description: 'Soft pastel pink lehenga with delicate silver embroidery. Contemporary design perfect for modern brides.',
        image: 'images/lehenga_pastel.png',
        images: ['images/lehenga_pastel.png']
    },
    {
        id: 8,
        title: 'Black Premium Tuxedo',
        category: 'suit',
        rentPrice: 2200,
        buyPrice: 38000,
        originalPrice: 52000,
        location: 'Mumbai',
        owner: 'Vikram Lal',
        rating: 4.7,
        description: 'Classic black tuxedo with sharp tailoring. Timeless formal wear for black-tie events.',
        image: 'images/tuxedo_black_premium_1767449876796.png',
        images: ['images/tuxedo_black_premium_1767449876796.png']
    },
    {
        id: 9,
        title: 'Emerald Green Anarkali Suit',
        category: 'partywear',
        rentPrice: 1600,
        buyPrice: 29000,
        originalPrice: 42000,
        location: 'Delhi',
        owner: 'Simran Kaur',
        rating: 4.8,
        description: 'Stunning emerald green silk anarkali with gold embroidery. Ethnic elegance at its finest.',
        image: 'images/anarkali_green.png',
        images: ['images/anarkali_green.png']
    },
    {
        id: 10,
        title: 'Navy Blue Cocktail Dress',
        category: 'partywear',
        rentPrice: 1400,
        buyPrice: 25000,
        originalPrice: 35000,
        location: 'Bangalore',
        owner: 'Riya Jain',
        rating: 4.9,
        description: 'Modern navy cocktail dress with sleek silhouette. Contemporary western wear for parties and events.',
        image: 'images/cocktail_blue.png',
        images: ['images/cocktail_blue.png']
    },
    {
        id: 11,
        title: 'Maroon Indo-Western Gown',
        category: 'partywear',
        rentPrice: 2100,
        buyPrice: 36000,
        originalPrice: 50000,
        location: 'Mumbai',
        owner: 'Ananya Iyer',
        rating: 4.7,
        description: 'Fusion maroon gown with elegant jacket. Best of traditional and modern design.',
        image: 'images/gown_maroon.png',
        images: ['images/gown_maroon.png']
    },
    {
        id: 12,
        title: 'White Kurta Pajama Set',
        category: 'casual',
        rentPrice: 800,
        buyPrice: 15000,
        originalPrice: 22000,
        location: 'Ahmedabad',
        owner: 'Rohan Gupta',
        rating: 4.6,
        description: 'Comfortable white kurta set with subtle embroidery. Traditional casual wear for festive occasions.',
        image: 'images/kurta_set_white_1767450640843.png',
        images: ['images/kurta_set_white_1767450640843.png']
    },
    {
        id: 13,
        title: 'Grey Professional Blazer',
        category: 'suit',
        rentPrice: 1200,
        buyPrice: 22000,
        originalPrice: 32000,
        location: 'Bangalore',
        owner: 'Shreya Nair',
        rating: 4.8,
        description: 'Tailored grey blazer for professional settings. Corporate chic with perfect fit.',
        image: 'images/blazer_grey.png',
        images: ['images/blazer_grey.png']
    },
    {
        id: 14,
        title: 'Purple Evening Gown',
        category: 'partywear',
        rentPrice: 1900,
        buyPrice: 34000,
        originalPrice: 48000,
        location: 'Delhi',
        owner: 'Kavya Rao',
        rating: 4.9,
        description: 'Luxurious purple evening gown with sequin details. Show-stopping glamour for formal events.',
        image: 'images/gown_purple.png',
        images: ['images/gown_purple.png']
    }
];

// State Management
let displayedProducts = [];
let filteredProducts = [...productCatalog];
let itemsPerPage = 12;
let currentlyDisplayed = 0;
let activeCategory = 'all';
let activeLocation = 'all';
let currentSort = 'featured';
let currentProductData = null;
const sliderStates = {}; // Track slider index for each product { productId: currentIndex }

// Initialize Catalog
function initializeCatalog() {
    filteredProducts = [...productCatalog];
    currentlyDisplayed = 0;
    renderProducts();
}

// Render Products with Slider
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const loadMoreSection = document.getElementById('loadMoreSection');

    const productsToShow = filteredProducts.slice(0, currentlyDisplayed + itemsPerPage);
    displayedProducts = productsToShow;
    currentlyDisplayed = productsToShow.length;

    grid.innerHTML = '';

    if (productsToShow.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-secondary);">No products found matching your filters.</p>';
        loadMoreSection.style.display = 'none';
        return;
    }

    productsToShow.forEach(product => {
        // Initialize slider state if not exists
        if (sliderStates[product.id] === undefined) {
            sliderStates[product.id] = 0;
        }

        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProductDetail(product.id);

        const images = product.images || (product.image ? [product.image] : null);
        const hasSpecificImages = images && images.length > 0 && !images[0].includes('placeholder');

        let sliderHtml = '';
        let dotsHtml = '';

        if (hasSpecificImages) {
            const hasMultipleImages = images.length > 1;
            // Existing Slider Logic
            sliderHtml = images.map((img, index) =>
                `<img src="${img}" alt="${product.title} - View ${index + 1}" loading="lazy">`
            ).join('');

            dotsHtml = hasMultipleImages ? `
                <div class="slider-dots">
                    ${images.map((_, index) =>
                `<div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
            ).join('')}
                </div>
            ` : '';
        } else {
            // Animated Luxury Placeholder (Dishita Model) - Using new Elite assets
            const dishitaImages = [
                'images/dishita_pink_front.png',
                'images/dishita_red_front.png',
                'images/dishita_emerald_front.png',
                'images/dishita_pink_twirl.png',
                'images/dishita_red_side.png',
                'images/dishita_emerald_side.png'
            ];
            sliderHtml = `
                <div class="luxury-placeholder-slider">
                    <span class="placeholder-badge">Exclusive Preview</span>
                    ${dishitaImages.map(img => `<img src="${img}" alt="Luxury Collection Preview">`).join('')}
                </div>
            `;
        }


        const navButtons = (hasSpecificImages && images.length > 1) ? `
            <button class="slider-btn slider-btn-prev" onclick="event.stopPropagation(); moveSlider(${product.id}, -1)">&#10094;</button>
            <button class="slider-btn slider-btn-next" onclick="event.stopPropagation(); moveSlider(${product.id}, 1)">&#10095;</button>
        ` : '';

        card.innerHTML = `
      <div class="product-image-container" id="slider-container-${product.id}">
        <div class="product-slider" id="slider-${product.id}" style="transform: translateX(0%);">
            ${sliderHtml}
        </div>
        ${dotsHtml}
        ${navButtons}
      </div>

      
      <div class="product-info">
        <div class="product-brand">${product.category.toUpperCase()}</div>
        <div class="product-title">${product.title}</div>
        
        <div class="product-price">
          <span class="price-rent">₹${product.rentPrice.toLocaleString()}</span>
          <span class="price-divider">|</span>
          <span class="price-buy">Buy ₹${product.buyPrice.toLocaleString()}</span>
        </div>
      </div>
    `;


        grid.appendChild(card);
    });

    // Show/hide load more button
    if (currentlyDisplayed < filteredProducts.length) {
        loadMoreSection.style.display = 'block';
    } else {
        loadMoreSection.style.display = 'none';
    }
}

// Slider Logic
function moveSlider(productId, direction) {
    const product = productCatalog.find(p => p.id === productId);
    if (!product || !product.images || product.images.length <= 1) return;

    const totalSlides = product.images.length;
    let currentIndex = sliderStates[productId];

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    sliderStates[productId] = currentIndex;
    updateSliderUI(productId, currentIndex);
}

function updateSliderUI(productId, index) {
    const slider = document.getElementById(`slider-${productId}`);
    const dots = document.querySelectorAll(`#slider-container-${productId} .slider-dot`);

    if (slider) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    if (dots.length) {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    }
}

// Load More Products
function loadMoreProducts() {
    renderProducts();
}

// Filter by Category
function filterCategory(category) {
    activeCategory = category;
    applyFilters();
    updateActiveNavLink(category);
}

// Update Active Nav Link
function updateActiveNavLink(category) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Handle Filter Change
function handleFilterChange() {
    activeLocation = document.getElementById('locationFilter').value;
    applyFilters();
}

// Apply All Filters
function applyFilters() {
    filteredProducts = productCatalog.filter(product => {
        const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
        const locationMatch = activeLocation === 'all' || product.location === activeLocation;
        return categoryMatch && locationMatch;
    });

    applySorting();
    currentlyDisplayed = 0;
    renderProducts();
}

// Handle Sort
function handleSort() {

    currentSort = document.getElementById('sortSelect').value;
    applySorting();
    currentlyDisplayed = 0;
    renderProducts();
}

// Apply Sorting
function applySorting() {
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.rentPrice - b.rentPrice);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.rentPrice - a.rentPrice);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default: // featured
            filteredProducts.sort((a, b) => b.rating - a.rating);
    }
}

// Search Functionality
function handleSearchKeypress(event) {
    if (event.key === 'Enter') {
        const searchTerm = document.getElementById('headerSearch').value.toLowerCase().trim();

        if (!searchTerm) {
            activeCategory = 'all';
            activeLocation = 'all';
            applyFilters();
            return;
        }

        filteredProducts = productCatalog.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.location.toLowerCase().includes(searchTerm)
        );

        applySorting();
        currentlyDisplayed = 0;
        renderProducts();
        scrollToProducts();
    }
}

// Open Product Detail
function openProductDetail(productId) {
    const product = productCatalog.find(p => p.id === productId);
    if (!product) return;

    currentProductData = product;

    // Populate modal
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalBreadcrumb').textContent = `Home / ${product.category} / ${product.title}`;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalRating').innerHTML = `⭐ ${product.rating} · Verified Seller`;
    document.getElementById('modalRentPrice').textContent = `₹${product.rentPrice.toLocaleString()}`;
    document.getElementById('modalBuyPrice').textContent = `₹${product.buyPrice.toLocaleString()}`;
    document.getElementById('modalStrikePrice').textContent = `₹${product.originalPrice.toLocaleString()}`;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalLocation').textContent = product.location;
    document.getElementById('modalCategory').textContent = product.category.toUpperCase();
    document.getElementById('modalSellerAvatar').textContent = product.owner.charAt(0);
    document.getElementById('modalSellerName').textContent = product.owner;
    document.getElementById('modalSellerRating').textContent = `⭐ ${product.rating} Rating`;

    // Show modal
    document.getElementById('productModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Product Modal
function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentProductData = null;
}

// Handle Rent
function handleRent() {
    if (!currentProductData) return;
    alert(`✓ Rent Request Submitted\n\n${currentProductData.title}\n₹${currentProductData.rentPrice}/day\n\n${currentProductData.owner} will review your request. You'll receive a confirmation email within 24 hours.`);
}

// Handle Buy
function handleBuy() {
    if (!currentProductData) return;
    alert(`✓ Purchase Initiated\n\n${currentProductData.title}\n₹${currentProductData.buyPrice.toLocaleString()}\n\nProceeding to secure checkout. You'll be redirected to payment gateway.`);
}

// Auth System
function showLogin() {
    closeAllModals();
    const authContent = `
    <h2>Welcome Back</h2>
    <p style="color: var(--text-secondary); margin-bottom: 32px;">Log in to your FitMate account</p>
    <form onsubmit="handleLogin(event)">
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="your@email.com" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="••••••••" required>
      </div>
      <button type="submit" class="btn-submit-listing">Log In</button>
    </form>
    <p style="text-align: center; margin-top: 24px; color: var(--text-secondary); font-size: 14px;">
      Don't have an account? <a href="#" onclick="showSignup()" style="color: var(--primary); font-weight: 600;">Sign up</a>
    </p>
  `;
    document.getElementById('authContent').innerHTML = authContent;
    document.getElementById('authModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showSignup() {
    closeAllModals();
    const authContent = `
    <h2>Join FitMate</h2>
    <p style="color: var(--text-secondary); margin-bottom: 32px;">Create your account in seconds</p>
    <form onsubmit="handleSignup(event)">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Your Name" required>
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="your@email.com" required>
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="+91 98765 43210" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="••••••••" required>
      </div>
      <button type="submit" class="btn-submit-listing">Create Account</button>
    </form>
    <p style="text-align: center; margin-top: 24px; color: var(--text-secondary); font-size: 14px;">
      Already have an account? <a href="#" onclick="showLogin()" style="color: var(--primary); font-weight: 600;">Log in</a>
    </p>
  `;
    document.getElementById('authContent').innerHTML = authContent;
    document.getElementById('authModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function handleLogin(event) {
    event.preventDefault();
    alert('✓ Login Successful\n\nWelcome back to FitMate!\n\n(Authentication system will be integrated with Supabase)');
    closeAllModals();
}

function handleSignup(event) {
    event.preventDefault();
    alert('✓ Account Created\n\nWelcome to FitMate! Start exploring or list your first item.\n\n(Authentication system will be integrated with Supabase)');
    closeAllModals();
}

// Listing Form
function showListingForm() {
    document.getElementById('listingModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function handleSubmitListing(event) {
    event.preventDefault();
    alert('✓ Listing Submitted\n\nYour item has been submitted for review. Our team will verify and publish it within 24 hours.\n\nYou\'ll receive an email confirmation shortly.');
    closeAllModals();
}

// Close All Modals
function closeAllModals() {
    document.getElementById('productModal').style.display = 'none';
    document.getElementById('authModal').style.display = 'none';
    document.getElementById('listingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle Modal Overlay Click
function handleModalOverlayClick(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeAllModals();
    }
}

// Scroll Helpers
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Initialize on Load

// FAQ Accordion Logic
function initEliteFAQ() {
    const faqItems = document.querySelectorAll('.faq-item-elite');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-elite');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Availability Check Logic (ported to Elite UI)
function handleEliteAvailability(productId) {
    const product = productCatalog.find(p => p.id === productId);
    if (!product) return;

    const startDate = document.getElementById(`startDate-${productId}`)?.value;
    const endDate = document.getElementById(`endDate-${productId}`)?.value;

    if (!startDate || !endDate) {
        alert('Please select both start and end dates.');
        return;
    }

    const message = `Hi! I'm interested in renting "${product.title}" from ${startDate} to ${endDate}. Is it available?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
}

// Advanced Drag and Drop for Elite Marketplace
function initEliteDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const previewGrid = document.getElementById('previewGrid');

    if (!dropZone || !fileInput) return;

    // Handle click to browse
    dropZone.addEventListener('click', (e) => {
        if (e.target.closest('.remove-preview')) return;
        fileInput.click();
    });

    // Handle drag events
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
        }, false);
    });

    // Handle file drop
    dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // Handle file selection
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                previewItem.innerHTML = `
                    <img src="${e.target.result}" alt="Preview">
                    <button type="button" class="remove-preview">&times;</button>
                `;

                previewItem.querySelector('.remove-preview').addEventListener('click', () => {
                    previewItem.remove();
                });

                previewGrid.appendChild(previewItem);
            };
            reader.readAsDataURL(file);
        });
    }
}

// Auto-Slider Logic
let autoSliderHandle = null;

function startAutoSliders() {
    if (autoSliderHandle) clearInterval(autoSliderHandle);

    autoSliderHandle = setInterval(() => {
        // Find all sliders on the page
        const sliders = document.querySelectorAll('.product-slider');
        sliders.forEach(slider => {
            const productId = parseInt(slider.id.replace('slider-', ''));
            const product = productCatalog.find(p => p.id === productId);

            if (product && product.images && product.images.length > 1) {
                // Don't slide if user is hovering
                const card = slider.closest('.product-card');
                if (card && !card.matches(':hover')) {
                    moveSlider(productId, 1);
                }
            }
        });
    }, 5000);
}

// Update initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeCatalog();
    initEliteFAQ();
    initEliteDragAndDrop();
    startAutoSliders();
});

