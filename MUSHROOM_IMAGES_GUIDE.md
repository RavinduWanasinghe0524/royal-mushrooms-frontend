# Real Mushroom Photos Guide

## Overview
This guide explains how to add real mushroom photographs to replace the current SVG placeholders.

## Image Specifications

### Recommended Specifications
- **Format**: JPG, PNG, or WebP
- **Resolution**: 1200x1200px minimum (square aspect ratio)
- **File Size**: < 500KB (optimize for web)
- **Background**: Clean white or transparent background
- **Lighting**: Natural, well-lit, professional photography

## Directory Structure

Create the following directory structure:
```
public/
  images/
    mushrooms/
      hero-mushroom.jpg          (Main hero image - 1920x1080px)
      shiitake.jpg               (Product image - 1200x1200px)
      oyster.jpg                 (Product image - 1200x1200px)
      portobello.jpg             (Product image - 1200x1200px)
      lions-mane.jpg             (Product image - 1200x1200px)
      chanterelle.jpg            (Product image - 1200x1200px)
      truffle.jpg                (Product image - 1200x1200px)
```

## Where to Get High-Quality Mushroom Photos

### Free Stock Photo Websites
1. **Unsplash** (unsplash.com) - High-quality, free-to-use images
2. **Pexels** (pexels.com) - Free stock photos
3. **Pixabay** (pixabay.com) - Free images and videos

### Search Terms
- "shiitake mushroom white background"
- "oyster mushroom isolated"
- "portobello mushroom close up"
- "lion's mane mushroom"
- "chanterelle mushroom"
- "black truffle"

## How to Add Images

### Step 1: Create Directory
```bash
mkdir -p public/images/mushrooms
```

### Step 2: Add Images
Place your downloaded/prepared images in `public/images/mushrooms/`

### Step 3: Update Component Files

#### In Hero.tsx (Line ~106)
Replace:
```tsx
<Image
  src="/images/shiitake.svg"
  alt="Premium Royal Mushrooms"
  fill
  className="object-contain p-8 floating"
  priority
/>
```

With:
```tsx
<Image
  src="/images/mushrooms/hero-mushroom.jpg"
  alt="Premium Royal Mushrooms"
  fill
  className="object-cover rounded-xl"
  priority
/>
```

#### In ProductGrid.tsx (Line ~18-73)
Update the `image` property for each product:
```tsx
const products: Product[] = [
  {
    id: 1,
    name: 'Forest Shiitake',
    // ... other properties
    image: '/images/mushrooms/shiitake.jpg', // Updated
    // Remove realImage property if not needed
  },
  // ... repeat for other products
];
```

#### In ProductCard Component (Line ~250-260)
Update the Image component:
```tsx
<Image
  src={product.image}
  alt={product.name}
  fill
  className="object-cover" // Changed from object-contain
/>
```

## Image Optimization Tips

### 1. Compress Images
Use tools like:
- **TinyPNG** (tinypng.com) - Online compression
- **Squoosh** (squoosh.app) - Google's image optimizer
- **ImageOptim** - Mac app for compression

### 2. Convert to WebP
For better performance:
```bash
# Using Next.js Image component (automatic)
# Or use online converters:
# - CloudConvert (cloudconvert.com)
# - Convertio (convertio.co)
```

### 3. Use Next.js Image Optimization
The `next/image` component automatically optimizes images. Ensure:
- Images are in the `public` directory
- Use proper `fill`, `width`, and `height` props
- Add `priority` for above-the-fold images

## Quick Start Example

If you want to test with real photos immediately:

1. Download sample mushroom images from Unsplash:
   - https://unsplash.com/s/photos/shiitake-mushroom
   - https://unsplash.com/s/photos/oyster-mushroom
   - https://unsplash.com/s/photos/portobello-mushroom

2. Create the directory:
   ```bash
   mkdir public\images\mushrooms
   ```

3. Rename downloaded files to match the naming convention:
   - `shiitake.jpg`
   - `oyster.jpg`
   - `portobello.jpg`
   - `lions-mane.jpg`
   - `chanterelle.jpg`
   - `truffle.jpg`

4. Update the code as described above

## Testing

After adding images, run:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your real mushroom photos in action!

## Troubleshooting

### Images Not Showing
1. Check file paths are correct
2. Ensure files are in `public/images/mushrooms/`
3. Restart the development server
4. Clear browser cache

### Images Too Large
1. Compress images using TinyPNG or Squoosh
2. Resize to recommended dimensions
3. Convert to WebP format

### Blurry Images
1. Use higher resolution source images
2. Check `objectFit` CSS property
3. Ensure images are at least 1200x1200px

## Current Placeholder Locations

The redesign currently uses SVG placeholders in these locations:
- Hero section: Line 106 in `Hero.tsx`
- Product cards: Line 250-260 in `ProductGrid.tsx`

Simply update these locations with your real photo paths!
