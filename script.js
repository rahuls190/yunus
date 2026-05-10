/* ═══════════════════════════════════════
   Yunus Khimani — Portfolio Script
   ═══════════════════════════════════════ */

// ─── Default Artwork Data ───
const defaultArtworks = [
  { src: 'images/Cataloug  03_Page_11_Image_0001.jpg', title: 'The Vessel', medium: 'Mixed Media on Canvas', description: '', featured: true },
  { src: 'images/Cataloug  03_Page_13_Image_0001.jpg', title: 'Silent Cry', medium: 'Ink and Acrylic on Paper', description: '', featured: true },
  { src: 'images/Cataloug  03_Page_15_Image_0001.jpg', title: 'Fractured Self', medium: 'Mixed Media on Canvas', description: '', featured: true },
  { src: 'images/Cataloug  03_Page_25_Image_0001.jpg', title: 'Untitled I', medium: 'Oil on Canvas', description: '', featured: true },
  { src: 'images/Cataloug  03_Page_16_Image_0001.jpg', title: 'Entangled', medium: 'Acrylic on Canvas', description: '', featured: true },
  { src: 'images/Cataloug  03_Page_27_Image_0001.jpg', title: 'Descent', medium: 'Mixed Media on Canvas', description: '', featured: true },
  { src: 'images/Cataloug  03_Page_01_Image_0001.jpg', title: 'I Fear', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_08_Image_0001.jpg', title: 'Rooted Canopy', medium: 'Mixed Media on Paper', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_09_Image_0001.jpg', title: 'Emergence', medium: 'Acrylic on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_10_Image_0001.jpg', title: 'Inner Landscape I', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_12_Image_0001.jpg', title: 'Contemplation', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_14_Image_0001.jpg', title: 'The Scream Within', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_17_Image_0001.jpg', title: 'Solitude', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_18_Image_0001.jpg', title: 'Dusk Reverie', medium: 'Mixed Media on Paper', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_19_Image_0001.jpg', title: 'Vulnerability', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_20_Image_0001.jpg', title: 'Threshold', medium: 'Ink on Paper', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_21_Image_0001.jpg', title: 'Forest of Thought', medium: 'Pen and Ink on Paper', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_22_Image_0001.jpg', title: 'Between Worlds', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_23_Image_0001.jpg', title: 'Awakening', medium: 'Acrylic on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_24_Image_0001.jpg', title: 'Inner Landscape II', medium: 'Mixed Media on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_26_Image_0001.jpg', title: 'Untitled II', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_28_Image_0001.jpg', title: 'Resilience', medium: 'Acrylic on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_31_Image_0001.jpg', title: 'Passage', medium: 'Oil on Canvas', description: '', featured: false },
  { src: 'images/Cataloug  03_Page_32_Image_0001.jpg', title: 'Transcendence', medium: 'Mixed Media on Canvas', description: '', featured: false },
];

const defaultAbout = {
  bio: `Yunus Khimani is a distinguished Indian artist whose work traverses the boundaries between figuration and expression. Born and raised in India, he developed an early fascination with the human form and the emotional narratives it carries. His artistic journey has been shaped by rigorous academic training and decades of professional practice spanning painting, education, and museum curation.`,
  quote: `"My work is an exploration of the human condition — each figure, each line, each gesture is a meditation on what it means to be alive, to feel, to fear, and to hope."`,
  para2: `Khimani earned his Bachelor of Fine Arts (BFA) from the prestigious Faculty of Fine Arts, Maharaja Sayajirao University of Baroda (1981), one of India's most respected institutions for visual arts. This foundational training in the Baroda school tradition — known for its emphasis on figuration, narrative, and social commentary — deeply influenced his artistic vocabulary.`,
  para3: `His paintings are characterized by intricate cross-hatching, bold earth tones of burnt sienna, deep crimson, and raw umber, layered over expansive canvases. The figures in his works seem to emerge from and dissolve into their surroundings, creating a powerful tension between presence and absence, solidity and fragility.`,
  para4: `Beyond his studio practice, Khimani has made significant contributions to India's cultural landscape. He served as Director of the City Palace Museum, Jaipur from 2010 to 2018, overseeing one of India's most important heritage collections. He has also served as Dean and Associate Professor at the Indian Institute of Crafts and Design (IICD), Jaipur, shaping the next generation of visual artists and designers.`,
  para5: `In 1996, he was awarded the Junior Fellowship by the Ministry of Culture, Government of India — a recognition of his outstanding contributions to the visual arts. His work has been exhibited extensively across India, with solo and group shows at prestigious galleries.`
};

const defaultExhibition = {
  enabled: true,
  label: 'Current Exhibition',
  title: '"I FEAR........"',
  subtitle: 'A Solo Exhibition of Paintings',
  venue: 'Jehangir Art Gallery',
  city: 'Mumbai',
  dates: '30th December 2025 — 5th January 2026',
  description: 'An intimate exploration of fear, vulnerability, and the human condition through large-scale figurative works in oil, acrylic, and mixed media.'
};

const defaultHeroQuote = `"Art is the mirror of the soul — each line I draw is a conversation between my inner world and the canvas, a silent dialogue that speaks louder than words."`;

// ─── Data Manager ───
const DataManager = {
  async getArtworks() {
    if (!window.supabase) return defaultArtworks;
    const { data, error } = await supabaseClient.from('artworks').select('*').order('order_idx', { ascending: true });
    if (error || !data || data.length === 0) return defaultArtworks;
    return data;
  },
  async getAbout() {
    if (!window.supabase) return defaultAbout;
    const { data, error } = await supabaseClient.from('about').select('*').eq('id', 1).single();
    if (error || !data) return defaultAbout;
    return data;
  },
  async getExhibition() {
    if (!window.supabase) return defaultExhibition;
    const { data, error } = await supabaseClient.from('exhibition').select('*').eq('id', 1).single();
    if (error || !data) return defaultExhibition;
    return data;
  },
  async getHeroQuote() {
    if (!window.supabase) return defaultHeroQuote;
    const { data, error } = await supabaseClient.from('site_settings').select('hero_quote').eq('id', 1).single();
    if (error || !data) return defaultHeroQuote;
    return data.hero_quote;
  }
};

// ─── Global artworks reference ───
let artworks = [];

// ─── DOM Ready ───
document.addEventListener('DOMContentLoaded', async () => {
  artworks = await DataManager.getArtworks();
  initLoader();
  initNav();
  initHeroSlideshow();
  initSlider();
  initGallery();
  initLightbox();
  initScrollAnimations();
  await loadDynamicContent();
});

// ─── Load Dynamic Content ───
async function loadDynamicContent() {
  const quoteEl = document.querySelector('.quote-text');
  if (quoteEl) quoteEl.textContent = await DataManager.getHeroQuote();

  const exh = await DataManager.getExhibition();
  const exhSection = document.getElementById('exhibitionSection');
  if (exhSection) {
    exhSection.style.display = exh.enabled ? 'block' : 'none';
    const t = exhSection.querySelector('.exhibition-title');
    const s = exhSection.querySelector('.exhibition-subtitle');
    const v = exhSection.querySelector('.exhibition-venue');
    const d = exhSection.querySelector('.exhibition-dates');
    const desc = exhSection.querySelector('.exhibition-desc');
    const lbl = exhSection.querySelector('.exhibition-label');
    if (t) t.textContent = exh.title;
    if (s) s.textContent = exh.subtitle;
    if (v) v.innerHTML = '<strong>' + exh.venue + '</strong>, ' + exh.city;
    if (d) d.textContent = exh.dates;
    if (desc) desc.textContent = exh.description;
    if (lbl) lbl.textContent = exh.label;
  }

  const about = await DataManager.getAbout();
  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    const bio = aboutText.querySelector('.about-bio');
    const q = aboutText.querySelector('.highlight');
    const p2 = aboutText.querySelector('.about-p2');
    const p3 = aboutText.querySelector('.about-p3');
    const p4 = aboutText.querySelector('.about-p4');
    const p5 = aboutText.querySelector('.about-p5');
    if (bio) bio.textContent = about.bio;
    if (q) q.textContent = about.quote;
    if (p2) p2.textContent = about.para2;
    if (p3) p3.textContent = about.para3;
    if (p4) p4.textContent = about.para4;
    if (p5) p5.textContent = about.para5;
  }
}

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  
  let loaded = false;
  const hideLoader = () => {
    if (loaded) return;
    loaded = true;
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  };

  window.addEventListener('load', hideLoader);
  
  // Fallback: forcefully hide loader after 3 seconds
  setTimeout(hideLoader, 3000);
}

function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

function closeMobile() {
  document.getElementById('navToggle').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
  setTimeout(initScrollAnimations, 100);
}

function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}

// ─── Selected Works Slider ───
function initSlider() {
  const track = document.getElementById('sliderTrack');
  const caption = document.getElementById('sliderCaption');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  
  if (!track) return;
  
  const featured = artworks.filter(a => a.featured);
  if (!featured.length) {
    track.innerHTML = '';
    return;
  }

  track.innerHTML = '';
  featured.forEach((art) => {
    const slide = document.createElement('div');
    slide.className = 'slider-slide';
    slide.dataset.label = art.title;
    slide.innerHTML = `<img src="${art.src}" alt="${art.title}">`;
    track.appendChild(slide);
  });

  const slides = document.querySelectorAll('.slider-slide');
  let currentIdx = 0;

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');
      let relativeIdx = idx - currentIdx;
      if (relativeIdx < -Math.floor(slides.length / 2)) relativeIdx += slides.length;
      if (relativeIdx > Math.floor(slides.length / 2)) relativeIdx -= slides.length;

      if (relativeIdx === 0) {
        slide.classList.add('active');
        caption.textContent = slide.dataset.label || '';
      } else if (relativeIdx === -1) {
        slide.classList.add('prev');
      } else if (relativeIdx === 1) {
        slide.classList.add('next');
      } else if (relativeIdx <= -2) {
        slide.classList.add('far-prev');
      } else if (relativeIdx >= 2) {
        slide.classList.add('far-next');
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + slides.length) % slides.length;
      updateSlider();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % slides.length;
      updateSlider();
    });
  }

  slides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
      currentIdx = idx;
      updateSlider();
    });
  });

  updateSlider();
}

// ─── Gallery ───
function initGallery() {
  const masonry = document.getElementById('galleryMasonry');
  if (!masonry) return;
  masonry.innerHTML = '';
  artworks.forEach((art, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item fade-in';
    item.onclick = () => openLightbox(i);
    item.innerHTML = `
      <img src="${art.src}" alt="${art.title}" loading="lazy">
      <div class="gallery-item-info">
        <h3>${art.title}</h3>
        <p>${art.medium}</p>
      </div>
    `;
    masonry.appendChild(item);
  });
}

// ─── Lightbox ───
let lbIndex = 0;

function initLightbox() {
  const close = document.getElementById('lbClose');
  const prev = document.getElementById('lbPrev');
  const next = document.getElementById('lbNext');
  if (!close) return;
  close.onclick = closeLightbox;
  prev.onclick = () => navigateLb(-1);
  next.onclick = () => navigateLb(1);
  document.getElementById('lightbox').onclick = (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  };
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLb(-1);
    if (e.key === 'ArrowRight') navigateLb(1);
  });
}

function openLightbox(index) {
  lbIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLb(dir) {
  lbIndex = (lbIndex + dir + artworks.length) % artworks.length;
  updateLightbox();
}

function updateLightbox() {
  const art = artworks[lbIndex];
  document.getElementById('lbImg').src = art.src;
  document.getElementById('lbImg').alt = art.title;
  document.getElementById('lbTitle').textContent = art.title;
  
  // Show medium, and description if it exists
  let metaText = art.medium;
  if (art.description) {
    metaText += ' — ' + art.description;
  }
  document.getElementById('lbMeta').textContent = metaText;
}

// ─── Scroll Animations ───
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
}
