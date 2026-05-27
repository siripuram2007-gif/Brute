// BRUTE.SHOP — ADVANCED AGENTIC FRONTEND
// ======================================

// Rich mock data catalog
const initialProducts = [
  {
    id: 1,
    name: "OBSIDIAN LEATHER JACKET",
    category: "Outerwear",
    price: 8999,
    originalPrice: 10999,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "NEW",
    colors: [
      { name: "Void Black", hex: "#111111" },
      { name: "Crimson Blood", hex: "#e8001c" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 3, M: 0, L: 1, XL: 5 },
    description: "Architectural silhouette forged in ultra-durable premium cowhide. Raw asymmetric heavy zippers, high-density quilted internal lining, and tactical storage pockets. A foundational piece for navigating the neon shadows.",
    features: ["Hand-burnished top grain leather", "Double-reinforced gunmetal YKK hardware", "Water-resistant matte finishing", "Thermal insulated liner"],
    rating: 4.9,
    reviewsCount: 184
  },
  {
    id: 2,
    name: "VOID CARGO PANTS",
    category: "Bottoms",
    price: 4299,
    originalPrice: 4999,
    img: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "",
    colors: [
      { name: "Void Black", hex: "#111111" },
      { name: "Shadow Grey", hex: "#555555" },
      { name: "Acid Olive", hex: "#3b443b" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 8, M: 1, L: 0, XL: 2 },
    description: "Engineered ergonomics meets raw brutalist utility. Equipped with 6 tactical cargo bays, adjustable quick-release cuff buckles, and custom steel alloy harness hooks. Tailored for dynamic movement across industrial environments.",
    features: ["Heavy duty ripstop canvas", "6 pocket modular configuration", "Modular D-ring strap adapters", "Articulated knees for maximum flexibility"],
    rating: 4.8,
    reviewsCount: 96
  },
  {
    id: 3,
    name: "RAVEN TACTICAL TOP",
    category: "Tops",
    price: 2899,
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "BEST",
    colors: [
      { name: "Void Black", hex: "#111111" },
      { name: "Stealth Camo", hex: "#4b5320" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 2, M: 6, L: 8, XL: 0 },
    description: "Compression-fit performance panel top. Engineered with moisture-wicking synthetic fibers and reinforced elbows for superior durability in industrial parkour, urban runs, or security details.",
    features: ["Four-way stretch double knit", "Seamless flatlock stitch lines", "Aramid fiber forearm patches", "Concealed rear zip pocket"],
    rating: 4.7,
    reviewsCount: 142
  },
  {
    id: 4,
    name: "ABYSS COMBAT BOOTS",
    category: "Footwear",
    price: 6599,
    originalPrice: 7999,
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "",
    colors: [
      { name: "Void Black", hex: "#111111" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 5, M: 2, L: 4, XL: 9 },
    description: "Constructed like a concrete tank. Full grain waterproof leather outer, high grip carbon lug soles, and integrated rapid tension lace lock system. Built to stomp down conventions.",
    features: ["100% heavy density leather", "Slip-resistant carbon-vulcanized outsole", "Antimicrobial memory foam footbed", "Reinforced steel toe cap"],
    rating: 5.0,
    reviewsCount: 204
  },
  {
    id: 5,
    name: "SHADOW HOODIE",
    category: "Tops",
    price: 3499,
    originalPrice: 4299,
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "NEW",
    colors: [
      { name: "Void Black", hex: "#111111" },
      { name: "Muted Dust", hex: "#7a7265" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 1, M: 0, L: 4, XL: 6 },
    description: "Ultra-heavyweight 500GSM organic cotton hoodie featuring double-layer oversized cowl hood, distressed raw edges, and extended thumbhole cuffs. Ultimate comfort. Infinite shield.",
    features: ["500GSM organic French terry cotton", "Pre-shrunk pigment dyed finish", "Internal zippered kangaroo pouch", "Double-layered cowl hood deck"],
    rating: 4.8,
    reviewsCount: 118
  },
  {
    id: 6,
    name: "FORGED CHAIN NECKLACE",
    category: "Accessories",
    price: 1899,
    originalPrice: null,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "",
    colors: [
      { name: "Gunmetal Silver", hex: "#c0c0c0" },
      { name: "Industrial Matte", hex: "#4f4f4f" }
    ],
    sizes: ["S", "M", "L"],
    stock: { S: 10, M: 12, L: 15 },
    description: "Industrial hardware redefined. Marine-grade solid stainless steel interlocking cuban links with secure double-locking custom slide clasp. Hypoallergenic, indestructible, and uncompromising.",
    features: ["316L surgical stainless steel", "Indestructible corrosion-free weave", "Secure slide-lock deployment catch", "Polished gunmetal plating"],
    rating: 4.9,
    reviewsCount: 88
  },
  {
    id: 7,
    name: "PHANTOM DENIM JACKET",
    category: "Outerwear",
    price: 5799,
    originalPrice: 6999,
    img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "",
    colors: [
      { name: "Ink Blue", hex: "#1d2951" },
      { name: "Void Black", hex: "#111111" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 0, M: 4, L: 2, XL: 7 },
    description: "16oz rigid selvedge denim subjected to custom sulfur bath black dye and intensive manual stone distressing. Features modular snap button straps on waist side panels.",
    features: ["16oz rigid Japanese selvedge denim", "Corrosion resistant zinc buttons", "Contrast bloodline internal piping", "Waist toggle adjuster straps"],
    rating: 4.6,
    reviewsCount: 74
  },
  {
    id: 8,
    name: "BLOODLINE TEE",
    category: "Tops",
    price: 2299,
    originalPrice: 2999,
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&h=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&h=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&h=800&q=80"
    ],
    badge: "SALE",
    colors: [
      { name: "Void Black", hex: "#111111" },
      { name: "Muted Bone", hex: "#e5d9c7" }
    ],
    sizes: ["S", "M", "L", "XL"],
    stock: { S: 4, M: 1, L: 5, XL: 12 },
    description: "Boxy fit heavyweight drop shoulder tee. Adorned with raw edges and distinct vertical spine seam detailing. Pre-washed for a distressed vintage look and lived-in premium texture.",
    features: ["300GSM super heavyweight cotton", "Drop shoulder boxy silhouette", "Exposed raw edge hemline", "Signature vertical spine stitching"],
    rating: 4.8,
    reviewsCount: 154
  }
];

const lookbookItems = [
  { img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&h=1000&q=80", caption: "OBSIDIAN LAYERING" },
  { img: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=800&h=600&q=80", caption: "VOID CARGO SYSTEM" },
  { img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&h=1000&q=80", caption: "RAVEN TACTICAL" },
  { img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&h=800&q=80", caption: "ABYSS BOOTS" }
];

// REACTIVE CLIENT STORE
const BruteStore = {
  state: {
    currentPage: 'home',
    cart: [],
    wishlist: [],
    orders: [],
    addresses: [
      {
        id: 1,
        fullname: "Alex Rivera",
        phone: "9876543210",
        street: "Flat No. 101, Dark Void Towers, Sector 45",
        city: "Mumbai",
        pincode: "400001",
        state: "Maharashtra"
      }
    ],
    currentUser: { name: "Alex Rivera", email: "demo@brute.shop" },
    compareList: [], // product IDs
    recentlyViewed: [], // product IDs
    activeFilters: {
      category: 'ALL',
      minPrice: 0,
      maxPrice: 10000,
      sort: 'default',
      search: ''
    },
    viewMode: 'grid', // grid | list
    currentPageNum: 1,
    pageSize: 6,
    appliedPromo: null, // { code: '...', discountPercent: 25 }
    checkoutPromo: null
  },

  init() {
    this.loadState();
    this.parseURLParams();
    this.updateCartCount();
    this.checkAuthState();
    this.setupInteractivity();
  },

  loadState() {
    try {
      const stored = localStorage.getItem('brute_store_v2');
      if (stored) {
        const parsed = JSON.parse(stored);
        this.state.cart = parsed.cart || [];
        this.state.wishlist = parsed.wishlist || [];
        this.state.orders = parsed.orders || [];
        this.state.addresses = parsed.addresses && parsed.addresses.length > 0 ? parsed.addresses : this.state.addresses;
        this.state.currentUser = parsed.currentUser || null;
        this.state.recentlyViewed = parsed.recentlyViewed || [];
      }
    } catch (e) {
      console.error("Localstorage load error:", e);
    }
  },

  saveState() {
    try {
      const payload = {
        cart: this.state.cart,
        wishlist: this.state.wishlist,
        orders: this.state.orders,
        addresses: this.state.addresses,
        currentUser: this.state.currentUser,
        recentlyViewed: this.state.recentlyViewed
      };
      localStorage.setItem('brute_store_v2', JSON.stringify(payload));
    } catch (e) {
      console.error("Localstorage write error:", e);
    }
  },

  updateCartCount() {
    const count = this.state.cart.reduce((sum, item) => sum + item.qty, 0);
    const countEl = document.getElementById('cart-count');
    const badgeEl = document.getElementById('cart-badge');
    if (countEl) countEl.textContent = count;
    if (badgeEl) badgeEl.textContent = count;
  },

  checkAuthState() {
    const authArea = document.getElementById('auth-btn-area');
    const userArea = document.getElementById('user-area');
    const greeting = document.getElementById('user-greeting');
    
    if (this.state.currentUser) {
      if (authArea) authArea.style.display = 'none';
      if (userArea) userArea.style.display = 'flex';
      if (greeting) greeting.textContent = `HI, ${this.state.currentUser.name.split(' ')[0].toUpperCase()}`;
    } else {
      if (authArea) authArea.style.display = 'flex';
      if (userArea) userArea.style.display = 'none';
    }
  },

  setPage(page) {
    this.state.currentPage = page;
    
    // Switch visibility of main-content panes
    document.querySelectorAll('#main-content > div').forEach(div => {
      div.style.display = 'none';
    });
    
    const target = document.getElementById(page + '-page');
    if (target) target.style.display = 'block';

    // Desktop nav sync
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });

    // Mobile nav sync
    document.querySelectorAll('.mob-nav-btn').forEach(btn => {
      const onclickAttr = btn.getAttribute('onclick') || '';
      btn.classList.toggle('active', onclickAttr.includes(`'${page}'`));
    });

    // Mobile top menu sync
    const mobMenu = document.getElementById('mobile-menu');
    if (mobMenu) mobMenu.classList.remove('open');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateURL();
    this.renderPageData();
  },

  renderPageData() {
    if (this.state.currentPage === 'home') {
      renderFeaturedProducts();
      renderRecentlyViewed();
      initScrollAnimations();
    } else if (this.state.currentPage === 'shop') {
      renderProductGrid();
      renderBreadcrumbs();
      initScrollAnimations();
    } else if (this.state.currentPage === 'wishlist') {
      renderWishlist();
    } else if (this.state.currentPage === 'account') {
      renderAccount();
    }
  },

  updateURL() {
    if (this.state.currentPage !== 'shop') {
      // Clear filters in URL outside Shop
      history.replaceState(null, '', window.location.pathname);
      return;
    }
    const params = new URLSearchParams();
    const f = this.state.activeFilters;
    if (f.category !== 'ALL') params.set('category', f.category);
    if (f.minPrice > 0) params.set('min', f.minPrice);
    if (f.maxPrice < 10000) params.set('max', f.maxPrice);
    if (f.sort !== 'default') params.set('sort', f.sort);
    if (f.search !== '') params.set('search', f.search);
    
    const query = params.toString();
    history.replaceState(null, '', window.location.pathname + (query ? '?' + query : ''));
  },

  parseURLParams() {
    const params = new URLSearchParams(window.location.search);
    
    // 1. Wishlist import
    const wishlistShare = params.get('wishlist');
    if (wishlistShare) {
      const ids = wishlistShare.split(',').map(Number).filter(n => !isNaN(n));
      this.state.wishlist = [...new Set([...this.state.wishlist, ...ids])];
      this.saveState();
      setTimeout(() => {
        this.setPage('wishlist');
        showToast("Shared wishlist imported.");
      }, 200);
      return;
    }

    // 2. Real filters parsing
    const f = this.state.activeFilters;
    if (params.has('category')) f.category = params.get('category');
    if (params.has('min')) f.minPrice = parseInt(params.get('min'));
    if (params.has('max')) f.maxPrice = parseInt(params.get('max'));
    if (params.has('sort')) f.sort = params.get('sort');
    if (params.has('search')) f.search = params.get('search');

    // DOM bindings for filters
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim().toUpperCase() === f.category.toUpperCase());
      });

      const pmin = document.getElementById('price-min');
      const pmax = document.getElementById('price-max');
      if (pmin && pmax) {
        pmin.value = f.minPrice;
        pmax.value = f.maxPrice;
        document.getElementById('pmin').textContent = f.minPrice;
        document.getElementById('pmax').textContent = f.maxPrice.toLocaleString();
      }

      const sortSel = document.getElementById('sort-select');
      if (sortSel) sortSel.value = f.sort;

      const sInp = document.getElementById('search-input');
      if (sInp) sInp.value = f.search;

      if (window.location.search && !wishlistShare) {
        this.setPage('shop');
      }
    });
  },

  setupInteractivity() {
    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });

    // Inactivity Abandoned Cart tracker
    let inactiveTimer;
    const resetInactive = () => {
      clearTimeout(inactiveTimer);
      inactiveTimer = setTimeout(() => {
        if (this.state.cart.length > 0 && this.state.currentPage !== 'success-page') {
          showAbandonedCartToast();
        }
      }, 30000); // 30 seconds
    };

    ['mousemove', 'click', 'keydown', 'scroll'].forEach(evt => {
      window.addEventListener(evt, resetInactive);
    });
    resetInactive();
  }
};

// ======================================
// DOM EVENT ON READY
// ======================================
document.addEventListener('DOMContentLoaded', () => {
  BruteStore.init();
  initCustomCursor();
  BruteStore.renderPageData();
  renderLookbook();
  setupKeyboardTrapping();
  preloadHeroImage();

  // SPLASH SCREEN INITIATION
  const splash = document.getElementById('intro-splash');
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.style.display = 'none';
      }, 1200); // Match transition duration in style.css
    }, 1800); // Pulse splash for 1.8s
  }
});

// Custom Cursor (Only on Desktop)
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');
  if (!cursor || !cursorDot) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(0.8)';
    cursor.style.borderColor = 'white';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.borderColor = 'var(--red)';
  });
}

// Preload hero
function preloadHeroImage() {
  const heroLink = document.createElement('link');
  heroLink.rel = 'preload';
  heroLink.as = 'image';
  heroLink.href = 'https://picsum.photos/id/1062/700/900';
  document.head.appendChild(heroLink);
}

// Close all active modals helper
function closeAllModals() {
  const overlays = [
    'product-overlay', 'auth-overlay', 'size-guide-overlay', 
    'address-overlay', 'compare-overlay', 'lightbox-overlay', 
    'checkout-overlay', 'razorpay-overlay'
  ];
  overlays.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  });
  closeCart();
}

// ======================================
// RENDERING ENGINES
// ======================================

// Render Featured home items
function renderFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  initialProducts.slice(0, 4).forEach(product => {
    grid.appendChild(createProductCard(product));
  });
}

// Render Recently Viewed cards
function renderRecentlyViewed() {
  const section = document.getElementById('rv-section');
  const grid = document.getElementById('rv-grid');
  if (!section || !grid) return;

  const viewedIds = BruteStore.state.recentlyViewed;
  if (viewedIds.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  grid.innerHTML = '';
  const viewedProducts = initialProducts.filter(p => viewedIds.includes(p.id));
  // Render in reverse viewed order
  viewedIds.forEach(id => {
    const p = viewedProducts.find(prod => prod.id === id);
    if (p) grid.appendChild(createProductCard(p));
  });
}

// Create Card layout
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card reveal-up';
  
  const isWishlisted = BruteStore.state.wishlist.includes(product.id);
  const isCompareChecked = BruteStore.state.compareList.includes(product.id);
  const inStock = Object.values(product.stock).some(qty => qty > 0);

  // Render swatches preview
  const swatchesHtml = product.colors.map(col => `
    <span class="card-swatch" style="background: ${col.hex}" title="${col.name}"></span>
  `).join('');

  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.img}" alt="${product.name}" class="product-img" loading="lazy">
      ${product.badge ? `<div class="product-badge badge-new">${product.badge}</div>` : ''}
      ${!inStock ? `<div class="product-badge badge-sale" style="background:#555;color:#fff;">OUT OF STOCK</div>` : ''}
      <button class="wishlist-heart ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" aria-label="Add to wishlist">
        ${isWishlisted ? '♥' : '♡'}
      </button>
      ${inStock ? `<button class="quick-add-btn" onclick="quickAddToCart(${product.id}, event)">QUICK ADD</button>` : ''}
    </div>
    <div class="product-info">
      <div class="product-cat">${product.category.toUpperCase()}</div>
      <div class="product-name">${product.name}</div>
      
      <div class="product-price-row">
        <div class="product-price">₹${product.price}</div>
        ${product.originalPrice ? `<div class="product-original-price">₹${product.originalPrice}</div>` : ''}
      </div>
      
      <div class="card-swatches">${swatchesHtml}</div>
      
      <div class="compare-checkbox-wrap" onclick="toggleCompare(${product.id}, event)">
        <input type="checkbox" id="compare-p-${product.id}" class="compare-checkbox" ${isCompareChecked ? 'checked' : ''}>
        <label for="compare-p-${product.id}" style="cursor:pointer;">◫ COMPARE</label>
      </div>
    </div>
  `;
  
  card.onclick = (e) => {
    if (!e.target.closest('button') && !e.target.closest('.wishlist-heart') && !e.target.closest('.compare-checkbox-wrap')) {
      openProductModal(product.id);
    }
  };
  return card;
}

// Render Lookbook
function renderLookbook() {
  const grid = document.getElementById('lookbook-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  lookbookItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'lookbook-item reveal-up';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.caption}" loading="lazy">
      <div class="lookbook-caption">${item.caption}</div>
    `;
    grid.appendChild(div);
  });
}

// Breadcrumbs
function renderBreadcrumbs() {
  const container = document.getElementById('shop-breadcrumbs');
  if (!container) return;
  const cat = BruteStore.state.activeFilters.category;
  container.innerHTML = `<span onclick="showPage('home')" style="cursor:pointer; text-decoration:underline;">HOME</span> > <span onclick="clearFilters()" style="cursor:pointer; text-decoration:underline;">SHOP</span> ${cat !== 'ALL' ? `> <span>${cat}</span>` : ''}`;
}

// Render shop grid with simulated Loading Skeletons
let loadedProductsCount = 6; // pagination page size

function renderProductGrid(filtered = null) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const f = BruteStore.state.activeFilters;
  
  // Apply actual filtering logic
  let source = filtered;
  if (!source) {
    source = initialProducts.filter(p => {
      const cMatch = f.category === 'ALL' || p.category.toLowerCase() === f.category.toLowerCase();
      const pMatch = p.price >= f.minPrice && p.price <= f.maxPrice;
      const sMatch = f.search === '' || p.name.toLowerCase().includes(f.search.toLowerCase()) || p.category.toLowerCase().includes(f.search.toLowerCase());
      return cMatch && pMatch && sMatch;
    });

    // Sorting
    if (f.sort === 'price-asc') source.sort((a,b) => a.price - b.price);
    else if (f.sort === 'price-desc') source.sort((a,b) => b.price - a.price);
    else if (f.sort === 'name-asc') source.sort((a,b) => a.name.localeCompare(b.name));
  }

  // 1. Show skeletons
  grid.innerHTML = '';
  for(let i=0; i<Math.min(6, source.length > 0 ? source.length : 3); i++) {
    const skel = document.createElement('div');
    skel.className = 'skeleton-card';
    skel.innerHTML = `
      <div class="skeleton-img"></div>
      <div class="skeleton-info">
        <div class="skeleton-text cat"></div>
        <div class="skeleton-text title"></div>
        <div class="skeleton-text price"></div>
      </div>
    `;
    grid.appendChild(skel);
  }

  const noResults = document.getElementById('no-results');
  const loadMoreBtn = document.getElementById('load-more-container');
  if (noResults) noResults.style.display = 'none';
  if (loadMoreBtn) loadMoreBtn.style.display = 'none';

  // 2. Render actual products after simulated delay
  setTimeout(() => {
    grid.innerHTML = '';
    
    // Pagination slicing
    const pageProducts = source.slice(0, loadedProductsCount);
    
    if (pageProducts.length === 0) {
      if (noResults) noResults.style.display = 'block';
      document.getElementById('product-count').textContent = '0 PRODUCTS';
      document.getElementById('product-count-text').textContent = 'Catalog search completed: 0 matches found.';
      return;
    }

    if (BruteStore.state.viewMode === 'list') {
      grid.classList.add('list-view');
    } else {
      grid.classList.remove('list-view');
    }

    pageProducts.forEach(product => {
      grid.appendChild(createProductCard(product));
    });

    // Count texts
    document.getElementById('product-count').textContent = `${source.length} PRODUCTS`;
    document.getElementById('product-count-text').textContent = `Showing 1–${pageProducts.length} of ${source.length} products inside the vault.`;

    if (source.length > loadedProductsCount) {
      if (loadMoreBtn) loadMoreBtn.style.display = 'flex';
    }

    initScrollAnimations();
  }, 400); // 400ms premium network load delay
}

function loadMoreProducts() {
  loadedProductsCount += 3;
  renderProductGrid();
}

function setView(mode) {
  BruteStore.state.viewMode = mode;
  document.getElementById('grid-view-btn').classList.toggle('active', mode === 'grid');
  document.getElementById('list-view-btn').classList.toggle('active', mode === 'list');
  renderProductGrid();
}

// Render Wishlist
function renderWishlist() {
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  const shareBtn = document.getElementById('share-wishlist-btn');
  if (!grid || !empty) return;

  const list = BruteStore.state.wishlist;
  if (list.length === 0) {
    empty.style.display = 'block';
    grid.style.display = 'none';
    if (shareBtn) shareBtn.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  grid.style.display = 'grid';
  if (shareBtn) shareBtn.style.display = 'block';
  grid.innerHTML = '';
  
  initialProducts.filter(p => list.includes(p.id)).forEach(p => {
    grid.appendChild(createProductCard(p));
  });
}

// Share Wishlist
function shareWishlist() {
  const ids = BruteStore.state.wishlist.join(',');
  const link = `${window.location.origin}${window.location.pathname}?wishlist=${ids}`;
  navigator.clipboard.writeText(link).then(() => {
    showToast("Shareable wishlist link copied to clipboard.");
  }).catch(() => {
    showToast("Failed to copy link.");
  });
}

// ======================================
// FILTERS AND SEARCH
// ======================================
function setFilter(cat, btn) {
  document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  BruteStore.state.activeFilters.category = cat;
  loadedProductsCount = 6;
  BruteStore.updateURL();
  renderProductGrid();
  renderBreadcrumbs();
}

function updatePriceFilter() {
  const min = parseInt(document.getElementById('price-min').value);
  const max = parseInt(document.getElementById('price-max').value);
  
  document.getElementById('pmin').textContent = min;
  document.getElementById('pmax').textContent = max.toLocaleString();
  
  BruteStore.state.activeFilters.minPrice = min;
  BruteStore.state.activeFilters.maxPrice = max;
  
  // Debounce price slider changes
  clearTimeout(window.priceFilterTimeout);
  window.priceFilterTimeout = setTimeout(() => {
    loadedProductsCount = 6;
    BruteStore.updateURL();
    renderProductGrid();
  }, 150);
}

function setSort(mode) {
  BruteStore.state.activeFilters.sort = mode;
  loadedProductsCount = 6;
  BruteStore.updateURL();
  renderProductGrid();
}

function clearFilters() {
  const f = BruteStore.state.activeFilters;
  f.category = 'ALL';
  f.minPrice = 0;
  f.maxPrice = 10000;
  f.sort = 'default';
  f.search = '';

  document.getElementById('price-min').value = 0;
  document.getElementById('price-max').value = 10000;
  document.getElementById('pmin').textContent = '0';
  document.getElementById('pmax').textContent = '10,000';
  
  const searchInp = document.getElementById('search-input');
  if (searchInp) searchInp.value = '';
  
  document.querySelectorAll('.filter-chip').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === 'ALL');
  });

  const sortSel = document.getElementById('sort-select');
  if (sortSel) sortSel.value = 'default';

  loadedProductsCount = 6;
  BruteStore.updateURL();
  renderProductGrid();
  renderBreadcrumbs();
}

function filterAndGo(category) {
  BruteStore.setPage('shop');
  setTimeout(() => {
    const fChips = document.querySelectorAll('.filter-chip');
    fChips.forEach(btn => {
      if (btn.textContent.trim().toUpperCase() === category.toUpperCase()) {
        setFilter(category, btn);
      }
    });
  }, 200);
}

// Live Search with Suggestions Debounced
let searchDebounceTimer;
function handleSearchInput(query) {
  BruteStore.state.activeFilters.search = query;
  
  // Live Suggestions peek
  const suggestions = document.getElementById('search-suggestions');
  if (!suggestions) return;

  if (query.trim() === '') {
    suggestions.style.display = 'none';
    if (BruteStore.state.currentPage === 'shop') {
      BruteStore.updateURL();
      renderProductGrid();
    }
    return;
  }

  // Live matching preview
  const matches = initialProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4);

  suggestions.innerHTML = '';
  suggestions.style.display = 'block';

  if (matches.length === 0) {
    suggestions.innerHTML = `<div class="search-suggestions-empty">NO DROPS MATCHING "${query.toUpperCase()}"</div>`;
  } else {
    matches.forEach(item => {
      const row = document.createElement('div');
      row.className = 'search-suggestion-item';
      row.innerHTML = `
        <img src="${item.img}" class="search-suggestion-img">
        <div class="search-suggestion-info">
          <div class="search-suggestion-name">${item.name}</div>
          <div class="search-suggestion-cat">${item.category.toUpperCase()}</div>
          <div class="search-suggestion-price">₹${item.price}</div>
        </div>
      `;
      row.onclick = () => {
        suggestions.style.display = 'none';
        openProductModal(item.id);
      };
      suggestions.appendChild(row);
    });
  }

  // Debounce search grid updates if currently on shop page
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    if (BruteStore.state.currentPage === 'shop') {
      loadedProductsCount = 6;
      BruteStore.updateURL();
      renderProductGrid();
    }
  }, 250);
}

function expandSearch(focused) {
  // Delay suggestion collapse to allow link clicks
  if (!focused) {
    setTimeout(() => {
      const s = document.getElementById('search-suggestions');
      if (s) s.style.display = 'none';
    }, 200);
  }
}

// Keyboard navigation search focus shortcut
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    const search = document.getElementById('search-input');
    if (search) {
      BruteStore.setPage('shop');
      setTimeout(() => {
        search.focus();
      }, 200);
    }
  }
});

// ======================================
// PRODUCT MODAL GALLERY, ZOOM & LIGHTBOX
// ======================================
let currentProduct = null;
let currentSelectedSize = null;
let currentSelectedColor = null;
let activeImageIndex = 0;

function openProductModal(id) {
  currentProduct = initialProducts.find(p => p.id === id);
  if (!currentProduct) return;

  // Add to recently viewed
  let viewed = BruteStore.state.recentlyViewed.filter(x => x !== id);
  viewed.unshift(id); // push front
  BruteStore.state.recentlyViewed = viewed.slice(0, 4); // max 4
  BruteStore.saveState();
  renderRecentlyViewed();

  activeImageIndex = 0;
  
  // Set default selections
  const inStockSizes = currentProduct.sizes.filter(s => currentProduct.stock[s] > 0);
  currentSelectedSize = inStockSizes.length > 0 ? inStockSizes[0] : currentProduct.sizes[0];
  currentSelectedColor = currentProduct.colors[0] ? currentProduct.colors[0].name : '';

  renderProductModalInner();
  
  document.getElementById('product-overlay').classList.add('open');
  trapFocus(document.getElementById('product-modal'));
}

function renderProductModalInner() {
  const inner = document.getElementById('product-modal-inner');
  if (!inner) return;

  // Thumbnails flex
  const thumbnailsHtml = currentProduct.images.map((imgUrl, idx) => `
    <img src="${imgUrl}" class="modal-thumb ${idx === activeImageIndex ? 'active' : ''}" onclick="switchModalImage(${idx})" alt="${currentProduct.name} alt view">
  `).join('');

  // Sizes button selector
  const sizesHtml = currentProduct.sizes.map(sz => {
    const stockCount = currentProduct.stock[sz] || 0;
    const isOutOfStock = stockCount === 0;
    const isActive = sz === currentSelectedSize;
    return `
      <button class="size-btn ${isActive ? 'active' : ''} ${isOutOfStock ? 'out-of-stock' : ''}" 
              ${isOutOfStock ? 'disabled style="opacity:0.35;cursor:not-allowed;"' : ''} 
              onclick="selectSize('${sz}', this)">
        ${sz}
      </button>
    `;
  }).join('');

  // Colors swatches
  const colorsHtml = currentProduct.colors.map(col => {
    const isActive = col.name === currentSelectedColor;
    return `
      <span class="swatch ${isActive ? 'active' : ''}" 
            style="background: ${col.hex}" 
            title="${col.name}" 
            onclick="selectColor('${col.name}', this)">
      </span>
    `;
  }).join('');

  // Related drops recommendation
  const related = initialProducts.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 3);
  const relatedHtml = related.map(p => `
    <div class="related-card" onclick="openProductModal(${p.id})">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="related-name">${p.name}</div>
      <div class="related-price">₹${p.price}</div>
    </div>
  `).join('');

  // Stock notification alerts
  const currentStock = currentProduct.stock[currentSelectedSize] || 0;
  let stockAlertHtml = '';
  if (currentStock > 0 && currentStock <= 2) {
    stockAlertHtml = `<div class="toast-icon" style="background:var(--red); color:white; padding:4px 8px; font-size:10px; border-radius:2px; display:inline-block; font-weight:700; margin-top:8px;">⚠️ ONLY ${currentStock} LEFT IN STOCK!</div>`;
  }

  inner.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-col" style="padding: 20px;">
        <div class="modal-main-img-wrap" onmousemove="zoomModalImage(event)" onmouseleave="resetZoomModalImage()" onclick="openLightbox()">
          <img src="${currentProduct.images[activeImageIndex]}" id="modal-main-img" alt="${currentProduct.name}" loading="eager">
          <div class="zoom-lens" id="zoom-lens"></div>
        </div>
        <div class="modal-thumbnails">${thumbnailsHtml}</div>
      </div>
      <div class="modal-content-col">
        <div class="modal-cat">${currentProduct.category.toUpperCase()}</div>
        <h2 class="modal-name">${currentProduct.name}</h2>
        <div class="modal-price">₹${currentProduct.price}</div>
        
        <div class="modal-desc">${currentProduct.description}</div>
        
        <!-- FEATURE BULLETS -->
        <ul style="list-style: square; margin-bottom: 24px; padding-left: 18px; font-size:13px; color:var(--text-muted); line-height:1.6;">
          ${currentProduct.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <!-- COLOR SELECTOR -->
        ${currentProduct.colors.length > 0 ? `
          <div class="modal-label">COLOR — <span id="modal-selected-color-text" style="color:white;">${currentSelectedColor}</span></div>
          <div class="swatch-container">${colorsHtml}</div>
        ` : ''}

        <!-- SIZE SELECTOR -->
        <div class="modal-label-row">
          <span class="modal-label">SIZE</span>
          <button class="size-guide-link" onclick="openSizeGuide()">SIZE GUIDE</button>
        </div>
        <div class="size-btns">${sizesHtml}</div>
        <div id="modal-stock-alert">${stockAlertHtml}</div>
        
        <div class="qty-row" style="margin-top: 24px;">
          <span class="modal-label" style="margin-bottom:0; margin-right:12px;">QUANTITY</span>
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <div class="qty-display" id="modal-qty">1</div>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        
        <div class="modal-actions" style="margin-top: 24px;">
          <button class="btn-primary" style="width:100%" onclick="addCurrentToCart()">ADD TO CART — ₹${currentProduct.price}</button>
          <button class="btn-checkout" style="width:100%; background: #111; border:1.5px solid var(--red); color: white;" onclick="buyNowCurrent()">BUY NOW (INSTANT CHECKOUT)</button>
          <button class="btn-wishlist" onclick="toggleWishlistFromModal()">♡ WISHLIST</button>
        </div>
      </div>
    </div>

    <!-- RELATED DROPS -->
    ${related.length > 0 ? `
      <div class="modal-related-section" style="padding: 30px;">
        <h3>YOU MAY ALSO LIKE</h3>
        <div class="related-products-row">${relatedHtml}</div>
      </div>
    ` : ''}
  `;
}

function switchModalImage(index) {
  activeImageIndex = index;
  const mainImg = document.getElementById('modal-main-img');
  if (mainImg) {
    mainImg.src = currentProduct.images[activeImageIndex];
  }
  document.querySelectorAll('.modal-thumb').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === index);
  });
}

function selectSize(sz, btn) {
  currentSelectedSize = sz;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Update stock alert
  const alertEl = document.getElementById('modal-stock-alert');
  const count = currentProduct.stock[sz] || 0;
  if (alertEl) {
    if (count > 0 && count <= 2) {
      alertEl.innerHTML = `<div class="toast-icon" style="background:var(--red); color:white; padding:4px 8px; font-size:10px; border-radius:2px; display:inline-block; font-weight:700; margin-top:8px;">⚠️ ONLY ${count} LEFT IN STOCK!</div>`;
    } else {
      alertEl.innerHTML = '';
    }
  }
}

function selectColor(colorName, span) {
  currentSelectedColor = colorName;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
  span.classList.add('active');
  const textEl = document.getElementById('modal-selected-color-text');
  if (textEl) textEl.textContent = colorName;
}

function changeQty(delta) {
  const qtyEl = document.getElementById('modal-qty');
  if (!qtyEl) return;
  let val = parseInt(qtyEl.textContent) + delta;
  val = Math.max(1, val);
  qtyEl.textContent = val;
}

function closeProductModal() {
  document.getElementById('product-overlay').classList.remove('open');
  restoreFocus();
}

// IMAGE HOVER ZOOM SCALE
function zoomModalImage(e) {
  const wrapper = e.currentTarget;
  const img = wrapper.querySelector('img');
  const lens = wrapper.querySelector('.zoom-lens');
  if (!img || !lens) return;

  lens.style.display = 'block';
  const bounds = wrapper.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;

  // Lens positions
  const lensX = x - lens.offsetWidth / 2;
  const lensY = y - lens.offsetHeight / 2;
  lens.style.left = Math.max(0, Math.min(bounds.width - lens.offsetWidth, lensX)) + 'px';
  lens.style.top = Math.max(0, Math.min(bounds.height - lens.offsetHeight, lensY)) + 'px';

  // Scale zoom
  const xPercent = (x / bounds.width) * 100;
  const yPercent = (y / bounds.height) * 100;
  img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  img.style.transform = 'scale(2)';
}

function resetZoomModalImage() {
  const wrap = document.querySelector('.modal-main-img-wrap');
  if (!wrap) return;
  const img = wrap.querySelector('img');
  const lens = wrap.querySelector('.zoom-lens');
  if (img) img.style.transform = 'scale(1)';
  if (lens) lens.style.display = 'none';
}

// FULLSCREEN HIGH RES LIGHTBOX
function openLightbox() {
  if (!currentProduct) return;
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  const count = document.getElementById('lightbox-counter');
  
  if (!overlay || !img) return;

  img.src = currentProduct.images[activeImageIndex];
  if (count) count.textContent = `${activeImageIndex + 1} / ${currentProduct.images.length}`;
  
  overlay.classList.add('open');
  trapFocus(overlay);
}

function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('open');
  trapFocus(document.getElementById('product-modal'));
}

function lightboxPrev() {
  if (!currentProduct) return;
  activeImageIndex = (activeImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
  document.getElementById('lightbox-img').src = currentProduct.images[activeImageIndex];
  document.getElementById('lightbox-counter').textContent = `${activeImageIndex + 1} / ${currentProduct.images.length}`;
  switchModalImage(activeImageIndex);
}

function lightboxNext() {
  if (!currentProduct) return;
  activeImageIndex = (activeImageIndex + 1) % currentProduct.images.length;
  document.getElementById('lightbox-img').src = currentProduct.images[activeImageIndex];
  document.getElementById('lightbox-counter').textContent = `${activeImageIndex + 1} / ${currentProduct.images.length}`;
  switchModalImage(activeImageIndex);
}

// SIZE GUIDE
function openSizeGuide() {
  const el = document.getElementById('size-guide-overlay');
  el.classList.add('open');
  trapFocus(el);
}

function closeSizeGuide() {
  document.getElementById('size-guide-overlay').classList.remove('open');
  if (document.getElementById('product-overlay').classList.contains('open')) {
    trapFocus(document.getElementById('product-modal'));
  } else {
    restoreFocus();
  }
}

// ======================================
// CORE SHOPPING CART & PROMOS
// ======================================

function addToCart(id, qty = 1, size = 'M', color = 'Void Black') {
  const prod = initialProducts.find(p => p.id === id);
  if (!prod) return;

  // Key item on ID, size, color
  const existing = BruteStore.state.cart.find(item => 
    item.id === id && item.size === size && item.color === color
  );

  if (existing) {
    existing.qty += qty;
  } else {
    BruteStore.state.cart.push({
      ...prod,
      qty,
      size,
      color
    });
  }

  BruteStore.updateCartCount();
  BruteStore.saveState();
  renderCart();
  renderMiniCart();
}

function quickAddToCart(id, e) {
  e.stopPropagation();
  const prod = initialProducts.find(p => p.id === id);
  if (!prod) return;

  const defaultSize = prod.sizes.find(s => prod.stock[s] > 0) || prod.sizes[0];
  const defaultCol = prod.colors[0] ? prod.colors[0].name : '';
  
  addToCart(id, 1, defaultSize, defaultCol);
  showToast(`Added ${prod.name} (${defaultSize}) to cart.`);
}

function addCurrentToCart() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('modal-qty').textContent) || 1;
  addToCart(currentProduct.id, qty, currentSelectedSize, currentSelectedColor);
  closeProductModal();
  showToast(`Added ${qty} × ${currentProduct.name} to cart.`);
}

function buyNowCurrent() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('modal-qty').textContent) || 1;
  addToCart(currentProduct.id, qty, currentSelectedSize, currentSelectedColor);
  closeProductModal();
  openCheckout();
}

function removeFromCart(id, size, color) {
  BruteStore.state.cart = BruteStore.state.cart.filter(item => 
    !(item.id === id && item.size === size && item.color === color)
  );
  BruteStore.updateCartCount();
  BruteStore.saveState();
  renderCart();
  renderMiniCart();
}

function updateCartItemQty(id, size, color, delta) {
  const item = BruteStore.state.cart.find(i => 
    i.id === id && i.size === size && i.color === color
  );
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    BruteStore.updateCartCount();
    BruteStore.saveState();
    renderCart();
    renderMiniCart();
  }
}

// Cart totals processor with dynamic coupons
function computeCartTotals() {
  const cart = BruteStore.state.cart;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  let discount = 0;
  const promo = BruteStore.state.appliedPromo;
  if (promo) {
    discount = Math.floor(subtotal * (promo.discountPercent / 100));
  }

  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 150;
  const total = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, total };
}

function renderCart() {
  const container = document.getElementById('cart-items-list');
  if (!container) return;

  const cart = BruteStore.state.cart;
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">⌗</div>
        <p>Your cart is empty</p>
      </div>
    `;
    updateCartTotalsDisplay(0, 0, 0, 0);
    return;
  }

  container.innerHTML = '';
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.images[0]}" class="cart-item-img" alt="${item.name} image">
      <div style="min-width:0; flex:1;">
        <div class="cart-item-name" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.name}</div>
        <div class="cart-item-meta">${item.category.toUpperCase()} • ${item.color.toUpperCase()} • ${item.size}</div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, '${item.size}', '${item.color}', -1)">−</button>
          <span class="cart-qty">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, '${item.size}', '${item.color}', 1)">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div class="cart-item-price">₹${itemTotal}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}', '${item.color}')" aria-label="Remove item">✕</button>
      </div>
    `;
    container.appendChild(div);
  });

  const totals = computeCartTotals();
  updateCartTotalsDisplay(totals.subtotal, totals.discount, totals.shipping, totals.total);
}

function updateCartTotalsDisplay(subtotal, discount, shipping, total) {
  document.getElementById('cart-subtotal').textContent = `₹${subtotal.toLocaleString()}`;
  
  // Shipping display
  const shipEl = document.getElementById('cart-shipping');
  if (shipEl) {
    shipEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  }

  document.getElementById('cart-total').textContent = `₹${total.toLocaleString()}`;
}

function openCart() {
  renderCart();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay-bg').classList.add('show');
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay-bg').classList.remove('show');
}

// Mini Cart hover preview
function toggleMiniCart(show) {
  const mc = document.getElementById('mini-cart');
  if (!mc) return;
  if (show && BruteStore.state.cart.length > 0) {
    renderMiniCart();
    mc.style.display = 'flex';
  } else {
    mc.style.display = 'none';
  }
}

function renderMiniCart() {
  const container = document.getElementById('mini-cart-list');
  if (!container) return;

  const cart = BruteStore.state.cart;
  container.innerHTML = '';

  // Limit to top 3 items
  cart.slice(0, 3).forEach(item => {
    const div = document.createElement('div');
    div.className = 'mini-cart-item';
    div.innerHTML = `
      <img src="${item.images[0]}" class="mini-cart-img">
      <div class="mini-cart-info">
        <div class="mini-cart-name">${item.name}</div>
        <div class="mini-cart-meta">${item.size} • Qty ${item.qty}</div>
        <div class="mini-cart-price">₹${item.price * item.qty}</div>
      </div>
    `;
    container.appendChild(div);
  });

  const totals = computeCartTotals();
  document.getElementById('mini-cart-subtotal').textContent = `₹${totals.subtotal.toLocaleString()}`;
}

// ======================================
// SECURE CHECKOUT FLOW (RAZORPAY SIMULATED)
// ======================================
let selectedAddressId = 1;

function openCheckout() {
  if (!BruteStore.state.currentUser) {
    showToast("Authentication required. Please login to complete secure checkout.");
    openAuth('login');
    return;
  }
  if (BruteStore.state.cart.length === 0) {
    showToast("Your cart is empty inside the void.");
    return;
  }
  closeCart();
  renderCheckoutDetails();
  
  const el = document.getElementById('checkout-overlay');
  el.classList.add('open');
  trapFocus(el);
}

function closeCheckout() {
  document.getElementById('checkout-overlay').classList.remove('open');
  restoreFocus();
}

function renderCheckoutDetails() {
  // Shipping Addresses
  const listContainer = document.getElementById('checkout-address-list');
  if (listContainer) {
    listContainer.innerHTML = '';
    const addrs = BruteStore.state.addresses;
    if (addrs.length === 0) {
      listContainer.innerHTML = `<p style="font-size:12px; color:var(--text-dim)">No addresses saved. Please add an address to ship.</p>`;
    } else {
      addrs.forEach(addr => {
        const isSelected = addr.id === selectedAddressId;
        const card = document.createElement('div');
        card.className = `checkout-address-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
          <div class="checkout-address-name">${addr.fullname.toUpperCase()} (${addr.phone})</div>
          <div class="checkout-address-text">${addr.street}, ${addr.city}, ${addr.state} — ${addr.pincode}</div>
        `;
        card.onclick = () => {
          selectedAddressId = addr.id;
          renderCheckoutDetails();
        };
        listContainer.appendChild(card);
      });
    }
  }

  // Checkout Items List
  const itemsContainer = document.getElementById('checkout-summary-items');
  if (itemsContainer) {
    itemsContainer.innerHTML = '';
    BruteStore.state.cart.forEach(item => {
      const row = document.createElement('div');
      row.className = 'checkout-item-row';
      row.innerHTML = `
        <span class="checkout-item-name">${item.qty} × ${item.name} (${item.size})</span>
        <span>₹${item.price * item.qty}</span>
      `;
      itemsContainer.appendChild(row);
    });
  }

  // Totals
  const totals = computeCheckoutTotals();
  document.getElementById('checkout-subtotal').textContent = `₹${totals.subtotal.toLocaleString()}`;
  
  const discRow = document.getElementById('checkout-discount-row');
  if (discRow) {
    if (totals.discount > 0) {
      discRow.style.display = 'flex';
      document.getElementById('checkout-discount').textContent = `-₹${totals.discount.toLocaleString()}`;
    } else {
      discRow.style.display = 'none';
    }
  }

  document.getElementById('checkout-shipping').textContent = totals.shipping === 0 ? 'FREE' : `₹${totals.shipping}`;
  document.getElementById('checkout-total').textContent = `₹${totals.total.toLocaleString()}`;
  document.getElementById('checkout-pay-btn-text').textContent = totals.total.toLocaleString();
}

function computeCheckoutTotals() {
  const cart = BruteStore.state.cart;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  let discount = 0;
  const promo = BruteStore.state.checkoutPromo || BruteStore.state.appliedPromo;
  if (promo) {
    discount = Math.floor(subtotal * (promo.discountPercent / 100));
  }

  const shipping = subtotal > 999 ? 0 : 150;
  const total = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, total };
}

function applyCheckoutPromo() {
  const val = document.getElementById('checkout-promo-input').value.trim().toUpperCase();
  const msgEl = document.getElementById('checkout-promo-message');
  
  if (val === 'BRUTAL25') {
    BruteStore.state.checkoutPromo = { code: 'BRUTAL25', discountPercent: 25 };
    if (msgEl) {
      msgEl.style.color = '#00c864';
      msgEl.textContent = 'BRUTAL25 applied! 25% off subtotal discount.';
    }
  } else if (val === 'VOID10') {
    BruteStore.state.checkoutPromo = { code: 'VOID10', discountPercent: 10 };
    if (msgEl) {
      msgEl.style.color = '#00c864';
      msgEl.textContent = 'VOID10 applied! 10% off subtotal discount.';
    }
  } else {
    BruteStore.state.checkoutPromo = null;
    if (msgEl) {
      msgEl.style.color = 'var(--red)';
      msgEl.textContent = 'Invalid promo coupon code.';
    }
  }
  renderCheckoutDetails();
}

// PROCEED PAYMENT GATEWAY
let checkoutTotalAmount = 0;

function proceedToPayment() {
  if (BruteStore.state.addresses.length === 0) {
    showToast("Please save a shipping address first.");
    openAddressModal();
    return;
  }

  const totals = computeCheckoutTotals();
  checkoutTotalAmount = totals.total;

  document.getElementById('checkout-overlay').classList.remove('open');
  
  // Open simulated Razorpay Gateway
  document.getElementById('rzp-total-amount').textContent = totals.total.toLocaleString();
  const orderMockId = 'BR' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('rzp-order-desc').textContent = `Order Reference: ${orderMockId}`;
  
  const rzpEl = document.getElementById('razorpay-overlay');
  rzpEl.classList.add('open');
  trapFocus(rzpEl);
}

function cancelRazorpay() {
  document.getElementById('razorpay-overlay').classList.remove('open');
  openCheckout();
}

function simulatePaymentProcessing(method) {
  const loader = document.getElementById('payment-loader');
  if (loader) {
    const mainText = loader.querySelector('p');
    if (mainText) {
      if (method === 'COD') {
        mainText.textContent = "Registering Cash on Delivery (COD) Order...";
      } else {
        mainText.textContent = "Processing Secure Payment via Razorpay...";
      }
    }
    loader.style.display = 'flex';
  }

  setTimeout(() => {
    // Complete Payment
    if (loader) loader.style.display = 'none';
    document.getElementById('razorpay-overlay').classList.remove('open');

    // Create Order object
    const orderId = 'BR' + Math.floor(100000 + Math.random() * 900000);
    const selectedAddr = BruteStore.state.addresses.find(a => a.id === selectedAddressId) || BruteStore.state.addresses[0];

    // Stepper track setup
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('en-IN'),
      timestamp: Date.now(),
      items: [...BruteStore.state.cart],
      total: checkoutTotalAmount,
      address: selectedAddr,
      status: 'placed', // placed -> processing -> shipped -> delivered
      paymentMethod: method
    };

    BruteStore.state.orders.unshift(newOrder);
    
    // Reset Cart & Coupons
    BruteStore.state.cart = [];
    BruteStore.state.checkoutPromo = null;
    BruteStore.state.appliedPromo = null;
    BruteStore.updateCartCount();
    BruteStore.saveState();
    
    // Redirect to Success
    BruteStore.setPage('success-page');
    document.getElementById('success-order-id').textContent = `Order ID: ${orderId}`;
    showToast("Secure payment processed via Razorpay.");
  }, 1800); // 1.8s payment processing spinner
}

// ======================================
// ACCOUNT, SAVED ADDRESSES & ORDER TRACKING
// ======================================
let activeAccountTab = 'orders';

function renderAccount() {
  document.getElementById('tab-orders').classList.toggle('active', activeAccountTab === 'orders');
  document.getElementById('tab-addresses').classList.toggle('active', activeAccountTab === 'addresses');

  document.getElementById('account-orders-section').style.display = activeAccountTab === 'orders' ? 'block' : 'none';
  document.getElementById('account-addresses-section').style.display = activeAccountTab === 'addresses' ? 'block' : 'none';

  if (activeAccountTab === 'orders') {
    renderOrdersHistory();
  } else {
    renderAddressesList();
  }
}

function switchAccountTab(tab) {
  activeAccountTab = tab;
  renderAccount();
}

// Render Saved Addresses
function renderAddressesList() {
  const grid = document.getElementById('address-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const addrs = BruteStore.state.addresses;
  addrs.forEach(addr => {
    const card = document.createElement('div');
    card.className = 'address-card';
    card.innerHTML = `
      <div>
        <div class="checkout-address-name">${addr.fullname.toUpperCase()}</div>
        <div class="checkout-address-text" style="margin-top:6px;">
          ${addr.street}<br>
          ${addr.city}, ${addr.state} — <strong>${addr.pincode}</strong><br>
          Phone: ${addr.phone}
        </div>
      </div>
      <div class="address-actions">
        <button class="address-action-btn" onclick="openAddressModal(${addr.id})">EDIT</button>
        <button class="address-action-btn danger" onclick="deleteAddress(${addr.id})">DELETE</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openAddressModal(editId = null) {
  const overlay = document.getElementById('address-overlay');
  const title = document.getElementById('address-modal-title');
  const sub = document.getElementById('address-modal-subtitle');
  
  if (!overlay) return;

  // Clear inputs
  document.getElementById('address-edit-id').value = editId || '';
  document.getElementById('address-fullname').value = '';
  document.getElementById('address-phone').value = '';
  document.getElementById('address-street').value = '';
  document.getElementById('address-city').value = '';
  document.getElementById('address-pincode').value = '';
  document.getElementById('address-state').value = '';

  if (editId) {
    title.textContent = "EDIT ADDRESS";
    sub.textContent = "Modify saved shipping details";
    const addr = BruteStore.state.addresses.find(a => a.id === editId);
    if (addr) {
      document.getElementById('address-fullname').value = addr.fullname;
      document.getElementById('address-phone').value = addr.phone;
      document.getElementById('address-street').value = addr.street;
      document.getElementById('address-city').value = addr.city;
      document.getElementById('address-pincode').value = addr.pincode;
      document.getElementById('address-state').value = addr.state;
    }
  } else {
    title.textContent = "ADD ADDRESS";
    sub.textContent = "Save shipping details inside the vault";
  }

  overlay.classList.add('open');
  trapFocus(overlay);
}

function closeAddressModal() {
  document.getElementById('address-overlay').classList.remove('open');
  if (BruteStore.state.currentPage === 'account') {
    trapFocus(document.getElementById('account-page'));
  } else if (document.getElementById('checkout-overlay').classList.contains('open')) {
    trapFocus(document.getElementById('checkout-overlay'));
  } else {
    restoreFocus();
  }
}

function saveAddress() {
  const idVal = document.getElementById('address-edit-id').value;
  const fullname = document.getElementById('address-fullname').value.trim();
  const phone = document.getElementById('address-phone').value.trim();
  const street = document.getElementById('address-street').value.trim();
  const city = document.getElementById('address-city').value.trim();
  const pincode = document.getElementById('address-pincode').value.trim();
  const state = document.getElementById('address-state').value.trim();

  if (!fullname || !phone || !street || !city || !pincode || !state) {
    showToast("Please fill all address parameters.");
    return;
  }

  if (idVal) {
    // Edit
    const addr = BruteStore.state.addresses.find(a => a.id === parseInt(idVal));
    if (addr) {
      addr.fullname = fullname;
      addr.phone = phone;
      addr.street = street;
      addr.city = city;
      addr.pincode = pincode;
      addr.state = state;
    }
  } else {
    // Add
    const nextId = BruteStore.state.addresses.reduce((max, a) => Math.max(max, a.id), 0) + 1;
    BruteStore.state.addresses.push({
      id: nextId,
      fullname,
      phone,
      street,
      city,
      pincode,
      state
    });
    selectedAddressId = nextId;
  }

  BruteStore.saveState();
  closeAddressModal();
  
  if (BruteStore.state.currentPage === 'account') {
    renderAccount();
  } else {
    renderCheckoutDetails();
  }
  showToast("Address saved successfully.");
}

function deleteAddress(id) {
  BruteStore.state.addresses = BruteStore.state.addresses.filter(a => a.id !== id);
  BruteStore.saveState();
  renderAddressesList();
  showToast("Address removed.");
}

// Render Orders History & Stepper order tracking
function renderOrdersHistory() {
  const container = document.getElementById('orders-list');
  const empty = document.getElementById('orders-empty');
  if (!container || !empty) return;

  const orders = BruteStore.state.orders;
  if (orders.length === 0) {
    empty.style.display = 'block';
    container.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  container.style.display = 'block';
  container.innerHTML = '';

  orders.forEach(order => {
    // Simple date-based tracking simulation status
    const elapsedMinutes = (Date.now() - order.timestamp) / 60000;
    let computedStatus = 'placed';
    if (elapsedMinutes > 3) computedStatus = 'delivered';
    else if (elapsedMinutes > 1.5) computedStatus = 'shipped';
    else if (elapsedMinutes > 0.5) computedStatus = 'processing';
    
    order.status = computedStatus;

    const div = document.createElement('div');
    div.className = 'order-card';
    
    // Status colors
    let statusClass = 'status-placed';
    if (order.status === 'processing') statusClass = 'status-placed';
    else if (order.status === 'shipped') statusClass = 'status-shipped';
    else if (order.status === 'delivered') statusClass = 'status-delivered';

    div.innerHTML = `
      <div class="order-header">
        <div>
          <div class="order-id">${order.id}</div>
          <div class="order-meta">${order.date} • Paid via ${order.paymentMethod.toUpperCase()}</div>
        </div>
        <div class="order-status ${statusClass}">${order.status.toUpperCase()}</div>
        <button class="track-order-btn" onclick="toggleOrderTracking('${order.id}', this)">TRACK PIECES</button>
      </div>
      <div class="order-items">
        ${order.items.map(item => `
          <div class="order-item">
            <img src="${item.images[0]}" class="order-item-img">
            <div>
              <div class="order-item-name">${item.name}</div>
              <div class="order-item-meta">${item.size} • Color: ${item.color} • Qty: ${item.qty}</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Simulation order tracking details -->
      <div class="order-tracking-wrap" id="tracking-deck-${order.id}" style="display:none;">
        <div class="tracking-title">SIMULATED TRACKING STATUS</div>
        <div class="tracking-stepper">
          <div class="tracking-step completed">
            <div class="step-dot">✓</div>
            <div class="step-label">Placed</div>
          </div>
          <div class="tracking-step ${['processing','shipped','delivered'].includes(order.status) ? 'completed' : 'current'}">
            <div class="step-dot">${order.status === 'placed' ? '●' : '✓'}</div>
            <div class="step-label">Processing</div>
          </div>
          <div class="tracking-step ${['shipped','delivered'].includes(order.status) ? 'completed' : (order.status === 'processing' ? 'current' : '')}">
            <div class="step-dot">${['shipped','delivered'].includes(order.status) ? '✓' : (order.status === 'processing' ? '●' : '3')}</div>
            <div class="step-label">Shipped</div>
          </div>
          <div class="tracking-step ${order.status === 'delivered' ? 'completed' : (order.status === 'shipped' ? 'current' : '')}">
            <div class="step-dot">${order.status === 'delivered' ? '✓' : (order.status === 'shipped' ? '●' : '4')}</div>
            <div class="step-label">Delivered</div>
          </div>
        </div>
        <p style="font-size:12px; color:var(--text-dim); text-align:center; margin-top:12px;">
          *Simulated order updates automatically over time. Status checks in real-time.
        </p>
      </div>

      <div class="order-total">
        <span>DELIVERED TO:</span>
        <span style="font-size:13px; color:var(--text-muted); font-weight:400; flex:1; margin-left:10px;">
          ${order.address.fullname}, ${order.address.street}, ${order.address.city}
        </span>
        <span>TOTAL</span>
        <span>₹${order.total.toLocaleString()}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

function toggleOrderTracking(orderId, btn) {
  const deck = document.getElementById(`tracking-deck-${orderId}`);
  if (!deck) return;
  const isHidden = deck.style.display === 'none';
  deck.style.display = isHidden ? 'block' : 'none';
  btn.textContent = isHidden ? 'HIDE TRACKING' : 'TRACK PIECES';
}

// ======================================
// PRODUCT COMPARISON DOCKED TRAY & SHEETS
// ======================================

function toggleCompare(id, e) {
  e.stopPropagation();
  const idx = BruteStore.state.compareList.indexOf(id);
  
  if (idx > -1) {
    BruteStore.state.compareList.splice(idx, 1);
  } else {
    if (BruteStore.state.compareList.length >= 3) {
      showToast("Comparison deck locked at max 3 items.");
      // Uncheck
      const chk = document.getElementById(`compare-p-${id}`);
      if (chk) chk.checked = false;
      return;
    }
    BruteStore.state.compareList.push(id);
  }

  BruteStore.saveState();
  renderCompareBar();
  
  // Sync checkbox state on active cards
  const chk = document.getElementById(`compare-p-${id}`);
  if (chk) chk.checked = idx === -1;
}

function renderCompareBar() {
  const bar = document.getElementById('compare-bar');
  const thumbs = document.getElementById('compare-thumbs');
  const badge = document.getElementById('compare-count-badge');
  
  if (!bar || !thumbs) return;

  const compareList = BruteStore.state.compareList;
  if (compareList.length === 0) {
    bar.style.display = 'none';
    return;
  }

  badge.textContent = compareList.length;
  thumbs.innerHTML = '';
  
  compareList.forEach(id => {
    const prod = initialProducts.find(p => p.id === id);
    if (prod) {
      const wrap = document.createElement('div');
      wrap.className = 'compare-thumb-wrap';
      wrap.innerHTML = `
        <img src="${prod.images[0]}">
        <button class="compare-remove-thumb" onclick="toggleCompare(${id}, event)">✕</button>
      `;
      thumbs.appendChild(wrap);
    }
  });

  bar.style.display = 'block';
}

function clearCompare() {
  BruteStore.state.compareList = [];
  BruteStore.saveState();
  renderCompareBar();
  
  // Uncheck all active card checkboxes
  document.querySelectorAll('.compare-checkbox').forEach(chk => chk.checked = false);
}

function openCompareModal() {
  const overlay = document.getElementById('compare-overlay');
  const table = document.getElementById('compare-matrix-table');
  if (!overlay || !table) return;

  const compareIds = BruteStore.state.compareList;
  if (compareIds.length === 0) return;

  const matched = initialProducts.filter(p => compareIds.includes(p.id));
  
  // Create side-by-side matrices table rows
  let trImg = `<tr><th>IMAGE</th>`;
  let trName = `<tr><th>NAME</th>`;
  let trPrice = `<tr><th>PRICE</th>`;
  let trCategory = `<tr><th>CATEGORY</th>`;
  let trRating = `<tr><th>RATING</th>`;
  let trSizes = `<tr><th>SIZES</th>`;
  let trColors = `<tr><th>COLORS</th>`;
  let trStock = `<tr><th>STOCK</th>`;
  let trFeatures = `<tr><th>TACTICAL SPECS</th>`;
  let trAction = `<tr><th>ACTION</th>`;

  matched.forEach(p => {
    const swatches = p.colors.map(c => `<span class="card-swatch" style="background:${c.hex}; display:inline-block; margin-right:4px;" title="${c.name}"></span>`).join('');
    const totalStock = Object.values(p.stock).reduce((a,b) => a+b, 0);

    trImg += `<td><img src="${p.images[0]}" class="comp-img"></td>`;
    trName += `<td><div class="comp-title">${p.name}</div></td>`;
    trPrice += `<td><div class="comp-price">₹${p.price}</div></td>`;
    trCategory += `<td>${p.category.toUpperCase()}</td>`;
    trRating += `<td><strong>${p.rating}★</strong> (${p.reviewsCount} reviews)</td>`;
    trSizes += `<td>${p.sizes.join(', ')}</td>`;
    trColors += `<td>${swatches}</td>`;
    trStock += `<td>${totalStock > 0 ? `<span style="color:#00c864">In Stock (${totalStock} pieces)</span>` : `<span style="color:var(--red)">Out of Stock</span>`}</td>`;
    trFeatures += `<td><ul style="padding-left:12px; font-size:11px; color:var(--text-muted); line-height:1.4;">${p.features.map(f => `<li>${f}</li>`).join('')}</ul></td>`;
    trAction += `<td>
      <button class="btn-primary btn-sm" onclick="closeCompareModal(); openProductModal(${p.id})">VIEW DETAILED</button>
    </td>`;
  });

  trImg += `</tr>`;
  trName += `</tr>`;
  trPrice += `</tr>`;
  trCategory += `</tr>`;
  trRating += `</tr>`;
  trSizes += `</tr>`;
  trColors += `</tr>`;
  trStock += `</tr>`;
  trFeatures += `</tr>`;
  trAction += `</tr>`;

  table.innerHTML = trImg + trName + trPrice + trCategory + trRating + trSizes + trColors + trStock + trFeatures + trAction;

  overlay.classList.add('open');
  trapFocus(overlay);
}

function closeCompareModal() {
  document.getElementById('compare-overlay').classList.remove('open');
  restoreFocus();
}

// ======================================
// AUTH SIMULATIONS
// ======================================
function openAuth(mode) {
  const inner = document.getElementById('auth-inner');
  const overlay = document.getElementById('auth-overlay');
  if (!inner || !overlay) return;

  if (mode === 'login') {
    inner.innerHTML = `
      <h2 class="auth-title">WELCOME BACK</h2>
      <p class="auth-sub">Sign in to continue your brutal journey</p>
      <div class="auth-field">
        <label>EMAIL</label>
        <input type="email" id="login-email" value="demo@brute.shop" class="auth-field-input">
      </div>
      <div class="auth-field">
        <label>PASSWORD</label>
        <input type="password" id="login-pass" value="brute123" class="auth-field-input">
      </div>
      <button class="btn-primary" style="width:100%;margin-top:12px" onclick="performLogin()">LOGIN</button>
      <div class="auth-switch">Don't have an account? <a onclick="openAuth('register')">Register</a></div>
    `;
  } else {
    inner.innerHTML = `
      <h2 class="auth-title">JOIN THE VOID</h2>
      <p class="auth-sub">Create your brutalist profile</p>
      <div class="auth-field">
        <label>FULL NAME</label>
        <input type="text" id="reg-name" placeholder="Alex Rivera" class="auth-field-input">
      </div>
      <div class="auth-field">
        <label>EMAIL</label>
        <input type="email" id="reg-email" placeholder="warrior@void.com" class="auth-field-input">
      </div>
      <div class="auth-field">
        <label>PASSWORD</label>
        <input type="password" id="reg-pass" placeholder="••••••••" class="auth-field-input">
      </div>
      <button class="btn-primary" style="width:100%;margin-top:12px" onclick="performRegister()">CREATE ACCOUNT</button>
      <div class="auth-switch">Already have an account? <a onclick="openAuth('login')">Login</a></div>
    `;
  }
  overlay.classList.add('open');
  trapFocus(overlay);
}

function closeAuth() {
  document.getElementById('auth-overlay').classList.remove('open');
  restoreFocus();
}

function performLogin() {
  const email = document.getElementById('login-email').value.trim() || "demo@brute.shop";
  let name = "Alex Rivera";
  
  if (email !== "demo@brute.shop") {
    const prefix = email.split('@')[0];
    name = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  }

  BruteStore.state.currentUser = {
    name: name,
    email: email
  };
  BruteStore.checkAuthState();
  BruteStore.saveState();
  closeAuth();
  showToast("Welcome back, warrior.");
}

function performRegister() {
  const name = document.getElementById('reg-name').value.trim() || "New Brute";
  const email = document.getElementById('reg-email').value.trim() || "new@brute.shop";
  BruteStore.state.currentUser = {
    name: name,
    email: email
  };
  BruteStore.checkAuthState();
  BruteStore.saveState();
  closeAuth();
  showToast("Account created. Welcome to the fold.");
}

function logout() {
  BruteStore.state.currentUser = null;
  BruteStore.checkAuthState();
  BruteStore.saveState();
  showToast("Logged out of the void.");
  if (BruteStore.state.currentPage === 'account') {
    BruteStore.setPage('home');
  }
}

// ======================================
// INTERACTIVE TOASTS & NEWSLETTER
// ======================================

function showToast(message, isAbandonedCart = false) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-msg');
  if (!toast || !msg) return;

  msg.innerHTML = message;
  toast.classList.add('show');
  
  if (!isAbandonedCart) {
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }
}

function showAbandonedCartToast() {
  // Clear any existing active toast
  const toast = document.getElementById('toast');
  if (toast) toast.classList.remove('show');

  setTimeout(() => {
    showToast(`
      Your vault items are waiting. Use code <strong>BRUTAL25</strong> for 25% off!
      <button class="toast-btn" onclick="openCheckout(); document.getElementById('toast').classList.remove('show');">CHECKOUT</button>
    `, true);
  }, 100);
}

function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email').value;
  if (email) {
    showToast("Newsletter secure: You'll be the first to know.");
    document.getElementById('newsletter-email').value = '';
  }
}

// Mobile hamburger toggle menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

function navClick(e, page) {
  e.preventDefault();
  BruteStore.setPage(page);
}

// ======================================
// ACCESSIBILITY ACCORD & KEYBOARD ACCESS
// ======================================
let previousActiveElement = null;

function trapFocus(modal) {
  previousActiveElement = document.activeElement;
  
  const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
  if (focusables.length === 0) return;
  
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  
  first.focus();

  // Remove duplicate event listener
  modal.removeEventListener('keydown', modal.focusLockHandler);
  
  modal.focusLockHandler = function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  };
  
  modal.addEventListener('keydown', modal.focusLockHandler);
}

function restoreFocus() {
  if (previousActiveElement) {
    previousActiveElement.focus();
  }
}

function setupKeyboardTrapping() {
  // Ensure keyboard tags exist on close triggers
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.setAttribute('aria-label', 'Close modal');
  });
}

// ======================================
// INTERSECTION OBSERVER SCROLL ANIMATIONS
// ======================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve to run animation once
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal-up').forEach(el => {
    observer.observe(el);
  });
}

// Make functions globally available
window.showPage = (p) => BruteStore.setPage(p);
window.navClick = navClick;
window.handleSearchInput = handleSearchInput;
window.expandSearch = expandSearch;
window.setFilter = setFilter;
window.updatePriceFilter = updatePriceFilter;
window.setSort = setSort;
window.clearFilters = clearFilters;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCart = addToCart;
window.quickAddToCart = quickAddToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.toggleWishlist = (id, e) => {
  e.stopPropagation();
  const idx = BruteStore.state.wishlist.indexOf(id);
  if (idx > -1) {
    BruteStore.state.wishlist.splice(idx, 1);
    showToast("Removed from wishlist.");
  } else {
    BruteStore.state.wishlist.push(id);
    showToast("Added to wishlist.");
  }
  BruteStore.saveState();
  renderWishlist();
};
window.toggleWishlistFromModal = () => {
  if (!currentProduct) return;
  const idx = BruteStore.state.wishlist.indexOf(currentProduct.id);
  if (idx > -1) {
    BruteStore.state.wishlist.splice(idx, 1);
    showToast("Removed from wishlist.");
  } else {
    BruteStore.state.wishlist.push(currentProduct.id);
    showToast("Added to wishlist.");
  }
  BruteStore.saveState();
  closeProductModal();
  renderWishlist();
};
window.updateCartItemQty = updateCartItemQty;
window.removeFromCart = removeFromCart;
window.openAuth = openAuth;
window.closeAuth = closeAuth;
window.performLogin = performLogin;
window.performRegister = performRegister;
window.logout = logout;
window.filterAndGo = filterAndGo;
window.subscribeNewsletter = subscribeNewsletter;
window.toggleMobileMenu = toggleMobileMenu;
window.setView = setView;
window.loadMoreProducts = loadMoreProducts;
window.switchModalImage = switchModalImage;
window.selectSize = selectSize;
window.selectColor = selectColor;
window.changeQty = changeQty;
window.addCurrentToCart = addCurrentToCart;
window.buyNowCurrent = buyNowCurrent;
window.openSizeGuide = openSizeGuide;
window.closeSizeGuide = closeSizeGuide;
window.zoomModalImage = zoomModalImage;
window.resetZoomModalImage = resetZoomModalImage;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.lightboxPrev = lightboxPrev;
window.lightboxNext = lightboxNext;
window.toggleMiniCart = toggleMiniCart;
window.shareWishlist = shareWishlist;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.applyCheckoutPromo = applyCheckoutPromo;
window.proceedToPayment = proceedToPayment;
window.cancelRazorpay = cancelRazorpay;
window.simulatePaymentProcessing = simulatePaymentProcessing;
window.switchAccountTab = switchAccountTab;
window.openAddressModal = openAddressModal;
window.closeAddressModal = closeAddressModal;
window.saveAddress = saveAddress;
window.deleteAddress = deleteAddress;
window.toggleOrderTracking = toggleOrderTracking;
window.toggleCompare = toggleCompare;
window.clearCompare = clearCompare;
window.openCompareModal = openCompareModal;
window.closeCompareModal = closeCompareModal;