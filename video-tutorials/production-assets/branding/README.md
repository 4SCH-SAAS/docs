# 4SCH Branding Assets for Video Production

This directory contains all brand assets needed for video production.

## 📁 Directory Structure

```
branding/
├── logos/          # 4SCH logo files (SVG, PNG)
├── fonts/          # Brand fonts (Poppins, etc.)
├── colors/         # Color palette swatches
└── README.md       # This file
```

## 🎨 Logo Files Needed

### Primary Logo
- **4sch-logo.svg** - Vector logo (preferred for scaling)
- **4sch-logo.png** - High-res PNG (2000px width minimum)
- **4sch-logo-white.svg** - White version for dark backgrounds
- **4sch-logo-white.png** - White PNG version

### Icon/Mark Only (if available)
- **4sch-icon.svg** - Just the icon/symbol without text
- **4sch-icon.png** - PNG version

### Usage
- **Intro/Outro:** Use SVG for crisp rendering
- **Thumbnails:** Use PNG at 300-400px width
- **Watermarks:** Use white version at 20% opacity

## 🔤 Fonts

**Primary:** Poppins (Bold, SemiBold, Medium, Regular)
- Download from Google Fonts or include font files here
- License: Open Font License (commercial use allowed)

**Fallback:** Roboto or Open Sans

## 🎨 Color Palette

**Brand Colors:**
- Primary Green: #2e8555
- Dark Green: #1d5438
- Light Green: #4caf50

**UI Colors:**
- Deep Navy: #1a1a2e
- Charcoal: #16213e
- White: #ffffff
- Light Gray: #e0e0e0

See `colors/palette.md` for complete color specifications.

## 📏 Logo Usage Guidelines

### Minimum Sizes
- Video watermark: 80px width minimum
- Thumbnails: 120px width
- Intro/Outro: 200-400px width

### Clear Space
- Maintain clear space around logo equal to height of "4" in logo
- Don't place logo on busy backgrounds

### Don'ts
- ❌ Don't stretch or distort logo
- ❌ Don't change brand colors
- ❌ Don't add effects (shadows, gradients) to logo itself
- ❌ Don't rotate logo

## 📂 Where to Place Your Logo

**Drop your logo files here:**
```
video-tutorials/production-assets/branding/logos/
├── 4sch-logo.svg          ← Your main SVG logo
├── 4sch-logo.png          ← High-res PNG (2000px+ width)
├── 4sch-logo-white.svg    ← White version (if you have it)
└── 4sch-logo-white.png    ← White PNG version
```

After adding logos, update the HTML mockup to use the actual logo instead of text.

## 🔄 Updating the HTML Mockup

Once logo is added, modify `thumbnail-mockup-html.html`:

Replace line with class "logo":
```html
<!-- Change this: -->
<div class="logo">4SCH</div>

<!-- To this: -->
<div class="logo">
  <img src="../branding/logos/4sch-logo-white.png" 
       alt="4SCH Logo" 
       style="height: 60px;">
</div>
```

## 📞 Questions?

Contact: support@4sch.com
