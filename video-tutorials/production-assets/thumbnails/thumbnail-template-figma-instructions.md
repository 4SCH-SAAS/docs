# Figma Thumbnail Template Instructions

Quick guide to create 4SCH video thumbnails in Figma.

---

## Setup Master Template (One-Time)

1. **Create New Figma File:** "4SCH Video Thumbnails"

2. **Set Canvas:**
   - Frame: 1280 x 720px
   - Name: "Master Template"

3. **Add Background:**
   - Rectangle: 1280 x 720px
   - Fill: Linear gradient
     - Color 1: #1a1a2e (top)
     - Color 2: #16213e (bottom)
     - Angle: 45°

4. **Add 4SCH Logo:**
   - Position: Top left (40px, 40px)
   - Size: 120px width (maintain aspect ratio)
   - Opacity: 90%

5. **Create Text Styles:**

   **Title Style:**
   - Font: Poppins Bold
   - Size: 84px
   - Color: #ffffff
   - Line height: 100px
   - Text align: Center
   - Effect: Drop shadow (4px, 4px, 8px blur, 60% opacity black)

   **Subtitle Style:**
   - Font: Poppins Medium
   - Size: 44px
   - Color: #e0e0e0
   - Line height: 54px
   - Text align: Center

6. **Create Badge Components:**

   **Duration Badge:**
   - Rectangle: 120 x 50px, #2e8555, border-radius 8px
   - Text: "XX MIN", Poppins Bold 24px, white
   - Position: Bottom right (1120px, 640px)

   **Chapter Badge:**
   - Rectangle: 180 x 50px, white 10% opacity, 2px white border, radius 8px
   - Text: "X CHAPTERS", Poppins SemiBold 22px, white
   - Position: Bottom right (920px, 640px)

7. **Save as Component:** Right-click frame → Create Component

---

## Creating Individual Thumbnails

### Method: Duplicate & Customize

1. **Duplicate Master:** Copy master template
2. **Rename:** "01-System-Overview"
3. **Update Background:** Change gradient colors per design guide
4. **Add Main Element:** Icon, screenshot, or illustration
5. **Edit Title:** Replace with video title
6. **Edit Subtitle:** Replace with subtitle text
7. **Update Badges:** Change duration and chapter count
8. **Export:**
   - Format: JPG, Quality 90%
   - Scale: 1x (1280x720)
   - Filename: `01-system-overview-thumbnail.jpg`

---

## Quick Color Reference

Copy-paste these hex codes:

```
Primary:
#2e8555 - 4SCH Green
#1d5438 - Dark Green
#4caf50 - Light Green

Backgrounds:
#1a1a2e - Deep Navy
#16213e - Charcoal

Text:
#ffffff - White
#e0e0e0 - Light Gray

Role Accents:
#ff6b6b - Admin (Coral)
#4ecdc4 - Teacher (Teal)
#ffd93d - Parent (Yellow)
#6bcf7f - Student (Green)
#95e1d3 - Accountant (Mint)
#f38181 - Driver (Red)
#aa96da - Staff (Lavender)
```

---

## Export Settings

**YouTube Thumbnail:**
- 1280 x 720 px
- JPG, 90% quality
- Max 2MB

**Social Media (Facebook/LinkedIn):**
- 1200 x 628 px
- JPG, 85% quality

**Instagram Square:**
- 1080 x 1080 px
- JPG, 90% quality

---

## Batch Export (All 21 Thumbnails)

1. Select all thumbnail frames
2. In export panel, add:
   - JPG, 1x, Quality 90%
3. Click "Export 21 frames"
4. Save to: `/video-tutorials/production-assets/thumbnails/exports/`

---

**Estimated Time:**
- Master template: 30 minutes
- Each thumbnail: 5-10 minutes
- Total for 21: ~4 hours
