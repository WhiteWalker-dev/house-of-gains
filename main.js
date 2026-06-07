// House of Gains - Main Shared Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle & Premium Drawer
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu-btn');
    
    // Dynamically create backdrop overlay if not present
    let overlay = document.getElementById('mobile-menu-overlay');
    if (!overlay && mobileMenu) {
        overlay = document.createElement('div');
        overlay.id = 'mobile-menu-overlay';
        overlay.className = 'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300';
        document.body.appendChild(overlay);
    }

    function openMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('translate-x-full', 'hidden');
            mobileMenu.classList.add('translate-x-0');
        }
        if (overlay) {
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-100');
        }
        if (menuBtn) {
            const icon = menuBtn.querySelector('span');
            if (icon) icon.textContent = 'close';
        }
        document.body.classList.add('overflow-hidden');
    }

    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
        }
        if (overlay) {
            overlay.classList.remove('opacity-100');
            overlay.classList.add('opacity-0', 'pointer-events-none');
        }
        if (menuBtn) {
            const icon = menuBtn.querySelector('span');
            if (icon) icon.textContent = 'menu';
        }
        document.body.classList.remove('overflow-hidden');
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileMenu && mobileMenu.classList.contains('translate-x-0');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }

    // 2. Active Page Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activeNavs = {
        'index.html': ['nav-home', 'mobile-nav-home'],
        'story.html': ['nav-story', 'mobile-nav-story'],
        'programs.html': ['nav-programs', 'mobile-nav-programs'],
        'trainers.html': ['nav-trainers', 'mobile-nav-trainers'],
        'membership.html': ['nav-membership', 'mobile-nav-membership'],
        'gallery.html': ['nav-gallery', 'mobile-nav-gallery'],
        'contact.html': ['nav-contact', 'mobile-nav-contact'],
        'app.html': ['nav-app', 'mobile-nav-app']
    };

    const activeIds = activeNavs[currentPath];
    if (activeIds) {
        activeIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('text-on-surface');
                el.classList.add('text-secondary', 'border-b-2', 'border-secondary', 'pb-1');
            }
        });
    }

    // 3. Scroll Header Effect
    const nav = document.getElementById('top-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'bg-surface/95', 'shadow-xl');
                nav.classList.remove('py-4', 'bg-surface/80');
            } else {
                nav.classList.remove('py-2', 'bg-surface/95', 'shadow-xl');
                nav.classList.add('py-4', 'bg-surface/80');
            }
        });
    }

    // 4. Modal System (Join Now / Book Trial)
    createModals();
    setupModalTriggers();

    // 5. Scroll Animations
    setupScrollAnimations();
});

// Setup Scroll Intersection Observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('animate-bounce-once')) {
                    entry.target.classList.add('animate-bounce');
                }
            }
        });
    }, observerOptions);

    // Apply to elements
    document.querySelectorAll('.scroll-reveal, .glass-card, .animate-reveal').forEach(el => {
        if (!el.classList.contains('scroll-reveal')) {
            el.classList.add('scroll-reveal');
        }
        observer.observe(el);
    });
}

// Dynamically create Modals in DOM
function createModals() {
    if (document.getElementById('join-modal')) return;

    const modalHTML = `
    <!-- Join Modal -->
    <div id="join-modal" class="fixed inset-0 z-[100] flex items-center justify-center hidden bg-black/90 backdrop-blur-md px-gutter">
        <div class="glass-card max-w-md w-full p-xl relative border border-outline-variant/30 space-y-md">
            <button class="absolute top-4 right-4 text-on-surface-variant hover:text-secondary close-modal" data-modal="join-modal">
                <span class="material-symbols-outlined text-2xl">close</span>
            </button>
            <div class="text-center space-y-xs">
                <h3 class="font-headline-md text-headline-md uppercase text-on-surface">Join the <span class="text-neon-red">Collective</span></h3>
                <p class="font-body-md text-on-surface-variant text-sm">Enter your details to register for elite membership.</p>
            </div>
            <form id="join-form" class="space-y-sm">
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="join-name">Full Name</label>
                    <input type="text" id="join-name" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="join-email">Email Address</label>
                    <input type="email" id="join-email" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="join-tier">Select Tier</label>
                    <select id="join-tier" class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                        <option value="essential">Essential - $79/mo</option>
                        <option value="vanguard" selected>Vanguard - $149/mo</option>
                        <option value="elite">The Elite - $299/mo</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-neon-red text-white py-md font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    Submit Application
                </button>
            </form>
        </div>
    </div>

    <!-- Trial Modal -->
    <div id="trial-modal" class="fixed inset-0 z-[100] flex items-center justify-center hidden bg-black/90 backdrop-blur-md px-gutter">
        <div class="glass-card max-w-md w-full p-xl relative border border-outline-variant/30 space-y-md">
            <button class="absolute top-4 right-4 text-on-surface-variant hover:text-secondary close-modal" data-modal="trial-modal">
                <span class="material-symbols-outlined text-2xl">close</span>
            </button>
            <div class="text-center space-y-xs">
                <h3 class="font-headline-md text-headline-md uppercase text-on-surface">Book a <span class="text-neon-red">Free Trial</span></h3>
                <p class="font-body-md text-on-surface-variant text-sm">Experience elite training first-hand.</p>
            </div>
            <form id="trial-form" class="space-y-sm">
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-name">Full Name</label>
                    <input type="text" id="trial-name" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-email">Email Address</label>
                    <input type="email" id="trial-email" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="grid grid-cols-2 gap-sm">
                    <div class="space-y-xs">
                        <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-date">Date</label>
                        <input type="date" id="trial-date" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                    </div>
                    <div class="space-y-xs">
                        <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-time">Time</label>
                        <input type="time" id="trial-time" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                    </div>
                </div>
                <button type="submit" class="w-full bg-neon-red text-white py-md font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    Schedule Session
                </button>
            </form>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Form Submissions
    document.getElementById('join-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('join-name').value;
        const tier = document.getElementById('join-tier').value;
        alert(`Welcome, ${name}! Your application for the ${tier.toUpperCase()} tier has been submitted successfully. We will reach out to you within 24 hours.`);
        document.getElementById('join-modal').classList.add('hidden');
        e.target.reset();
    });

    document.getElementById('trial-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('trial-name').value;
        const date = document.getElementById('trial-date').value;
        const time = document.getElementById('trial-time').value;
        alert(`Success! ${name}, your free trial session has been booked for ${date} at ${time}. Check your email for confirmation.`);
        document.getElementById('trial-modal').classList.add('hidden');
        e.target.reset();
    });
}

function setupModalTriggers() {
    // Open Join Modal for buttons with join class or specific texts
    document.querySelectorAll('.join-btn, button').forEach(btn => {
        const isJoinBtn = btn.classList.contains('join-btn');
        const txt = btn.textContent.trim().toUpperCase();
        
        if (isJoinBtn || txt === 'JOIN NOW' || txt === 'SELECT TIER') {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Determine tier if click was a tier button
                const cardElement = btn.closest('.glass-card');
                if (cardElement) {
                    const tierNameEl = cardElement.querySelector('span');
                    if (tierNameEl) {
                        const tierText = tierNameEl.textContent.trim().toLowerCase();
                        const selectEl = document.getElementById('join-tier');
                        if (selectEl) {
                            if (tierText.includes('essential')) selectEl.value = 'essential';
                            else if (tierText.includes('vanguard')) selectEl.value = 'vanguard';
                            else if (tierText.includes('elite')) selectEl.value = 'elite';
                        }
                    }
                }
                const modal = document.getElementById('join-modal');
                if (modal) modal.classList.remove('hidden');
            });
        }
        
        if (txt === 'BOOK FREE TRIAL' || txt === 'BOOK A TOUR' || txt === 'BOOK CONSULTATION') {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = document.getElementById('trial-modal');
                if (modal) modal.classList.remove('hidden');
            });
        }
    });

    // Close Modal
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).classList.add('hidden');
        });
    });

    // Close on background click
    window.addEventListener('click', (e) => {
        ['join-modal', 'trial-modal'].forEach(id => {
            const m = document.getElementById(id);
            if (e.target === m) {
                m.classList.add('hidden');
            }
        });
    });
}
