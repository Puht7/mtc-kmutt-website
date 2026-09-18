// ==========================================================================
// MTC - Maintenance Technology Center | KMUTT
// Controller: White-Navy Theme with KMUTT Orange Accents & Scopus Integration
// ==========================================================================

let currentLang = localStorage.getItem('mtc_lang') || 'th';
let activeModalTechId = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTechCards();
  initTeamMembers();
  initApplications();
  initServices();
  initModalListeners();
  initMobileMenu();
  initContactForm();
  initHeroWaveAnimation();
});

// --------------------------------------------------------------------------
// Language Management
// --------------------------------------------------------------------------
function initLanguage() {
  updateLanguageUI(currentLang);

  const btnTh = document.getElementById('lang-th');
  const btnEn = document.getElementById('lang-en');

  if (btnTh && btnEn) {
    btnTh.addEventListener('click', () => switchLanguage('th'));
    btnEn.addEventListener('click', () => switchLanguage('en'));
  }
}

function switchLanguage(lang) {
  if (lang !== 'th' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('mtc_lang', lang);
  updateLanguageUI(lang);
  initTechCards();
  initTeamMembers();
  initApplications();
  initServices();

  // If modal is open, re-render it
  if (activeModalTechId) {
    openTechModal(activeModalTechId);
  }
}

function updateLanguageUI(lang) {
  const t = siteData[lang];
  const btnTh = document.getElementById('lang-th');
  const btnEn = document.getElementById('lang-en');

  if (btnTh && btnEn) {
    if (lang === 'th') {
      btnTh.className = "px-3 py-1 text-xs font-semibold rounded-full bg-[#162f55] text-white shadow-sm transition";
      btnEn.className = "px-3 py-1 text-xs font-semibold rounded-full text-slate-500 hover:text-[#162f55] transition";
    } else {
      btnTh.className = "px-3 py-1 text-xs font-semibold rounded-full text-slate-500 hover:text-[#162f55] transition";
      btnEn.className = "px-3 py-1 text-xs font-semibold rounded-full bg-[#162f55] text-white shadow-sm transition";
    }
  }

  // Update Navigation links
  setElementText('nav-about', t.nav.about);
  setElementText('nav-strengths', t.nav.strengths);
  setElementText('nav-team', t.nav.team);
  setElementText('nav-apps', t.nav.applications);
  setElementText('nav-services', t.nav.services);
  setElementText('nav-contact', t.nav.contact);
  setElementText('nav-cta-btn', t.nav.cta);

  // Mobile nav links
  setElementText('mob-nav-about', t.nav.about);
  setElementText('mob-nav-strengths', t.nav.strengths);
  setElementText('mob-nav-team', t.nav.team);
  setElementText('mob-nav-apps', t.nav.applications);
  setElementText('mob-nav-services', t.nav.services);
  setElementText('mob-nav-contact', t.nav.contact);

  // Hero Section
  setElementText('hero-badge', t.hero.badge);
  setElementText('hero-title-start', t.hero.title_start);
  setElementText('hero-title-highlight', t.hero.title_highlight);
  setElementText('hero-subtitle', t.hero.subtitle);
  setElementText('hero-btn-explore', t.hero.btn_explore);
  setElementText('hero-btn-contact', t.hero.btn_contact);

  // Hero Stats Grid (Including Combined Citations)
  const statsContainer = document.getElementById('hero-stats');
  if (statsContainer) {
    statsContainer.innerHTML = t.hero.stats.map(s => {
      const isHighlight = s.highlight;
      return `
        <div class="white-card rounded-2xl p-4 sm:p-5 border text-center ${isHighlight ? 'border-orange-300 ring-2 ring-orange-500/20 bg-orange-50/20' : 'border-slate-200'} stripe-orange-top">
          <div class="text-2xl lg:text-3xl font-extrabold ${isHighlight ? 'text-[#f05a28]' : 'text-[#162f55]'} mb-1 font-mono">${s.value}</div>
          <div class="text-[11px] sm:text-xs text-slate-600 font-medium">${s.label}</div>
        </div>
      `;
    }).join('');
  }

  // About Section
  setElementText('about-badge', t.about.badge);
  setElementText('about-title', t.about.title);
  setElementText('about-desc-1', t.about.desc_1);
  setElementText('about-desc-2', t.about.desc_2);

  const pillarsContainer = document.getElementById('about-pillars');
  if (pillarsContainer) {
    pillarsContainer.innerHTML = t.about.pillars.map((p, idx) => `
      <div class="white-card p-6 rounded-2xl border-l-4 border-l-[#f05a28] shadow-sm">
        <h4 class="text-base font-bold text-[#162f55] mb-1.5">${p.title}</h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${p.desc}</p>
      </div>
    `).join('');
  }

  // Tech Section Headers
  setElementText('tech-badge', t.technologies.badge);
  setElementText('tech-title', t.technologies.title);
  setElementText('tech-subtitle', t.technologies.subtitle);
  setElementText('tech-hint', t.technologies.click_hint);

  // Team Section Headers
  setElementText('team-badge', t.team.badge);
  setElementText('team-title', t.team.title);
  setElementText('team-subtitle', t.team.subtitle);

  // Applications Section Headers
  setElementText('app-badge', t.applications.badge);
  setElementText('app-title', t.applications.title);
  setElementText('app-subtitle', t.applications.subtitle);

  // Services Section Headers
  setElementText('services-badge', t.services.badge);
  setElementText('services-title', t.services.title);
  setElementText('services-subtitle', t.services.subtitle);

  // Contact Section
  setElementText('contact-badge', t.contact.badge);
  setElementText('contact-title', t.contact.title);
  setElementText('contact-addr-title', t.contact.address_title);
  setElementText('contact-address', t.contact.address);
  setElementText('contact-email-title', t.contact.email_title);
  setElementText('contact-phone-title', t.contact.phone_title);
  setElementText('form-btn-submit', t.contact.form_submit);

  setPlaceholder('input-name', t.contact.form_name);
  setPlaceholder('input-email', t.contact.form_email);
  setPlaceholder('input-org', t.contact.form_org);
  setPlaceholder('input-topic', t.contact.form_topic);
  setPlaceholder('input-message', t.contact.form_message);

  // Footer
  setElementText('footer-univ', t.footer.univ);
  setElementText('footer-copyright', t.footer.copyright);
  setElementText('footer-rights', t.footer.rights);
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setPlaceholder(id, placeholder) {
  const el = document.getElementById(id);
  if (el) el.placeholder = placeholder;
}

// --------------------------------------------------------------------------
// 5 Core Technologies Card Rendering & Modal
// --------------------------------------------------------------------------
function initTechCards() {
  const container = document.getElementById('tech-cards-container');
  if (!container) return;

  const items = siteData[currentLang].technologies.items;

  container.innerHTML = items.map((item, idx) => `
    <div class="white-card rounded-2xl p-7 flex flex-col justify-between cursor-pointer group hover:border-[#162f55] transition-all duration-300 stripe-navy-top"
         onclick="openTechModal('${item.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold badge-navy-light">
            ${item.tag}
          </span>
          <span class="text-3xl font-black text-slate-300 group-hover:text-[#f05a28] transition-colors font-mono">
            ${item.number}
          </span>
        </div>

        <h3 class="text-lg font-bold text-[#162f55] group-hover:text-[#f05a28] transition-colors mb-1.5 leading-snug">
          ${item.title}
        </h3>
        
        ${currentLang === 'th' ? `
          <div class="text-xs font-medium text-orange-600 mb-3">${item.title_th}</div>
        ` : ''}

        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          ${item.summary}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#162f55] group-hover:text-[#f05a28] group-hover:translate-x-1 transition-all">
        <span>${currentLang === 'th' ? 'ดูรายละเอียดทางเทคนิค' : 'View Technical Details'}</span>
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </div>
    </div>
  `).join('');
}

function openTechModal(techId) {
  activeModalTechId = techId;
  const item = siteData[currentLang].technologies.items.find(i => i.id === techId);
  if (!item) return;

  const modal = document.getElementById('tech-modal');
  if (!modal) return;

  document.getElementById('modal-tech-num').textContent = item.number;
  document.getElementById('modal-tech-tag').textContent = item.tag;
  document.getElementById('modal-tech-title').textContent = item.title;
  
  const subTitleEl = document.getElementById('modal-tech-sub');
  if (subTitleEl) {
    subTitleEl.textContent = currentLang === 'th' ? item.title_th : '';
    subTitleEl.style.display = currentLang === 'th' ? 'block' : 'none';
  }

  document.getElementById('modal-tech-lead').textContent = `"${item.detail_lead}"`;

  const detailsList = document.getElementById('modal-tech-details');
  if (detailsList) {
    detailsList.innerHTML = item.details.map(d => `
      <li class="flex items-start text-xs sm:text-sm text-slate-700">
        <span class="inline-block w-2 h-2 rounded-full bg-[#f05a28] mt-1.5 mr-3 flex-shrink-0"></span>
        <span class="leading-relaxed">${d}</span>
      </li>
    `).join('');
  }

  document.getElementById('modal-tech-equipment').textContent = item.equipment;
  document.getElementById('modal-tech-applications').textContent = item.applications;

  document.getElementById('modal-lbl-details').textContent = currentLang === 'th' ? 'รายละเอียดและหลักการทำงาน:' : 'Key Capabilities & Principles:';
  document.getElementById('modal-lbl-equipment').textContent = currentLang === 'th' ? 'เครื่องมือและอุปกรณ์วิจัย:' : 'Research Instruments:';
  document.getElementById('modal-lbl-applications').textContent = currentLang === 'th' ? 'การประยุกต์ใช้งานเชิงอุตสาหกรรม:' : 'Industrial Applications:';

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTechModal() {
  const modal = document.getElementById('tech-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  activeModalTechId = null;
}

function initModalListeners() {
  const modal = document.getElementById('tech-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeTechModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeTechModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTechModal();
  });
}

// --------------------------------------------------------------------------
// KMUTT NDT Research Team Rendering (With Scopus Button)
// --------------------------------------------------------------------------
function initTeamMembers() {
  const container = document.getElementById('team-cards-container');
  if (!container) return;

  const teamData = siteData[currentLang].team;
  const members = teamData.members;

  container.innerHTML = members.map(m => `
    <div class="white-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between hover:border-[#162f55] transition-all duration-300 group stripe-orange-top">
      <div>
        <!-- Card Header: Photo + Details + Scopus -->
        <div class="flex items-start gap-4 sm:gap-5 mb-5">
          <!-- Profile Image -->
          <div class="w-18 h-22 sm:w-22 sm:h-26 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#f05a28] transition-colors flex-shrink-0 relative shadow-sm">
            <img src="${m.image}" alt="${m.name}" 
                 class="w-full h-full object-cover object-top" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center text-[#162f55] font-bold font-mono text-xl sm:text-2xl">
              ${m.initials}
            </div>
          </div>

          <!-- Name, Academic Title & Scopus Button -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#f05a28]">
                Principal Investigator
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-[#162f55] group-hover:text-[#f05a28] transition-colors leading-snug">
              ${m.name}
            </h3>
            ${currentLang === 'th' ? `
              <div class="text-xs font-semibold text-slate-500 mb-1">${m.name_th}</div>
            ` : ''}
            <div class="text-xs font-medium text-slate-600 leading-tight mb-2">
              ${currentLang === 'th' ? m.position_th : m.position}
            </div>

            <!-- Scopus Profile Button (If available) -->
            ${m.scopus ? `
              <a href="${m.scopus}" target="_blank" rel="noopener noreferrer" 
                 class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold text-[#ea580c] bg-orange-50 hover:bg-orange-100 border border-orange-200/80 hover:border-orange-400 transition-all shadow-xs group/btn">
                <svg class="w-3.5 h-3.5 text-[#ea580c]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 13.5l-7-3.18V18l7 4 7-4v-5.68l-7 3.18z"/>
                </svg>
                <span>${teamData.scopus_btn_lbl || 'Scopus Profile'}</span>
                <svg class="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Profile Biography -->
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          ${m.profile}
        </p>

        <!-- Key Expertise Badges -->
        <div class="mb-5">
          <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            ${teamData.key_expertise_lbl}
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${m.expertise.map(exp => `
              <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-[#162f55] border border-slate-200 group-hover:border-[#162f55]/30 transition-colors">
                ${exp}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Highlighted Box: Role in the Project -->
      <div class="pt-4 mt-2 border-t border-slate-100">
        <div class="p-3.5 rounded-xl bg-slate-50 border-l-4 border-l-[#f05a28] text-xs text-slate-700 leading-relaxed border border-slate-200">
          <span class="font-bold text-[#162f55] block mb-1">${teamData.role_in_project_lbl}</span>
          ${m.role_in_project}
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// Applications Section Rendering
// --------------------------------------------------------------------------
function initApplications() {
  const container = document.getElementById('applications-container');
  if (!container) return;

  const sectors = siteData[currentLang].applications.sectors;

  const icons = {
    train: `<svg class="w-7 h-7 text-[#162f55]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7h8m-8 4h8m-6 4h4m-8 5l2-2h8l2 2m-12-3h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    factory: `<svg class="w-7 h-7 text-[#162f55]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    flame: `<svg class="w-7 h-7 text-[#162f55]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/></svg>`,
    plane: `<svg class="w-7 h-7 text-[#162f55]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`
  };

  container.innerHTML = sectors.map(sec => `
    <div class="white-card rounded-2xl p-6 border border-slate-200 stripe-navy-top">
      <div class="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
        ${icons[sec.icon] || icons.factory}
      </div>
      <h4 class="text-base font-bold text-[#162f55] mb-2">${sec.title}</h4>
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${sec.desc}</p>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// Services Section Rendering
// --------------------------------------------------------------------------
function initServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  const services = siteData[currentLang].services.list;

  container.innerHTML = services.map((srv, idx) => `
    <div class="white-card rounded-2xl p-6 border border-slate-200 flex items-start space-x-4">
      <div class="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 text-[#f05a28] font-bold font-mono">
        0${idx + 1}
      </div>
      <div>
        <h4 class="text-base font-bold text-[#162f55] mb-1">${srv.title}</h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${srv.desc}</p>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// Mobile Navigation Menu
// --------------------------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    const links = menu.querySelectorAll('a');
    links.forEach(l => {
      l.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

// --------------------------------------------------------------------------
// Contact Form
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertEl = document.getElementById('form-alert');

  if (form && alertEl) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alertEl.textContent = siteData[currentLang].contact.form_success;
      alertEl.classList.remove('hidden');
      form.reset();

      setTimeout(() => {
        alertEl.classList.add('hidden');
      }, 6000);
    });
  }
}

// --------------------------------------------------------------------------
// Hero Background Waveform Canvas (Clean Light Tone)
// --------------------------------------------------------------------------
function initHeroWaveAnimation() {
  const canvas = document.getElementById('heroWaveCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement.clientHeight || 550;
  }
  resize();
  window.addEventListener('resize', resize);

  let step = 0;
  function drawHeroWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width;
    const h = canvas.height;

    const waves = [
      { color: 'rgba(22, 47, 85, 0.04)', freq: 0.003, speed: 0.012, amp: 30, yOffset: h * 0.70 },
      { color: 'rgba(240, 90, 40, 0.035)', freq: 0.002, speed: 0.018, amp: 40, yOffset: h * 0.75 }
    ];

    waves.forEach(wave => {
      ctx.beginPath();
      ctx.fillStyle = wave.color;
      ctx.moveTo(0, h);

      for (let x = 0; x <= w; x += 12) {
        const y = wave.yOffset + Math.sin(x * wave.freq + step * wave.speed) * wave.amp;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();
    });

    step++;
    requestAnimationFrame(drawHeroWaves);
  }
  drawHeroWaves();
}
