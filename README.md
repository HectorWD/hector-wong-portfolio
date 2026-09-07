# Portafolio — Hector Wong

Sitio personal de una sola página, bilingüe (EN / ES), construido sobre el
diseño *Phantom Code / Acid Punk* generado en Google Stitch.

**Stack:** Vite 8 · React 19 · TypeScript · Tailwind CSS v4

---

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo en http://localhost:5173
npm run build   # typecheck + build de producción en dist/
npm run preview # servir el build
npm run typecheck
```

## Estructura

```
src/
  app/                     App y proveedores globales
  modules/
    i18n/                  contexto de idioma, hook y conmutador EN/ES
    hero/                  portada
    about/                 perfil
    experience/            trayectoria
    projects/              proyectos (vacío, con huecos marcados)
    skills/                competencias
    education/             formación
    contact/               tarjeta de contacto
    portfolio/pages/       composición de la página
  shared/
    components/ui/         primitivos del lenguaje visual
    layout/                barra superior, navegación inferior, pie
    constants/             contacto y navegación
    lib/                   hooks utilitarios
    types/
  styles/index.css         design tokens en @theme + utilidades propias
```

Cada módulo guarda su copy bilingüe en `constants/<módulo>.content.ts` con la
forma `Localized<T>`, es decir `{ en: ..., es: ... }`. Para cambiar un texto no
hace falta tocar ningún componente.

## Dónde está cada cosa

| Quiero cambiar…            | Archivo                                                  |
| -------------------------- | -------------------------------------------------------- |
| Correo, GitHub, LinkedIn   | `src/shared/constants/site.constants.ts`                  |
| Rutas de los CV en PDF     | `src/shared/constants/site.constants.ts` (`CV_FILES`)     |
| Textos de una sección      | `src/modules/<módulo>/constants/*.content.ts`             |
| Colores, tipografía, ritmo | `src/styles/index.css` (bloque `@theme`)                  |
| Orden de las secciones     | `src/modules/portfolio/pages/PortfolioPage.tsx`           |
| Pestañas de navegación     | `src/shared/constants/site.constants.ts` (`NAV_ITEMS`)    |

## Proyectos

La sección **03 // Featured Heists** está vacía a propósito: los proyectos que
traía el diseño original eran inventados y se quitaron. Mientras el arreglo esté
vacío se pintan huecos marcados; en cuanto agregues una entrada en
`src/modules/projects/constants/projects.content.ts` la sección pasa sola a
tarjetas reales. El formato de una entrada está documentado en ese mismo archivo.

## Contenido

Todo el texto de perfil, experiencia, competencias y formación viene de
`cv/cv-data.json`, la misma fuente que genera el CV en PDF. Si actualizas el CV,
actualiza también los `*.content.ts` correspondientes.

El teléfono **no** se publica en el sitio: vive solo en el CV en PDF.

### Descarga del CV

La sección de perfil tiene un botón que entrega el PDF del idioma activo, más un
enlace pequeño a la otra versión. Los archivos están en `public/cv/` y son copia
de los que genera `cv/build.js`:

```bash
cd cv && node build.js
cp dist/Hector-Wong-CV-*.pdf ../public/cv/
```

Si regeneras el CV, vuelve a copiarlos o el sitio seguirá sirviendo la versión
vieja.

## Contacto

El formulario no tiene backend. Compone un enlace `mailto:` y abre el cliente de
correo del visitante con el mensaje ya escrito, así que nada se envía a un
tercero. Si en algún momento quieres envío real, hay que meter un servicio
(Formspree, Resend, una función serverless) en `ContactSection`.

## Diseño de origen

`design-stitch/` guarda lo que se bajó del proyecto de Stitch: `DESIGN.md` con
los tokens y las dos pantallas en HTML. Es material de consulta, no entra en el
build.

**El sitio no usa ninguna imagen con derechos de autor.** La portada que
generaba Stitch representaba al protagonista de *Persona 5*, así que se
reemplazó por `src/modules/hero/components/HeroBanner.tsx`: una composición
original en SVG —círculos concéntricos, tajos diagonales y trama de medios
tonos— dibujada con los mismos tokens del design system. Pesa unos 3 KB en vez
de 180 KB, se ve nítida en cualquier pantalla y no depende de ningún archivo
externo.

El estilo gráfico (rojo y negro, cortes en diagonal, medios tonos) sí está
inspirado en el juego, pero no reproduce nada suyo.

## Pendiente

- **Layout de escritorio.** El diseño de Stitch es solo móvil (780 px). En
  pantallas grandes el sitio se muestra como una columna centrada de 780 px:
  funciona y no se rompe, pero aprovechar el ancho es una decisión de diseño
  todavía sin tomar.
- **Proyectos propios** para llenar la sección 03.
