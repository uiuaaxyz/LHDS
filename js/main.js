/* La Hermana de Shakespeare — interacciones del sitio */
(function () {
  "use strict";

  var C = window.LHDS || {};
  var ARCH = window.LHDS_ARCHIVO || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  var MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var MESES_L = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  var DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var DISC = { slam: "Slam de poesía", musica: "Música", taller: "Taller", cine: "Cine", expo: "Exposición" };

  var ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 4v12m-6-6 6 6 6-6M5 20h14"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20c4-1 7-3 10-6l6-6-4-4-6 6c-3 3-5 6-6 10z"/><path d="M13 7l4 4"/></svg>'
  };

  function parseFecha(f, h) {
    var p = f.split("-"), t = (h || "00:00").split(":");
    return new Date(+p[0], +p[1] - 1, +p[2], +t[0], +t[1]);
  }
  function hora12(h) {
    var t = h.split(":"), H = +t[0], ap = H >= 12 ? "p.m." : "a.m.";
    H = H % 12 || 12;
    return H + ":" + t[1] + " " + ap;
  }

  /* ---------- Datos generales en el HTML ---------- */
  function fillConfig() {
    var rev = C.revista || {};
    $$("[data-mag-name]").forEach(function (el) { el.textContent = rev.nombre || "Revista"; });
    $$("[data-mag-url]").forEach(function (el) { el.href = rev.url || "#"; });
    var mail = (C.contacto || {}).correo;
    $$("[data-mail]").forEach(function (el) {
      if (mail) { el.href = "mailto:" + mail; if (el.hasAttribute("data-mail-text")) el.textContent = mail; }
    });
    var redes = C.redes || {};
    $$("[data-social]").forEach(function (el) {
      var u = redes[el.getAttribute("data-social")];
      if (u) el.href = u; else el.parentNode.removeChild(el);
    });
    $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- Menú móvil ---------- */
  function initMenu() {
    var btn = $(".menu-toggle"), nav = $("#nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.textContent = open ? "Cerrar" : "Menú";
    });
    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.textContent = "Menú";
      });
    });
  }

  /* ---------- CTA flotante: se oculta sobre el hero y el footer ---------- */
  function initFloat() {
    var cta = $(".float-cta"), hero = $(".hero, .page-hero"), foot = $(".site-footer");
    if (!cta || !("IntersectionObserver" in window)) return;
    var vis = {};
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { vis[e.target.className] = e.isIntersecting; });
      var hide = Object.keys(vis).some(function (k) { return vis[k]; });
      cta.classList.toggle("hidden", hide);
    }, { threshold: 0.15 });
    if (hero) io.observe(hero);
    if (foot) io.observe(foot);
  }

  /* ---------- Cartelera ---------- */
  function proximos() {
    var hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    return (C.eventos || [])
      .map(function (e) { e._d = parseFecha(e.fecha, e.hora); return e; })
      .filter(function (e) { return e._d >= hoy; })
      .sort(function (a, b) { return a._d - b._d; });
  }

  function renderEventos(filtro) {
    var box = $("#events");
    if (!box) return;
    var evs = proximos().filter(function (e) { return !filtro || filtro === "todo" || e.disciplina === filtro; });
    if (!evs.length) {
      box.innerHTML = '<div class="events-empty">No hay eventos en esta categoría por ahora. Síguenos en redes para enterarte primero.</div>';
      return;
    }
    box.innerHTML = evs.map(function (e) {
      var d = e._d;
      return '<article class="event">' +
        '<div class="event-top">' +
          '<div class="event-date"><div class="day">' + d.getDate() + '</div><div class="mon">' + MESES[d.getMonth()] + " " + String(d.getFullYear()).slice(2) + '</div></div>' +
          '<div class="event-meta"><div class="event-time">' + hora12(e.hora) + '<small>' + DIAS[d.getDay()] + '</small></div>' +
          '<span class="tag tag--' + esc(e.disciplina) + '">' + esc(DISC[e.disciplina] || e.disciplina) + '</span></div>' +
        '</div>' +
        '<div class="event-body"><h3>' + esc(e.titulo) + '</h3><p>' + esc(e.bajada) + '</p>' +
          '<a class="event-place" href="' + esc(e.mapa) + '" target="_blank" rel="noopener">' + ICON.pin +
          '<span>' + esc(e.lugar) + (e.direccion ? " · " + esc(e.direccion) : "") + '</span></a></div>' +
        '<div class="event-foot"><span class="event-price">' + esc(e.precio || "") + '</span>' +
          '<a class="btn btn--sm" href="' + esc(e.enlace || "#") + '">Detalles / Registro</a></div>' +
      '</article>';
    }).join("");
  }

  function initFiltros() {
    var chips = $$(".chip");
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
        renderEventos(c.getAttribute("data-filter"));
      });
    });
  }

  function renderNextUp() {
    var el = $("#next-up");
    if (!el) return;
    var e = proximos()[0];
    if (!e) { el.remove(); return; }
    el.innerHTML = '<div class="d">' + e._d.getDate() + '<small>' + MESES[e._d.getMonth()] + '</small></div>' +
      '<div><div class="m">Próximo evento · ' + hora12(e.hora) + '</div><div class="t">' + esc(e.titulo) + '</div>' +
      '<div style="font-size:14px;color:#cfc9bd">' + esc(e.lugar) + '</div></div>';
    $$("[data-next-href]").forEach(function (a) { a.href = "#cartelera"; });
  }

  /* ---------- Convocatorias ---------- */
  function renderConvocatorias() {
    var own = $("#calls-own"), ext = $("#calls-ext");
    if (own) {
      own.innerHTML = (C.convocatoriasPropias || []).map(function (c, i) {
        var d = parseFecha(c.cierre);
        return '<article class="call">' +
          '<div class="call-status"><span class="open">Abierta</span><span>Cierra ' + d.getDate() + " " + MESES_L[d.getMonth()] + '</span></div>' +
          '<h3>' + esc(c.titulo) + '</h3><p>' + esc(c.bajada) + '</p>' +
          '<div class="call-actions">' +
            '<a class="btn btn--sm btn--ghost" href="' + esc(c.bases) + '" download>' + ICON.down + 'Bases (PDF)</a>' +
            '<button class="btn btn--sm" type="button" data-apply="' + i + '">Inscribirme</button>' +
          '</div></article>';
      }).join("");
    }
    if (ext) {
      ext.innerHTML = (C.convocatoriasExternas || []).map(function (c) {
        return '<li><a href="' + esc(c.url) + '" target="_blank" rel="noopener">' +
          '<span class="org">' + esc(c.org) + '</span><h3>' + esc(c.titulo) + '</h3><p>' + esc(c.bajada) + '</p>' +
          '<span class="arrow" aria-hidden="true">' + ICON.arrow + '</span></a></li>';
      }).join("");
    }
  }

  function initTabs() {
    var tabs = $$('[role="tab"]');
    function select(t) {
      tabs.forEach(function (o) {
        var on = o === t;
        o.setAttribute("aria-selected", on);
        o.tabIndex = on ? 0 : -1;
        $("#" + o.getAttribute("aria-controls")).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          var n = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
          select(n); n.focus();
        }
      });
    });
  }

  /* ---------- Formulario de inscripción ---------- */
  function initForm() {
    var dlg = $("#apply-dialog");
    if (!dlg) return;
    var form = $("form", dlg), sel = $("#f-conv", dlg), ok = $(".form-ok", dlg);
    sel.innerHTML = (C.convocatoriasPropias || []).map(function (c) {
      return "<option>" + esc(c.titulo) + "</option>";
    }).join("");

    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-apply]");
      if (!b) return;
      sel.selectedIndex = +b.getAttribute("data-apply") || 0;
      form.hidden = false; ok.hidden = true; form.reset(); sel.selectedIndex = +b.getAttribute("data-apply") || 0;
      dlg.showModal();
    });
    $$(".modal-close", dlg).forEach(function (b) { b.addEventListener("click", function () { dlg.close(); }); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = function () { form.hidden = true; ok.hidden = false; };
      if (!C.formEndpoint) { done(); return; }
      fetch(C.formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(done)
        .catch(function () { alert("No se pudo enviar. Escríbenos por correo, por favor."); });
    });
  }

  /* ---------- Revista ---------- */
  function renderRevista() {
    var box = $("#posts");
    if (!box) return;
    var rev = C.revista || {};
    box.innerHTML = (C.revistaEntradas || []).map(function (p) {
      return '<article class="post"><div class="post-type"><span>' + esc(p.tipo) + '</span><span>' + ICON.pen.replace("<svg", '<svg width="16" height="16"') + '</span></div>' +
        '<blockquote>' + esc(p.cita) + '</blockquote>' +
        '<div><h3>' + esc(p.titulo) + '</h3><p class="author">' + esc(p.autor) + '</p></div>' +
        '<a class="btn btn--sm btn--ghost" href="' + esc(p.url || rev.url || "#") + '" target="_blank" rel="noopener">Leer en la ' + esc(rev.nombre || "Revista") + " " + ICON.arrow + '</a>' +
      '</article>';
    }).join("");
  }

  /* ---------- Lightbox ---------- */
  var lb;
  function openLightbox(src, cap) {
    if (!lb) {
      lb = document.createElement("dialog");
      lb.className = "lightbox";
      lb.innerHTML = '<button class="modal-close" type="button" aria-label="Cerrar">×</button><img alt=""><p></p>';
      document.body.appendChild(lb);
      lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("modal-close")) lb.close(); });
    }
    $("img", lb).src = src; $("img", lb).alt = cap; $("p", lb).textContent = cap;
    lb.showModal();
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-zoom]");
    if (b) openLightbox(b.getAttribute("data-zoom"), b.getAttribute("data-cap") || "");
  });

  function img(n) { return "img/archivo/" + n + ".jpg"; }

  /* ---------- Muro de recuerdos (inicio) ---------- */
  function renderMosaico() {
    var box = $("#mosaic");
    if (!box) return;
    var picks = [
      ["2023-07-casa-del-libro", 4, "m-w2 m-h2"], ["2019-10-ziggy-bar", 1, ""], ["2024-03-camaleonico", 3, ""],
      ["2022-05-estudio-lizzard", 1, "m-w2"], ["2024-06-metapatio", -1, "m-h2"], ["2020-03-casa-naranjos", 2, ""],
      ["2023-07-montes-bar", 0, "m-w2"], ["2024-04-fac-musica", 3, ""], ["2018-05-ambar", 2, "m-w2"],
      ["2023-11-taller-arido", 1, ""], ["2024-03-cerradas-anahuac", 1, "m-w2"], ["2022-11-estudio-boox", 2, "m-w2"],
      ["2024-02-cataluna", 1, ""], ["2024-05-otra-barra", 3, "m-w2"]
    ];
    var byId = {};
    ARCH.forEach(function (a) { byId[a.id] = a; });
    box.innerHTML = picks.map(function (p) {
      var a = byId[p[0]];
      if (!a) return "";
      var n = p[1] < 0 ? a.poster : a.photos[p[1]] || a.photos[0];
      var cap = a.title + " · " + a.venue + " · " + a.date;
      return '<figure class="' + p[2] + '"><button type="button" data-zoom="' + img(n) + '" data-cap="' + esc(cap) + '" aria-label="Ampliar: ' + esc(cap) + '">' +
        '<img src="' + img(n) + '" alt="' + esc(cap) + '" ></button><figcaption>' + esc(a.venue) + " · " + esc(a.date) + '</figcaption></figure>';
    }).join("");
  }

  /* ---------- Página de archivo por años ---------- */
  function renderArchivo() {
    var box = $("#archivo-lista");
    if (!box) return;
    var years = {};
    ARCH.forEach(function (a) { (years[a.year] = years[a.year] || []).push(a); });
    var ys = Object.keys(years).sort(function (a, b) { return b - a; });

    $("#year-nav").innerHTML = ys.map(function (y) { return '<li><a href="#y' + y + '">' + y + "</a></li>"; }).join("");

    box.innerHTML = ys.map(function (y) {
      var evs = years[y].slice().reverse();
      return '<section class="year" id="y' + y + '"><div class="wrap">' +
        '<div class="year-title"><h2><span>' + y + '</span></h2><p>' + evs.length + (evs.length === 1 ? " encuentro" : " encuentros") + '</p></div>' +
        evs.map(function (a) {
          var cap = a.title + " · " + a.venue + " · " + a.date;
          var items = (a.poster ? [[a.poster, "poster", "Cartel · " + cap]] : []).concat(a.photos.map(function (p) { return [p, "", cap]; }));
          return '<article class="edition"><div class="edition-info"><div class="when">' + esc(a.date) + '</div><h3>' + esc(a.title) + '</h3>' +
            '<div class="when">' + esc(a.venue) + '</div><p>' + esc(a.desc) + '</p></div>' +
            '<div class="edition-photos">' + items.map(function (it) {
              return '<figure class="' + it[1] + '"><button type="button" data-zoom="' + img(it[0]) + '" data-cap="' + esc(it[2]) + '" aria-label="Ampliar">' +
                '<img src="' + img(it[0]) + '" alt="' + esc(it[2]) + '" loading="lazy"></button></figure>';
            }).join("") + '</div></article>';
        }).join("") +
      "</div></section>";
    }).join("");

    if ("IntersectionObserver" in window) {
      var links = $$("#year-nav a");
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      $$(".year").forEach(function (s) { io.observe(s); });
    }
  }

  fillConfig();
  initMenu();
  initFloat();
  renderEventos("todo");
  initFiltros();
  renderNextUp();
  renderConvocatorias();
  initTabs();
  initForm();
  renderRevista();
  renderMosaico();
  renderArchivo();
})();
