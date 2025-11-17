# MODULE 4: MEDIA QUERIES & CONTAINER QUERIES

## 🎯 Module Overview

-   **Duration:** 5 hours
-   **Difficulty:** Intermediate to Advanced
-   **Prerequisites:** CSS basics, Flexbox, Grid, understanding of responsive design principles
-   **Learning Outcomes:**
    -   Master media query syntax and features
    -   Implement mobile-first responsive design
    -   Use container queries for component-level responsiveness
    -   Understand the difference between viewport and container queries
    -   Build truly modular, reusable responsive components

---

# 📱 SECTION A: MEDIA QUERIES

## 📚 LESSON 4.1: Introduction to Media Queries (30 min)

### What are Media Queries?

Media queries are CSS techniques that apply different styles based on device characteristics, most commonly screen size. They are the foundation of responsive web design.

### Basic Syntax

```css
/* Basic structure */
@media media-type and (feature: value) {
	/* CSS rules */
}

/* Example */
@media screen and (min-width: 768px) {
	.container {
		width: 750px;
	}
}
```

---

### Media Types

```css
/* Screen (most common) */
@media screen {
	/* Styles for screens (desktop, tablet, phone) */
}

/* Print */
@media print {
	/* Styles for printing */
	header,
	footer,
	nav {
		display: none;
	}
}

/* All (default) */
@media all {
	/* Applies to all media types */
}

/* Speech (for screen readers) */
@media speech {
	/* Styles for speech synthesizers */
}
```

**Note:** `screen` is default, so you can often omit it:

```css
/* These are equivalent */
@media screen and (min-width: 768px) {
}
@media (min-width: 768px) {
}
```

---

### Mobile-First vs Desktop-First

**Desktop-First (max-width) - ❌ Old approach:**

```css
/* Start with desktop styles */
.container {
	width: 1200px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
}

/* Then override for smaller screens */
@media (max-width: 1024px) {
	.container {
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 768px) {
	.container {
		grid-template-columns: 1fr;
	}
}
```

**Mobile-First (min-width) - ✅ Modern approach:**

```css
/* Start with mobile styles */
.container {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
	.container {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.container {
		width: 1200px;
		margin: 0 auto;
		grid-template-columns: repeat(4, 1fr);
	}
}
```

**Why Mobile-First?**

-   Progressive enhancement (not degradation)
-   Better performance (mobile gets minimal CSS)
-   Simpler code (adding features vs removing)
-   Mobile traffic > desktop traffic (2025)
-   Google's mobile-first indexing

---

### Common Breakpoints

**Standard breakpoints:**

```css
/* Mobile (default) */
/* 0px - 639px */

/* Small (sm) - Tablet portrait */
@media (min-width: 640px) {
}

/* Medium (md) - Tablet landscape */
@media (min-width: 768px) {
}

/* Large (lg) - Desktop */
@media (min-width: 1024px) {
}

/* Extra Large (xl) - Large desktop */
@media (min-width: 1280px) {
}

/* 2XL - Wide screens */
@media (min-width: 1536px) {
}
```

**⚠️ Important:** Don't target specific devices (iPhone 12, iPad Pro, etc.). Use logical breakpoints based on your design.

---

### Using em Units for Breakpoints

**Better for accessibility:**

```css
/* px-based (not accessible) */
@media (min-width: 768px) {
}

/* em-based (accessible, respects user zoom) */
@media (min-width: 48em) {
} /* 768px / 16px = 48em */

/* Calculation: target-px / 16 = em value */
@media (min-width: 40em) {
} /* 640px */
@media (min-width: 48em) {
} /* 768px */
@media (min-width: 64em) {
} /* 1024px */
@media (min-width: 80em) {
} /* 1280px */
@media (min-width: 96em) {
} /* 1536px */
```

**Why em?** When users zoom the page, em-based breakpoints adjust accordingly.

---

## 📚 LESSON 4.2: Media Query Features (60 min)

### Width Queries (Most Common)

```css
/* Minimum width (mobile-first) */
@media (min-width: 768px) {
	/* Styles for screens 768px and wider */
}

/* Maximum width (desktop-first) */
@media (max-width: 767px) {
	/* Styles for screens up to 767px */
}

/* Range (between two values) */
@media (min-width: 768px) and (max-width: 1023px) {
	/* Styles for tablets only */
}

/* Modern range syntax (Level 4) */
@media (768px <= width <= 1023px) {
	/* Same as above, cleaner syntax */
}
```

---

### Height Queries

```css
/* Minimum height */
@media (min-height: 600px) {
	.hero {
		min-height: 80vh;
	}
}

/* Maximum height (short screens) */
@media (max-height: 500px) {
	.header {
		height: 40px; /* Reduce header on short screens */
	}
}

/* Use case: landscape phone detection */
@media (max-height: 500px) and (orientation: landscape) {
	.mobile-nav {
		position: fixed;
		top: 0;
		height: 100vh;
		overflow-y: auto;
	}
}
```

---

### Orientation

```css
/* Portrait (height > width) */
@media (orientation: portrait) {
	.gallery {
		grid-template-columns: repeat(2, 1fr);
	}
}

/* Landscape (width > height) */
@media (orientation: landscape) {
	.gallery {
		grid-template-columns: repeat(4, 1fr);
	}
}

/* Practical example: video player */
@media (orientation: landscape) {
	.video-player {
		height: 100vh;
	}
}
```

---

### Aspect Ratio

```css
/* Specific aspect ratio */
@media (aspect-ratio: 16/9) {
	/* Widescreen monitors */
}

/* Minimum aspect ratio */
@media (min-aspect-ratio: 16/9) {
	/* Ultra-wide monitors */
}

/* Maximum aspect ratio */
@media (max-aspect-ratio: 4/3) {
	/* Older, squarer screens */
}

/* Practical use: */
@media (min-aspect-ratio: 21/9) {
	.sidebar {
		display: block; /* Show sidebar on ultra-wide */
	}
}
```

---

### Resolution (Pixel Density)

```css
/* Standard resolution (1x) */
@media (resolution: 1dppx) {
	.logo {
		background-image: url('logo.png');
	}
}

/* Retina / High DPI (2x) */
@media (resolution: 2dppx),
	(-webkit-min-device-pixel-ratio: 2) {
	.logo {
		background-image: url('logo@2x.png');
	}
}

/* 3x (iPhone Plus, etc.) */
@media (resolution: 3dppx) {
	.logo {
		background-image: url('logo@3x.png');
	}
}

/* Alternative syntax */
@media (min-resolution: 192dpi) {
	/* 2x = 192dpi */
}
@media (min-resolution: 2x) {
}
```

---

### Hover Capability

```css
/* Devices that support hover (desktop with mouse) */
@media (hover: hover) {
	.button:hover {
		background: blue;
		transform: translateY(-2px);
	}

	.card:hover {
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}
}

/* Devices without hover (touchscreens) */
@media (hover: none) {
	.button:active {
		background: blue;
		transform: scale(0.95);
	}
}

/* Practical pattern: */
.button {
	/* Base styles for all */
	padding: 1rem 2rem;
	background: gray;
	transition: all 0.3s;
}

@media (hover: hover) {
	.button:hover {
		background: darkgray;
	}
}

@media (hover: none) {
	.button {
		/* Larger touch targets */
		min-height: 44px;
		padding: 1.25rem 2rem;
	}
}
```

---

### Pointer Type

```css
/* Fine pointer (mouse, stylus) */
@media (pointer: fine) {
	.clickable-area {
		padding: 0.25rem;
	}
}

/* Coarse pointer (finger/touch) */
@media (pointer: coarse) {
	.clickable-area {
		/* Larger touch targets */
		padding: 1rem;
		min-height: 44px;
		min-width: 44px;
	}

	.button {
		font-size: 1.125rem; /* Easier to tap */
	}
}

/* No pointer (keyboard only, TV remote) */
@media (pointer: none) {
	.focus-indicator {
		/* Strong focus indicators */
		outline: 3px solid blue;
		outline-offset: 4px;
	}
}
```

---

### Color and Display Features

```css
/* Color depth */
@media (min-color: 8) {
	/* Device supports at least 256 colors per channel */
}

/* Monochrome display */
@media (monochrome) {
	/* E-ink displays, some accessibility devices */
	.card {
		border: 2px solid black;
	}
}

/* Display mode (for PWAs) */
@media (display-mode: standalone) {
	/* App installed as PWA */
	.install-prompt {
		display: none;
	}
}

@media (display-mode: fullscreen) {
	/* Running in fullscreen */
}
```

---

## 📚 LESSON 4.3: User Preference Media Queries (45 min)

### prefers-color-scheme (Dark Mode)

```css
/* Light mode (default) */
:root {
	--bg-color: #ffffff;
	--text-color: #333333;
	--border-color: #dddddd;
}

body {
	background: var(--bg-color);
	color: var(--text-color);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
	:root {
		--bg-color: #1a1a1a;
		--text-color: #e0e0e0;
		--border-color: #444444;
	}

	img {
		opacity: 0.9; /* Slightly dim images in dark mode */
	}
}

/* Practical full example */
.card {
	background: var(--bg-color);
	color: var(--text-color);
	border: 1px solid var(--border-color);
}

@media (prefers-color-scheme: dark) {
	.card {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
	}
}
```

---

### prefers-reduced-motion

```css
/* Default: animations enabled */
.element {
	transition: transform 0.3s ease;
	animation: slide-in 0.5s ease-out;
}

.element:hover {
	transform: translateY(-5px);
}

/* User prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}

/* Better approach: disable specific animations */
@media (prefers-reduced-motion: reduce) {
	.parallax {
		transform: none !important;
	}

	.carousel {
		scroll-behavior: auto;
	}

	.fade-in {
		opacity: 1 !important;
		animation: none !important;
	}
}
```

---

### prefers-contrast

```css
/* Standard contrast */
.button {
	background: #3498db;
	color: white;
	border: 1px solid #2980b9;
}

/* High contrast requested */
@media (prefers-contrast: high) {
	.button {
		background: #000000;
		color: #ffffff;
		border: 2px solid #ffffff;
		font-weight: bold;
	}

	.card {
		border: 2px solid #000000;
	}
}

/* Low contrast requested */
@media (prefers-contrast: low) {
	.button {
		background: #7fb3d5;
		border: none;
	}
}
```

---

### prefers-reduced-data

```css
/* Standard: load all images */
.hero {
	background-image: url('hero-4k.jpg');
}

/* User wants to save data */
@media (prefers-reduced-data: reduce) {
	.hero {
		background-image: url('hero-low-res.jpg');
		background-color: #f0f0f0; /* Fallback */
	}

	video {
		display: none; /* Don't autoload videos */
	}

	img {
		/* Show lower quality images */
	}
}
```

---

### prefers-reduced-transparency

```css
/* Standard: use transparency */
.modal-overlay {
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
}

/* User prefers no transparency */
@media (prefers-reduced-transparency: reduce) {
	.modal-overlay {
		background: rgb(0, 0, 0);
		backdrop-filter: none;
	}

	.glass-card {
		background: white;
		backdrop-filter: none;
	}
}
```

---

### Combining Multiple Features

```css
/* Desktop with mouse AND dark mode */
@media (min-width: 1024px) and (hover: hover) and (prefers-color-scheme: dark) {
	.interactive-element {
		/* Specific styles */
	}
}

/* Touch device OR reduced motion */
@media (hover: none), (prefers-reduced-motion: reduce) {
	.animated-button {
		animation: none;
	}
}

/* NOT operator */
@media not all and (min-width: 768px) {
	/* Mobile only */
}
```

---

## 📚 LESSON 4.4: Media Query Best Practices (30 min)

### Organization Strategies

**Strategy 1: Mobile-First Progressive Enhancement**

```css
/* Base (mobile) styles */
.component {
	display: block;
	width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
	.component {
		display: flex;
		width: 50%;
	}
}

/* Desktop */
@media (min-width: 1024px) {
	.component {
		width: 33.333%;
	}
}
```

---

**Strategy 2: Component-Based (Keep queries near components)**

```css
/* Navigation component */
.nav {
	/* Mobile styles */
	display: flex;
	flex-direction: column;
}

@media (min-width: 768px) {
	.nav {
		flex-direction: row;
		justify-content: space-between;
	}
}

/* Button component */
.button {
	padding: 0.75rem 1.5rem;
}

@media (min-width: 768px) {
	.button {
		padding: 0.5rem 1rem;
	}
}
```

---

**Strategy 3: Separate Breakpoint Files**

```css
/* styles.css */
@import url('base.css');
@import url('tablet.css') screen and (min-width: 768px);
@import url('desktop.css') screen and (min-width: 1024px);
```

**⚠️ Note:** Multiple @imports = multiple HTTP requests. Use a bundler (Webpack, Vite) in production.

---

### Common Patterns

**Pattern 1: Sidebar Layout**

```css
.layout {
	display: flex;
	flex-direction: column;
}

@media (min-width: 768px) {
	.layout {
		flex-direction: row;
	}

	.sidebar {
		flex: 0 0 250px;
	}

	.main {
		flex: 1;
	}
}
```

---

**Pattern 2: Responsive Typography**

```css
body {
	font-size: 16px;
}

h1 {
	font-size: 2rem; /* 32px */
}

@media (min-width: 768px) {
	body {
		font-size: 18px;
	}

	h1 {
		font-size: 2.5rem; /* 45px */
	}
}

@media (min-width: 1024px) {
	h1 {
		font-size: 3rem; /* 54px */
	}
}

/* Better: Use clamp() instead */
h1 {
	font-size: clamp(2rem, 5vw, 3rem);
	/* No media queries needed! */
}
```

---

**Pattern 3: Conditional Loading**

```css
/* Hide on mobile */
.desktop-only {
	display: none;
}

@media (min-width: 1024px) {
	.desktop-only {
		display: block;
	}
}

/* Hide on desktop */
.mobile-only {
	display: block;
}

@media (min-width: 1024px) {
	.mobile-only {
		display: none;
	}
}
```

---

**Pattern 4: Responsive Images**

```css
.image-container img {
	width: 100%;
	height: auto;
}

@media (min-width: 768px) {
	.image-container {
		float: left;
		width: 50%;
		margin-right: 2rem;
	}
}
```

---

### Testing Checklist

✅ **Device Testing:**

-   iPhone SE (375px width) - smallest common
-   iPhone 12/13 (390px)
-   iPad (768px)
-   iPad Pro landscape (1024px)
-   Desktop (1440px)
-   Ultra-wide (2560px+)

✅ **Orientation Testing:**

-   Portrait mode
-   Landscape mode (especially phones)

✅ **Browser Testing:**

-   Chrome
-   Firefox
-   Safari (especially iOS)
-   Edge

✅ **Accessibility Testing:**

-   Zoom to 200%
-   Test with screen reader
-   Keyboard navigation
-   Dark mode
-   High contrast mode

---

## 🎯 USE CASE EXAMPLES - MEDIA QUERIES

### Example 1: Responsive Navigation Menu

**Scenario:** Horizontal nav on desktop, hamburger menu on mobile

```html
<nav class="main-nav">
	<div class="nav-brand">Logo</div>
	<button
		class="nav-toggle"
		aria-label="Toggle navigation"
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
	<ul class="nav-menu">
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Services</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

```css
/* Mobile-first */
.main-nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-brand {
	font-size: 1.5rem;
	font-weight: bold;
}

.nav-toggle {
	display: flex;
	flex-direction: column;
	gap: 4px;
	background: none;
	border: none;
	cursor: pointer;
}

.nav-toggle span {
	display: block;
	width: 25px;
	height: 3px;
	background: #333;
	transition: 0.3s;
}

.nav-menu {
	position: fixed;
	top: 60px;
	left: -100%;
	width: 100%;
	height: calc(100vh - 60px);
	background: white;
	flex-direction: column;
	padding: 2rem;
	transition: left 0.3s;
}

.nav-menu.active {
	left: 0;
}

.nav-menu li {
	margin: 1rem 0;
}

.nav-menu a {
	font-size: 1.25rem;
	color: #333;
	text-decoration: none;
}

/* Tablet and up */
@media (min-width: 768px) {
	.nav-toggle {
		display: none;
	}

	.nav-menu {
		position: static;
		display: flex;
		flex-direction: row;
		height: auto;
		width: auto;
		padding: 0;
		gap: 2rem;
	}

	.nav-menu li {
		margin: 0;
	}

	.nav-menu a {
		font-size: 1rem;
	}
}

/* Desktop */
@media (min-width: 1024px) {
	.main-nav {
		padding: 1rem 2rem;
	}

	.nav-menu {
		gap: 3rem;
	}
}

/* Hover effects only on devices that support it */
@media (hover: hover) {
	.nav-menu a:hover {
		color: #3498db;
		text-decoration: underline;
	}
}
```

---

### Example 2: Responsive Card Grid

**Scenario:** Product cards that adapt from 1 to 4 columns

```html
<div class="product-grid">
	<article class="product-card">
		<img src="product1.jpg" alt="Product 1" />
		<h3>Product Name</h3>
		<p class="price">$29.99</p>
		<button>Add to Cart</button>
	</article>
	<!-- More cards -->
</div>
```

```css
/* Mobile: 1 column */
.product-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	padding: 1rem;
}

.product-card {
	background: white;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s, box-shadow 0.3s;
}

.product-card img {
	width: 100%;
	height: 250px;
	object-fit: cover;
}

.product-card h3,
.product-card .price,
.product-card button {
	padding: 0 1rem;
}

.product-card h3 {
	margin-top: 1rem;
	font-size: 1.25rem;
}

.product-card .price {
	font-size: 1.5rem;
	font-weight: bold;
	color: #e74c3c;
	margin: 0.5rem 0;
}

.product-card button {
	width: calc(100% - 2rem);
	margin: 1rem;
	padding: 0.75rem;
	background: #3498db;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1rem;
}

/* Tablet: 2 columns */
@media (min-width: 640px) {
	.product-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

/* Desktop small: 3 columns */
@media (min-width: 1024px) {
	.product-grid {
		grid-template-columns: repeat(3, 1fr);
		padding: 2rem;
	}
}

/* Desktop large: 4 columns */
@media (min-width: 1280px) {
	.product-grid {
		grid-template-columns: repeat(4, 1fr);
		max-width: 1400px;
		margin: 0 auto;
	}
}

/* Hover effects for devices that support it */
@media (hover: hover) {
	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
	}

	.product-card button:hover {
		background: #2980b9;
	}
}

/* Touch devices: larger tap targets */
@media (pointer: coarse) {
	.product-card button {
		padding: 1rem;
		font-size: 1.125rem;
	}
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
	.product-grid {
		background: #1a1a1a;
	}

	.product-card {
		background: #2a2a2a;
		color: #e0e0e0;
	}

	.product-card button {
		background: #2980b9;
	}
}
```

---

### Example 3: Dashboard Layout

**Scenario:** Complex dashboard with sidebar and widgets

```html
<div class="dashboard">
	<header class="dash-header">
		<h1>Dashboard</h1>
		<div class="user-menu">User</div>
	</header>
	<aside class="sidebar">
		<nav><!-- navigation --></nav>
	</aside>
	<main class="dash-main">
		<div class="widgets">
			<div class="widget">Widget 1</div>
			<div class="widget">Widget 2</div>
			<div class="widget">Widget 3</div>
			<div class="widget">Widget 4</div>
		</div>
	</main>
</div>
```

```css
/* Mobile: stacked layout */
.dashboard {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.dash-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: #2c3e50;
	color: white;
}

.sidebar {
	background: #34495e;
	color: white;
	padding: 1rem;
}

.dash-main {
	flex: 1;
	padding: 1rem;
	background: #ecf0f1;
}

.widgets {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
}

.widget {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	min-height: 200px;
}

/* Tablet: sidebar becomes horizontal */
@media (min-width: 768px) and (max-width: 1023px) {
	.sidebar {
		order: -1;
	}

	.sidebar nav {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
	}

	.widgets {
		grid-template-columns: repeat(2, 1fr);
	}
}

/* Desktop: sidebar on left */
@media (min-width: 1024px) {
	.dashboard {
		display: grid;
		grid-template-columns: 250px 1fr;
		grid-template-rows: 60px 1fr;
		grid-template-areas:
			'sidebar header'
			'sidebar main';
	}

	.dash-header {
		grid-area: header;
	}

	.sidebar {
		grid-area: sidebar;
		position: sticky;
		top: 0;
		height: 100vh;
		overflow-y: auto;
	}

	.dash-main {
		grid-area: main;
	}

	.widgets {
		grid-template-columns: repeat(2, 1fr);
	}
}

/* Large desktop: 4-column widgets */
@media (min-width: 1440px) {
	.dashboard {
		grid-template-columns: 250px 1fr;
	}

	.widgets {
		grid-template-columns: repeat(4, 1fr);
	}
}

/* Landscape phone: adjust for height */
@media (max-width: 768px) and (orientation: landscape) {
	.sidebar {
		display: none; /* Hide sidebar in landscape */
	}

	.widgets {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
	}

	.widget {
		min-height: 150px;
	}
}
```

---

## 💪 PRACTICE EXERCISES - MEDIA QUERIES

### Exercise 1: Responsive Blog Layout (90 minutes)

**Objective:** Create a responsive blog layout with header, posts, and sidebar

**Requirements:**

**Mobile (< 768px):**

-   Header full width
-   Posts stacked vertically
-   Sidebar below content
-   Images full width

**Tablet (768px - 1023px):**

-   Posts in 2 columns
-   Sidebar below, also 2 columns
-   Images 50% width, float left

**Desktop (≥ 1024px):**

-   Main content area (70%)
-   Sidebar on right (30%)
-   Posts in single column with images
-   Max width: 1200px, centered

**Components:**

1. **Header:** Logo, navigation (3-5 links), search
2. **Post Card:** Image, title, excerpt, author, date, tags
3. **Sidebar:** About widget, categories, popular posts
4. **Footer:** Copyright, social links

**Technical Requirements:**

-   Use mobile-first approach
-   Use em units for breakpoints
-   Add hover effects (only for hover-capable devices)
-   Implement dark mode support
-   Ensure 44px minimum touch targets
