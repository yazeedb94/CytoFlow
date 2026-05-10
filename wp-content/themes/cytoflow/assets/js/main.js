/**
 * CytoFlow Main Script
 * Handles navigation, translations, animations, and interactions for the main site.
 */

document.addEventListener('DOMContentLoaded', () => {
    /* ============================================================
       1. TRANSLATIONS (AR / EN)
       ============================================================ */
    const translations = {
        ar: {
            "nav.services": "الخدمات",
            "nav.problems": "تحدياتك",
            "nav.howItWorks": "كيف يعمل",
            "nav.benefits": "المزايا",
            "nav.testimonials": "آراء العملاء",
            "nav.contact": "تواصل معنا",
            "nav.projects": "المشاريع",
            
            "hero.badge": "وكالة تقنية متكاملة",
            "hero.title1": "أتمت أعمالك. ابنِ تواجدك.",
            "hero.title2": "وفّر الوقت. ضاعف أرباحك.",
            "hero.subtitle": "نبني أنظمة ذكية، مواقع احترافية، وتطبيقات مبتكرة لتدير وتوسع أعمالك على مدار الساعة.",
            "hero.stat1.label": "تقليل العمل اليدوي",
            "hero.stat2.label": "مشاريع منجزة",
            "hero.stat3.label": "دعم مستمر",
            "hero.cta1": "تحدث معنا اليوم",
            "hero.cta2": "اكتشف خدماتنا",
            "hero.card1": "روبوت الدردشة نشط",
            "hero.card2": "تم إطلاق الموقع",
            "hero.card3": "زيادة في المبيعات",
            "hero.scroll": "انتقل للاستكشاف",

            "marquee.label": "تقنيات نستخدمها",

            "services.tag": "ما نقدمه",
            "services.title1": "حلول تقنية شاملة",
            "services.title2": "لكل احتياجات أعمالك",
            "services.subtitle": "من أتمتة العمليات المعقدة إلى بناء واجهات رقمية مذهلة.",
            
            "tab.automation": "الأتمتة الذكية",
            "tab.development": "تطوير المواقع والتطبيقات",

            // Automation Services
            "s1.title": "أتمتة دعم العملاء",
            "s2.title": "أتمتة البيانات والتقارير",
            "s3.title": "أتمتة التسويق",
            
            // Development Services
            "w1.title": "مواقع الشركات والمؤسسات",
            "w1.desc": "مواقع سريعة ومحسنة لمحركات البحث (SEO) تعكس هوية علامتك التجارية وتجذب العملاء.",
            "w1.f1": "تصميم متجاوب وسريع",
            "w1.f2": "لوحة تحكم سهلة",
            "w1.f3": "تحسين SEO",
            "w2.title": "المتاجر الإلكترونية",
            "w2.desc": "منصات بيع متكاملة مع بوابات الدفع وإدارة المخزون لزيادة مبيعاتك أونلاين.",
            "w2.f1": "ربط بوابات الدفع",
            "w2.f2": "إدارة المنتجات والمخزون",
            "w2.f3": "تجربة مستخدم سلسة",
            "w3.title": "تطبيقات الجوال",
            "w3.desc": "تطبيقات iOS و Android أصلية أو هجينة لتقديم خدماتك مباشرة في أيدي عملائك.",
            "w3.f1": "Android & iOS",
            "w3.f2": "أداء عالي وسريع",
            "w3.f3": "تصميم واجهات عصري",

            "projects.tag": "أعمالنا",
            "projects.title1": "معرض",
            "projects.title2": "المشاريع",
            "projects.btn": "عرض كل المشاريع",
            
            "faq.tag": "أسئلة شائعة",
            "faq.title1": "كل ما تود",
            "faq.title2": "معرفته",

            "form.btn": "إرسال الرسالة",
            "form.success.msg": "تم إرسال الرسالة! سنتواصل معك قريباً.",
            "form.error.msg": "حدث خطأ. حاول مجدداً أو تواصل عبر واتساب."
        },
        en: {
            "nav.services": "Services",
            "nav.problems": "Challenges",
            "nav.howItWorks": "How it Works",
            "nav.benefits": "Benefits",
            "nav.testimonials": "Testimonials",
            "nav.contact": "Contact Us",
            "nav.projects": "Projects",
            
            "hero.badge": "Full-Service Tech Agency",
            "hero.title1": "Automate. Build.",
            "hero.title2": "Save Time. Scale Fast.",
            "hero.subtitle": "We build smart systems, professional websites, and innovative apps to manage and grow your business 24/7.",
            "hero.stat1.label": "Less Manual Work",
            "hero.stat2.label": "Projects Delivered",
            "hero.stat3.label": "Support 24/7",
            "hero.cta1": "Talk to Us Today",
            "hero.cta2": "Discover Services",
            "hero.card1": "Chatbot Active",
            "hero.card2": "Website Launched",
            "hero.card3": "Sales Increased",
            "hero.scroll": "Scroll to Explore",

            "marquee.label": "Technologies We Use",

            "services.tag": "What We Offer",
            "services.title1": "Comprehensive Tech Solutions",
            "services.title2": "For All Your Business Needs",
            "services.subtitle": "From automating complex operations to building stunning digital interfaces.",
            
            "tab.automation": "Smart Automation",
            "tab.development": "Web & App Development",

            "s1.title": "Customer Support Automation",
            "s2.title": "Data & Reports Automation",
            "s3.title": "Marketing Automation",

            "w1.title": "Corporate Websites",
            "w1.desc": "Fast, SEO-optimized websites that reflect your brand identity and attract customers.",
            "w1.f1": "Responsive & Fast Design",
            "w1.f2": "Easy Dashboard",
            "w1.f3": "SEO Optimization",
            "w2.title": "E-Commerce Stores",
            "w2.desc": "Integrated selling platforms with payment gateways and inventory management to boost your online sales.",
            "w2.f1": "Payment Gateway Integration",
            "w2.f2": "Inventory Management",
            "w2.f3": "Seamless UX",
            "w3.title": "Mobile Apps",
            "w3.desc": "Native or hybrid iOS and Android apps to deliver your services directly to your customers' hands.",
            "w3.f1": "Android & iOS",
            "w3.f2": "High Performance",
            "w3.f3": "Modern UI Design",

            "projects.tag": "Our Work",
            "projects.title1": "Projects",
            "projects.title2": "Portfolio",
            "projects.btn": "View All Projects",

            "faq.tag": "FAQ",
            "faq.title1": "Everything You Need",
            "faq.title2": "To Know",

            "form.btn": "Send Message",
            "form.success.msg": "Message sent! We will contact you soon.",
            "form.error.msg": "An error occurred. Please try again or contact via WhatsApp."
        }
    };

    /* ============================================================
       2. LANGUAGE TOGGLE LOGIC
       ============================================================ */
    const langBtns = document.querySelectorAll('.lang-btn');
    const htmlTag = document.documentElement;
    let currentLang = localStorage.getItem('cytoflow_lang') || 'ar';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('cytoflow_lang', lang);
        
        // Update HTML dir & lang attributes
        htmlTag.setAttribute('lang', lang);
        htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update active button
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Translate elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    // Initialize language
    setLanguage(currentLang);

    // Event listeners for language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });


    /* ============================================================
       3. NAVBAR SCROLL & MOBILE MENU
       ============================================================ */
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (backToTop) backToTop.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            if (backToTop) backToTop.classList.remove('visible');
        }
    });

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && hamburger.classList.contains('open')) {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            }
        });
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    /* ============================================================
       4. SCROLL REVEAL ANIMATIONS
       ============================================================ */
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));


    /* ============================================================
       5. COUNTER ANIMATION
       ============================================================ */
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
            countersStarted = true;
            statNumbers.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const stepTime = Math.abs(Math.floor(duration / target));
                let current = 0;
                
                const timer = setInterval(() => {
                    current += Math.ceil(target / 50);
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = current;
                }, stepTime);
            });
        }
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }


    /* ============================================================
       6. SERVICES TABS
       ============================================================ */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked
            btn.classList.add('active');
            const target = btn.dataset.target;
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });


    /* ============================================================
       7. FAQ ACCORDION
       ============================================================ */
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const isOpen = item.classList.contains('open');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('open');
            });
            
            // Open clicked if it was closed
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });


    /* ============================================================
       8. HERO CANVAS ANIMATION (Particles)
       ============================================================ */
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.color = Math.random() > 0.5 ? 'rgba(0, 212, 255, 0.3)' : 'rgba(167, 139, 250, 0.3)';
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > width || this.x < 0) this.speedX *= -1;
                if (this.y > height || this.y < 0) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(window.innerWidth / 10, 100);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                // Draw connections
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 - distance/1200})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    /* ============================================================
       9. CONTACT FORM SUBMISSION (Web3Forms AJAX)
       ============================================================ */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const success = document.getElementById('formSuccess');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
            btn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    contactForm.reset();
                    success.classList.add('show');
                    
                    setTimeout(() => {
                        success.classList.remove('show');
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                btn.innerHTML = originalText;
                btn.disabled = false;
                alert('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى أو التواصل معنا عبر واتساب.');
            }
        });
    }

});
