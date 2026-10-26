# Sitio web · La Hermana de Shakespeare

Sitio estático (HTML, CSS y JavaScript, sin dependencias). Para verlo, abre `index.html` en el navegador.
Para publicarlo, sube la carpeta completa a cualquier hosting estático (Netlify, GitHub Pages, Vercel, Hostinger…).

## Qué editar y dónde
- `js/contenido.js` — **todo lo que cambia seguido**: nombre y enlace de la revista, correo, redes sociales,
  cartelera (eventos), convocatorias propias y externas, y entradas de la revista.
  Busca `[POR CONFIRMAR]` y `[EJEMPLO]` para ver lo provisional.
- `js/archivo-data.js` — eventos del archivo histórico (fotos en `img/archivo/`).
- `docs/` — PDFs de bases de convocatorias (son de ejemplo) y kit de prensa (portafolio 2024 comprimido).
- `index.html` — textos de Sobre nosotras, sede (Sinarte), equipo y manifiesto.
- `aviso-legal.html` — aviso de privacidad (texto de ejemplo, revisar).

## Formularios
Los formularios de inscripción funcionan como demostración. Para recibir respuestas, crea un formulario en
Formspree (u otro servicio) y pega su dirección en `formEndpoint` dentro de `js/contenido.js`.
