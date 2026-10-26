/* =========================================================
   CONTENIDO EDITABLE DEL SITIO
   Todo lo que cambia seguido vive aquí: datos de contacto,
   cartelera, convocatorias y entradas de la revista.
   Lo marcado con [POR CONFIRMAR] es provisional.
   ========================================================= */

window.LHDS = {
  /* ---------- Datos generales ---------- */
  revista: {
    nombre: "Revista [Nombre]",            // [POR CONFIRMAR] nombre de la revista
    url: "https://revista.example.com"     // [POR CONFIRMAR] dirección del sitio de la revista
  },
  contacto: {
    correo: "contacto@lahermanadeshakespeare.mx", // [POR CONFIRMAR]
    telefono: ""                                   // opcional
  },
  redes: {
    instagram: "https://www.instagram.com/",  // [POR CONFIRMAR] perfil del colectivo
    tiktok: "https://www.tiktok.com/",        // [POR CONFIRMAR]
    facebook: "https://www.facebook.com/",    // [POR CONFIRMAR]
    spotify: ""                               // opcional, déjalo vacío para ocultarlo
  },
  /* Dirección a la que se envían los formularios (Formspree, Google Apps Script, etc.).
     Si se deja vacío, el formulario funciona como demostración y no envía nada. */
  formEndpoint: "",

  /* ---------- Cartelera ----------
     disciplina: slam | musica | taller | cine | expo
     fecha en formato AAAA-MM-DD, hora en 24 h.
     Los eventos pasados se ocultan solos. */
  eventos: [
    {
      fecha: "2026-11-14", hora: "18:00",
      disciplina: "slam",
      titulo: "Micrófono abierto De Morra a Morra",   // [EJEMPLO]
      bajada: "Poesía, prosa y canción. Inscríbete en la entrada o desde la convocatoria; cinco minutos por participante.",
      lugar: "Camaleónico Café", direccion: "Monterrey, N.L.",
      mapa: "https://maps.google.com/?q=Camale%C3%B3nico+Caf%C3%A9+Monterrey",
      precio: "Entrada $60",
      enlace: "#convocatorias"
    },
    {
      fecha: "2026-11-22", hora: "17:00",
      disciplina: "taller",
      titulo: "Taller de escritura: el cuerpo como archivo", // [EJEMPLO]
      bajada: "Sesión práctica para escribir desde la memoria personal. Cupo limitado, trae libreta.",
      lugar: "Sede del colectivo", direccion: "Monterrey, N.L.",
      mapa: "https://maps.google.com/?q=Monterrey+Nuevo+Le%C3%B3n",
      precio: "Cupo limitado · Registro previo",
      enlace: "#convocatorias"
    },
    {
      fecha: "2026-11-29", hora: "19:00",
      disciplina: "musica",
      titulo: "Tocada + bazar de arte",                    // [EJEMPLO]
      bajada: "Bandas locales, fanzines, ilustración y libros independientes en una sola noche.",
      lugar: "Metapatio", direccion: "Monterrey, N.L.",
      mapa: "https://maps.google.com/?q=Metapatio+Monterrey",
      precio: "Preventa $100 · General $150",
      enlace: "#"
    },
    {
      fecha: "2026-12-06", hora: "18:30",
      disciplina: "slam",
      titulo: "Slam de poesía: torneo de fin de año",      // [EJEMPLO]
      bajada: "Tres rondas, jurado del público y premio para el primer lugar. Bases en Convocatorias.",
      lugar: "Otra Barra de Café", direccion: "Monterrey, N.L.",
      mapa: "https://maps.google.com/?q=Otra+Barra+de+Caf%C3%A9+Monterrey",
      precio: "Entrada $60",
      enlace: "#convocatorias"
    },
    {
      fecha: "2026-12-13", hora: "19:30",
      disciplina: "cine",
      titulo: "Cineclub: directoras mexicanas",            // [EJEMPLO]
      bajada: "Proyección y conversatorio abierto. Trae tu cojín.",
      lugar: "Sede del colectivo", direccion: "Monterrey, N.L.",
      mapa: "https://maps.google.com/?q=Monterrey+Nuevo+Le%C3%B3n",
      precio: "Entrada libre",
      enlace: "#"
    },
    {
      fecha: "2026-12-20", hora: "17:00",
      disciplina: "expo",
      titulo: "Exposición colectiva: Duodécima edición",   // [EJEMPLO]
      bajada: "Obra de artistas emergentes del Área Metropolitana seleccionada por convocatoria.",
      lugar: "Por anunciar", direccion: "Monterrey, N.L.",
      mapa: "https://maps.google.com/?q=Monterrey+Nuevo+Le%C3%B3n",
      precio: "Entrada libre",
      enlace: "#convocatorias"
    }
  ],

  /* ---------- Convocatorias propias ---------- */
  convocatoriasPropias: [
    {
      titulo: "Lecturas para el micrófono abierto",
      bajada: "Poesía, prosa, canción o performance. Buscamos voces que nunca se han subido a un escenario y voces que ya conocen el camino.",
      cierre: "2026-11-10",
      bases: "docs/bases-microfono-abierto.pdf"
    },
    {
      titulo: "Bazar de arte y fanzines",
      bajada: "Mesa para ilustración, gráfica, fanzines, libros y objetos hechos a mano en nuestras próximas ediciones.",
      cierre: "2026-11-20",
      bases: "docs/bases-bazar.pdf"
    },
    {
      titulo: "Exposición colectiva · Duodécima edición",
      bajada: "Pintura, fotografía, ilustración y técnica mixta de artistas emergentes del Área Metropolitana de Monterrey.",
      cierre: "2026-12-01",
      bases: "docs/bases-exposicion.pdf"
    }
  ],

  /* ---------- Red de convocatorias externas ---------- */
  convocatoriasExternas: [
    {
      org: "CONARTE · Nuevo León",
      titulo: "Convocatorias del Consejo para la Cultura y las Artes de Nuevo León",
      bajada: "Becas, estímulos y premios estatales para creadores de todas las disciplinas.",
      url: "https://conarte.org.mx/"
    },
    {
      org: "Secretaría de Cultura · SACPC",
      titulo: "Jóvenes Creadores y estímulos a la creación",
      bajada: "Programa federal de apoyos a la creación artística para personas de 18 a 34 años.",
      url: "https://foncaenlinea.cultura.gob.mx/"
    },
    {
      org: "PECDA Nuevo León",
      titulo: "Programa de Estímulo a la Creación y al Desarrollo Artístico",
      bajada: "Estímulos para creadores con trayectoria y en desarrollo, con emisión anual en el estado.",
      url: "https://conarte.org.mx/"
    },
    {
      org: "UANL · Difusión cultural",
      titulo: "Convocatorias culturales de la Universidad Autónoma de Nuevo León",
      bajada: "Premios literarios, ferias y espacios de exhibición abiertos a la comunidad.",
      url: "https://www.uanl.mx/"
    }
  ],

  /* ---------- Últimas entradas de la revista ----------
     [EJEMPLO] Reemplazar con los textos reales publicados. */
  revistaEntradas: [
    {
      tipo: "Poesía",
      cita: "Nadie me dio permiso de hablar, así que tomé el micrófono como quien toma una piedra del río.",
      titulo: "Piedra de río",
      autor: "Nombre de la autora",
      url: ""
    },
    {
      tipo: "Ensayo",
      cita: "La escena independiente de Monterrey no se mide en aforo, se mide en las sillas que alguien prestó.",
      titulo: "Sillas prestadas: notas sobre la autogestión",
      autor: "Nombre del autor",
      url: ""
    },
    {
      tipo: "Reseña",
      cita: "Un libro que se lee como se escucha una tocada en un patio: de pie, apretada, con el corazón en la garganta.",
      titulo: "Reseña: título del libro",
      autor: "Nombre de quien reseña",
      url: ""
    }
  ]
};
