# CodeMentor Landing Page - Student Exercise Guide

## 🎯 Project Overview

**Goal**: Build a professional, fully responsive developer mentorship platform landing page that demonstrates modern CSS layout techniques including Flexbox, CSS Grid, Media Queries, and Container Queries.

**Tech Stack**:

-   React 19 + TypeScript
-   Vite build tool
-   Tailwind CSS 4
-   Lucide React (icons)

**Time Estimate**: 8-12 hours (split across multiple sessions)

---

## 📚 Prerequisites

Before starting, you should understand:

-   ✅ React fundamentals (components, props, state)
-   ✅ TypeScript basics (types, interfaces)
-   ✅ Tailwind CSS utility classes
-   ✅ Basic Flexbox concepts
-   ✅ Basic CSS Grid concepts

---

## 🚀 Setup Instructions

### Step 1: Create Project

```bash
npm create vite@latest codementor-landing --template react-ts
cd codementor-landing
npm install
```

### Step 2: Install Dependencies

```bash
npm install lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

### Step 3: Configure Tailwind CSS 4

Edit `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],
});
```

### Step 4: Setup Tailwind Styles

Replace `src/index.css` with:

```css
@import 'tailwindcss';
```

### Step 5: Test Setup

```bash
npm run dev
```

Visit `http://localhost:5173` - you should see the Vite + React welcome screen.

---

## 🎓 Learning Path

This exercise is divided into 11 sections. Each builds on responsive design concepts:

| Section         | Concepts Learned                    | Difficulty |
| --------------- | ----------------------------------- | ---------- |
| 1. Navigation   | Flexbox, Mobile Menu, Media Queries | ⭐⭐       |
| 2. Hero         | Grid 2-Column, Flexbox Buttons      | ⭐⭐       |
| 3. Stats Banner | Grid Progressive Enhancement        | ⭐         |
| 4. Features     | Container Queries, Grid             | ⭐⭐⭐     |
| 5. How It Works | Flexbox Direction Switch            | ⭐⭐⭐     |
| 6. Mentors      | Scroll-Snap, Container Queries      | ⭐⭐⭐⭐   |
| 7. Testimonials | Masonry Grid                        | ⭐⭐       |
| 8. Pricing      | Grid + Flexbox Hybrid               | ⭐⭐⭐     |
| 9. FAQ          | Accordion, Grid 2-Column            | ⭐⭐       |
| 10. CTA         | Form Layout Direction Change        | ⭐⭐       |
| 11. Footer      | Complex Grid (1→2→4 columns)        | ⭐⭐⭐     |

---

## 📝 Section-by-Section Exercises

## Section 1: Navigation Component

**File**: `src/components/Navigation.tsx`

### Concepts to Apply:

-   **Flexbox**: `justify-between`, `items-center`, `gap`
-   **Media Queries**: `hidden md:flex`, `md:hidden`
-   **State Management**: Mobile menu toggle

### Requirements:

1. Create a sticky navigation bar
2. Logo on the left, navigation links in center, CTA button on right
3. Mobile: Show hamburger menu icon
4. Desktop: Show full horizontal navigation

### Key Tailwind Classes:

```tsx
// Container: sticky top-0, z-50, bg-white
// Inner: flex justify-between items-center
// Desktop nav: hidden md:flex gap-8
// Mobile menu: md:hidden
```

### Exercise Tasks:

-   [ ] Create component with logo (use Lucide `Code2` icon)
-   [ ] Add 5 navigation links: Features, How It Works, Mentors, Pricing, FAQ
-   [ ] Implement mobile menu state (`useState`)
-   [ ] Toggle between Menu and X icon
-   [ ] Test on mobile (< 768px) and desktop (≥ 768px)

### Bonus Challenges:

-   Add smooth scroll behavior to anchor links
-   Animate mobile menu slide-in
-   Add backdrop blur to sticky navigation

---

## Section 2: Hero Component

**File**: `src/components/Hero.tsx`

### Concepts to Apply:

-   **CSS Grid**: 2-column layout (60/40 split)
-   **Flexbox**: Button groups with flex-wrap
-   **Media Queries**: Responsive text sizes

### Requirements:

1. Left column: Headline, description, CTA buttons, social proof
2. Right column: Visual content (code cards, stats)
3. Mobile: Single column stacked
4. Desktop: 2-column side-by-side

### Key Tailwind Classes:

```tsx
// Grid: grid grid-cols-1 md:grid-cols-5
// Left: md:col-span-3 (60%)
// Right: md:col-span-2 (40%)
// Buttons: flex flex-wrap gap-4
```

### Exercise Tasks:

-   [ ] Create 2-column grid that collapses on mobile
-   [ ] Add headline with gradient text (`bg-gradient-to-r bg-clip-text text-transparent`)
-   [ ] Create button group with Primary + Secondary buttons
-   [ ] Add trust badges row (use Flexbox with gap)
-   [ ] Add floating animation cards on right side

### Bonus Challenges:

-   Add typewriter effect to headline
-   Create pulsing animation on CTA button
-   Add parallax scroll effect

---

## Section 3: Stats Banner Component

**File**: `src/components/StatsBanner.tsx`

### Concepts to Apply:

-   **CSS Grid**: Progressive enhancement (1 → 2 → 4 columns)
-   **Flexbox**: Icon + content vertical layout

### Requirements:

1. Display 4 statistics with icons
2. Mobile: 1 column
3. Tablet: 2 columns
4. Desktop: 4 columns

### Key Tailwind Classes:

```tsx
// Grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
// Card: flex flex-col items-center
```

### Exercise Tasks:

-   [ ] Create stats array with 4 items (Developers, Sessions, Mentors, Rating)
-   [ ] Map over stats to create cards
-   [ ] Use gradient background for icons
-   [ ] Center-align all content
-   [ ] Test responsive breakpoints

### Bonus Challenges:

-   Add counter animation (count up on scroll into view)
-   Add hover scale effect
-   Stagger entrance animations

---

## Section 4: Features Component

**File**: `src/components/Features.tsx`

### Concepts to Apply:

-   **CSS Grid**: 3-column responsive layout
-   **Container Queries**: Cards adapt to container width
-   **Flexbox**: Vertical card content

### Requirements:

1. Display 6 feature cards
2. Mobile: 1 column
3. Tablet: 2 columns
4. Desktop: 3 columns
5. Use `@container` for card-level responsiveness

### Key Tailwind Classes:

```tsx
// Parent: @container
// Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
// Card: @container (enables container queries on card)
// Content: hidden @md:block (show on wide cards only)
```

### Exercise Tasks:

-   [ ] Create features array with 6 items
-   [ ] Implement FeatureCard component
-   [ ] Add `@container` directive to parent
-   [ ] Use container queries to hide/show "Learn more" link
-   [ ] Add gradient icon backgrounds

### Bonus Challenges:

-   Truncate description text on narrow cards
-   Add icon animation on hover
-   Create staggered grid entrance animation

---

## Section 5: How It Works Component

**File**: `src/components/HowItWorks.tsx`

### Concepts to Apply:

-   **Flexbox Direction Switch**: `flex-col` → `flex-row`
-   **Media Queries**: Layout transformation
-   **Pseudo-Elements**: Timeline connectors

### Requirements:

1. Display 4-step process
2. Mobile: Vertical timeline
3. Desktop: Horizontal timeline
4. Add connecting lines between steps

### Key Tailwind Classes:

```tsx
// Container: flex flex-col lg:flex-row
// Step: flex lg:flex-col (mobile horizontal, desktop vertical)
// Line: hidden lg:block (horizontal connector)
```

### Exercise Tasks:

-   [ ] Create steps array with 4 items
-   [ ] Implement vertical layout for mobile
-   [ ] Switch to horizontal layout on desktop
-   [ ] Add numbered circles for each step
-   [ ] Draw connecting line (use absolute positioning)

### Bonus Challenges:

-   Animate progress line on scroll
-   Add step reveal animation
-   Create interactive step highlighting

---

## Section 6: Mentor Showcase Component

**Files**: `src/components/MentorShowcase.tsx`

### Concepts to Apply:

-   **Scroll-Snap**: Horizontal mobile scrolling
-   **CSS Grid**: 2-column → 4-column
-   **Container Queries**: Card detail visibility

### Requirements:

1. Display 8 mentor cards
2. Mobile: Horizontal scroll with snap
3. Desktop: 4-column grid
4. Use container queries to show/hide skills

### Key Tailwind Classes:

```tsx
// Mobile: overflow-x-auto snap-x snap-mandatory
// Card: snap-start w-72
// Desktop: grid grid-cols-2 lg:grid-cols-4
// Skills: hidden @md:flex (show on wide containers)
```

### Exercise Tasks:

-   [ ] Create mentors array with 8 items
-   [ ] Implement horizontal scroll for mobile
-   [ ] Add `scroll-snap-type: x mandatory`
-   [ ] Switch to grid layout on tablet+
-   [ ] Use container queries for skills badges

### Bonus Challenges:

-   Add scroll indicators (dots)
-   Implement drag-to-scroll
-   Add "View All" infinite scroll

---

## Section 7: Testimonials Component

**File**: `src/components/Testimonials.tsx`

### Concepts to Apply:

-   **CSS Grid**: Masonry-style layout
-   **Flexbox**: Card internal structure

### Requirements:

1. Display 6 testimonials
2. Mobile: 1 column
3. Tablet: 2 columns
4. Desktop: 3 columns
5. Varying content lengths create visual interest

### Key Tailwind Classes:

```tsx
// Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
// Card: flex flex-col (vertical stacking)
// Content: flex-1 (expand to fill)
```

### Exercise Tasks:

-   [ ] Create testimonials array with 6 items (vary text lengths)
-   [ ] Map over testimonials to create cards
-   [ ] Add quote icon at top
-   [ ] Display author info with avatar
-   [ ] Test with different text lengths

### Bonus Challenges:

-   Implement true CSS masonry layout
-   Add star ratings
-   Create carousel for mobile

---

## Section 8: Pricing Component

**File**: `src/components/Pricing.tsx`

### Concepts to Apply:

-   **CSS Grid**: 3-column equal-width layout
-   **Flexbox**: Card vertical alignment, button pinning
-   **Media Queries**: Hide features on mobile

### Requirements:

1. Display 3 pricing tiers (Free, Pro, Enterprise)
2. Mobile: Stacked cards
3. Desktop: 3-column grid
4. Highlight "Most Popular" plan
5. Pin CTA button to bottom of card

### Key Tailwind Classes:

```tsx
// Grid: grid grid-cols-1 lg:grid-cols-3 gap-8
// Card: flex flex-col (vertical)
// Features: flex-1 (expand to fill space)
// Button: mt-auto (push to bottom)
```

### Exercise Tasks:

-   [ ] Create pricingTiers array with 3 items
-   [ ] Implement PricingCard component
-   [ ] Add "Most Popular" badge
-   [ ] Use `flex-1` and `mt-auto` to pin button
-   [ ] Add checkmarks for included features

### Bonus Challenges:

-   Add toggle for monthly/annual billing
-   Animate pricing changes
-   Add comparison table view

---

## Section 9: FAQ Component

**File**: `src/components/FAQ.tsx`

### Concepts to Apply:

-   **CSS Grid**: 2-column FAQ layout
-   **Flexbox**: Question/answer structure
-   **State Management**: Accordion expand/collapse

### Requirements:

1. Display 8 FAQ items
2. Mobile: 1 column
3. Desktop: 2 columns
4. Accordion functionality (only one open at a time)
5. Smooth expand/collapse animations

### Key Tailwind Classes:

```tsx
// Grid: grid grid-cols-1 md:grid-cols-2 gap-4
// Question: flex justify-between items-center
// Icon: transition-transform (rotate on open)
// Answer: max-h-0 / max-h-96 (expand/collapse)
```

### Exercise Tasks:

-   [ ] Create faqs array with 8 items
-   [ ] Implement accordion state (`useState`)
-   [ ] Toggle item open/closed on click
-   [ ] Rotate chevron icon (180deg when open)
-   [ ] Animate answer reveal (max-height transition)

### Bonus Challenges:

-   Allow multiple items open simultaneously
-   Add search/filter functionality
-   Implement keyboard navigation

---

## Section 10: CTA Component

**File**: `src/components/CTA.tsx`

### Concepts to Apply:

-   **Flexbox Direction Switch**: Form layout vertical → horizontal
-   **Media Queries**: Layout transformation
-   **Gradient Backgrounds**: Eye-catching design

### Requirements:

1. Email input + submit button
2. Mobile: Stacked (vertical)
3. Desktop: Inline (horizontal)
4. Gradient background with decorative elements

### Key Tailwind Classes:

```tsx
// Form: flex flex-col sm:flex-row gap-4
// Input: flex-1 (expand to fill)
// Background: bg-gradient-to-br from-indigo-600 to-cyan-500
```

### Exercise Tasks:

-   [ ] Create form with email input and button
-   [ ] Use Flexbox with direction change
-   [ ] Add gradient background
-   [ ] Include trust indicators below form
-   [ ] Add social proof stats

### Bonus Challenges:

-   Add form validation
-   Implement email capture API integration
-   Add animated background gradients

---

## Section 11: Footer Component

**File**: `src/components/Footer.tsx`

### Concepts to Apply:

-   **CSS Grid**: Complex multi-column layout (1 → 2 → 4)
-   **Flexbox**: Social icons, bottom bar

### Requirements:

1. Brand column (logo, description, social icons)
2. 4 link columns (Product, Resources, Company, Legal)
3. Newsletter subscription form
4. Bottom bar with copyright and legal links

### Key Tailwind Classes:

```tsx
// Main grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
// Brand: sm:col-span-2 lg:col-span-1
// Social: flex gap-4
// Bottom: flex flex-col sm:flex-row justify-between
```

### Exercise Tasks:

-   [ ] Create footer link structure (4 columns)
-   [ ] Implement responsive grid (1 → 2 → 4 columns)
-   [ ] Add social media icons with Flexbox
-   [ ] Create newsletter form
-   [ ] Build bottom bar with copyright

### Bonus Challenges:

-   Add theme toggle (dark mode)
-   Implement language selector
-   Add footer "back to top" button

---

## 🎨 Final Assembly

### Step 12: Main App Component

**File**: `src/App.tsx`

```tsx
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import MentorShowcase from './components/MentorShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<main>
				<Hero />
				<StatsBanner />
				<Features />
				<HowItWorks />
				<MentorShowcase />
				<Testimonials />
				<Pricing />
				<FAQ />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}

export default App;
```

### Exercise Tasks:

-   [ ] Import all 11 components
-   [ ] Assemble in proper order
-   [ ] Test full page scroll
-   [ ] Verify all anchor links work
-   [ ] Test on multiple screen sizes

---

## 🧪 Testing Checklist

Test your landing page on these breakpoints:

| Device  | Width   | Checklist                                                                                                                    |
| ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Mobile  | 375px   | ☐ Navigation hamburger menu works<br>☐ Hero is single column<br>☐ Mentors scroll horizontally<br>☐ CTA form is stacked       |
| Tablet  | 768px   | ☐ Navigation shows full menu<br>☐ Features are 2 columns<br>☐ FAQ is 2 columns<br>☐ Footer is 2 columns                      |
| Desktop | 1024px  | ☐ Hero is 2 columns<br>☐ Stats are 4 columns<br>☐ Features are 3 columns<br>☐ Mentors are 4 columns<br>☐ Footer is 4 columns |
| Wide    | 1440px+ | ☐ Content max-width maintains readability<br>☐ No horizontal overflow<br>☐ Images scale properly                             |

---

## 📊 Responsive Pattern Reference

### Flexbox Patterns Used (15+)

1. **justify-between** - Space between navigation items
2. **items-center** - Vertical centering in navigation
3. **gap-4/6/8** - Consistent spacing in button groups
4. **flex-wrap** - Button groups wrap on narrow screens
5. **flex-col** - Vertical stacking on mobile
6. **flex-row** - Horizontal layout on desktop
7. **flex-1** - Expanding form inputs
8. **space-y-4** - Vertical spacing in cards
9. **items-start** - Left-align feature card content
10. **justify-center** - Center social media icons
11. **mt-auto** - Pin buttons to bottom of cards
12. **flex-shrink-0** - Prevent icon squishing
13. **gap-x-4 gap-y-2** - Different horizontal/vertical gaps
14. **flex-col-reverse** - Reverse order on mobile
15. **items-baseline** - Baseline alignment for pricing

### CSS Grid Patterns Used (12+)

1. **grid-cols-1** - Single column mobile base
2. **sm:grid-cols-2** - 2 columns on small screens
3. **md:grid-cols-2** - 2 columns on medium screens
4. **lg:grid-cols-3** - 3 columns on large screens
5. **lg:grid-cols-4** - 4 columns on large screens
6. **md:grid-cols-5** - 5 columns for 60/40 hero split
7. **col-span-2** - Span multiple columns
8. **col-span-3** - Span 3 columns
9. **gap-4/6/8** - Consistent grid gutters
10. **grid gap-x-8 gap-y-12** - Different X/Y gaps
11. **auto-rows-min** - Minimum row heights
12. **grid-flow-dense** - Dense grid packing

### Media Query Patterns Used (20+)

1. **sm:** (≥ 640px) - Small tablet breakpoint
2. **md:** (≥ 768px) - Tablet breakpoint
3. **lg:** (≥ 1024px) - Desktop breakpoint
4. **xl:** (≥ 1280px) - Wide desktop breakpoint
5. **2xl:** (≥ 1536px) - Ultra-wide breakpoint
6. **hidden md:flex** - Show on desktop, hide on mobile
7. **md:hidden** - Hide on desktop, show on mobile
8. **text-4xl sm:text-5xl lg:text-6xl** - Responsive text sizes
9. **p-4 md:p-8** - Responsive padding
10. **gap-8 lg:gap-12** - Responsive gaps
11. **mb-4 md:mb-8** - Responsive margins
12. **w-full md:w-auto** - Full width on mobile, auto on desktop
13. **max-w-7xl** - Container max-widths
14. **px-4 sm:px-6 lg:px-8** - Responsive horizontal padding
15. **py-12 md:py-16 lg:py-24** - Responsive vertical padding
16. **rounded-lg md:rounded-2xl** - Responsive border radius
17. **shadow-md md:shadow-xl** - Responsive shadows
18. **space-y-6 md:space-y-8** - Responsive vertical spacing
19. **min-h-screen md:min-h-[600px]** - Responsive heights
20. **grid-cols-1 md:grid-cols-2 lg:grid-cols-3** - Progressive column enhancement

### Container Query Patterns Used (8+)

1. **@container** - Enable container queries on parent
2. **@sm:** (≥ 24rem container) - Small container breakpoint
3. **@md:** (≥ 28rem container) - Medium container breakpoint
4. **@lg:** (≥ 32rem container) - Large container breakpoint
5. **hidden @md:block** - Show content in wide containers
6. **@sm:line-clamp-none** - Remove truncation in wide containers
7. **@md:flex** - Flexbox in wide containers
8. **@container w-72 sm:w-auto** - Fixed width mobile, auto in grid

---

## 🏆 Completion Criteria

You've successfully completed this exercise when:

-   ✅ All 11 sections are implemented
-   ✅ Page is fully responsive (mobile → tablet → desktop)
-   ✅ All interactive elements work (menu, accordion, forms)
-   ✅ No console errors
-   ✅ Page passes lighthouse performance audit (>80 score)
-   ✅ Code is clean and well-commented
-   ✅ Git repository has meaningful commit history

---

## 🎓 Learning Outcomes

By completing this exercise, you will have learned:

1. **Flexbox Mastery**

    - When to use flex vs grid
    - Direction switching for responsive layouts
    - Alignment and distribution patterns

2. **CSS Grid Expertise**

    - Multi-column responsive grids
    - Progressive enhancement (1 → 2 → 3 → 4 columns)
    - Grid areas and spanning

3. **Media Queries**

    - Mobile-first approach
    - Breakpoint strategy
    - Tailwind responsive utilities

4. **Container Queries**

    - Component-level responsiveness
    - Truly modular components
    - Parent-aware styling

5. **Component Architecture**

    - Reusable components
    - Props and composition
    - State management

6. **Modern CSS Features**
    - Gradient backgrounds
    - Animations and transitions
    - Scroll snap
    - Backdrop filters

---

## 📚 Additional Resources

### Documentation

-   [Tailwind CSS Docs](https://tailwindcss.com/docs)
-   [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
-   [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
-   [Container Queries Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)

### Tools

-   [Responsively App](https://responsively.app/) - Multi-device testing
-   [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
-   [Can I Use](https://caniuse.com/) - Browser compatibility

### Inspiration

-   [Awwwards](https://www.awwwards.com/)
-   [Dribbble](https://dribbble.com/tags/landing-page)
-   [Land-book](https://land-book.com/)

---

## 🎯 Next Steps

After completing this exercise:

1. **Extend the Project**

    - Add authentication pages
    - Create mentor profile pages
    - Build dashboard for logged-in users

2. **Optimize Performance**

    - Implement lazy loading
    - Add image optimization
    - Reduce bundle size

3. **Add Advanced Features**

    - Dark mode toggle
    - Internationalization (i18n)
    - Analytics integration

4. **Deploy**
    - Deploy to Vercel/Netlify
    - Set up CI/CD pipeline
    - Add custom domain

---

## 💡 Tips for Success

1. **Work in iterations** - Complete one section at a time
2. **Test frequently** - Check responsiveness after each component
3. **Use DevTools** - Chrome/Firefox DevTools for debugging
4. **Read error messages** - TypeScript errors are helpful
5. **Commit often** - Save your progress with git
6. **Ask for help** - Use community forums when stuck
7. **Experiment** - Try different approaches and patterns
8. **Take breaks** - Complex layouts require fresh eyes

---

## 🐛 Common Pitfalls

❌ **Forgetting mobile-first approach** - Always start with mobile styles
❌ **Overusing absolute positioning** - Prefer Flexbox/Grid
❌ **Hardcoding breakpoints** - Use Tailwind's responsive utilities
❌ **Not testing on real devices** - Emulators aren't perfect
❌ **Ignoring accessibility** - Use semantic HTML and ARIA labels
❌ **Over-nesting components** - Keep component tree shallow
❌ **Mixing layout methods** - Be consistent with Flexbox/Grid choices

---

## ✨ Success!

Congratulations on completing the CodeMentor Landing Page exercise! You now have hands-on experience with modern responsive design patterns and a production-ready landing page in your portfolio.

**Share your work**: Deploy your project and share the URL with your instructor or on social media!

**Next Challenge**: Try adding backend functionality with Laravel/Node.js.

---

_Happy Coding! 🚀_
