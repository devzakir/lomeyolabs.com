# LomeyoLabs Design System & Style Guide

## Brand Identity
- **Company Name**: LomeyoLabs
- **Tagline**: "Innovative Templates and Software Products for You!"
- **Personality**: Professional, Developer-friendly, Modern, Trustworthy
- **Target Audience**: Developers, Agencies, Small Businesses

## Design Philosophy
- Modern and clean aesthetic
- Content-first approach
- Professional but approachable
- Emphasis on product showcase
- Focus on readability and usability

## Color System

### Primary Colors
```javascript
colors: {
  primary: {
    DEFAULT: '#2563eb', // Brand Blue
    dark: '#1d4ed8',    // Hover state
  },
  dark: '#0f172a',      // Text
  light: '#f8fafc',     // Background
}
```

### Usage Classes
```markdown
- Primary Button: `bg-primary hover:bg-primary-dark`
- Text: `text-dark`
- Background: `bg-light`
- Accent: `text-primary`
```

## Typography

### Font Families
```markdown
- Headers: `font-inter` (Inter)
- Body: `font-inter` (Inter)
- Code: `font-mono` (JetBrains Mono)
```

### Text Sizes
```markdown
# Headers
- Hero: `text-4xl md:text-5xl lg:text-6xl font-bold`
- H1: `text-3xl md:text-4xl font-bold`
- H2: `text-2xl md:text-3xl font-semibold`
- H3: `text-xl md:text-2xl font-semibold`

# Body
- Regular: `text-base`
- Small: `text-sm`
- Tiny: `text-xs`
```

## Spacing System

### Layout Spacing
```markdown
- Section Padding: `py-16 md:py-24`
- Content Margins: `my-8 md:my-12`
- Grid Gap: `gap-6 md:gap-8`
```

### Container Widths
```markdown
- Main Container: `max-w-7xl mx-auto px-4`
- Content Width: `max-w-6xl mx-auto px-4`
- Narrow Width: `max-w-4xl mx-auto px-4`
```

## Component Patterns

### Buttons
```markdown
# Primary Button
```jsx
<button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
  Button Text
</button>
```

# Secondary Button
```jsx
<button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-all duration-300">
  Button Text
</button>
```
```

### Cards
```markdown
# Product Card
```jsx
<div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group">
  <div className="aspect-video bg-gray-100 rounded-lg mb-4">
    {/* Image container */}
  </div>
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p className="text-gray-600 mb-4">{description}</p>
  <div className="flex items-center justify-between">
    <span className="text-primary font-bold">${price}</span>
    <button className="text-sm font-medium text-primary hover:text-primary-dark">
      Learn More →
    </button>
  </div>
</div>
```
```

### Grid Layouts
```markdown
# Product Grid
`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`

# Feature Grid
`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

# Testimonial Grid
`grid grid-cols-1 md:grid-cols-3 gap-6`
```

## Page Section Structure

### Homepage Sections Order
1. **Hero Section**
   ```jsx
   <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
     <div className="max-w-7xl mx-auto px-4">
       {/* Hero content */}
     </div>
   </section>
   ```

2. **Product Showcase**
   ```jsx
   <section className="py-16 md:py-24">
     <div className="max-w-7xl mx-auto px-4">
       <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
         Our Products
       </h2>
       {/* Product grid */}
     </div>
   </section>
   ```

3. **Features Section**
   ```jsx
   <section className="bg-gray-50 py-16 md:py-24">
     <div className="max-w-7xl mx-auto px-4">
       {/* Features grid */}
     </div>
   </section>
   ```

4. **Testimonials**
   ```jsx
   <section className="py-16 md:py-24">
     <div className="max-w-7xl mx-auto px-4">
       {/* Testimonials grid */}
     </div>
   </section>
   ```

## Animation Guidelines

### Hover Effects
```markdown
- Buttons: `transition-all duration-300 hover:scale-105`
- Cards: `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`
- Links: `transition-colors duration-200`
```

### Page Transitions
```markdown
- Page Entry: `animate-fadeIn`
- Section Entry: `animate-slideUp`
```

## Responsive Breakpoints
```markdown
- Mobile First: Default styles
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Large Desktop: `xl:` (1280px)
```

## Best Practices

### React Components
1. Use functional components with hooks
2. Keep components focused and reusable
3. Use proper TypeScript typing
4. Implement proper loading states
5. Handle errors gracefully

### Performance
1. Lazy load images
2. Use proper image sizing
3. Implement code splitting
4. Optimize bundle size
5. Use proper caching strategies

### Accessibility
1. Use semantic HTML
2. Implement proper ARIA labels
3. Ensure keyboard navigation
4. Maintain color contrast
5. Provide alt text for images

## AI Instructions for Code Generation
When generating code:
1. Use Tailwind classes exclusively
2. Follow mobile-first approach
3. Implement proper TypeScript typing
4. Include proper error handling
5. Add loading states
6. Consider accessibility
7. Follow React best practices

