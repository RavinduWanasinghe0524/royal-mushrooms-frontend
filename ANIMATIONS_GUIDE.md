# Animation Reference Guide

## 🎬 All Animations in the Redesign

This guide documents all the animations used throughout the Royal Mushrooms website.

## Global CSS Animations

### 1. Floating Animation
**Location**: `globals.css`
```css
.floating {
  animation: float 6s ease-in-out infinite;
}
```
**Used in**: Hero mushroom image
**Effect**: Gentle up and down movement

### 2. Pulse Glow
**Location**: `globals.css`
```css
.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```
**Effect**: Pulsing shadow/glow effect

## Component-Specific Animations

### Hero Section (Hero.tsx)

#### Parallax Scrolling
```tsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
```
**Effect**: Background moves slower than foreground

#### Floating Particles
```tsx
animate={{
  y: [0, -100, 0],
  x: [0, random, 0],
  scale: [1, 1.5, 1],
}}
```
**Effect**: 20 particles floating randomly

#### Rotating Leaf Icon
```tsx
animate={{ rotate: [0, 360] }}
transition={{ duration: 20, repeat: Infinity }}
```
**Effect**: Continuous slow rotation

#### Gradient Text Animation
```tsx
animate={{ 
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
}}
```
**Effect**: Moving gradient effect on text

#### Button Shine Effect
```tsx
<motion.div
  animate={{ x: ["-100%", "100%"] }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```
**Effect**: Sweeping light across button

#### Stats Counter Animation
```tsx
initial={{ scale: 0 }}
whileInView={{ scale: 1 }}
transition={{ type: "spring" }}
```
**Effect**: Stats pop in with spring physics

#### Scroll Indicator
```tsx
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```
**Effect**: Bouncing scroll arrow

### Product Grid (ProductGrid.tsx)

#### Category Filter Buttons
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```
**Effect**: Scale on hover and tap

#### 3D Card Tilt
```tsx
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);
const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);
```
**Effect**: Card tilts based on mouse position

#### Premium Badge
```tsx
initial={{ scale: 0, rotate: -180 }}
animate={{ scale: 1, rotate: 0 }}
transition={{ type: "spring" }}
```
**Effect**: Badge spins in

#### Favorite Heart
```tsx
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.9 }}
```
**Effect**: Heart grows on hover

#### Product Image Animations
```tsx
animate={{ 
  scale: isHovered ? 1.1 : 1,
  rotateZ: isHovered ? [0, -2, 2, 0] : 0
}}
```
**Effect**: Image grows and wobbles on hover

#### Image Shine Effect
```tsx
initial={{ x: "-100%" }}
animate={{ x: "100%" }}
transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
```
**Effect**: Sweeping light across image

#### Benefits Tags
```tsx
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.6 + i * 0.1 }}
```
**Effect**: Tags pop in sequentially

#### Add to Cart Button
```tsx
whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
whileTap={{ scale: 0.9 }}
```
**Effect**: Button grows and shakes on hover

#### Background Decorations
```tsx
animate={{ 
  scale: [1, 1.2, 1], 
  x: [0, 50, 0] 
}}
transition={{ duration: 10, repeat: Infinity }}
```
**Effect**: Slow moving gradient orbs

### Features Section (Features.tsx)

#### Feature Cards
```tsx
initial={{ opacity: 0, y: 30, scale: 0.9 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
transition={{ 
  delay: index * 0.1,
  type: "spring",
  stiffness: 100
}}
```
**Effect**: Cards slide up and scale in

#### Card Hover
```tsx
whileHover={{ y: -8 }}
```
**Effect**: Card lifts on hover

#### Icon Animation
```tsx
whileHover={{ 
  rotate: [0, -10, 10, -10, 0], 
  scale: 1.1 
}}
```
**Effect**: Icon wobbles and grows

#### Floating Sparkle
```tsx
animate={{ 
  scale: [0, 1, 0],
  rotate: [0, 180, 360]
}}
transition={{ duration: 2, repeat: Infinity }}
```
**Effect**: Sparkle appears and rotates

#### Bottom Accent Line
```tsx
initial={{ scaleX: 0 }}
whileInView={{ scaleX: 1 }}
```
**Effect**: Line draws from left to right

#### Statistics
```tsx
initial={{ scale: 0 }}
whileInView={{ scale: 1 }}
transition={{ type: "spring", stiffness: 200 }}
```
**Effect**: Numbers pop in with bounce

### Navbar (Navbar.tsx)

#### Initial Slide Down
```tsx
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ type: "spring", stiffness: 100 }}
```
**Effect**: Navbar slides down on load

#### Logo Animation
```tsx
whileHover={{ rotate: [0, -10, 10, -10, 0] }}
```
**Effect**: Leaf icon wobbles

#### Nav Link Underline
```tsx
initial={{ scaleX: 0 }}
whileHover={{ scaleX: 1 }}
```
**Effect**: Underline expands from left

#### Icon Buttons
```tsx
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
```
**Effect**: Icons grow on hover

#### Cart Badge
```tsx
initial={{ scale: 0 }}
animate={{ scale: 1 }}
```
**Effect**: Badge pops in

#### Mobile Menu
```tsx
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
```
**Effect**: Menu slides down smoothly

#### Mobile Links
```tsx
whileHover={{ x: 10 }}
```
**Effect**: Links slide right on hover

### Footer (Footer.tsx)

#### Logo Animation
```tsx
whileHover={{ rotate: [0, -10, 10, 0] }}
```
**Effect**: Logo wobbles on hover

#### Subscribe Button
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```
**Effect**: Button scales

#### Footer Links
```tsx
whileHover={{ x: 5 }}
```
**Effect**: Links slide right

#### Social Icons
```tsx
whileHover={{ scale: 1.1, y: -3 }}
whileTap={{ scale: 0.9 }}
```
**Effect**: Icons lift and grow

#### Background Orbs
```tsx
animate={{ scale: [1, 1.2, 1] }}
transition={{ duration: 15, repeat: Infinity }}
```
**Effect**: Slow pulsing orbs

## Animation Timing Guide

### Fast (0.3s or less)
- Button clicks
- Hover states
- Small scale changes

### Medium (0.5-0.8s)
- Card animations
- Page transitions
- Icon animations

### Slow (1s+)
- Background effects
- Continuous rotations
- Parallax scrolling

### Infinite
- Floating animations
- Pulse effects
- Background decorations
- Rotating gradients

## Animation Patterns

### Spring Physics
```tsx
transition={{ type: "spring", stiffness: 100 }}
```
**When to use**: Natural, bouncy feel

### Ease In/Out
```tsx
transition={{ duration: 0.8, ease: "easeOut" }}
```
**When to use**: Smooth, professional motion

### Linear
```tsx
transition={{ duration: 10, ease: "linear", repeat: Infinity }}
```
**When to use**: Continuous, constant motion

### Stagger
```tsx
transition={{ delay: index * 0.1 }}
```
**When to use**: Sequential appearance

## Performance Tips

### GPU-Accelerated Properties
✅ Use these for best performance:
- `transform` (scale, rotate, translate)
- `opacity`
- `filter` (blur, brightness)

❌ Avoid animating:
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`

### Optimization
```tsx
// Add will-change for complex animations
style={{ willChange: "transform" }}

// Use transform3d to trigger GPU
style={{ transform: "translateZ(0)" }}

// Disable animations on low-end devices
const prefersReducedMotion = useReducedMotion();
```

## Custom Animation Utilities

### Glass Effect (globals.css)
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Text Gradient
```css
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500;
}
```

### Card Hover
```css
.card:hover {
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-4px);
}
```

## Quick Reference

| Animation Type | Component | Duration | Repeat |
|---------------|-----------|----------|--------|
| Parallax | Hero | Scroll-based | - |
| Floating | Hero | 6s | ∞ |
| 3D Tilt | Products | Mouse-based | - |
| Shine | Buttons/Images | 2s | ∞ |
| Spring Pop | Stats/Badges | 0.5s | Once |
| Pulse Glow | Premium items | 2s | ∞ |
| Slide Up | Feature cards | 0.8s | Once |
| Wobble | Icons | 0.5s | On hover |
| Scale | Buttons | 0.3s | On hover |

---

**Tip**: All animations use Framer Motion for consistency and can be easily customized by adjusting the transition props!
