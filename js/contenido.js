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

  /* ---------- Convocatorias propias ----------
     Cada convocatoria tiene su propia página: convocatoria.html?id=<id>
     "bases" son las secciones que se muestran en esa página.
     [EJEMPLO] Reemplazar fechas y textos por las bases oficiales. */
  convocatoriasPropias: [
    {
      id: "microfono-abierto",
      titulo: "Lecturas para el micrófono abierto",
      bajada: "Poesía, prosa, canción o performance. Buscamos voces que nunca se han subido a un escenario y voces que ya conocen el camino.",
      apertura: "2026-11-01",
      cierre: "2026-11-30",
      resultados: "2026-12-05",
      pdf: "docs/bases-microfono-abierto.pdf",
      bases: [
        { titulo: "Quiénes pueden participar", lista: [
          "Personas de 16 años en adelante que vivan en el Área Metropolitana de Monterrey.",
          "No se necesita experiencia previa ni trayectoria publicada.",
          "Menores de edad necesitan autorización de madre, padre o tutor."
        ] },
        { titulo: "Qué puedes presentar", lista: [
          "Poesía, prosa, canción, monólogo o performance.",
          "Un máximo de 5 minutos por participante.",
          "Textos propios e inéditos o publicados por ti."
        ] },
        { titulo: "Cómo inscribirte", texto: "Llena el formulario de inscripción con tus datos y una breve descripción de lo que vas a presentar. Te confirmaremos tu lugar por correo." },
        { titulo: "Selección", texto: "Los lugares se asignan por orden de inscripción hasta completar el cupo. Si el cupo se llena, tu registro quedará en lista de espera para la siguiente edición." },
        { titulo: "Código de convivencia", texto: "La Hermana de Shakespeare es un espacio seguro, no separatista y de puertas abiertas. No se aceptan discursos de odio, acoso ni propaganda partidista." }
      ]
    },
    {
      id: "bazar",
      titulo: "Bazar de arte y fanzines",
      bajada: "Mesa para ilustración, gráfica, fanzines, libros y objetos hechos a mano en nuestras próximas ediciones.",
      apertura: "2026-11-01",
      cierre: "2026-11-20",
      resultados: "2026-11-25",
      pdf: "docs/bases-bazar.pdf",
      bases: [
        { titulo: "Quiénes pueden participar", lista: [
          "Artistas, editoriales independientes y colectivos del Área Metropolitana de Monterrey.",
          "Todo lo que se venda debe ser de producción propia."
        ] },
        { titulo: "Qué incluye tu lugar", lista: [
          "Media mesa durante todo el evento.",
          "Difusión de tu proyecto en nuestras redes.",
          "Cuota de recuperación por definir."
        ] },
        { titulo: "Cómo inscribirte", texto: "Llena el formulario con el nombre de tu proyecto, tus redes y fotos de lo que venderías." },
        { titulo: "Selección", texto: "Un comité del colectivo revisa las propuestas buscando variedad de disciplinas y priorizando proyectos emergentes." },
        { titulo: "Código de convivencia", texto: "No se aceptan productos o mensajes con discursos de odio ni propaganda partidista." }
      ]
    },
    {
      id: "exposicion",
      titulo: "Exposición colectiva · Duodécima edición",
      bajada: "Pintura, fotografía, ilustración y técnica mixta de artistas emergentes del Área Metropolitana de Monterrey.",
      apertura: "2026-11-01",
      cierre: "2026-12-01",
      resultados: "2026-12-08",
      pdf: "docs/bases-exposicion.pdf",
      bases: [
        { titulo: "Quiénes pueden participar", lista: [
          "Artistas emergentes mayores de 16 años del Área Metropolitana de Monterrey.",
          "Se puede participar de forma individual o colectiva."
        ] },
        { titulo: "Qué puedes presentar", lista: [
          "Hasta 2 obras: pintura, fotografía, ilustración, gráfica o técnica mixta.",
          "Formato máximo de 100 × 100 cm por obra.",
          "Las obras deben estar listas para colgarse."
        ] },
        { titulo: "Cómo inscribirte", texto: "Llena el formulario con tus datos, una foto de cada obra, su técnica y medidas, y una breve semblanza." },
        { titulo: "Selección", texto: "Un comité del colectivo y artistas invitadxs eligen las obras. Los resultados se publican en nuestras redes y se avisa por correo." },
        { titulo: "Código de convivencia", texto: "La Hermana de Shakespeare es un espacio seguro: no se aceptan obras con discursos de odio ni propaganda partidista." }
      ]
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
