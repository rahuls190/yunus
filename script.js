/* ═══════════════════════════════════════
   Yunus Khimani — Portfolio Script
   ═══════════════════════════════════════ */

// ─── Default Artwork Data ───
const defaultArtworks = [
  { src: 'images/Cataloug  03_Page_11_Image_0001.jpg', title: 'The Vessel', medium: 'Mixed Media on Canvas', description: '', featured: true, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_13_Image_0001.jpg', title: 'Silent Cry', medium: 'Ink and Acrylic on Paper', description: '', featured: true, category: 'drawings', subcategory: 'stand-alone' },
  { src: 'images/Cataloug  03_Page_15_Image_0001.jpg', title: 'Fractured Self', medium: 'Mixed Media on Canvas', description: '', featured: true, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_25_Image_0001.jpg', title: 'Untitled I', medium: 'Oil on Canvas', description: '', featured: true, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_16_Image_0001.jpg', title: 'Entangled', medium: 'Acrylic on Canvas', description: '', featured: true, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_27_Image_0001.jpg', title: 'Descent', medium: 'Mixed Media on Canvas', description: '', featured: true, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_01_Image_0001.jpg', title: 'I Fear', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_08_Image_0001.jpg', title: 'Rooted Canopy', medium: 'Mixed Media on Paper', description: '', featured: false, category: 'drawings', subcategory: 'stand-alone' },
  { src: 'images/Cataloug  03_Page_09_Image_0001.jpg', title: 'Emergence', medium: 'Acrylic on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_10_Image_0001.jpg', title: 'Inner Landscape I', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_12_Image_0001.jpg', title: 'Contemplation', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_14_Image_0001.jpg', title: 'The Scream Within', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_17_Image_0001.jpg', title: 'Solitude', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_18_Image_0001.jpg', title: 'Dusk Reverie', medium: 'Mixed Media on Paper', description: '', featured: false, category: 'drawings', subcategory: 'stand-alone' },
  { src: 'images/Cataloug  03_Page_19_Image_0001.jpg', title: 'Vulnerability', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_20_Image_0001.jpg', title: 'Threshold', medium: 'Ink on Paper', description: '', featured: false, category: 'drawings', subcategory: 'stand-alone' },
  { src: 'images/Cataloug  03_Page_21_Image_0001.jpg', title: 'Forest of Thought', medium: 'Pen and Ink on Paper', description: '', featured: false, category: 'drawings', subcategory: 'stand-alone' },
  { src: 'images/Cataloug  03_Page_22_Image_0001.jpg', title: 'Between Worlds', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_23_Image_0001.jpg', title: 'Awakening', medium: 'Acrylic on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_24_Image_0001.jpg', title: 'Inner Landscape II', medium: 'Mixed Media on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_26_Image_0001.jpg', title: 'Untitled II', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_28_Image_0001.jpg', title: 'Resilience', medium: 'Acrylic on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_31_Image_0001.jpg', title: 'Passage', medium: 'Oil on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'images/Cataloug  03_Page_32_Image_0001.jpg', title: 'Transcendence', medium: 'Mixed Media on Canvas', description: '', featured: false, category: 'paintings', subcategory: 'all' },
  { src: 'Coll_pro images/WhatsApp Image 2026-07-26 at 4.03.54 PM.jpeg', title: 'Collaboration Work 1', medium: 'Natural Indigo and Block Print on Fabric', description: '', featured: false, category: 'collpro', subcategory: 'all' },
  { src: 'Coll_pro images/WhatsApp Image 2026-07-26 at 4.03.55 PM (1).jpeg', title: 'Collaboration Work 2', medium: 'Natural Indigo and Block Print on Fabric', description: '', featured: false, category: 'collpro', subcategory: 'all' },
  { src: 'Coll_pro images/WhatsApp Image 2026-07-26 at 4.03.55 PM (2).jpeg', title: 'Collaboration Work 3', medium: 'Natural Indigo and Block Print on Fabric', description: '', featured: false, category: 'collpro', subcategory: 'all' },
  { src: 'Coll_pro images/WhatsApp Image 2026-07-26 at 4.03.55 PM.jpeg', title: 'Collaboration Work 4', medium: 'Natural Indigo and Block Print on Fabric', description: '', featured: false, category: 'collpro', subcategory: 'all' }
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

const defaultCollproText = `## A Collaborative Project: a concept note

I, Yunus Khimani, am an artist based in Jaipur, Rajasthan. I have been closely associated with the crafts of Rajasthan both on academic as well as personal level. I always felt that we need to look at these crafts more seriously and make effort to push its limits. I am a contemporary artist looking at the tradition closely. I wanted to see if there is a way of bringing these 2 different entities together.

In June, 2023, I initiated a collaborative project (called Coll_pro). I started collaboration with 2 craftsmen:

1. **Dr. Badshah Miyan** is a Master Dyer and a Shilp Guru from Rajasthan. He is well-known for his skills in Lehariya (tie and dye). He is an expert of natural indigo.
2. **Giriraj Chippa**, a block printer belonging to chhipa community in Bagru.

We worked with Dabu, Bagru Print, Tie & Dye, Clamp Dyeing, Dip Dyeing, Sanganeri Print and Hand Painted Textiles. We are also enthusiastic to work with Natural Indigo. We tried to push the traditional boundaries as well as repurpose the application. One of the breakthroughs we had is with hand painting using the traditional Bagru technique.

The project is about working together on the same footing defying all hierarchies, where each member contributes as per his/her ability.

The project aims to:

- create an inclusive platform.
- To create synergy between traditional processes and contemporary outlook.
- explore materials, techniques and processes to discover new possibilities.
- achieve sustainable practices by working with natural, biodegradable materials and processes as far as possible.

Recently, 2 designers have joined the project.

3. **Akshita Gangwal**, a young textile designer
4. **Neerja Palisetty**, a weave designer

We have now also started exploring Natural Dyes and Weaving. We are exploring the fusing of paper and natural dyed yarn and hand painting with weaving.

We are hoping for some fruitful results.

<span class="collpro-date">drafted in June, 2026</span>`;

// ─── Data Manager ───
const DataManager = {
  async getArtworks() {
    if (!window.supabase) return defaultArtworks;
    const { data, error } = await supabaseClient.from('artworks').select('*').order('order_idx', { ascending: true });
    if (error || !data || data.length === 0) return defaultArtworks;
    return data;
  },
  async getAbout() {
    if (window.supabase) {
      const { data, error } = await supabaseClient.from('about').select('*').eq('id', 1).single();
      if (!error && data) return data;
    }
    return getData('yk_about', defaultAbout);
  },
  getCollproText: async function() {
    if (window.supabase) {
      const { data, error } = await supabaseClient.from('collpro_info').select('*').eq('id', 1).single();
      if (!error && data) return data.content;
    }
    return getData('yk_collpro_text', defaultCollproText);
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
  },
  async getBlogPosts() {
    if (!window.supabase) return defaultBlogPosts;
    const { data, error } = await supabaseClient.from('blog_posts').select('*').eq('published', true).order('created_at', { ascending: false });
    if (error || !data || data.length === 0) return defaultBlogPosts;
    return data;
  }
};

const defaultBlogPosts = [
  {
    id: 1,
    title: 'The Journey of "I FEAR"',
    excerpt: 'Exploring the vulnerable states of the human condition and how fear shapes our existence.',
    content: 'Fear is a primal emotion, deeply embedded in the human psyche. When I began conceptualizing the "I FEAR........" exhibition, I wanted to strip away the pretense of strength that we wear in our daily lives. The large-scale figurative works in this collection are meant to confront the viewer with their own vulnerabilities.\\n\\nIn my studio, the process of applying raw umber and deep crimson became a meditative practice. Each layer of paint represents a layer of emotion—some hidden, some exposed. The figures are intentionally fractured, representing the fragmented nature of our inner selves when confronted with existential dread.\\n\\nArt should not just be observed; it should be felt. It is my hope that those who walk through this exhibition at the Jehangir Art Gallery find a mirror in these works, reflecting not just fear, but the resilience that comes from acknowledging it.',
    image_url: 'images/Cataloug  03_Page_01_Image_0001.jpg',
    created_at: '2025-10-15T10:00:00Z',
    published: true
  },
  {
    id: 2,
    title: 'Collaborative Synergy: The Coll_pro Initiative',
    excerpt: 'Merging contemporary vision with traditional Rajasthani crafts in a groundbreaking collaboration.',
    content: 'The Coll_pro initiative was born out of a desire to break down the hierarchies that often exist between "fine artists" and "craftspeople." Working with Master Dyer Dr. Badshah Miyan and block printer Giriraj Chippa has been one of the most fulfilling experiences of my career.\\n\\nBy taking traditional techniques like Bagru Print and Dabu, and applying them in non-traditional, contemporary contexts, we are not just preserving heritage—we are evolving it. The introduction of hand-painting onto these textiles has opened up entirely new possibilities.\\n\\nThis project is a testament to what happens when we listen to the materials and respect the ancestral knowledge embedded in them, while pushing fearlessly into new artistic territories.',
    image_url: 'images/Cataloug  03_Page_32_Image_0001.jpg',
    created_at: '2025-11-20T14:30:00Z',
    published: true
  }
];

// ─── Global artworks reference ───
let artworks = [];
let blogPosts = [];

// ─── DOM Ready ───
async function init() {
  initLoader();
  initNav();

  artworks = await DataManager.getArtworks();
  blogPosts = await DataManager.getBlogPosts();
  
  const collproText = await DataManager.getCollproText();
  const cpContainer = document.getElementById('collproConceptContainer');
  if (cpContainer) cpContainer.innerHTML = window.marked ? marked.parse(collproText) : collproText;

  initGallery();
  initNav();
  initHeroSlideshow();
  initSlider();
  initGallery();
  initFilters();
  initBlog();
  initLightbox();
  initScrollAnimations();
  await loadDynamicContent();
});

// ─── Load Dynamic Content ───
async function loadDynamicContent() {
  const quoteEl = document.querySelector('.quote-text');
  if (quoteEl) quoteEl.textContent = await DataManager.getHeroQuote();
  
  const heroTaglineEl = document.querySelector('.hero-tagline');
  if (heroTaglineEl) {
    heroTaglineEl.textContent = await DataManager.getHeroQuote();
  }

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
    const isActive = a.dataset.page === page || (a.dataset.page === 'gallery' && page.startsWith('gallery-'));
    a.classList.toggle('active', isActive);
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
let currentFilter = 'all';
let currentSubFilter = 'all';

function initFilters() {
  const primaryBtns = document.querySelectorAll('.primary-filters .filter-btn');
  const secondaryGroups = document.querySelectorAll('.secondary-filters');
  const subBtns = document.querySelectorAll('.secondary-filters .filter-btn');
  
  primaryBtns.forEach(btn => {
    btn.onclick = () => {
      primaryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentSubFilter = 'all';
      
      secondaryGroups.forEach(g => g.style.display = 'none');
      
      const subGroup = document.getElementById(`subFilters-${currentFilter}`);
      if (subGroup) {
        subGroup.style.display = 'flex';
        subGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        const allBtn = subGroup.querySelector('[data-subfilter="all"]');
        if (allBtn) allBtn.classList.add('active');
      }
      
      applyFilters();
    };
  });
  
  subBtns.forEach(btn => {
    btn.onclick = () => {
      const parent = btn.closest('.secondary-filters');
      parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubFilter = btn.dataset.subfilter;
      applyFilters();
    };
  });
}

function applyFilters() {
  const items = document.querySelectorAll('#galleryMasonry .gallery-item');
  items.forEach(item => {
    const cat = item.dataset.category;
    const sub = item.dataset.subcategory;
    
    let show = true;
    if (cat === 'collpro') return; // Do not apply filters to collpro in this masonry

    if (currentFilter !== 'all') {
      if (cat !== currentFilter) show = false;
      if (show && currentSubFilter !== 'all') {
        if (sub !== currentSubFilter) show = false;
      }
    }
    
    if (show) {
      item.removeAttribute('data-hidden');
    } else {
      item.dataset.hidden = 'true';
    }
  });
}

function initGallery() {
  const masonry = document.getElementById('galleryMasonry');
  const collproMasonry = document.getElementById('collproMasonry');
  
  if (masonry) masonry.innerHTML = '';
  if (collproMasonry) collproMasonry.innerHTML = '';

  artworks.forEach((art, i) => {
    const isCollpro = art.category === 'collpro';
    const targetMasonry = isCollpro ? collproMasonry : masonry;
    if (!targetMasonry) return;

    const item = document.createElement('div');
    item.className = 'gallery-item fade-in';
    item.dataset.category = art.category || 'paintings';
    item.dataset.subcategory = art.subcategory || 'all';
    item.onclick = () => openLightbox(i, isCollpro ? 'collpro' : 'personal');
    item.innerHTML = `
      <img src="${art.src}" alt="${art.title}" loading="lazy">
      <div class="gallery-item-info">
        <h3>${art.title}</h3>
        <p>${art.medium || ''}</p>
      </div>
    `;
    targetMasonry.appendChild(item);
  });
}

// ─── Blog ───
function initBlog() {
  const blogGrid = document.getElementById('blogGrid');
  if (!blogGrid) return;
  
  blogGrid.innerHTML = '';
  
  if (!blogPosts || blogPosts.length === 0) {
    blogGrid.innerHTML = '<p style="color:var(--text-light); text-align:center; width: 100%;">No journal entries available.</p>';
    return;
  }

  blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card fade-in';
    card.onclick = () => openBlogPost(post.id);
    
    const dateStr = new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const imgHtml = post.image_url ? `<img src="${post.image_url}" alt="${post.title}" loading="lazy">` : '';
    
    card.innerHTML = `
      ${imgHtml}
      <div class="blog-card-content">
        <div class="blog-date">${dateStr}</div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt || ''}</p>
      </div>
    `;
    blogGrid.appendChild(card);
  });
}

function openBlogPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;
  
  const container = document.getElementById('singleBlogPost');
  if (!container) return;
  
  const dateStr = new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const imgHtml = post.image_url ? `<img src="${post.image_url}" alt="${post.title}" class="post-detail-img">` : '';
  
  // Format content: convert newlines to paragraphs
  const formattedContent = window.marked ? marked.parse(post.content) : post.content.split('\\n').map(p => `<p>${p}</p>`).join('');
    
  container.innerHTML = `
    <div class="blog-post-header">
      <div class="blog-date">${dateStr}</div>
      <h1>${post.title}</h1>
    </div>
    ${imgHtml}
    <div class="blog-post-content">
      ${formattedContent}
    </div>
  `;
  
  showPage('blog-post');
}

// ─── Lightbox ───
let lbIndex = 0;
let lightboxSourceArray = [];

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

function openLightbox(index, source = 'personal') {
  if (source === 'collpro') {
    lightboxSourceArray = artworks.filter(a => a.category === 'collpro');
  } else {
    lightboxSourceArray = artworks.filter(a => a.category !== 'collpro');
  }
  
  const clickedArt = artworks[index];
  lbIndex = lightboxSourceArray.indexOf(clickedArt);
  if (lbIndex === -1) lbIndex = 0;
  
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLb(dir) {
  lbIndex = (lbIndex + dir + lightboxSourceArray.length) % lightboxSourceArray.length;
  updateLightbox();
}

function updateLightbox() {
  const art = lightboxSourceArray[lbIndex];
  if (!art) return;
  document.getElementById('lbImg').src = art.src;
  document.getElementById('lbImg').alt = art.title;
  document.getElementById('lbTitle').textContent = art.title;
  
  // Show medium, and description if it exists
  let metaText = art.medium || '';
  if (art.description) {
    metaText += (metaText ? ' — ' : '') + art.description;
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
