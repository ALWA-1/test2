// ==========================================
// DATA — قائمة الطعام الكاملة
// ==========================================
const menuItems = [
    // ---- رئيسي ----
    {
        name: "شرائح لحم فيليه",
        price: "9.500 ر.ع",
        desc: "شريحة لحم فيليه مشوية على الفحم، مع صلصة الفطر الكريمية وهريس البطاطا.",
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=200&fit=crop",
        cat: "main",
        badge: "popular",
        badgeText: "الأكثر طلباً",
        cal: "520 كالوري",
        time: "25 دقيقة",
        stars: 5,
        ingredients: ["لحم فيليه", "فطر", "كريم", "ثوم", "بطاطا", "زبدة", "إكليل الجبل", "ملح أسود"]
    },
    {
        name: "دجاج مشوي بالأعشاب",
        price: "5.500 ر.ع",
        desc: "صدر دجاج مشوي متبل بالأعشاب الطازجة والليمون، يُقدم مع خضار موسمية.",
        img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=200&fit=crop",
        cat: "main",
        badge: null,
        cal: "380 كالوري",
        time: "20 دقيقة",
        stars: 4,
        ingredients: ["صدر دجاج", "ليمون", "زعتر", "روزماري", "زيت زيتون", "ثوم", "خضار موسمية"]
    },
    {
        name: "سمك القاروص المشوي",
        price: "7.500 ر.ع",
        desc: "سمك طازج مشوي بزيت الزيتون وعصير الليمون مع الثوم والشبت.",
        img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=200&fit=crop",
        cat: "main",
        badge: "new",
        badgeText: "جديد",
        cal: "310 كالوري",
        time: "22 دقيقة",
        stars: 5,
        ingredients: ["سمك قاروص", "ليمون", "شبت", "ثوم", "زيت زيتون", "ملح وفلفل", "بقدونس"]
    },
    // ---- وجبات سريعة ----
    {
        name: "برجر اللحم الكلاسيكي",
        price: "3.800 ر.ع",
        desc: "برجر لحم طازج مطبوخ بعناية مع الجبن الشيدر والخضار المقرمشة.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=200&fit=crop",
        cat: "fast",
        badge: "popular",
        badgeText: "الأكثر طلباً",
        cal: "640 كالوري",
        time: "12 دقيقة",
        stars: 5,
        ingredients: ["لحم بقري 180غ", "جبن شيدر", "خس", "طماطم", "خيار", "صلصة خاصة", "خبز بريوش"]
    },
    {
        name: "بيتزا المارغريتا",
        price: "5.000 ر.ع",
        desc: "بيتزا إيطالية أصيلة بالطماطم الطازجة والموزاريلا والريحان.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=200&fit=crop",
        cat: "fast",
        badge: null,
        cal: "580 كالوري",
        time: "18 دقيقة",
        stars: 4,
        ingredients: ["عجينة إيطالية", "صلصة طماطم", "موزاريلا طازجة", "ريحان", "زيت زيتون", "ملح البحر"]
    },
    {
        name: "معكرونة كريمة الدجاج",
        price: "4.200 ر.ع",
        desc: "باستا بالكريم والدجاج المدخن مع الفطر وجبن البارميزان المبشور.",
        img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=200&fit=crop",
        cat: "fast",
        badge: null,
        cal: "490 كالوري",
        time: "15 دقيقة",
        stars: 4,
        ingredients: ["باستا فيتوتشيني", "دجاج مدخن", "فطر", "كريم", "بارميزان", "ثوم", "بقدونس"]
    },
    {
        name: "ساندويتش الدجاج المقرمش",
        price: "2.800 ر.ع",
        desc: "دجاج مقلي مقرمش في خبز بريوش طري مع صلصة الثوم والخس.",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=200&fit=crop",
        cat: "fast",
        badge: "hot",
        badgeText: "حار",
        cal: "420 كالوري",
        time: "10 دقيقة",
        stars: 4,
        ingredients: ["دجاج مقلي", "خبز بريوش", "صلصة ثوم", "خس روماني", "مخلل", "طماطم"]
    },
    {
        name: "النقانق المشوية",
        price: "3.500 ر.ع",
        desc: "نقانق مشوية على الفحم بنكهة مدخنة رائعة، مع البطاطس المقلية وصلصة الخردل.",
        img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=200&fit=crop",
        cat: "fast",
        badge: null,
        cal: "460 كالوري",
        time: "15 دقيقة",
        stars: 3,
        ingredients: ["نقانق لحم", "بطاطس مقلية", "خردل ديجون", "كاتشب", "بصل مكرمل", "خبز هوت دوج"]
    },
    // ---- مشروبات ----
    {
        name: "عصير المانجو الطازج",
        price: "1.500 ر.ع",
        desc: "مانجو طازجة معصورة، كثيفة القوام مع لمسة من عصير الليمون والنعناع.",
        img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=200&fit=crop",
        cat: "drinks",
        badge: "new",
        badgeText: "جديد",
        cal: "160 كالوري",
        time: "5 دقائق",
        stars: 5,
        ingredients: ["مانجو طازجة", "ليمون", "نعناع", "ماء بارد", "سكر طبيعي"]
    },
    {
        name: "قهوة الإسبريسو",
        price: "1.200 ر.ع",
        desc: "قهوة عربية مزدوجة بكثافة إيطالية، معدّة بحبوب مختارة.",
        img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=200&fit=crop",
        cat: "drinks",
        badge: null,
        cal: "12 كالوري",
        time: "3 دقائق",
        stars: 5,
        ingredients: ["حبوب أرابيكا", "ماء مفلتر", "كريمة خفيفة (اختياري)"]
    },
    {
        name: "موهيتو بلا كحول",
        price: "2.000 ر.ع",
        desc: "مشروب منعش من الليمون والنعناع والصودا مع قليل من السكر البني.",
        img: "https://images.unsplash.com/photo-1587386428578-85d303100dd5?w=400&h=200&fit=crop",
        cat: "drinks",
        badge: "popular",
        badgeText: "الأكثر طلباً",
        cal: "90 كالوري",
        time: "5 دقائق",
        stars: 4,
        ingredients: ["ليمون طازج", "نعناع طازج", "ماء صودا", "سكر بني", "ثلج مجروش", "شريحة ليمون"]
    },
    // ---- حلويات ----
    {
        name: "تشيز كيك التوت",
        price: "2.500 ر.ع",
        desc: "كيكة الجبن الكريمية مع صلصة التوت الطازج والقاعدة المقرمشة.",
        img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=200&fit=crop",
        cat: "dessert",
        badge: null,
        cal: "420 كالوري",
        time: "فوري",
        stars: 5,
        ingredients: ["جبن كريم", "توت طازج", "قاعدة بسكويت", "سكر", "كريم", "فانيلا", "جيلاتين"]
    },
    {
        name: "كنافة بالقشطة",
        price: "2.200 ر.ع",
        desc: "كنافة عربية أصيلة بالعجينة المقرمشة والقشطة الطازجة وقطر السكر.",
        img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&h=200&fit=crop",
        cat: "dessert",
        badge: "popular",
        badgeText: "الأكثر طلباً",
        cal: "370 كالوري",
        time: "فوري",
        stars: 5,
        ingredients: ["عجينة كنافة", "قشطة طازجة", "قطر سكر", "ماء زهر", "سمن عربي", "فستق حلبي"]
    },
    {
        name: "بروني الشوكولاتة",
        price: "1.800 ر.ع",
        desc: "مكعب بروني دافئ بالشوكولاتة الداكنة مع قشدة الفانيلا وصلصة الكراميل.",
        img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=200&fit=crop",
        cat: "dessert",
        badge: "hot",
        badgeText: "رائج",
        cal: "340 كالوري",
        time: "فوري",
        stars: 4,
        ingredients: ["شوكولاتة داكنة 70%", "زبدة", "بيض", "سكر بني", "دقيق", "فانيلا", "كراميل", "قشدة"]
    }
];

// ==========================================
// BACKGROUND CANVAS ANIMATION
// ==========================================
function initBackground() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const particles = [];
    const GOLD = 'rgba(201, 168, 76,';

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = Math.random() * 1.5 + 0.3;
            this.speedY = -(Math.random() * 0.35 + 0.1);
            this.speedX = (Math.random() - 0.5) * 0.15;
            this.alpha = 0;
            this.maxAlpha = Math.random() * 0.3 + 0.05;
            this.life = 0;
            this.maxLife = Math.random() * 400 + 200;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.life++;
            // fade in / fade out
            if (this.life < 60) {
                this.alpha = (this.life / 60) * this.maxAlpha;
            } else if (this.life > this.maxLife - 60) {
                this.alpha = ((this.maxLife - this.life) / 60) * this.maxAlpha;
            }
            if (this.life >= this.maxLife) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `${GOLD} ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 60; i++) {
        const p = new Particle();
        p.life = Math.random() * p.maxLife; // stagger start
        particles.push(p);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    animate();
}

// ==========================================
// RENDER MENU
// ==========================================
const menuContainer = document.getElementById('menuContainer');

function renderMenu(filter = 'all') {
    menuContainer.innerHTML = '';

    const filtered = filter === 'all'
        ? menuItems
        : menuItems.filter(i => i.cat === filter);

    filtered.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        el.style.animationDelay = `${index * 0.07}s`;

        // Stars HTML
        const starsHtml = Array.from({ length: 5 }, (_, i) =>
            `<span class="star ${i < item.stars ? '' : 'empty'}">★</span>`
        ).join('');

        // Badge HTML
        const badgeHtml = item.badge
            ? `<div class="item-badge badge-${item.badge}">${item.badgeText}</div>`
            : '';

        // Ingredients HTML — tags مع تأخير متدرج
        const ingredientsHtml = (item.ingredients || [])
            .map((ing, i) =>
                `<span class="ingredient-tag" style="animation-delay:${0.05 + i * 0.04}s">${ing}</span>`
            ).join('');

        el.innerHTML = `
            ${badgeHtml}
            <div class="item-image-container">
                <img 
                    src="${item.img}" 
                    alt="${item.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop'"
                >
            </div>
            <div class="item-content">
                <div class="item-rating">${starsHtml}</div>
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-price">${item.price}</span>
                </div>
                <p class="item-desc">${item.desc}</p>
                <div class="item-meta">
                    <div class="meta-tag">
                        <i class="fas fa-fire-alt"></i>
                        <span>${item.cal}</span>
                    </div>
                    <div class="meta-tag">
                        <i class="fas fa-clock"></i>
                        <span>${item.time}</span>
                    </div>
                </div>

                ${ingredientsHtml.length ? `
                <div class="expand-hint">
                    <i class="fas fa-chevron-down"></i>
                    <span>المكونات</span>
                </div>
                <div class="ingredients-panel">
                    <div class="ingredients-inner">
                        <div class="ingredients-title">
                            <i class="fas fa-leaf"></i>
                            المكونات الرئيسية
                        </div>
                        <div class="ingredients-list">
                            ${ingredientsHtml}
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;

        // Toggle expand on click
        el.addEventListener('click', () => {
            const isExpanded = el.classList.contains('expanded');
            // Close all others
            document.querySelectorAll('.menu-item.expanded').forEach(other => {
                if (other !== el) other.classList.remove('expanded');
            });
            el.classList.toggle('expanded', !isExpanded);
        });

        menuContainer.appendChild(el);
    });

    if (filtered.length === 0) {
        menuContainer.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding: 60px 20px; color: var(--text-muted);">
                لا توجد عناصر في هذا القسم حالياً
            </div>`;
    }
}

// ==========================================
// CATEGORY FILTER
// ==========================================
function initCategoryNav() {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-cat');
            renderMenu(cat);
        });
    });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    renderMenu();
    initCategoryNav();
});