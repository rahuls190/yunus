/* ═══════════════════════════════════════
   Admin Panel — Yunus Khimani Portfolio
   ═══════════════════════════════════════ */

const ADMIN_PASS = 'yunus2025';

// ─── Default data (mirrors script.js) ───
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

// ─── Helpers ───
function getData(key, fallback) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : fallback;
}

function toast(msg, isError = false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (isError ? ' error' : '');
  setTimeout(() => t.className = 'toast', 3000);
}

// ─── Login ───
function handleLogin(e) {
  e.preventDefault();
  const pass = document.getElementById('loginPass').value;
  if (pass === ADMIN_PASS) {
    sessionStorage.setItem('yk_admin', 'true');
    showAdmin();
  } else {
    document.getElementById('loginError').textContent = 'Incorrect password';
  }
  return false;
}

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminApp').style.display = 'flex';
  loadAllData();
}

function logout() {
  sessionStorage.removeItem('yk_admin');
  document.getElementById('adminApp').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginPass').value = '';
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('yk_admin') === 'true') {
    showAdmin();
  }
});

// ─── Tab Switching ───
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.tab === tab);
  });
  const titles = {
    gallery: 'Gallery Management',
    about: 'About Section',
    exhibition: 'Exhibition Settings',
    quote: 'Homepage Quote'
  };
  document.getElementById('tabTitle').textContent = titles[tab] || tab;
}

// ─── Load All Data ───
async function loadAllData() {
  await loadGalleryAdmin();
  await loadAboutAdmin();
  await loadExhibitionAdmin();
  await loadQuoteAdmin();
}

// ════════════════════════
//  GALLERY MANAGEMENT
// ════════════════════════

let currentArtworks = [];
let editingArtworkIndex = -1;

async function fetchArtworks() {
  if (!window.supabase) return defaultArtworks;
  const { data, error } = await supabaseClient.from('artworks').select('*').order('order_idx', { ascending: true });
  if (error || !data || data.length === 0) return defaultArtworks;
  return data;
}

async function loadGalleryAdmin() {
  currentArtworks = await fetchArtworks();
  const grid = document.getElementById('adminGallery');
  document.getElementById('artworkCount').textContent = currentArtworks.length;
  grid.innerHTML = '';

  currentArtworks.forEach((art, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-admin-item';
    
    const featuredIcon = art.featured ? 
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' : 
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

    const displaySrc = art.src.startsWith('images/') ? '../' + art.src : art.src;

    item.innerHTML = `
      <img src="${displaySrc}" alt="${art.title}" onerror="this.style.background='#2a2e3d';this.style.height='160px';">
      <div class="gallery-admin-info">
        <h4>${art.title}</h4>
        <p>${art.medium}</p>
      </div>
      <div class="gallery-admin-actions" style="margin-bottom: 5px;">
        <button class="btn btn-sm" onclick="editArtwork(${i})" style="flex:1; background:var(--bg-hover); color:var(--text); border:1px solid var(--border);">Edit</button>
        <button class="btn btn-sm" onclick="toggleFeatured(${i})" style="flex:1; background:var(--bg-hover); color:var(--text); border:1px solid var(--border);" title="Toggle Selected Works">
          ${featuredIcon}
        </button>
      </div>
      <div class="gallery-admin-actions" style="margin-bottom: 5px;">
        <button class="btn btn-sm" onclick="moveArtwork(${i}, -1)" ${i === 0 ? 'disabled' : ''} style="flex:1; background:var(--bg-hover); color:var(--text); border:1px solid var(--border);">↑</button>
        <button class="btn btn-sm" onclick="moveArtwork(${i}, 1)" ${i === currentArtworks.length - 1 ? 'disabled' : ''} style="flex:1; background:var(--bg-hover); color:var(--text); border:1px solid var(--border);">↓</button>
      </div>
      <div class="gallery-admin-actions">
        <button class="btn btn-danger btn-sm" onclick="deleteArtwork(${i})">Delete</button>
      </div>
    `;
    grid.appendChild(item);
  });
}

function editArtwork(index) {
  const art = currentArtworks[index];
  editingArtworkIndex = index;
  
  document.getElementById('artworkFormTitle').textContent = 'Edit Artwork';
  document.getElementById('artworkPath').value = art.src || '';
  document.getElementById('artworkTitle').value = art.title || '';
  document.getElementById('artworkMedium').value = art.medium || '';
  document.getElementById('artworkDesc').value = art.description || '';
  document.getElementById('artworkFeatured').checked = !!art.featured;
  
  document.getElementById('submitArtworkBtn').querySelector('span').textContent = 'Save Changes';
  document.getElementById('cancelEditBtn').style.display = 'inline-block';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEdit() {
  editingArtworkIndex = -1;
  document.getElementById('artworkFormTitle').textContent = 'Add New Artwork';
  document.getElementById('submitArtworkBtn').querySelector('span').textContent = 'Add Artwork';
  document.getElementById('cancelEditBtn').style.display = 'none';
  clearArtworkForm();
}

async function submitArtworkForm() {
  const fileInput = document.getElementById('artworkFile');
  const pathInput = document.getElementById('artworkPath');
  const titleInput = document.getElementById('artworkTitle');
  const mediumInput = document.getElementById('artworkMedium');
  const descInput = document.getElementById('artworkDesc');
  const featuredInput = document.getElementById('artworkFeatured');

  const title = titleInput.value.trim();
  const medium = mediumInput.value.trim();
  const description = descInput.value.trim();
  const featured = featuredInput.checked;

  if (!title) { toast('Please enter a title', true); return; }
  if (!medium) { toast('Please enter the medium', true); return; }

  const file = fileInput.files[0];
  const path = pathInput.value.trim();

  let finalSrc = path;

  if (file) {
    const reader = new FileReader();
    reader.onload = async function(e) {
      finalSrc = e.target.result;
      if (editingArtworkIndex >= 0) {
        await updateArtwork(editingArtworkIndex, finalSrc, title, medium, description, featured);
      } else {
        await saveNewArtwork(finalSrc, title, medium, description, featured);
      }
    };
    reader.readAsDataURL(file);
  } else if (path) {
    if (editingArtworkIndex >= 0) {
      await updateArtwork(editingArtworkIndex, finalSrc, title, medium, description, featured);
    } else {
      await saveNewArtwork(finalSrc, title, medium, description, featured);
    }
  } else {
    toast('Please select an image file or enter a path', true);
  }
}

async function updateArtwork(index, src, title, medium, description, featured) {
  const art = currentArtworks[index];
  
  if (window.supabase && art.id) {
    const { error } = await supabaseClient.from('artworks').update({ src, title, medium, description, featured }).eq('id', art.id);
    if (error) { toast('Error updating artwork', true); return; }
  } else {
     const artworks = getData('yk_artworks', defaultArtworks);
     artworks[index] = { ...artworks[index], src, title, medium, description, featured };
     localStorage.setItem('yk_artworks', JSON.stringify(artworks));
  }
  
  cancelEdit();
  await loadGalleryAdmin();
  toast('Artwork updated successfully!');
}

async function saveNewArtwork(src, title, medium, description, featured) {
  const order_idx = currentArtworks.length > 0 ? Math.max(...currentArtworks.map(a => a.order_idx || 0)) + 1 : 0;
  
  if (window.supabase) {
    const { error } = await supabaseClient.from('artworks').insert([{ src, title, medium, description, featured, order_idx }]);
    if (error) { toast('Error saving artwork', true); return; }
  } else {
     const artworks = getData('yk_artworks', defaultArtworks);
     artworks.push({ src, title, medium, description, featured });
     localStorage.setItem('yk_artworks', JSON.stringify(artworks));
  }
  
  await loadGalleryAdmin();
  clearArtworkForm();
  toast('Artwork added successfully!');
}

async function deleteArtwork(index) {
  if (!confirm('Remove this artwork from the gallery?')) return;
  const art = currentArtworks[index];
  
  if (window.supabase && art.id) {
    const { error } = await supabaseClient.from('artworks').delete().eq('id', art.id);
    if (error) { toast('Error deleting artwork', true); return; }
  } else {
    const artworks = getData('yk_artworks', defaultArtworks);
    artworks.splice(index, 1);
    localStorage.setItem('yk_artworks', JSON.stringify(artworks));
  }
  
  await loadGalleryAdmin();
  toast('Artwork removed');
}

async function moveArtwork(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= currentArtworks.length) return;
  
  const currentArt = currentArtworks[index];
  const targetArt = currentArtworks[targetIndex];
  
  const tempOrder = currentArt.order_idx !== undefined ? currentArt.order_idx : index;
  currentArt.order_idx = targetArt.order_idx !== undefined ? targetArt.order_idx : targetIndex;
  targetArt.order_idx = tempOrder;
  
  if (window.supabase && currentArt.id && targetArt.id) {
    await supabaseClient.from('artworks').update({ order_idx: currentArt.order_idx }).eq('id', currentArt.id);
    await supabaseClient.from('artworks').update({ order_idx: targetArt.order_idx }).eq('id', targetArt.id);
  } else {
    const artworks = getData('yk_artworks', defaultArtworks);
    const temp = artworks[index];
    artworks[index] = artworks[targetIndex];
    artworks[targetIndex] = temp;
    localStorage.setItem('yk_artworks', JSON.stringify(artworks));
  }
  
  await loadGalleryAdmin();
}

async function toggleFeatured(index) {
  const art = currentArtworks[index];
  art.featured = !art.featured;
  
  if (window.supabase && art.id) {
    const { error } = await supabaseClient.from('artworks').update({ featured: art.featured }).eq('id', art.id);
    if (error) { toast('Error updating artwork', true); return; }
  } else {
    const artworks = getData('yk_artworks', defaultArtworks);
    artworks[index].featured = art.featured;
    localStorage.setItem('yk_artworks', JSON.stringify(artworks));
  }
  
  await loadGalleryAdmin();
  toast(art.featured ? 'Added to Selected Works' : 'Removed from Selected Works');
}

function clearArtworkForm() {
  document.getElementById('artworkFile').value = '';
  document.getElementById('artworkPath').value = '';
  document.getElementById('artworkTitle').value = '';
  document.getElementById('artworkMedium').value = '';
  document.getElementById('artworkDesc').value = '';
  document.getElementById('artworkFeatured').checked = false;
}

// ════════════════════════
//  ABOUT MANAGEMENT
// ════════════════════════

async function loadAboutAdmin() {
  let about = defaultAbout;
  if (window.supabase) {
    const { data, error } = await supabaseClient.from('about').select('*').eq('id', 1).single();
    if (!error && data) about = data;
  } else {
    about = getData('yk_about', defaultAbout);
  }
  document.getElementById('aboutBio').value = about.bio || '';
  document.getElementById('aboutQuote').value = about.quote || '';
  document.getElementById('aboutP2').value = about.para2 || '';
  document.getElementById('aboutP3').value = about.para3 || '';
  document.getElementById('aboutP4').value = about.para4 || '';
  document.getElementById('aboutP5').value = about.para5 || '';
}

async function saveAbout() {
  const about = {
    bio: document.getElementById('aboutBio').value,
    quote: document.getElementById('aboutQuote').value,
    para2: document.getElementById('aboutP2').value,
    para3: document.getElementById('aboutP3').value,
    para4: document.getElementById('aboutP4').value,
    para5: document.getElementById('aboutP5').value
  };
  
  if (window.supabase) {
    const { error } = await supabaseClient.from('about').update(about).eq('id', 1);
    if (error) { toast('Error saving About section', true); return; }
  } else {
    localStorage.setItem('yk_about', JSON.stringify(about));
  }
  toast('About section saved!');
}

// ════════════════════════
//  EXHIBITION MANAGEMENT
// ════════════════════════

async function loadExhibitionAdmin() {
  let exh = defaultExhibition;
  if (window.supabase) {
    const { data, error } = await supabaseClient.from('exhibition').select('*').eq('id', 1).single();
    if (!error && data) exh = data;
  } else {
    exh = getData('yk_exhibition', defaultExhibition);
  }
  document.getElementById('exhEnabled').checked = exh.enabled;
  document.getElementById('exhLabel').value = exh.label || '';
  document.getElementById('exhTitle').value = exh.title || '';
  document.getElementById('exhSubtitle').value = exh.subtitle || '';
  document.getElementById('exhVenue').value = exh.venue || '';
  document.getElementById('exhCity').value = exh.city || '';
  document.getElementById('exhDates').value = exh.dates || '';
  document.getElementById('exhDesc').value = exh.description || '';
}

async function saveExhibition() {
  const exh = {
    enabled: document.getElementById('exhEnabled').checked,
    label: document.getElementById('exhLabel').value,
    title: document.getElementById('exhTitle').value,
    subtitle: document.getElementById('exhSubtitle').value,
    venue: document.getElementById('exhVenue').value,
    city: document.getElementById('exhCity').value,
    dates: document.getElementById('exhDates').value,
    description: document.getElementById('exhDesc').value
  };
  
  if (window.supabase) {
    const { error } = await supabaseClient.from('exhibition').update(exh).eq('id', 1);
    if (error) { toast('Error saving Exhibition', true); return; }
  } else {
    localStorage.setItem('yk_exhibition', JSON.stringify(exh));
  }
  toast('Exhibition settings saved!');
}

// ════════════════════════
//  QUOTE MANAGEMENT
// ════════════════════════

async function loadQuoteAdmin() {
  let quote = defaultHeroQuote;
  if (window.supabase) {
    const { data, error } = await supabaseClient.from('site_settings').select('hero_quote').eq('id', 1).single();
    if (!error && data) quote = data.hero_quote;
  } else {
    quote = localStorage.getItem('yk_hero_quote') || defaultHeroQuote;
  }
  document.getElementById('heroQuote').value = quote;
}

async function saveQuote() {
  const quote = document.getElementById('heroQuote').value;
  if (window.supabase) {
    const { error } = await supabaseClient.from('site_settings').update({ hero_quote: quote }).eq('id', 1);
    if (error) { toast('Error saving Quote', true); return; }
  } else {
    localStorage.setItem('yk_hero_quote', quote);
  }
  toast('Quote saved!');
}
