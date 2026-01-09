// InkHeart - Main Interactions

// Initialize Lucide Icons
lucide.createIcons();

// Simple Interaction Handlers
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-pill input');
    const authBtn = document.getElementById('profile-btn');
    const cartBtn = document.getElementById('cart-btn');
    const booksGrid = document.querySelector('.books-grid');

    // --- Dynamic    // Render books
    const renderBooks = (booksToRender) => {
        if (!booksGrid) return;
        booksGrid.innerHTML = '';

        booksToRender.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.setAttribute('data-category', book.category);

            // Labels logic
            let labelHtml = '';
            if (book.isNew) {
                labelHtml = '<div class="book-label label-nuevo">Nuevo</div>';
            } else if (book.onSale) {
                labelHtml = '<div class="book-label label-oferta">Oferta</div>';
            }

            // Create rating stars HTML
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(book.rating)) {
                    starsHtml += '<i data-lucide="star" fill="currentColor"></i>';
                } else {
                    starsHtml += '<i data-lucide="star" style="opacity: 0.2;"></i>';
                }
            }

            card.innerHTML = `
                ${labelHtml}
                <div class="book-image-container">
                    ${book.cover ? `<img src="${book.cover}" alt="${book.title}" class="book-cover">` : '<i data-lucide="image" size="64"></i>'}
                </div>
                <h3>${book.title}</h3>
                <p>Design Leadership: How Top Design Leaders Build and Grow Successful...</p>
                <div class="book-footer">
                    <div class="book-rating">
                        ${starsHtml}
                        <span class="price-text">$ ${book.price.toFixed(2)}</span>
                    </div>
                </div>
                <button class="buy-btn" data-id="${book.id}">
                    Comprar
                    <i data-lucide="shopping-cart"></i>
                </button>
            `;
            booksGrid.appendChild(card);
        });

        // Re-initialize icons for newly created elements
        lucide.createIcons();

        // Re-attach buy button listeners
        attachBuyListeners();
    };

    // Determine which page we are on and filter data
    const path = window.location.pathname;
    const isHome = path.includes('index.html') || path.endsWith('/');
    const isShop = path.includes('comprar.html');

    if (window.bookDatabase) {
        if (isHome) {
            const featured = window.bookDatabase.filter(b => b.featured);
            renderBooks(featured);
        } else if (isShop) {
            renderBooks(window.bookDatabase);
        }
    }

    // --- UI Interactions ---

    // Search input focus effect
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.style.borderColor = 'var(--accent-gold)';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.style.borderColor = 'var(--glass-border)';
        });

        // Dynamic search
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = window.bookDatabase.filter(b =>
                b.title.toLowerCase().includes(term) ||
                b.author.toLowerCase().includes(term)
            );
            renderBooks(filtered);
        });
    }

    // Navigation active state highlight
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (path.endsWith(href) || (isHome && href === 'index.html'))) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });

    // Shop Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.textContent.toLowerCase();
                const filtered = category === 'todos'
                    ? window.bookDatabase
                    : window.bookDatabase.filter(b => b.category === category);

                renderBooks(filtered);
            });
        });
    }

    // Buy Button Handler function
    function attachBuyListeners() {
        const buyBtns = document.querySelectorAll('.buy-btn');
        buyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const bookId = btn.getAttribute('data-id');
                const book = window.bookDatabase.find(b => b.id == bookId);
                alert(`¡Has añadido "${book.title}" a tu carrito!`);
            });
        });
    }

    // Action buttons
    if (authBtn) authBtn.addEventListener('click', () => alert('Funcionalidad de perfil próximamente.'));
    if (cartBtn) cartBtn.addEventListener('click', () => alert('Tu carrito está vacío.'));
});

console.log('InkHeart JS loaded successfully.');
