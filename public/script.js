/**
 * Modern Portfolio - JavaScript
 * Handles animations, interactions, and smooth scroll behavior
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio loaded successfully!');

    // Initialize all features
    initNavigation();
    initScrollAnimations();
    initInteractions();
});

/**
 * Navigation: Handle active link highlighting
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Highlight current page
        if ((href === '/' && currentPath === '/') ||
            (href !== '/' && currentPath.includes(href))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Scroll Animations: Trigger animations when elements enter viewport
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add animation with staggered delays
                const delay = index * 0.1;
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                
                // Optional: Unobserve to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.fade-in-section, .fade-in-up, .skill-card, .service-card, .project-card, .contact-card, .interest-item'
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Interactions: Handle hover effects and smooth interactions
 */
function initInteractions() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add button hover feedback
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const firstSection = document.querySelector('.section');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Hide scroll indicator on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }, { passive: true });
    }
}

/**
 * Utility: Add performance optimization for animations
 */
function optimizeAnimations() {
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--transition-base', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }

    // Listen for changes
    prefersReducedMotion.addEventListener('change', () => {
        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--transition-base', '0s');
            document.documentElement.style.setProperty('--transition-slow', '0s');
        } else {
            document.documentElement.style.setProperty('--transition-base', '0.3s ease');
            document.documentElement.style.setProperty('--transition-slow', '0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)');
        }
    });
}

// Initialize on load
optimizeAnimations();
