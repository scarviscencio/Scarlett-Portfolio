# Arquitectura

Portfolio single page en español, implementado desde cero con React y Vite. No migrar a TanStack, incorporar una plantilla genérica ni añadir dependencias sin necesidad.

## Directorios

- `src/App.jsx`: composición de las secciones y selección de diálogos.
- `src/sections/`: Hero, Process, SelectedWork, About y Contact.
- `src/components/`: navegación, identidad, ilustraciones SVG, visuales conceptuales, reveals y diálogos reutilizables.
- `src/data/site.js`: contenido personal y enlaces reemplazables.
- `src/data/projects.js`: catálogo de proyectos y selección pendiente.
- `src/styles/global.css`: sistema visual completo, con breakpoints y reduced motion.
- `public/`: favicon, registro HTML estático para Forms y futuros assets públicos.
- `netlify.toml`: build y fallback SPA. Los archivos públicos existentes deben conservar prioridad sobre el fallback.

## Convenciones

Usar componentes funcionales JSX, módulos ES, nombres descriptivos, comillas simples y punto y coma. Mantener los proyectos en datos, no duplicar su información en JSX. Usar CSS nativo con variables; la paleta es crema, lima, salvia, azul grisáceo, lavanda y ciruela. Combinar Instrument Serif con DM Sans y preservar la jerarquía editorial.

No inventar proyectos, clientes, métricas, tecnologías, retratos o datos personales. Los campos pendientes se mantienen como `null` y deben comunicar su estado al visitante. El tercer proyecto no está elegido todavía. Los visuales de producto actuales son composiciones conceptuales explícitamente rotuladas como placeholders, no reproducciones verificadas de la interfaz real.

## Decisiones importantes

La experiencia utiliza ilustraciones e iconos SVG nativos, no imágenes generadas que aparenten ser fotografías de Scarlett. Los retratos y screenshots pueden reemplazarse desde los datos sin modificar las secciones.

El estado React es exclusivamente transitorio (menú, diálogos y envío). La persistencia de mensajes corresponde a Netlify Forms. Conservar `public/__forms.html` y enviar por POST URL-encoded a `/__forms.html`; el esquema estático y el formulario React deben tener exactamente los mismos campos. Forms ya está habilitado. No introducir almacenamiento local para envíos.

Los diálogos usan `<dialog>` y `showModal()` para contención de foco, Escape y accesibilidad. Mantener la devolución del foco y el bloqueo de scroll. Los efectos deben tolerar la repetición de efectos de React StrictMode.

Las animaciones son breves y activadas por interacción o viewport. Respetar `prefers-reduced-motion`, animar únicamente opacity/transform y mantener legibilidad sin efectos. No ocultar contenido inicialmente mediante CSS: Reveal añade su estado pendiente únicamente después del montaje.

Revisar desktop, tablet y móviles estrechos al cambiar composiciones. No agregar un `og:image`: la plataforma lo proporciona. `siteName` y `siteDescription` están definidos en el head de `index.html` con contenido final.
