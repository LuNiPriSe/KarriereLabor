/**
 * Landing Page Gallery JavaScript
 * BigBrainBusiness.de - Modern Hero Gallery with Touch Support
 * Integrated with Casper theme
 */

(function() {
    'use strict';

    // Gallery state
    let currentSlide = 0;
    let galleryInterval;
    let isTouch = false;

    // Gallery elements (keeping for compatibility)
    const heroGallery = document.getElementById('heroGallery');
    let heroSwiperInstance = null;

    // Navigation elements - initialize safely
    let dots = [];
    let prevBtn = null;
    let nextBtn = null;
    let totalSlides = 0;

    // Touch handling variables
    let touchStartX = 0;
    let touchEndX = 0;

    /**
     * Initialize Premium Swiper gallery with enhanced interactions
     */
    function initGallery() {
        try {
            if (typeof Swiper === 'undefined') {
                return null;
            }

            // Initialize navigation elements safely
            dots = Array.from(document.querySelectorAll('.gallery-nav .swiper-pagination-bullet'));
            prevBtn = document.querySelector('.gallery-prev');
            nextBtn = document.querySelector('.gallery-next');
            totalSlides = document.querySelectorAll('.hero-swiper .swiper-slide').length;

        const heroSwiper = new Swiper('.hero-swiper', {
            // Basic settings optimized for smooth performance
            loop: true,
            speed: 400,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            updateOnWindowResize: true,
            watchSlidesProgress: true,

            // Auto-rotation optimized for performance
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true
            },

            // Pagination with enhanced UX
            pagination: {
                el: '.gallery-nav',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '" aria-label="Slide ' + (index + 1) + '"></span>';
                }
            },

            // Optimized touch settings for better performance
            touchRatio: 1,
            touchAngle: 45,
            touchReleaseOnEdges: true,
            touchStartPreventDefault: false,
            resistance: false,
            preventInteractionOnTransition: true,

            // Navigation arrows
            navigation: {
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
            },

            // Keyboard navigation
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },

            // Mouse wheel navigation disabled to allow page scrolling
            mousewheel: {
                enabled: false
            },

            // Accessibility
            a11y: {
                enabled: true,
                prevSlideMessage: 'Vorherige Folie',
                nextSlideMessage: 'Nächste Folie',
                paginationBulletMessage: 'Gehe zu Folie {{index}}'
            },

            // Premium interactions and animations
            on: {
                init: function() {
                    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                        this.autoplay.stop();
                    }
                    // Add premium entrance animation
                    document.querySelectorAll('.slide-content').forEach(el => el.classList.add('slide-enter'));
                },
                slideChange: function() {
                    // Optimized slide transition effects
                    const activeSlide = this.slides[this.activeIndex];
                    if (activeSlide) {
                        requestAnimationFrame(() => {
                            const content = activeSlide.querySelector('.slide-content');
                            if (content) content.classList.add('slide-active');
                        });
                    }
                },
                transitionStart: function() {
                    // Smooth transition start
                    document.querySelectorAll('.slide-content').forEach(el => el.classList.remove('slide-active'));
                },
                touchStart: function() {
                    // Add subtle touch feedback
                    const swiperEl = document.querySelector('.hero-swiper');
                    if (swiperEl) swiperEl.classList.add('touching');
                },
                touchEnd: function() {
                    const swiperEl = document.querySelector('.hero-swiper');
                    if (swiperEl) swiperEl.classList.remove('touching');
                }
            }
        });

        return heroSwiper;

        } catch (error) {
            return null;
        }
    }

    /**
     * Swiper control helpers - direct API access
     */

    /**
     * Setup event listeners - simplified for Swiper
     */
    function setupEventListeners() {
        // Most events now handled by Swiper automatically
        // Keep minimal setup for custom behaviors

        // Window resize handler
        window.addEventListener('resize', function() {
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(function() {
                if (heroSwiperInstance) {
                    heroSwiperInstance.update();
                }
            }, 250);
        });
    }

    /**
     * Touch events now handled by Swiper - much more reliable
     */
    function setupTouchEvents() {
        // Swiper handles all touch events automatically
        // No custom touch handling needed
    }

    /**
     * Setup hover pause/resume
     */
    function setupHoverEvents() {
        if (!isTouch && heroGallery) {
            heroGallery.addEventListener('mouseenter', function() {
                if (heroSwiperInstance?.autoplay) {
                    heroSwiperInstance.autoplay.stop();
                }
            });
            heroGallery.addEventListener('mouseleave', function() {
                if (heroSwiperInstance?.autoplay) {
                    heroSwiperInstance.autoplay.start();
                }
            });
        }
    }

    /**
     * Setup accessibility features
     */
    function setupAccessibility() {
        try {
            // Add ARIA labels only if elements exist
            if (heroGallery) {
                heroGallery.setAttribute('role', 'region');
                heroGallery.setAttribute('aria-label', 'Hero image gallery');
                heroGallery.setAttribute('aria-live', 'polite');
            }

            if (dots.length) {
                dots.forEach((dot, i) => {
                    dot.setAttribute('role', 'button');
                    dot.setAttribute('tabindex', '0');
                    dot.setAttribute('aria-label', `Go to slide ${i + 1}${i === currentSlide ? ' (current)' : ''}`);
                    dot.setAttribute('aria-pressed', i === currentSlide ? 'true' : 'false');
                });
            }

            if (prevBtn) prevBtn.setAttribute('aria-label', 'Previous slide');
            if (nextBtn) nextBtn.setAttribute('aria-label', 'Next slide');

            // Handle Enter/Space key for dots only if dots exist
            if (dots.length) {
                dots.forEach(dot => {
                    dot.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            this.click();
                        }
                    });
                });
            }

        } catch (error) {
            // Silently fail for accessibility setup errors
        }
    }

    /**
     * Respect reduced motion preference
     */
    function checkReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            if (heroSwiperInstance?.autoplay) {
                heroSwiperInstance.autoplay.stop();
            }
        }
    }

    /**
     * Progress bar functionality
     */
    function initProgressBar() {
        try {
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                let ticking = false;

                function updateProgressBar() {
                    try {
                        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                        if (documentHeight > 0) {
                            const scrollProgress = (window.pageYOffset / documentHeight) * 100;
                            progressBar.style.transform = `scaleX(${Math.min(scrollProgress / 100, 1)})`;
                        }
                        ticking = false;
                    } catch (error) {
                        ticking = false;
                    }
                }

                window.addEventListener('scroll', function() {
                    if (!ticking) {
                        requestAnimationFrame(updateProgressBar);
                        ticking = true;
                    }
                });
            }
        } catch (error) {
            // Silently fail for progress bar errors
        }
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        try {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    try {
                        const href = this.getAttribute('href');
                        const target = document.querySelector(href);

                        if (target && href !== '#') {
                            e.preventDefault();

                            const targetOffset = target.getBoundingClientRect().top + window.pageYOffset;
                            window.scrollTo({
                                top: targetOffset - 80,
                                behavior: 'smooth'
                            });
                        }
                    } catch (error) {
                        // Silently fail for smooth scroll errors
                    }
                });
            });
        } catch (error) {
            // Silently fail for smooth scroll initialization
        }
    }

    /**
     * Premium subtle animation helper
     */
    function addSubtleAnimation() {
        // Subtle page-level animation on slide change
        document.body.classList.add('slide-transition');
        setTimeout(() => {
            document.body.classList.remove('slide-transition');
        }, 300);
    }

    /**
     * Optimized Intersection Observer for smooth scroll animations
     */
    function initScrollAnimations() {
        if ('IntersectionObserver' in window) {
            // Simplified observer options for better performance
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '50px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        // Immediate animation without RAF for snappier feel
                        const element = entry.target;
                        if (!element.classList.contains('in-view')) {
                            element.classList.add('in-view');
                            // Unobserve after animation to reduce overhead
                            observer.unobserve(element);
                        }
                    }
                });
            }, observerOptions);

            // Observe scroll-animate elements only
            document.querySelectorAll('.scroll-animate').forEach(function(el) {
                observer.observe(el);
            });
        }
    }

    /**
     * Initialize FAQ functionality - now uses HTML5 details/summary
     */
    function initFAQ() {
        // HTML5 details/summary handles most functionality automatically
        // Just add smooth animations and accessibility improvements

        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('toggle', function() {
                // Smooth scroll to opened item on mobile
                if (this.open && window.innerWidth <= 768) {
                    setTimeout(() => {
                        this.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 300);
                }
            });
        });

        // Enhanced keyboard navigation
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('keydown', function(e) {
                // Allow space bar to toggle (Enter works by default)
                if (e.key === ' ') {
                    e.preventDefault();
                    const details = this.closest('details');
                    if (details) details.open = !details.open;
                }
            });
        });
    }

    /**
     * Initialize Interactive Use Cases
     */
    function initUseCases() {
        const tabs = document.querySelectorAll('.use-case-tab');

        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor behavior

                const targetCase = this.dataset.case;

                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Update active image
                document.querySelectorAll('.use-case-image').forEach(img => img.classList.remove('active'));
                const targetImg = document.querySelector(`.use-case-image[data-case="${targetCase}"]`);
                if (targetImg) targetImg.classList.add('active');

                // Update active content
                document.querySelectorAll('.use-case-content').forEach(content => content.classList.remove('active'));
                const targetContent = document.querySelector(`.use-case-content[data-case="${targetCase}"]`);
                if (targetContent) targetContent.classList.add('active');

                // Update ARIA
                tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
                this.setAttribute('aria-selected', 'true');

                // Scroll to content on mobile for better UX
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        const useCaseDetails = document.querySelector('.use-case-details');
                        if (useCaseDetails) {
                            const offset = 100; // Account for any fixed headers
                            const elementTop = useCaseDetails.getBoundingClientRect().top + window.pageYOffset;
                            window.scrollTo({
                                top: elementTop - offset,
                                behavior: 'smooth'
                            });
                        }
                    }, 300); // Small delay to allow content to update first
                }
            });

            // Handle keyboard navigation
            tab.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }

                // Arrow key navigation
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const tabsArray = Array.from(tabs);
                    const currentIndex = tabsArray.indexOf(this);
                    let nextIndex;

                    if (e.key === 'ArrowDown') {
                        nextIndex = (currentIndex + 1) % tabsArray.length;
                    } else {
                        nextIndex = currentIndex === 0 ? tabsArray.length - 1 : currentIndex - 1;
                    }

                    tabsArray[nextIndex].focus();
                    tabsArray[nextIndex].click();
                }
            });

            // Add ARIA attributes
            tab.setAttribute('role', 'tab');
            tab.setAttribute('tabindex', '0');
        });

        // Add ARIA to containers
        const menu = document.querySelector('.use-case-menu');
        if (menu) menu.setAttribute('role', 'tablist');

        const viz = document.querySelector('.use-case-visualization');
        if (viz) viz.setAttribute('role', 'tabpanel');

        const details = document.querySelector('.use-case-details');
        if (details) details.setAttribute('role', 'tabpanel');

        // Set initial active state ARIA
        const activeTab = document.querySelector('.use-case-tab.active');
        if (activeTab) activeTab.setAttribute('aria-selected', 'true');

        document.querySelectorAll('.use-case-tab:not(.active)').forEach(tab => {
            tab.setAttribute('aria-selected', 'false');
        });
    }

    /**
     * Main initialization
     */
    function init() {
        // Check if we're on a page with the landing gallery
        if (heroGallery) {
            heroSwiperInstance = initGallery();
        }

        // Initialize other features
        initProgressBar();
        initSmoothScroll();
        initScrollAnimations();

        // Add progress bar HTML if it doesn't exist
        if (!document.getElementById('progressBar')) {
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.id = 'progressBar';
            document.body.insertBefore(progressBar, document.body.firstChild);
            initProgressBar();
        }

        // Initialize FAQ
        initFAQ();

        // Initialize Use Cases
        initUseCases();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Handle page visibility changes (pause when tab is not active)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (heroSwiperInstance?.autoplay) {
                heroSwiperInstance.autoplay.stop();
            }
        } else if (heroGallery && heroSwiperInstance?.autoplay) {
            heroSwiperInstance.autoplay.start();
        }
    });

    /**
     * Cleanup function to remove event listeners and prevent memory leaks
     */
    function cleanup() {
        try {
            if (heroSwiperInstance) {
                heroSwiperInstance.destroy(true, true);
                heroSwiperInstance = null;
            }

        } catch (error) {
            // Silently fail for cleanup errors
        }
    }

})();

/**
 * Fix Mobile Use Case Tabs Visibility
 */
(function() {
    'use strict';

    function fixUseCaseTabsVisibility() {
        // Only apply on mobile
        if (window.innerWidth > 768) return;

        const menu = document.querySelector('.use-case-menu');
        if (!menu) return;

        // Ensure menu starts at position 0 to show first tabs
        menu.scrollLeft = 0;
    }

    // Initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixUseCaseTabsVisibility);
    } else {
        fixUseCaseTabsVisibility();
    }

})();

/**
 * Metric Accordion Tooltip Functionality
 * Click-to-toggle accordion on all devices
 */
(function() {
    'use strict';

    function initMetricTooltips() {
        const metricWrappers = document.querySelectorAll('.metric-wrapper');
        if (!metricWrappers.length) return;

        // Click metric bubble to toggle accordion
        metricWrappers.forEach(wrapper => {
            const bubble = wrapper.querySelector('.metric-bubble');
            if (!bubble) return;

            bubble.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                // Close other tooltips (only one open at a time)
                metricWrappers.forEach(w => {
                    if (w !== wrapper) w.classList.remove('active');
                });

                // Toggle this tooltip
                wrapper.classList.toggle('active');
            });
        });

        // Close tooltips when clicking outside
        document.addEventListener('click', function(e) {
            const clickedInside = e.target.closest('.metric-wrapper');
            if (!clickedInside) {
                metricWrappers.forEach(w => w.classList.remove('active'));
            }
        });

        // Close tooltips when switching use cases
        const useCaseTabs = document.querySelectorAll('.use-case-tab');
        useCaseTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                metricWrappers.forEach(w => w.classList.remove('active'));
            });
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMetricTooltips);
    } else {
        initMetricTooltips();
    }

})();

/**
 * X-Ray Toggle Functionality
 * Click to expand/collapse technical details section
 */
(function() {
    'use strict';

    function initXRayToggle() {
        const xrayWrapper = document.querySelector('.xray-wrapper');
        if (!xrayWrapper) return;

        const xrayToggle = xrayWrapper.querySelector('.xray-toggle');
        if (!xrayToggle) return;

        // Click toggle to expand/collapse
        xrayToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            xrayWrapper.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            const clickedInside = e.target.closest('.xray-wrapper');
            if (!clickedInside) {
                xrayWrapper.classList.remove('active');
            }
        });

        // Accessibility: keyboard support
        xrayToggle.setAttribute('role', 'button');
        xrayToggle.setAttribute('tabindex', '0');
        xrayToggle.setAttribute('aria-expanded', 'false');

        xrayToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                xrayToggle.click();
                const isExpanded = xrayWrapper.classList.contains('active');
                xrayToggle.setAttribute('aria-expanded', isExpanded.toString());
            }
        });

        // Update aria-expanded on click
        xrayToggle.addEventListener('click', function() {
            const isExpanded = xrayWrapper.classList.contains('active');
            xrayToggle.setAttribute('aria-expanded', isExpanded.toString());
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initXRayToggle);
    } else {
        initXRayToggle();
    }

})();