# CV — Hector Wong

CV en una página, en inglés y español, generado desde una sola fuente de datos.
Estética de plantilla clásica LaTeX (tipografía Computer Modern), pero con una
estructura pensada para pasar filtros ATS.

## Uso

```bash
node build.js
```

Genera en `dist/`:

| Archivo | Qué es |
|---|---|
| `Hector-Wong-CV-EN.pdf` | Versión inglés — la principal para vacantes remotas |
| `Hector-Wong-CV-ES.pdf` | Versión español — para el mercado mexicano |
| `Hector-Wong-CV-*.html` | Fuente HTML (con las fuentes embebidas, archivo portable) |

`node build.js --html` genera solo el HTML, sin invocar Chrome.

## Para editar el contenido

Todo el texto vive en **`cv-data.json`**. No se edita el HTML: se edita el JSON
y se vuelve a correr `node build.js`. Las dos versiones de idioma salen del
mismo archivo, así que no se desincronizan.

## Decisiones de diseño que conviene no romper

**Una página.** El build falla (exit code 1) si algún PDF sale con más de una
página. Si al agregar contenido salta el aviso, hay que recortar en
`cv-data.json` o ajustar los espaciados en `styles()`.

**Nada de `flex` para pares etiqueta/valor.** Los elementos flex se emiten como
bloques de texto separados al extraer el PDF, de modo que un ATS lee primero
todas las etiquetas juntas y después todos los valores, sueltos. La sección de
competencias usa sangría francesa (`text-indent` negativo) justamente por eso.

**Tracking de los títulos ≤ 0.04em.** Con espaciado mayor, los extractores de
texto parten las palabras: `EDUCATION` salía como `E D U C AT I O N`, lo que
rompe la detección de secciones en un ATS.

**El margen inferior de la última sección va en cero.** Es invisible en
pantalla pero ocupa lugar en la caja de impresión, y alcanza para empujar un CV
que entraba justo hacia una segunda página.

## Cómo verificar que un ATS lo lee bien

```bash
pdftotext -enc UTF-8 dist/Hector-Wong-CV-EN.pdf -
```

El texto debe salir en orden de lectura, con los títulos de sección enteros y
cada fila de competencias completa en una sola línea.

## Fuentes

`fonts/` tiene las cuatro variantes de Computer Modern Serif (redonda, negrita,
itálica, negrita itálica), incrustadas en el HTML como data URI. No hace falta
instalar LaTeX ni tener las fuentes en el sistema.

## Pendiente

El portafolio web todavía no está hecho. El contenido y la narrativa de este CV
son la base para armarlo.
