# Visual Infographic Resume

A stunning, interactive infographic resume showcasing 18+ years of professional experience with modern animations, skill visualizations, and measurable impact metrics.

## Features

### 🎨 Modern Design
- **Dark Theme**: Premium dark background with vibrant gradient accents
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Gradient Animations**: Dynamic color transitions and shimmer effects
- **Responsive Layout**: Fully responsive across all devices

### ⚡ Interactive Elements
- **Animated Counters**: Stats that count up when scrolled into view
- **Skill Progress Bars**: Animated skill proficiency indicators
- **Floating Particles**: Dynamic background particle effects
- **Parallax Scrolling**: Smooth depth-based scrolling effects
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Scroll Progress**: Top-of-page progress indicator

### 📊 Content Sections

1. **Header Section**
   - Rotating avatar ring animation
   - Contact badges with glassmorphism
   - Professional title and tagline

2. **Stats Overview**
   - 18+ Years Experience
   - 90+ Teams Mentored
   - 12 SDETs Led
   - 7 Programming Languages
   - Animated counters and progress bars

3. **Technical Expertise**
   - AI/ML Integration (GPT-4, RAG, Vector Databases)
   - Testing & Automation (Playwright, Selenium, Cucumber)
   - Programming Languages (TypeScript, Python, Java, Go)
   - DevOps & Cloud (Kubernetes, Docker, AWS)
   - Interactive skill bars with shimmer effects

4. **Career Journey**
   - Visual timeline with gradient line
   - Animated timeline dots with pulse effect
   - Detailed achievements for each role
   - Technology tags for each position

5. **Measurable Impact**
   - 60-80% Debugging Time Reduction
   - Top 5 App Store Ranking
   - 95% Test Coverage
   - 40% CI/CD Time Savings

6. **Signature Projects**
   - Friday Test Analysis Platform
   - Visualize Patterns & Algorithms
   - Mastermind Polyglot SDK
   - Saturday Framework
   - Project metrics and tech stacks

7. **Education & Learning**
   - Continuous professional development
   - Technical expertise highlights
   - Industry recognition

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, gradients, animations
- **Vanilla JavaScript**: No frameworks, pure performance
- **Google Fonts**: Inter & JetBrains Mono
- **Custom Animations**: Intersection Observer API
- **Modern CSS**: Grid, Flexbox, Custom Properties

## File Structure

```
infographic/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Key Animations

### Counter Animation
Numbers count up from 0 to their target value when scrolled into view.

### Skill Bars
Progress bars fill from 0% to their target percentage with a shimmer effect.

### Scroll Animations
Elements fade in and slide into position as you scroll down the page.

### Particle System
Floating particles rise from bottom to top with random trajectories.

### Parallax Effect
Header section moves at a different speed than the rest of the page.

## Performance Optimizations

- **Debounced Scroll Events**: Prevents performance issues
- **Intersection Observer**: Efficient scroll-based animations
- **CSS Transforms**: Hardware-accelerated animations
- **Minimal Dependencies**: No external libraries
- **Lazy Animations**: Only animate when elements are visible

## Browser Compatibility

- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --dark-bg: #0f0f23;
    --card-bg: #1a1a2e;
    --accent-color: #667eea;
}
```

### Content
Update content directly in `index.html` sections.

### Animations
Modify animation timings in `script.js`:
```javascript
const duration = 2000; // Animation duration in ms
const stepTime = duration / 100; // Step timing
```

## Print Support

The resume includes print-friendly styles that activate when printing:
- Removes animations
- Optimizes for paper layout
- Maintains readability

## Easter Eggs

Open the browser console to see a special message! 🎉

## Credits

Created by Oscar Rieken  
© 2026 All Rights Reserved

## License

This is a personal portfolio project. Feel free to use as inspiration, but please don't copy directly.

---

**Live Preview**: [View Resume](./index.html)  
**Portfolio**: [Back to Main Portfolio](../index.html)
