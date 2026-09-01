# Tzar Venture — Design System & Color Palette Guide

This document defines the new premium Warm Paper and Forest Green visual identity for Tzar Venture. It transitions the application from a generic dark theme to a state-of-the-art, high-end organic brand aesthetic.

---

## 1. Color Palette Tokens

The brand palette is built around an organic, editorial canvas using Forest Green, Warm Sand, and Bright Gold accents.

| Variable Name | Hex Token | Visual Swatch | Primary Role |
| :--- | :--- | :--- | :--- |
| `--color-forest-green` | `#1D4224` | `████████` | Primary Brand Color (Headers, solid buttons, anchor elements) |
| `--color-bg-sand` | `#EFE8E0` | `████████` | Main Canvas / Page Background (warm paper texture feel) |
| `--color-gold-bright` | `#FFAE00` | `████████` | High-Contrast Action Accent (Highlights, active slide timers, badges) |
| `--color-mint-light` | `#B6F8DD` | `████████` | Soft Secondary/Success (Selected borders, light tags, success states) |
| `--color-text-ink` | `#0E2015` | `████████` | Primary Typography Color (high readability dark spruce/charcoal) |
| `--color-text-muted` | `#5C6860` | `████████` | Secondary Muted Copy (Paragraph details, labels) |
| `--color-border-subtle` | `rgba(29, 66, 36, 0.1)`| `████████` | Delicate 1px borders, separators, and card lines |

---

## 2. Component Guidelines & Styling Implementation

To maintain visual hierarchy across pages, these colors should be applied as follows:

### A. Background Canvas & Layout
* **Global Canvas**: Set `body` background to `#EFE8E0` to give the pages a premium editorial paper feel.
```css
body {
  background-color: #EFE8E0;
  color: #0E2015;
}
```

### B. Typography & Headers
* **H1 / H2 Headlines**: Render in `--color-text-ink` (`#0E2015`) with Montserrat font, extra-bold weighting, and tight tracking (`tracking-tight`).
* **Sub-tags & Accent lines**: Render in `--color-forest-green` (`#1D4224`).
* **Highlight Markers**: Highlight elements (like marker blocks behind headings) should use Bright Gold (`#FFAE00`) with dark text:
```html
<span className="bg-[#FFAE00] text-[#0E2015] px-2 py-0.5 rounded">
  High-Performance
</span>
```

### C. Cards & Containers
* Cards should stand out from the sand background using solid white backgrounds (`#FFFFFF`), rounded borders (`16px`), and soft, warm-toned drop shadows:
```css
.premium-card {
  background-color: #FFFFFF;
  border: 1px solid rgba(29, 66, 36, 0.08);
  border-radius: 1rem;
  box-shadow: 0 10px 30px -10px rgba(14, 32, 21, 0.05);
}
```

### D. Buttons & Interaction States
* **Primary Button**: Solid Forest Green (`#1D4224`) background with clean white text. On hover, shifts background to Bright Gold (`#FFAE00`) and text to Ink (`#0E2015`):
```css
.btn-primary {
  background-color: #1D4224;
  color: #FFFFFF;
  transition: all 0.2s ease-in-out;
}
.btn-primary:hover {
  background-color: #FFAE00;
  color: #0E2015;
}
```
* **Secondary Button**: Outlined card with a border in `rgba(29, 66, 36, 0.2)` and text in Forest Green. On hover, background shifts to a very light mint alpha (`rgba(182, 248, 221, 0.25)`).

### E. Badges & Tags
* **Success / Verified Tags**: Soft Light Mint background (`#B6F8DD`) with Forest Green text:
```html
<span className="bg-[#B6F8DD] text-[#1D4224] font-bold px-3 py-1 rounded-full text-xs">
  ✓ Verified Partner
</span>
```

---

## 3. Tailwind CSS Integration Code

Add these custom variables directly into your root CSS layout [`app/globals.css`](file:///d:/Tzar%20Venture%20New/Tzar-New/app/globals.css) under the Tailwind root theme directives:

```css
@theme {
  --color-forest-green: #1D4224;
  --color-bg-sand: #EFE8E0;
  --color-gold-bright: #FFAE00;
  --color-mint-light: #B6F8DD;
  --color-text-ink: #0E2015;
  --color-text-muted: #5C6860;
  --color-border-subtle: rgba(29, 66, 36, 0.1);
}
```

---

## 4. UI Layout Flow Example

```text
┌─────────────────────────────────────────────────────────────┐
│ Header (Transparent Sand, border-bottom)                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [MINT TAG] New Updates                                     │
│  H1: Premium Web Development                                │
│      [GOLD Highlighted Text]                                │
│                                                             │
│  Copy: Custom software and CRM platforms designed...        │
│                                                             │
│  [FOREST GREEN BUTTON: Enquire Now]                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
