// ==========================================
// SUPABASE CONFIGURATION
// ==========================================
const supabaseUrl = 'https://zhejfkvnaplxflwyuhqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZWpma3ZuYXBseGZsd3l1aHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MzU2OTEsImV4cCI6MjA4NjUxMTY5MX0.6muANVdyUOa80sP9fqD7gF6j2XBaTw4YBJI29RY2oeY';

// إنشاء عميل Supabase
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// ==========================================
// GLOBAL VARIABLES
// ==========================================
let allMenuItems = []; // هنا سنخزن البيانات القادمة من السيرفر
const menuContainer = document.getElementById('menuContainer');

// ==========================================
// FETCH & RENDER MENU
// ==========================================
async function fetchAndRenderMenu(filter = 'all') {
    // 1. إذا لم تكن البيانات محملة، اجلبها من السيرفر
    if (allMenuItems.length === 0) {
        try {
            const { data, error } = await _supabase
                .from('products')
                .select('*')
                .order('id', { ascending: false });

            if (error) throw error;
            allMenuItems = data;
        } catch (err) {
            console.error('Error fetching menu:', err);
            menuContainer.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:red;">عذراً، حدث خطأ في تحميل القائمة.</div>';
            return;
        }
    }

    // 2. تصفية البيانات (Filter)
    const filteredItems = filter === 'all' 
        ? allMenuItems 
        : allMenuItems.filter(item => item.category === filter);

    // 3. تنظيف الحاوية
    menuContainer.innerHTML = '';

    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding: 60px 20px; color: var(--text-muted);">
                لا توجد عناصر في هذا القسم حالياً
            </div>`;
        return;
    }

    // 4. رسم البطاقات (Cards)
    filteredItems.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        el.style.animationDelay = `${index * 0.1}s`; // تأثير ظهور متتابع

        // صورة افتراضية في حالة عدم وجود صورة
        const imgSrc = item.image_url || 'https://via.placeholder.com/400x200?text=No+Image';

        el.innerHTML = `
            <div class="item-image-container">
                <img 
                    src="${imgSrc}" 
                    alt="${item.name}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/400x200?text=Image+Error'"
                >
            </div>
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-price">${item.price} ج.م</span>
                </div>
                <p class="item-desc">
                   طبق مميز من قائمة ${item.category === 'pizza' ? 'البيتزا' : item.category === 'crepe' ? 'الكريب' : 'المشروبات'}.
                </p>
                <div class="card-category-tag">
                    ${item.category === 'pizza' ? '🍕 بيتزا' : item.category === 'crepe' ? '🌯 كريب' : '🥤 مشروبات'}
                </div>
            </div>
        `;
        menuContainer.appendChild(el);
    });
}

// ==========================================
// CATEGORY FILTER LOGIC
// ==========================================
function initCategoryNav() {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الكلاس النشط من الجميع
            buttons.forEach(b => b.classList.remove('active'));
            // إضافة الكلاس للزر المضغوط
            btn.classList.add('active');
            
            // جلب الفلتر وتنفيذ الدالة
            const cat = btn.getAttribute('data-cat');
            fetchAndRenderMenu(cat);
        });
    });
}

// ==========================================
// BACKGROUND ANIMATION (الجسيمات الذهبية)
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
        constructor() { this.reset(); }
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
            if (this.life < 60) this.alpha = (this.life / 60) * this.maxAlpha;
            else if (this.life > this.maxLife - 60) this.alpha = ((this.maxLife - this.life) / 60) * this.maxAlpha;
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
        p.life = Math.random() * p.maxLife;
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
// INIT APP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initBackground();      // تشغيل الخلفية
    fetchAndRenderMenu();  // جلب البيانات وعرضها
    initCategoryNav();     // تفعيل أزرار التصنيفات
});
