# Scarlett Viscencio / digital

Portfolio personal de Scarlett Viscencio, desarrolladora freelance. Una single page en español que combina dirección editorial, arte botánico y una presentación narrativa del proceso y de los proyectos, sin inventar experiencia ni información del producto.

## Tecnologías

React 19, Vite 6 y CSS nativo. Las ilustraciones e iconos son SVG; las animaciones utilizan CSS e IntersectionObserver, sin librerías adicionales. Los mensajes se reciben mediante Netlify Forms.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

Para trabajar con las funciones de la plataforma, se puede usar `netlify dev --port 8889`. El formulario necesita un despliegue en Netlify con Forms habilitado para recibir envíos; Vite por sí solo no emula el procesamiento de formularios.

El despliegue instala las dependencias con `npm ci --include=dev`, ejecuta `npm run build` y publica `dist`, como se define en `netlify.toml`. La instalación explícita garantiza que Vite y su plugin de React estén disponibles incluso cuando el despliegue se inicia mediante Netlify CLI sin una instalación previa. `package-lock.json` mantiene reproducibles las versiones instaladas.

## Personalizar el contenido

- `src/data/site.js`: textos de presentación, email, LinkedIn, GitHub, CV y los dos retratos. Los campos que no se proporcionaron tienen valor `null` y se presentan como pendientes, no como enlaces ficticios.
- `src/data/projects.js`: proyectos, contexto, etiquetas, participación, capturas y enlaces. Añadir un objeto a `projects` incorpora otra pieza editorial y su diálogo de detalle.
- `src/styles/global.css`: paleta, tipografía, composiciones y responsive.
- `index.html`: título, descripción y metadatos sociales.

Para incorporar imágenes, añadir archivos optimizados en `public/images/` y usar rutas como `/images/agrotime.webp` en el campo `image`. Mantener `imageAlt` descriptivo. Anonimizar siempre screenshots: no publicar nombres, identificadores, marcajes o información médica real. Los visuales actuales están identificados explícitamente como conceptos editoriales, no como capturas del software.

Los retratos se sustituyen al establecer `portrait` y `aboutPortrait`. El arte botánico se muestra únicamente mientras esos valores son `null`. Para habilitar el CV, añadir un PDF en `public/` y establecer `cv` con su ruta. No se generó un currículum con información no proporcionada.

El tercer proyecto permanece como una selección pendiente entre BIOTEMPAK y DECK DEPOT, fuera de la lista de trabajos confirmados. Para publicarlo, añadir su información real a `projects` y ajustar o retirar `upcomingProject`.

## Contacto

Los botones «Hablemos» abren un formulario accesible con validación, estado de envío, confirmación y recuperación ante errores. Los mensajes se almacenan en Netlify Forms, sin base de datos propia ni credenciales en el cliente.

`public/__forms.html` registra el formulario en el despliegue; su nombre y campos deben coincidir con `ContactDialog.jsx`. La protección antispam utiliza un honeypot. Forms se habilitó durante la implementación. Configurar las notificaciones de email en el panel de Netlify para recibir los mensajes por correo; las notificaciones no se configuran automáticamente porque no se proporcionó un email.

## Accesibilidad y movimiento

HTML semántico, enlace para saltar al contenido, foco visible, navegación móvil por teclado y diálogos nativos con Escape, contención de foco y restitución del foco. Las animaciones se desactivan con `prefers-reduced-motion`. Los enlaces y documentos pendientes no simulan destinos disponibles.

La composición se adapta específicamente a móvil, tablet y escritorio. Las imágenes futuras tienen dimensiones explícitas y carga diferida donde corresponde. No se utiliza canvas, Three.js, vídeo de fondo ni animación constante.

## Verificación de esta entrega

Se revisó el código y la configuración de despliegue. No se ejecutaron servidores, pruebas ni comandos de build en esta sesión; la plataforma realiza la instalación y validación del despliegue. Conviene revisar visualmente el resultado desplegado y confirmar un envío real antes de compartirlo públicamente.
