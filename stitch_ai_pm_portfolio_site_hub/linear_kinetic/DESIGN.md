---
name: Linear Kinetic
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e1e3'
  on-surface-variant: '#c6c5d5'
  inverse-surface: '#e5e1e3'
  inverse-on-surface: '#313032'
  outline: '#908f9e'
  outline-variant: '#454652'
  surface-tint: '#bdc2ff'
  primary: '#bdc2ff'
  on-primary: '#121f8b'
  primary-container: '#5e6ad2'
  on-primary-container: '#fdfaff'
  inverse-primary: '#4854bb'
  secondary: '#bdc2ff'
  on-secondary: '#161f89'
  secondary-container: '#313aa0'
  on-secondary-container: '#a8afff'
  tertiary: '#ffb867'
  on-tertiary: '#482900'
  tertiary-container: '#a56500'
  on-tertiary-container: '#fffaf8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000965'
  on-primary-fixed-variant: '#2e3aa2'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000668'
  on-secondary-fixed-variant: '#313aa0'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#ffb867'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#131315'
  on-background: '#e5e1e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1200px
---

## Brand & Style

The design system is built for a high-performance AI Product Manager portfolio, evoking a sense of precision, technical depth, and "Day 0" engineering excellence. The aesthetic draws heavily from the **Modern Developer Tool** movement—characterized by dark-mode immersion, structural integrity, and subtle atmospheric depth.

The target audience consists of technical founders, engineering leaders, and design-forward product teams. The UI should evoke a feeling of "the future being built," using a utilitarian yet refined visual language.

**Design Style: High-Tech Minimalism / Glassmorphism**
- **Atmospheric Depth:** The UI is not a flat black; it uses layered dark surfaces and radial gradients to create a sense of infinite space.
- **Precision:** Fine lines, exact spacing, and monospaced accents emphasize a data-driven mindset.
- **Generative Textures:** Backgrounds are brought to life with faint noise, structural grids, and slow-moving indigo orbs.

## Colors

The palette is strictly dark-mode, optimized for OLED displays and long-form reading of technical case studies.

- **The Void:** The base canvas (`#050506`) provides a deep foundation, with the footer sinking into an even darker tone (`#020203`) to anchor the page.
- **The Core:** Elevated panels use `#0A0A0C` to provide enough contrast for structural separation without breaking the dark-mode immersion.
- **The Pulse:** The Primary Indigo (`#5E6AD2`) is used sparingly for calls to action, focus states, and meaningful highlights.
- **Typography Tiers:** Primary text is off-white (`#EDEDEF`) to reduce eye strain compared to pure white, while metadata and descriptions use a balanced muted gray (`#8A8F98`).

## Typography

This design system utilizes **Geist** for its technical, precision-engineered feel in headlines and labels, while **Inter** ensures maximum readability for body copy and long-form narratives.

- **Headlines:** Must feature "tight tracking" (negative letter spacing) to create the signature high-end tech look.
- **Multilingual Support:** All styles include a robust Chinese fallback stack to ensure the portfolio remains legible and professional across global technical markets.
- **Labels:** Small labels and tags should use Geist with slightly increased letter spacing and uppercase styling to denote metadata or "system status."

## Layout & Spacing

The layout philosophy follows a **Rigid Grid with Fluid Containers**. Elements are aligned to a 4px baseline grid to maintain mathematical harmony.

- **The Grid:** A 12-column layout is used for desktop, shifting to a single column for mobile. 
- **The Overlay:** A faint, 1px grid pattern is subtly overlaid on the base canvas (opacity 0.03) to emphasize the "under construction" or "systematic" nature of the work.
- **Section Spacing:** Generous vertical rhythm (80px - 120px between sections) is required to give the abstract visuals and high-density text room to breathe.
- **Safe Zones:** Content is centered with a max-width of 1200px to ensure line lengths remain readable on ultra-wide monitors.

## Elevation & Depth

Visual hierarchy is achieved through **Luminance and Atmosphere** rather than traditional heavy shadows.

- **Z-Axis:** Higher elevation is represented by increased surface brightness and transparency. The base is the darkest, while active "cards" are lighter and translucent.
- **Glassmorphism:** Use `backdrop-filter: blur(12px)` on all floating panels. The borders are razor-thin (1px) and use a semi-transparent white to catch the "light" from the center-top radial gradient.
- **The Glow:** Primary interactive elements (like buttons or active states) emit a soft Indigo glow (`#5E6AD2` at 20% opacity) with a large blur radius (32px), simulating a backlit screen.
- **Background Visuals:** A primary light source is positioned at top-center, fading out toward the bottom, creating a natural focal point for the hero section.

## Shapes

The design system uses **Soft (0.25rem)** roundedness. This provides a modern touch without appearing too "bubbly" or consumer-grade.

- **Primary Radius:** 4px (Standard UI elements: inputs, buttons).
- **Secondary Radius:** 8px (Large cards, panels).
- **Tertiary Radius:** 12px (Outer modal containers).
- **Hard Edges:** Inner elements within a card should often remain sharp (0px) to contrast with the slightly rounded container, reinforcing the technical aesthetic.

## Components

### Buttons
- **Primary:** Background `#5E6AD2`, Text `#EDEDEF`. On hover, shift to `#6872D9` and trigger a subtle `scale(1.02)` transform and a soft indigo outer glow.
- **Ghost:** Border `rgba(255,255,255,0.06)`, Background `transparent`. On hover, background becomes `rgba(255,255,255,0.03)`.

### Cards (The "Glass" Container)
- Background: `rgba(255, 255, 255, 0.05)`.
- Border: `1px solid rgba(255, 255, 255, 0.06)`.
- Filter: `backdrop-filter: blur(10px)`.
- Effect: Add a very faint noise texture overlay to the background to break up gradients.

### Input Fields
- Background: `#050506`.
- Border: `1px solid rgba(255,255,255,0.1)`.
- Focus State: Border color moves to `#5E6AD2` with a 2px inner shadow.

### Metadata Chips
- Small, uppercase Geist Mono text. 
- Background: `rgba(94, 106, 210, 0.1)`.
- Border: `1px solid rgba(94, 106, 210, 0.2)`.
- Text Color: `#5E6AD2`.

### Motion & Interaction
- **Easing:** Use `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions.
- **Entrance:** Elements should subtly slide up (4px) and fade in.
- **Hover:** Active items should feel "magnetic," with tiny transforms that respond to the cursor position.