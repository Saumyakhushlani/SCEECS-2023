$(document).ready(function () {
    $('#myModal').modal('show');
});

setTimeout(function () { $('#myModal').modal('hide'); }, 10000);

(function ($) {

    "use strict";


    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(200);
        }
    }


    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 1) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();


    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        //$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
        //e.preventDefault();
        //});
    }


    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });

    }


    //Search Popup
    if ($('#search-popup').length) {

        //Show Popup
        $('.search-box-btn').on('click', function () {
            $('#search-popup').addClass('popup-visible');
        });
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('#search-popup').removeClass('popup-visible');
            }
        });
        //Hide Popup
        $('.close-search,.search-popup .overlay-layer').on('click', function () {
            $('#search-popup').removeClass('popup-visible');
        });
    }


    //Parallax Scene for Icons
    if ($('.parallax-scene-1').length) {
        var scene = $('.parallax-scene-1').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-scene-2').length) {
        var scene = $('.parallax-scene-2').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-scene-3').length) {
        var scene = $('.parallax-scene-3').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-scene-4').length) {
        var scene = $('.parallax-scene-4').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-scene-5').length) {
        var scene = $('.parallax-scene-5').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-scene-6').length) {
        var scene = $('.parallax-scene-6').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if ($('.parallax-scene-7').length) {
        var scene = $('.parallax-scene-7').get(0);
        var parallaxInstance = new Parallax(scene);
    }



    // Main Slider Carousel
    if ($('.slider-carousel').length) {
        var swiper = new Swiper('.slider-carousel', {
            //animateOut: 'slideInDown',
            //animateIn: 'slideIn',
            pagination: {
                el: '.swiper-pagination',
                //type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }


    //Banner Carousel
    if ($('.gallery-thumbs').length) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 0,
            slidesPerView: 3,
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.slider-content', {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }


    // Single Item Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            autoHeight: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }


    // Testimonial Carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            autoHeight: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    // Testimonial Carousel
    if ($('.testimonial-carousel-two').length) {
        $('.testimonial-carousel-two').owlCarousel({
            loop: true,
            items: 1,
            margin: 40,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            autoHeight: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
        });
    }


    // Gallery Carousel
    if ($('.gallery-carousel').length) {
        $('.gallery-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            autoHeight: false,
            navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow-1"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }



    // Speaker Carousel
    if ($('.speaker-carousel').length) {
        $('.speaker-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 700,
            autoplay: 4000,
            autoHeight: false,
            navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow-1"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }



    // Sponsors Carousel
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            smartSpeed: 500,
            autoplay: true,
            navText: ['<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 5
                }
            }
        });
    }


    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }


    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function () {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }



    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }


    //Gallery Filters
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }


    //Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }


    if ($('.ts-image-popup').length) {
        $('.ts-image-popup').magnificPopup({
            type: 'inline',
            closeOnContentClick: false,
            midClick: true,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            zoom: {
                enabled: true,
                duration: 500, // don't foget to change the duration also in CSS
            },
            mainClass: 'mfp-fade',
        });
    }


    //Event Countdown Timer
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function () {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><span class="unit">Days</div></div> ' + '<div class="counter-column"><span class="count">%H</span><span class="unit">Hrs</div></div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="unit">Mins</div></div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="unit">Secs</div></div>'));
            });
        });
    }



    if ($('.paroller').length) {
        $('.paroller').paroller({
            factor: 0.2, // multiplier for scrolling speed and offset, +- values for direction control  
            factorLg: 0.4, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
            type: 'foreground', // background, foreground  
            direction: 'horizontal' // vertical, horizontal  
        });
    }



    //Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }



    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }


    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();
        //sortableMasonry();
    });

})(window.jQuery);


// Premium New Site Redirect Popup Injection
(function() {
    "use strict";

    function initNewSitePopup(newSiteUrl) {
        // Prevent showing if already dismissed in this session
        if (sessionStorage.getItem('new-site-popup-dismissed')) {
            return;
        }

        // 1. Load Lucide Icons CDN
        const lucideScript = document.createElement('script');
        lucideScript.src = 'https://unpkg.com/lucide@latest';
        lucideScript.onload = () => {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        };
        document.head.appendChild(lucideScript);

        // 2. Inject Premium Styles
        const style = document.createElement('style');
        style.textContent = `
            .modern-redirect-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(10, 15, 30, 0.6);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                z-index: 999999;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.4s ease, visibility 0.4s ease;
            }
            .modern-redirect-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            .modern-redirect-popup {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -45%) scale(0.92);
                width: 90%;
                max-width: 480px;
                background: rgba(255, 255, 255, 0.98);
                border: 2px solid #cbd5e1;
                border-radius: 24px;
                padding: 40px 32px 32px 32px;
                box-shadow: none; /* Shadow removed per request */
                z-index: 1000000;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                            transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                            visibility 0.5s ease;
                font-family: 'Inter', 'Outfit', system-ui, -apple-system, sans-serif;
                color: #1e293b;
                text-align: center;
            }
            .modern-redirect-popup.active {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, -50%) scale(1);
            }
            .modern-redirect-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .modern-redirect-icon-container {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 64px;
                height: 64px;
                background: rgba(255, 0, 106, 0.1);
                border-radius: 50%;
                margin-bottom: 20px;
                color: #ff006a;
                animation: springy-bounce 2.5s infinite cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            @keyframes springy-bounce {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-6px) scale(1.05); }
            }
            .modern-redirect-title {
                font-size: 24px;
                font-weight: 800;
                color: #0f172a;
                margin: 0 0 12px 0;
                line-height: 1.25;
                letter-spacing: -0.02em;
            }
            .modern-redirect-desc {
                font-size: 15px;
                line-height: 1.6;
                color: #475569;
                margin: 0 0 28px 0;
            }
            .modern-redirect-buttons {
                display: flex;
                flex-direction: column;
                gap: 12px;
                width: 100%;
            }
            .modern-redirect-btn-primary {
                display: block;
                width: 100%;
                padding: 16px 24px;
                border-radius: 14px;
                font-size: 16px;
                font-weight: 700;
                text-decoration: none !important;
                color: #ffffff !important;
                background: linear-gradient(135deg, #ff006a, #ae1ec7);
                box-shadow: none; /* Shadow removed per request */
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                border: none;
                cursor: pointer;
                box-sizing: border-box;
            }
            .modern-redirect-btn-primary:hover {
                transform: scale(1.04);
            }
            .modern-redirect-timer-text {
                font-size: 13px;
                color: #64748b;
                margin-top: 16px;
                margin-bottom: 0;
                font-weight: 500;
            }
            body.modern-popup-active {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);

        // 3. Inject Markup
        const overlay = document.createElement('div');
        overlay.className = 'modern-redirect-overlay';
        overlay.id = 'modern-redirect-overlay';

        const popup = document.createElement('div');
        popup.className = 'modern-redirect-popup';
        popup.id = 'modern-redirect-popup';
        popup.innerHTML = `
            <div class="modern-redirect-content">
                <div class="modern-redirect-icon-container">
                    <i data-lucide="sparkles" style="width: 32px; height: 32px;"></i>
                </div>
                <h3 class="modern-redirect-title">Our New Site is Ready!</h3>
                <p class="modern-redirect-desc">We've launched a brand new, highly modernized, and upgraded web experience for SCEECS. Check it out now!</p>
                <div class="modern-redirect-buttons">
                    <a href="${newSiteUrl}" id="modern-redirect-btn-primary" class="modern-redirect-btn-primary">Visit New Website</a>
                </div>
                <p id="modern-redirect-timer" class="modern-redirect-timer-text">You will be automatically redirected in 4 seconds...</p>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        // 4. Setup Auto-Redirection Timer with Countdown
        let countdown = 4;
        const timerText = document.getElementById('modern-redirect-timer');
        
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                timerText.textContent = `You will be automatically redirected in ${countdown} seconds...`;
            } else {
                clearInterval(countdownInterval);
                window.location.href = newSiteUrl;
            }
        }, 1000);

        // 5. Setup Action Handlers
        function showPopup() {
            document.body.classList.add('modern-popup-active');
            overlay.classList.add('active');
            popup.classList.add('active');
            // Refresh lucide icons in case script loaded late
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }

        // Trigger popup after a small delay
        setTimeout(showPopup, 1500);

        // Event listeners
        document.getElementById('modern-redirect-btn-primary').addEventListener('click', (e) => {
            e.preventDefault();
            clearInterval(countdownInterval);
            window.location.href = newSiteUrl;
        });
    }

    // Initialize Popup when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initNewSitePopup('https://sceecs-info.ieeenitb.com/');
        });
    } else {
        initNewSitePopup('https://sceecs-info.ieeenitb.com/');
    }
})();
