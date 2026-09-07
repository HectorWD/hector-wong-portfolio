---
name: Phantom Code / Acid Punk
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393d'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#2a292e'
  surface-container-highest: '#353439'
  on-surface: '#e4e1e7'
  on-surface-variant: '#e9bcb6'
  inverse-surface: '#e4e1e7'
  inverse-on-surface: '#303034'
  outline: '#af8782'
  outline-variant: '#5f3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#e60012'
  on-primary-container: '#fff7f6'
  inverse-primary: '#c0000d'
  secondary: '#ffffff'
  on-secondary: '#373100'
  secondary-container: '#fde400'
  on-secondary-container: '#716500'
  tertiary: '#00daf3'
  on-tertiary: '#00363d'
  tertiary-container: '#007e8d'
  on-tertiary-container: '#ebfcff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#fde400'
  secondary-fixed-dim: '#dec800'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#9cf0ff'
  tertiary-fixed-dim: '#00daf3'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#131317'
  on-background: '#e4e1e7'
  surface-variant: '#353439'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 96px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: 0.01em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-badge:
    fontFamily: Anton
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.08em
  code-snippet:
    fontFamily: monospace
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  sidebar-width-desktop: 480px
  content-max-width: 1280px
  gutter-desktop: 2.5rem
  gutter-mobile: 1.25rem
---

## Brand & Style

This design system fuses the kinetic, acid-punk graphic energy of *Persona 5* with the razor-sharp functional discipline of an elite software engineer's portfolio. It rejects the sterile blandness of modern web templates in favor of high-impact visual disruption: jagged cut angles, high-contrast comic halftone patterns, skewed typographic banners, and dynamic slash overlays. 

At the same time, this system never sacrifices engineering clarity. While display layers, badges, and section anchors explode with dramatic motion and high-contrast comic styling, core documentation, project descriptions, and technical specifications remain grounded in ultra-crisp, neutral monospace and sans-serif typography. 

The emotional tone is daring, rebellious, surgically precise, and unapologetically stylish—positioning the portfolio owner not merely as a coder, but as an architectural disruptor who writes clean code with theatrical mastery.

## Colors

The core color palette anchors to Joker’s signature palette: deep midnight black (`#101014`), pure chalk white (`#FFFFFF`), halftone graphic gray (`#222228`), high-voltage crimson red (`#E60012`), and accent battle-gold (`#FFE600`).

To create theatrical variety across sticky-scrolling portfolio sections, the system supports dynamic character-themed color shifts for distinct chapters (e.g., Experience, Featured Projects, Open Source, and Confidants/Testimonials):
- **Joker (Default / Core Hero):** Crimson Red (`#E60012`) with Deep Black (`#101014`) and Chalk White (`#FFFFFF`).
- **Skull (Experience & Hard Skills):** Electric Yellow (`#FFE600`) with Midnight Slate and Cyber Blue (`#0099FF`).
- **Panther (Creative Projects / Design Systems):** Crimson Magenta (`#E60055`) with stark black/white comic contrasts.
- **Fox (Architecture & Core Infrastructure):** Ice Blue (`#0099FF`) with stark white and deep navy tone overlays.
- **Queen (Performance & Systems Engineering):** Dark Steel Cyan (`#00E5FF`) with gunmetal carbon surfaces (`#1A1D24`).

Foreground elements maintain strict AAA/AA contrast against the midnight dark base. Half-tone dotted textures utilize 15% opacity gray overlays (`rgba(255, 255, 255, 0.08)`) on dark fields or deep black dots on bright accent cards.

## Typography

The typographical strategy employs an intentional tension: `Anton` provides uncompromising, towering, compressed comic-banner energy, while `Inter` ensures developer documentation and project summaries read with effortless technical precision.

- **Display & Section Titles (`Anton`):** Rendered in all-caps, frequently paired with skewed CSS transforms (`transform: skewX(-6deg) rotate(-1deg)`), jagged offset shadow planes, or white text set into angled crimson polygon ribbons.
- **Body Copy (`Inter`):** Kept strictly neutral, modern, and unskewed at normal weights (400 regular, 600 semi-bold) to preserve rapid parsing of engineering accomplishments, metrics, and architecture overviews.
- **Tech Stack & Battle Command Tags:** Capitalized `Anton` labels encased in slanted pill-less polygons, contrasting against monospaced code blocks.

## Layout & Spacing

This design system uses an asymmetric two-pane layout inspired by sticky editorial layouts:
- **Left Column (Sticky Desktop):** A fixed viewport panel (`480px` width) displaying the engineer’s identity, current status beacon, primary navigation anchors, social command links, and persona avatar/emblem.
- **Right Column (Scrolling Stream):** A dynamic scroll container housing narrative sections (About, Experience, Projects, Architecture, Confidants/Testimonials).

### Responsive Adaptation
- **Desktop (1024px+):** Pinned left rail, right rail freely scrolling with section highlights that trigger theme-color transitions. Diagonal separator cuts delineate major milestones.
- **Tablet (768px – 1023px):** Header snaps to top with sticky mini-command bar; content collapses to a 1-column scroll with stacked cards and slightly reduced skew angles.
- **Mobile (< 768px):** Single-column vertical scroll. Section anchors pin to top edge on scroll. Skew angles reduce from `-6deg` to `-3deg` to prevent layout clipping. Padding scales to `gutter-mobile` (`1.25rem`).

## Elevation & Depth

Elevation rejects soft, blurry Material drop shadows. Depth is communicated strictly through **hard comic offsets, layered paper cutouts, and brutalist planar displacement**:

1. **Hard Graphic Shadows:** Elements cast sharp, 100% opaque drop shadows with zero blur:
   - Level 1 (Static Cards): `4px 4px 0px #000000` with a crisp `2px solid #FFFFFF` or `2px solid #E60012` border.
   - Level 2 (Hover / Active): `8px 8px 0px #E60012` or `8px 8px 0px #FFE600`.
   - Level 3 (Modal / Focus Callouts): `12px 12px 0px #000000`.
2. **Halftone Screen Layers:** Visual depth is accentuated via diagonal striped raster lines or dot-matrix SVG overlays positioned beneath prominent UI blocks.
3. **Planar Slash Accents:** Underlays extend beyond parent containers with clip-path polygons (`polygon(0 0, 100% 4%, 98% 100%, 0% 96%)`), giving panels the look of hand-collaged comic frames.

## Shapes

The shape system strictly mandates **`roundedness: 0`**. Curves are prohibited. 

Visual dynamism is driven by angular geometry, irregular polygons, and dynamic slashes:
- **Zero Border Radius:** Every card, badge, input, and container features razor-sharp 90-degree corners or angled polygon cuts (`clip-path`).
- **Slash Edges:** Section dividers and battle-tag badges utilize chamfered corners or asymmetric trapezoidal polygon clips (`clip-path: polygon(0% 0%, 94% 0%, 100% 100%, 0% 100%)`).
- **Jagged Dialogue & Starburst Notches:** Speech bubbles and callout notices feature 3-point angular tail cutouts.

## Components

### Buttons & Action Links
- **Battle Command Button (Primary):** Solid crimson background (`#E60012`), stark white `Anton` text with skew (`transform: skewX(-8deg)`), zero border-radius, framed by a hard black offset shadow (`4px 4px 0px #000000`). On hover, translates `-2px, -2px` with shadow expanding to `6px 6px 0px #FFE600`.
- **Secondary Ghost Action:** Transparent background, `2px solid #FFFFFF` outline, white text. On hover, background inverts to pure `#FFFFFF` with jet-black text (`#101014`).

### Tech Stack & Skill Badges ("Command Tags")
- Resemble Persona battle command icons. Built with sharp edges, dark slate base (`#1A1D24`), `1px solid #33333F`, and bold yellow or white monospace text.
- On card hover, badges flash to high-contrast red-on-black or yellow-on-black.

### Project & Experience Cards
- **Structure:** Dark surface container (`#16161C`) wrapped with a razor-thin border (`1px solid #282834`). 
- **Header:** Features a skewed title ribbon cut at an angle with an inverted color badge (e.g. black text over red bar).
- **Interaction:** Hovering a project card elevates the entire card via hard translation (`translate(-4px, -4px)`), introduces a crimson or accent-colored hard border (`2px solid var(--accent)`), and reveals a subtle halftone dot pattern in the card header.

### Lists & Navigation
- **Confidant Nav Items:** Numbered ranks (e.g., `01 // ABOUT`, `02 // EXPERIENCE`, `03 // CODE`). Inactive items remain muted gray (`#6E6E7E`). Active items expand outward with a bold red slash marker indicator and bright white text.

### Code Blocks & Terminal Callouts
- Pure black base (`#0B0B0E`), top window bar featuring asymmetric red title tab, monospaced code with neon-cyan, crimson, and electric-yellow syntax tokens.