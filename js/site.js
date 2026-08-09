const AREA_I18N = {
  "Tributario": { es: "Tributario", en: "Tax" },
  "Compliance": { es: "Compliance", en: "Compliance" },
  "Extinción de Dominio": { es: "Extinción de Dominio", en: "Asset Forfeiture" },
  "Administrativo": { es: "Administrativo", en: "Administrative" },
  "Regulación & Riesgo": { es: "Regulación & Riesgo", en: "Regulation & Risk" },
  "Corporativo": { es: "Corporativo", en: "Corporate" },
};

const TEAM = [
  {
    id: "andres-avila",
    name: "Andrés Ávila Ávila",
    last: "Ávila",
    role: { es: "Director Ejecutivo", en: "Managing Director" },
    areas: ["Tributario", "Compliance", "Extinción de Dominio", "Administrativo"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-14-at-9.06.51-PM.jpeg",
    bio: {
      es: "Abogado y especialista en Derecho Constitucional, con más de 15 años de experiencia en entidades del sector público, con énfasis en impuestos y aduanas, administración de activos, políticas anti-lavado, compliance y compras públicas.",
      en: "Attorney and Constitutional Law specialist with more than 15 years of experience in public-sector entities, focused on tax and customs, asset administration, AML policy, compliance, and public procurement.",
    },
  },
  {
    id: "gissela-arias",
    name: "Gissela Arias González",
    last: "Arias",
    role: { es: "Socia", en: "Partner" },
    areas: ["Administrativo", "Regulación & Riesgo", "Compliance"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-02-at-4.08.28-PM.jpeg",
    bio: {
      es: "Abogada y especialista en Derecho Público, Magíster en Gobierno y Políticas Públicas, candidata a LL.M. de Columbia University. 15 años en análisis y divulgación de políticas públicas.",
      en: "Attorney and Public Law specialist, Master in Government and Public Policy, LL.M. candidate at Columbia University. 15 years analyzing and communicating public policy.",
    },
  },
  {
    id: "silvio-benavides",
    name: "Silvio Benavides Rosero",
    last: "Benavides",
    role: { es: "Asociado – Director de Impuestos", en: "Associate – Tax Director" },
    areas: ["Tributario"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2025/11/Foto.png",
    bio: {
      es: "Abogado y especialista en Derecho Tributario, con más de diez años de experiencia en análisis, interpretación y aplicación de la normativa tributaria y de hacienda pública.",
      en: "Attorney and Tax Law specialist with more than ten years of experience analyzing, interpreting, and applying tax and public-finance rules.",
    },
  },
  {
    id: "andrea-trejos",
    name: "Andrea Trejos Zarate",
    last: "Trejos",
    role: { es: "Directora Operativa", en: "Operations Director" },
    areas: ["Corporativo", "Compliance"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-14-at-9.06.51-PM-1.jpeg",
    bio: {
      es: "Abogada y especialista en Derecho Comercial, con énfasis en derecho societario, manejo de riesgos y cumplimiento normativo.",
      en: "Attorney and Commercial Law specialist focused on corporate law, risk management, and regulatory compliance.",
    },
  },
  {
    id: "maria-avila",
    name: "María Ávila Gaviria",
    last: "Ávila",
    role: { es: "Asociada – Directora de Investigación Criminal", en: "Associate – Criminal Investigation Director" },
    areas: ["Extinción de Dominio", "Compliance"],
    location: "Bogotá / Florida",
    photo: "https://aaalegal.com.co/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-2.06.55-PM.jpeg",
    bio: {
      es: "Abogada admitida al ejercicio profesional en el Estado de Florida. Experiencia en Criminal Law, extradición e investigación criminal.",
      en: "Attorney admitted to practice in the State of Florida. Experience in criminal law, extradition, and criminal investigation.",
    },
  },
  {
    id: "carlos-urbina",
    name: "Carlos Urbina Morales",
    last: "Urbina",
    role: { es: "Asociado", en: "Associate" },
    areas: ["Extinción de Dominio", "Administrativo"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-14-at-9.06.50-PM.jpeg",
    bio: {
      es: "Especialista en derecho sancionador, disciplinario, responsabilidad fiscal y extinción de dominio.",
      en: "Specialist in sanctioning, disciplinary, fiscal liability, and asset-forfeiture law.",
    },
  },
  {
    id: "gilberto-arias",
    name: "Gilberto Arias Sarabia",
    last: "Arias",
    role: { es: "Asociado", en: "Associate" },
    areas: ["Tributario"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-14-at-9.06.53-PM.jpeg",
    bio: {
      es: "Enfoque en asesoría y defensa en procedimientos sancionatorios fiscales y gestión de riesgos impositivos.",
      en: "Focused on advice and defense in tax sanctioning proceedings and tax-risk management.",
    },
  },
  {
    id: "julian-aldana",
    name: "Julian Aldana Arias",
    last: "Aldana",
    role: { es: "Asociado", en: "Associate" },
    areas: ["Corporativo", "Compliance"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-02-at-4.04.57-PM.jpeg",
    bio: {
      es: "Asesoría empresarial, estructuración societaria, compliance y propiedad intelectual.",
      en: "Business advisory, corporate structuring, compliance, and intellectual property.",
    },
  },
  {
    id: "ramiro-avila",
    name: "Ramiro Ávila Chacón",
    last: "Ávila",
    role: { es: "Asociado – Legal Tech", en: "Associate – Legal Tech" },
    areas: ["Regulación & Riesgo", "Corporativo"],
    location: "Bogotá",
    photo: "https://aaalegal.com.co/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-24-at-7.14.50-AM.jpeg",
    bio: {
      es: "Ingeniero de Sistemas con enfoque en Legal Tech, automatización de procesos legales e IA aplicada al derecho.",
      en: "Systems engineer focused on Legal Tech, legal-process automation, and AI applied to law.",
    },
  },
];

function localized(value, lang = getLang()) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] || value.es || "";
  }
  return value;
}

function renderNewsCards(limit = null) {
  const grid = document.querySelector("[data-news-grid]");
  if (!grid || typeof NEWS_ITEMS === "undefined") return;
  const lang = getLang();
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  grid.innerHTML = items
    .map(
      (n) => `
    <article class="content-card insight reveal is-visible">
      <a class="insight-media" href="${n.url}" target="_blank" rel="noopener">
        <img src="${n.img}" alt="" loading="lazy" />
      </a>
      <time datetime="${n.date}">${localized(n.dateLabel, lang)}</time>
      <h3>${localized(n.title, lang)}</h3>
      <p>${localized(n.body, lang)}</p>
    </article>`
    )
    .join("");
}

function renderEventRows() {
  const list = document.querySelector("[data-events-list]");
  if (!list || typeof EVENT_ITEMS === "undefined") return;
  const lang = getLang();
  list.innerHTML = EVENT_ITEMS.map(
    (e) => `
    <article class="event-row reveal is-visible">
      <div class="event-thumb"><img src="${e.img}" alt="" loading="lazy" /></div>
      <div>
        <time class="meta" datetime="${e.date}">${localized(e.dateLabel, lang)}</time>
        <h3>${localized(e.title, lang)}</h3>
        <p>${localized(e.body, lang)}</p>
      </div>
      <span class="meta">${localized(e.place, lang)}</span>
    </article>`
  ).join("");
}

function renderHomeNews() {
  const grid = document.querySelector("[data-home-news]");
  if (!grid || typeof NEWS_ITEMS === "undefined") return;
  const lang = getLang();
  grid.innerHTML = NEWS_ITEMS.slice(0, 6)
    .map(
      (n) => `
    <article class="insight reveal is-visible">
      <a class="insight-media" href="noticias.html">
        <img src="${n.img}" alt="" loading="lazy" />
      </a>
      <time datetime="${n.date}">${localized(n.dateLabel, lang)}</time>
      <h3>${localized(n.title, lang)}</h3>
      <p>${localized(n.body, lang)}</p>
    </article>`
    )
    .join("");
}

function renderHomeEvents() {
  const list = document.querySelector("[data-home-events]");
  if (!list || typeof EVENT_ITEMS === "undefined") return;
  const lang = getLang();
  list.innerHTML = EVENT_ITEMS.map(
    (e) => `
    <article class="event-row">
      <div class="event-thumb"><img src="${e.img}" alt="" loading="lazy" /></div>
      <div>
        <time class="meta" datetime="${e.date}">${localized(e.dateLabel, lang)}</time>
        <h3>${localized(e.title, lang)}</h3>
        <p>${localized(e.body, lang)}</p>
      </div>
      <a class="btn btn-ghost-dark" href="eventos.html">${t("home.learn", lang)}</a>
    </article>`
  ).join("");
}


function areaLabel(area, lang = getLang()) {
  return (AREA_I18N[area] && AREA_I18N[area][lang]) || area;
}

function pathPrefix() {
  const parts = location.pathname.split("/").filter(Boolean);
  if (parts.length >= 2 && parts[parts.length - 2] === "equipo") return "../";
  return "";
}

function renderHeader(active) {
  const base = pathPrefix();
  return `
  <header class="site-header ${active === "home" ? "" : "is-solid"}" data-header>
    <div class="header-inner">
      <div class="header-top">
        <nav class="utility-nav" data-i18n-aria="nav.utility" aria-label="Utilidad">
          <a href="${base}noticias.html" class="${active === "noticias" ? "is-active" : ""}" data-i18n="nav.news">Noticias</a>
          <a href="${base}eventos.html" class="${active === "eventos" ? "is-active" : ""}" data-i18n="nav.events">Eventos</a>
          <a href="${base}articulos.html" class="${active === "articulos" ? "is-active" : ""}" data-i18n="nav.articles">Artículos</a>
          <a href="${base}contacto.html" class="${active === "contacto" ? "is-active" : ""}" data-i18n="nav.contact">Contacto</a>
        </nav>
        <div class="lang-switch" role="group" data-i18n-aria="lang.label" aria-label="Idioma">
          <button type="button" data-set-lang="es">ES</button>
          <button type="button" data-set-lang="en">EN</button>
        </div>
      </div>
      <div class="primary-bar">
        <a class="brand" href="${base}index.html" aria-label="Ávila Arias & Asociados">
          <img src="${base}logo-aaa-plate.png" alt="" />
          <span class="brand-text">Ávila Arias<br /><span data-i18n="brand.associates">& Asociados</span></span>
        </a>
        <nav class="primary-nav" data-i18n-aria="nav.primary" aria-label="Principal">
          <a href="${base}areas-practicas.html" class="${active === "areas" ? "is-active" : ""}" data-i18n="nav.areas">Áreas</a>
          <a href="${base}equipo.html" class="${active === "equipo" ? "is-active" : ""}" data-i18n="nav.team">Equipo</a>
          <a href="${base}noticias.html" class="${active === "noticias" ? "is-active" : ""}" data-i18n="nav.insights">Insights</a>
          <a href="${base}biografia.html" class="${active === "biografia" ? "is-active" : ""}" data-i18n="nav.firm">Firma</a>
        </nav>
        <button class="menu-toggle" type="button" data-menu-toggle data-i18n="nav.menu" data-i18n-aria="nav.menu">Menú</button>
      </div>
      <nav class="mobile-nav" data-mobile-nav data-i18n-aria="nav.mobile" aria-label="Móvil">
        <a href="${base}areas-practicas.html" data-i18n="nav.areas">Áreas</a>
        <a href="${base}equipo.html" data-i18n="nav.team">Equipo</a>
        <a href="${base}noticias.html" data-i18n="nav.news">Noticias</a>
        <a href="${base}eventos.html" data-i18n="nav.events">Eventos</a>
        <a href="${base}articulos.html" data-i18n="nav.articles">Artículos</a>
        <a href="${base}biografia.html" data-i18n="nav.bio">Biografía</a>
        <a href="${base}contacto.html" data-i18n="nav.contact">Contacto</a>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  const base = pathPrefix();
  return `
  <footer class="site-footer" id="contacto-footer">
    <div class="footer-grid">
      <div>
        <h3>Ávila Arias <span data-i18n="brand.associates">&amp; Asociados</span></h3>
        <p data-i18n="footer.tagline">Innovación y excelencia en consultoría jurídica para empresas y decisores en Colombia.</p>
      </div>
      <div>
        <h3 data-i18n="footer.explore">Explorar</h3>
        <a href="${base}areas-practicas.html" data-i18n="footer.areas">Áreas de práctica</a>
        <a href="${base}equipo.html" data-i18n="nav.team">Equipo</a>
        <a href="${base}noticias.html" data-i18n="nav.news">Noticias</a>
        <a href="${base}eventos.html" data-i18n="nav.events">Eventos</a>
      </div>
      <div>
        <h3 data-i18n="footer.resources">Recursos</h3>
        <a href="${base}articulos.html" data-i18n="nav.articles">Artículos</a>
        <a href="${base}biografia.html" data-i18n="nav.bio">Biografía</a>
        <a href="${base}contacto.html" data-i18n="nav.contact">Contacto</a>
      </div>
      <div>
        <h3 data-i18n="footer.contact">Contacto</h3>
        <a href="mailto:contactenos@aaalegal.com.co">contactenos@aaalegal.com.co</a>
        <p>+57 315 2392180</p>
        <p>Calle 94 # 13-42, Bogotá</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.mock">Mockup HTML · estilo GT aplicado a AAA Legal</span>
      <span data-i18n="footer.note">No es el sitio en producción</span>
    </div>
  </footer>`;
}
function initChrome() {
  const active = document.body.dataset.page || "home";
  const mountHeader = document.querySelector("[data-site-header]");
  const mountFooter = document.querySelector("[data-site-footer]");
  if (mountHeader) mountHeader.outerHTML = renderHeader(active);
  if (mountFooter) mountFooter.outerHTML = renderFooter();

  const toggle = document.querySelector("[data-menu-toggle]");
  const mobile = document.querySelector("[data-mobile-nav]");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => mobile.classList.toggle("is-open"));
  }

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-set-lang");
      setLang(lang);
      applyI18n(lang);
    });
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    io.observe(el);
  });
}

function normalize(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function initTeamDirectory() {
  const grid = document.querySelector("[data-team-grid]");
  if (!grid) return;

  const countEl = document.querySelector("[data-team-count]");
  const searchInput = document.querySelector("[data-team-search]");
  const alphaBar = document.querySelector("[data-alpha-bar]");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const base = pathPrefix();

  let state = { q: "", letter: "", area: "" };

  const letters = [...new Set(TEAM.map((p) => normalize(p.last)[0].toUpperCase()))];

  if (alphaBar) {
    const az = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphaBar.innerHTML = az
      .map((l) => {
        const enabled = letters.includes(l);
        return `<button type="button" data-letter="${l}" ${enabled ? "" : "disabled"}>${l}</button>`;
      })
      .join("");
  }

  function render() {
    const lang = getLang();
    const q = normalize(state.q);
    const visible = TEAM.filter((p) => {
      const hay = normalize(
        `${p.name} ${localized(p.role, lang)} ${p.areas.map((a) => areaLabel(a, lang)).join(" ")} ${localized(p.bio, lang)}`
      );
      const matchQ = !q || hay.includes(q);
      const matchL = !state.letter || normalize(p.last)[0].toUpperCase() === state.letter;
      const matchA = !state.area || p.areas.includes(state.area);
      return matchQ && matchL && matchA;
    });

    grid.innerHTML = visible
      .map(
        (p) => `
      <a class="person-card" href="${base}equipo/${p.id}.html">
        <div class="photo"><img src="${p.photo}" alt="${p.name}" loading="lazy" /></div>
        <div class="body">
          <h3>${p.name}</h3>
          <p class="role">${localized(p.role, lang)}</p>
          <p class="tags">${p.areas.slice(0, 2).map((a) => areaLabel(a, lang)).join(" · ")} · ${p.location}</p>
        </div>
      </a>`
      )
      .join("");

    if (countEl) {
      const tpl =
        visible.length === TEAM.length ? t("team.count.all", lang) : t("team.count.some", lang);
      countEl.textContent = tpl
        .replace("{n}", String(visible.length))
        .replace("{total}", String(TEAM.length));
    }
  }

  searchInput?.addEventListener("input", (e) => {
    state.q = e.target.value;
    state.letter = "";
    alphaBar?.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
    render();
  });

  document.querySelector("[data-team-submit]")?.addEventListener("click", (e) => {
    e.preventDefault();
    render();
  });

  alphaBar?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-letter]");
    if (!btn || btn.disabled) return;
    const letter = btn.dataset.letter;
    const same = state.letter === letter;
    state.letter = same ? "" : letter;
    alphaBar.querySelectorAll("button").forEach((b) => b.classList.toggle("is-active", !same && b === btn));
    render();
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const area = btn.dataset.filter;
      const same = state.area === area;
      state.area = same ? "" : area;
      filterButtons.forEach((b) => b.classList.toggle("is-active", !same && b === btn));
      render();
    });
  });

  window.addEventListener("aaa:langchange", render);
  render();
}

function initProfile() {
  const root = document.querySelector("[data-profile]");
  if (!root) return;
  const id = root.dataset.profile;
  const person = TEAM.find((p) => p.id === id);
  if (!person) return;
  const base = pathPrefix();

  function render() {
    const lang = getLang();
    root.innerHTML = `
    <div class="profile-photo"><img src="${person.photo}" alt="${person.name}" /></div>
    <div class="profile-main">
      <p class="eyebrow">${t("team.eyebrow", lang)}</p>
      <h1>${person.name}</h1>
      <p class="role">${localized(person.role, lang)}</p>
      <p>${localized(person.bio, lang)}</p>
      <p><strong>${t("team.areas", lang)}</strong> ${person.areas.map((a) => areaLabel(a, lang)).join(", ")}</p>
      <p><strong>${t("team.location", lang)}</strong> ${person.location}</p>
      <p style="margin-top:1.5rem"><a class="btn btn-ghost-dark" href="${base}equipo.html">${t("team.back", lang)}</a></p>
    </div>`;
  }

  window.addEventListener("aaa:langchange", render);
  render();
}

function initHeroSlider() {
  const root = document.querySelector("[data-hero-slider]");
  if (!root) return;
  const slides = [...root.querySelectorAll("[data-hero-slide]")];
  if (slides.length < 2) return;

  const pauseBtn = document.querySelector("[data-hero-pause]");
  let index = slides.findIndex((s) => s.classList.contains("is-active"));
  if (index < 0) index = 0;
  let paused = false;
  let timer = null;

  const show = (next) => {
    slides[index].classList.remove("is-active");
    index = (next + slides.length) % slides.length;
    slides[index].classList.add("is-active");
  };

  const tick = () => show(index + 1);

  const start = () => {
    stop();
    timer = window.setInterval(tick, 6500);
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      paused = !paused;
      pauseBtn.classList.toggle("is-paused", paused);
      pauseBtn.setAttribute("aria-label", paused ? t("home.resume") : t("home.pause"));
      pauseBtn.textContent = paused ? "▶" : "‖";
      if (paused) stop();
      else start();
    });
  }

  start();
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(t("contact.alert"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initChrome();
  applyI18n(getLang());
  initHeroSlider();
  initTeamDirectory();
  initProfile();
  initContactForm();
  renderNewsCards();
  renderEventRows();
  renderHomeNews();
  renderHomeEvents();
  window.addEventListener("aaa:langchange", () => {
    renderNewsCards();
    renderEventRows();
    renderHomeNews();
    renderHomeEvents();
  });
});
