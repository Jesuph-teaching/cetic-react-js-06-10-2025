# Responsive Web Design - Detailed Course

---

# 📦 MODULE 1: FLEXBOX FUNDAMENTALS

## 🎯 Module Overview

-   **Prerequisites:** Basic HTML/CSS knowledge
-   **Learning Outcomes:**
    -   Understand flexbox mental model
    -   Use flexbox for one-dimensional layouts
    -   Create responsive navigation and card layouts
    -   Master flexbox alignment and distribution

---

## 📚 LESSON 1.1: Introduction to Flexbox

### What is Flexbox?

Flexbox (Flexible Box Layout) is a CSS layout module designed for distributing space and aligning content in one dimension—either as a row or a column.

### Core Concepts

-   **Main Axis:** The primary direction items flow (horizontal in row, vertical in column)
-   **Cross Axis:** Perpendicular to main axis
-   **Flex Container:** The parent element with `display: flex`
-   **Flex Items:** Direct children of the flex container

### When to Use Flexbox

✅ **Perfect for:**

-   Navigation bars (horizontal or vertical)
-   Button groups
-   Form layouts
-   Card components in a single row
-   Centering content (both axes)
-   Equal-height columns
-   Toolbars and action bars

❌ **Not ideal for:**

-   Complex 2D grids (use CSS Grid)
-   Magazine-style layouts
-   Full page layouts with rows AND columns

### Basic Syntax

```css
.container {
	display: flex; /* or inline-flex */
}
```

### Visual Mental Model

```
┌─────────────────────────────────────┐
│  Flex Container                      │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐   │
│  │ 1  │  │ 2  │  │ 3  │  │ 4  │   │ ← Main Axis →
│  └────┘  └────┘  └────┘  └────┘   │
│                                      │
└─────────────────────────────────────┘
         ↕ Cross Axis
```

---

## 📚 LESSON 1.2: Flex Container Properties

### Property 1: flex-direction

**What it does:** Sets the main axis direction

```css
.container {
	flex-direction: row; /* Default: left to right */
	flex-direction: row-reverse; /* Right to left */
	flex-direction: column; /* Top to bottom */
	flex-direction: column-reverse; /* Bottom to top */
}
```

**Use Case:** Switching between horizontal desktop nav and vertical mobile nav

---

### Property 2: flex-wrap

**What it does:** Controls whether items wrap to new lines

```css
.container {
	flex-wrap: nowrap; /* Default: single line, may overflow */
	flex-wrap: wrap; /* Multi-line, top to bottom */
	flex-wrap: wrap-reverse; /* Multi-line, bottom to top */
}
```

**Use Case:** Responsive card grids that wrap on smaller screens

---

### Property 3: justify-content

**What it does:** Distributes space along the MAIN axis

```css
.container {
	justify-content: flex-start; /* Default: packed to start */
	justify-content: flex-end; /* Packed to end */
	justify-content: center; /* Centered */
	justify-content: space-between; /* First/last at edges, equal space between */
	justify-content: space-around; /* Equal space around each item */
	justify-content: space-evenly; /* Equal space everywhere */
}
```

**Visual Example:**

```
flex-start:     [1][2][3]................
flex-end:       ................[1][2][3]
center:         ........[1][2][3]........
space-between:  [1]........[2]........[3]
space-around:   ..[1]....[2]....[3]..
space-evenly:   ...[1]...[2]...[3]...
```

---

### Property 4: align-items

**What it does:** Aligns items along the CROSS axis

```css
.container {
	align-items: stretch; /* Default: fill container height */
	align-items: flex-start; /* Align to top/start */
	align-items: flex-end; /* Align to bottom/end */
	align-items: center; /* Center vertically */
	align-items: baseline; /* Align text baselines */
}
```

**Use Case:** Vertically centering button icons with text

---

### Property 5: align-content

**What it does:** Aligns MULTIPLE LINES (only works with flex-wrap)

```css
.container {
	flex-wrap: wrap;
	align-content: flex-start; /* Lines packed to start */
	align-content: flex-end; /* Lines packed to end */
	align-content: center; /* Lines centered */
	align-content: space-between; /* Lines spread out */
	align-content: space-around; /* Space around lines */
	align-content: stretch; /* Lines stretch to fill */
}
```

---

### Property 6: gap

**What it does:** Creates space between flex items (modern, clean approach)

```css
.container {
	display: flex;
	gap: 1rem; /* Same for row and column */
	gap: 1rem 2rem; /* row-gap column-gap */
	row-gap: 1rem;
	column-gap: 2rem;
}
```

**Why it's better than margins:**

-   No negative margins on container
-   No `:last-child` margin removal
-   Cleaner code
-   Works with wrap

---

## 📚 LESSON 1.3: Flex Item Properties

### Property 1: flex-grow

**What it does:** How much an item should grow relative to others

```css
.item {
	flex-grow: 0; /* Default: don't grow */
	flex-grow: 1; /* Grow equally with others */
	flex-grow: 2; /* Grow twice as much */
}
```

**Example:**

```css
.container {
	display: flex;
	width: 600px;
}

.item-1 {
	flex-grow: 1;
} /* Gets 1/4 of extra space */
.item-2 {
	flex-grow: 2;
} /* Gets 2/4 of extra space */
.item-3 {
	flex-grow: 1;
} /* Gets 1/4 of extra space */
```

---

### Property 2: flex-shrink

**What it does:** How much an item should shrink when space is tight

```css
.item {
	flex-shrink: 1; /* Default: can shrink */
	flex-shrink: 0; /* Don't shrink (stay at flex-basis) */
	flex-shrink: 2; /* Shrink twice as much */
}
```

**Use Case:** Preventing logo from shrinking in navigation

```css
.nav {
	display: flex;
}

.logo {
	flex-shrink: 0; /* Never shrink the logo */
}

.nav-links {
	flex-shrink: 1; /* Links can shrink if needed */
}
```

---

### Property 3: flex-basis

**What it does:** Sets the initial size before growing/shrinking

```css
.item {
	flex-basis: auto; /* Default: based on content */
	flex-basis: 0; /* Start from 0 (useful with flex-grow) */
	flex-basis: 200px; /* Fixed starting size */
	flex-basis: 50%; /* Percentage of container */
}
```

---

### Property 4: flex (Shorthand)

**What it does:** Combines flex-grow, flex-shrink, and flex-basis

```css
.item {
	flex: 1; /* flex: 1 1 0% (grow, shrink, 0 basis) */
	flex: auto; /* flex: 1 1 auto (grow, shrink, content basis) */
	flex: none; /* flex: 0 0 auto (don't grow/shrink) */
	flex: 0 1 200px; /* Don't grow, can shrink, start at 200px */
}
```

**Common Patterns:**

```css
/* Equal width columns */
.item {
	flex: 1;
}

/* Fixed sidebar, flexible main */
.sidebar {
	flex: 0 0 250px;
}
.main {
	flex: 1;
}

/* Don't grow or shrink */
.button {
	flex: none;
}
```

---

### Property 5: align-self

**What it does:** Overrides align-items for individual item

```css
.container {
	align-items: flex-start;
}

.special-item {
	align-self: flex-end; /* This one aligns to end */
	align-self: center; /* This one centers */
	align-self: stretch; /* This one stretches */
}
```

**Use Case:** Making one card in a row taller than others

---

### Property 6: order

**What it does:** Changes visual order (doesn't affect DOM order)

```css
.item {
	order: 0; /* Default */
}

.item-1 {
	order: 2;
} /* Shows third */
.item-2 {
	order: 1;
} /* Shows second */
.item-3 {
	order: 0;
} /* Shows first */
```

**⚠️ Accessibility Warning:** Order only affects visual layout, not keyboard navigation or screen readers. Use with caution.

---

## 📚 LESSON 1.4: Responsive Flexbox Patterns

### Pattern 1: Responsive Navigation

**Desktop: Horizontal | Mobile: Vertical**

```css
/* Mobile first */
.nav {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.nav-link {
	padding: 1rem;
	text-align: center;
}

/* Desktop */
@media (min-width: 768px) {
	.nav {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.nav-link {
		padding: 0.5rem 1rem;
	}
}
```

---

### Pattern 2: Card Layout with Wrapping

```css
.card-container {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
}

.card {
	/* Grow, shrink, minimum 300px wide */
	flex: 1 1 300px;

	/* Never exceed 400px */
	max-width: 400px;
}

/* Result:
   - Small screens: 1 card per row
   - Medium: 2 cards per row
   - Large: 3-4 cards per row
   All without media queries!
*/
```

---

### Pattern 3: Holy Grail with Flexbox

```css
.page {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.header,
.footer {
	flex: 0 0 auto; /* Don't grow or shrink */
}

.content {
	display: flex;
	flex: 1; /* Take remaining space */
}

.sidebar {
	flex: 0 0 250px;
}

.main {
	flex: 1;
}

/* Mobile: stack everything */
@media (max-width: 768px) {
	.content {
		flex-direction: column;
	}

	.sidebar {
		flex: 0 0 auto;
	}
}
```

---

### Pattern 4: Perfect Centering

```css
/* Vertical and horizontal center */
.center-container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

/* Alternative: margin auto trick */
.center-container {
	display: flex;
}

.centered-item {
	margin: auto;
}
```

---

### Pattern 5: Equal Height Columns

```css
.row {
	display: flex;
	gap: 2rem;
}

.column {
	flex: 1;
	/* All columns automatically match height of tallest */
}
```

---

### Pattern 6: Sticky Footer

```css
body {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	margin: 0;
}

.content {
	flex: 1; /* Pushes footer down */
}

.footer {
	flex-shrink: 0;
}
```

---

## 🎯 USE CASE EXAMPLES

### Example 1: E-commerce Product Card

**Scenario:** Product card with image, title, price, and "Add to Cart" button

```html
<div class="product-card">
	<img src="product.jpg" alt="Product" />
	<h3>Product Name</h3>
	<p class="description">Short description here</p>
	<div class="card-footer">
		<span class="price">$29.99</span>
		<button class="add-to-cart">Add to Cart</button>
	</div>
</div>
```

```css
.product-card {
	display: flex;
	flex-direction: column;
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	height: 100%; /* Match height with siblings */
}

.product-card img {
	width: 100%;
	height: 200px;
	object-fit: cover;
}

.product-card h3,
.product-card .description {
	padding: 0 1rem;
}

.description {
	flex: 1; /* Push footer to bottom */
}

.card-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: #f5f5f5;
	margin-top: auto; /* Stick to bottom */
}

.price {
	font-size: 1.5rem;
	font-weight: bold;
	color: #e74c3c;
}

.add-to-cart {
	padding: 0.5rem 1rem;
	background: #3498db;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
```

---

### Example 2: Dashboard Toolbar

**Scenario:** Toolbar with logo, search, and action buttons

```html
<div class="toolbar">
	<div class="logo">MyApp</div>
	<div class="search-box">
		<input type="search" placeholder="Search..." />
	</div>
	<div class="actions">
		<button>Notifications</button>
		<button>Profile</button>
	</div>
</div>
```

```css
.toolbar {
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	background: white;
	border-bottom: 1px solid #ddd;
}

.logo {
	flex: 0 0 auto; /* Don't grow or shrink */
	font-size: 1.5rem;
	font-weight: bold;
}

.search-box {
	flex: 1; /* Take remaining space */
	max-width: 600px;
}

.search-box input {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #ddd;
	border-radius: 4px;
}

.actions {
	display: flex;
	gap: 0.5rem;
}

/* Mobile: stack vertically */
@media (max-width: 640px) {
	.toolbar {
		flex-direction: column;
		align-items: stretch;
	}

	.search-box {
		max-width: none;
	}
}
```

---

### Example 3: Social Media Post Layout

**Scenario:** Avatar, username, timestamp, and post actions

```html
<div class="post">
	<img class="avatar" src="avatar.jpg" alt="User" />
	<div class="post-content">
		<div class="post-header">
			<span class="username">@johndoe</span>
			<span class="timestamp">2h ago</span>
		</div>
		<p class="post-text">This is my post content...</p>
		<div class="post-actions">
			<button>Like</button>
			<button>Comment</button>
			<button>Share</button>
		</div>
	</div>
</div>
```

```css
.post {
	display: flex;
	gap: 1rem;
	padding: 1rem;
	border-bottom: 1px solid #eee;
}

.avatar {
	flex: 0 0 48px;
	width: 48px;
	height: 48px;
	border-radius: 50%;
}

.post-content {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.post-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.username {
	font-weight: bold;
}

.timestamp {
	color: #999;
	font-size: 0.875rem;
}

.post-actions {
	display: flex;
	gap: 1rem;
	margin-top: 0.5rem;
}

.post-actions button {
	background: none;
	border: none;
	color: #666;
	cursor: pointer;
	padding: 0.25rem 0.5rem;
}

.post-actions button:hover {
	color: #3498db;
}
```

---

## 💪 PRACTICE EXERCISES

### Exercise 1: Flexbox Froggy

**Objective:** Master flexbox alignment through gamification

**Instructions:**

1. Go to https://flexboxfroggy.com/
2. Complete all 24 levels
3. Take screenshots of levels 12, 18, and 24
4. Document which properties you found most challenging

**What you'll learn:**

-   justify-content in action
-   align-items behavior
-   flex-direction switching
-   Combining properties
-   wrap and align-content

**Submission:**

-   Screenshots of completed levels
-   Written reflection (100 words): Which concepts clicked? Which need more practice?

---

### Exercise 2: Responsive Navigation Bar

**Objective:** Build a real-world navigation component

**Requirements:**

**Mobile (< 768px):**

-   Logo at top center
-   Navigation links stacked vertically
-   Full-width buttons
-   "Menu" toggle area (just the layout, no JS)

**Desktop (≥ 768px):**

-   Logo on left
-   Navigation links horizontal in center
-   "Login" and "Sign Up" buttons on right
-   All vertically centered

**HTML Structure:**

```html
<nav class="navbar">
	<div class="logo">MyBrand</div>
	<ul class="nav-links">
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Services</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
	<div class="nav-buttons">
		<button class="btn-secondary">Login</button>
		<button class="btn-primary">Sign Up</button>
	</div>
</nav>
```

**Constraints:**

-   Must use flexbox (no grid or float)
-   Mobile-first approach
-   Use gap for spacing
-   No fixed heights

**Bonus Challenges:**

-   Add a search box that appears between logo and links on desktop
-   Make the logo shrink but never disappear (flex-shrink)
-   Add hover effects to links

**Submission:**

-   CodePen/JSFiddle link
-   Screenshots at 375px, 768px, and 1200px
-   CSS file with comments explaining your choices

---

### Exercise 3: Card Grid Layout

**Objective:** Create a responsive card grid with flexbox

**Scenario:** You're building a team member showcase page

**Requirements:**

**Each Card Contains:**

-   Square profile image (use aspect-ratio or padding hack)
-   Name (h3)
-   Job title
-   Short bio (2-3 lines)
-   Social media icons (horizontally aligned)

**Responsive Behavior:**

-   Mobile: 1 card per row
-   Tablet (768px+): 2 cards per row
-   Desktop (1024px+): 3 cards per row
-   Large (1440px+): 4 cards per row

**Technical Requirements:**

-   Use flex-wrap for responsiveness
-   All cards same height (even with different content lengths)
-   Bio text should push social icons to bottom of card
-   Use gap for spacing (no margins)
-   Cards should never exceed 350px width

**Sample Card HTML:**

```html
<div class="team-card">
	<img src="member.jpg" alt="Team Member" />
	<h3>Jane Doe</h3>
	<p class="title">Senior Developer</p>
	<p class="bio">
		Passionate about clean code and user experience. 5+
		years building web applications.
	</p>
	<div class="social-icons">
		<a href="#">LinkedIn</a>
		<a href="#">Twitter</a>
		<a href="#">GitHub</a>
	</div>
</div>
```

**Bonus Challenges:**

1. Add a hover effect that slightly lifts the card
2. Make the image have a circular overlay on hover
3. Ensure bio text never exceeds 3 lines (use line-clamp)
4. Add a "featured" card that spans 2 columns on desktop

**Submission:**

-   Complete HTML/CSS files
-   Live preview link (CodePen, Netlify, etc.)
-   README explaining your flex property choices
-   Screenshots showing 1, 2, 3, and 4 column layouts

---

### Exercise 4: Dashboard Layout

**Objective:** Build a complex multi-section layout using only flexbox

**Scenario:** Admin dashboard with header, sidebar, main content, and footer

**Requirements:**

**Layout Structure:**

```
┌─────────────────────────────────┐
│         Header (60px)            │
├──────────┬──────────────────────┤
│          │                      │
│ Sidebar  │    Main Content      │
│ (250px)  │    (flexible)        │
│          │                      │
├──────────┴──────────────────────┤
│         Footer (50px)            │
└─────────────────────────────────┘
```

**Mobile Behavior (< 768px):**

-   Header at top
-   Sidebar hidden (we'll add toggle later)
-   Main content full width
-   Footer at bottom

**Components to Include:**

**Header:**

-   Logo (left)
-   Search bar (center, flexible)
-   User menu (right)

**Sidebar:**

-   Navigation links (stacked vertically)
-   Should scroll if content overflows
-   Fixed width on desktop

**Main Content:**

-   Title section
-   Stats cards in a row (3 cards, equal width)
-   Data table or content area
-   Should take remaining height

**Footer:**

-   Copyright (left)
-   Links (right)

**Technical Constraints:**

-   Entire page height = 100vh
-   Header and footer fixed height
-   Main area (sidebar + content) fills remaining space
-   Use nested flexbox (container > children)
-   No CSS Grid
-   No absolute positioning

**Bonus Challenges:**

1. Add a collapsible sidebar (CSS only, using checkbox hack)
2. Make stats cards wrap on smaller desktop sizes
3. Add a notification badge that stays in top-right even when scrolling
4. Implement a sticky header using flex and position: sticky

**Submission:**

-   Full HTML/CSS/JS (if using toggle)
-   Annotated code explaining your flexbox strategy
-   Screen recording showing responsive behavior
-   Reflection: Where did flexbox struggle? Would Grid be better for any parts?

---

### Exercise 5: Flexbox Challenge - Rebuild a Real Interface

**Objective:** Reverse-engineer a professional layout

**Instructions:**

1. Choose ONE of these real interfaces to rebuild:

    - Twitter/X profile header
    - Spotify player controls
    - Gmail inbox list item
    - YouTube video card
    - LinkedIn post layout

2. Analyze the layout and identify all flex containers

3. Rebuild it with HTML/CSS focusing on:

    - Proper semantic HTML
    - Mobile-first responsive design
    - Exact spacing and alignment
    - Hover states and interactions

4. Document your process:
    - Screenshot original
    - Annotate where you used flexbox
    - List challenges encountered
    - Explain responsive strategy

**Evaluation Criteria:**

-   Visual accuracy (40%)
-   Clean, semantic HTML (20%)
-   Proper flexbox usage (20%)
-   Responsive behavior (10%)
-   Code organization (10%)

**Bonus:**

-   Add dark mode
-   Include accessibility features (ARIA labels, keyboard nav)
-   Make it pixel-perfect at 3 different breakpoints

**Submission:**

-   Source code with comments
-   Side-by-side comparison screenshots (original vs. yours)
-   Written breakdown of flexbox decisions (500 words)
-   Video walkthrough (3-5 minutes)

---

# 🎨 MODULE 2: CSS GRID MASTERY

## 🎯 Module Overview

-   **Prerequisites:** HTML/CSS, Flexbox understanding
-   **Learning Outcomes:**
    -   Master two-dimensional layouts
    -   Build complex page layouts with grid
    -   Use grid template areas effectively
    -   Create responsive grids without media queries

---

### 📚 LESSON 2.1: Introduction to CSS Grid

#### What is CSS Grid?

CSS Grid Layout is a two-dimensional layout system that lets you control both rows AND columns simultaneously, unlike flexbox which is one-dimensional.

#### Core Concepts

**Grid Container:** Parent element with `display: grid`
**Grid Items:** Direct children of the grid container
**Grid Lines:** Dividing lines that make up the structure (both vertical and horizontal)
**Grid Track:** Space between two adjacent grid lines (a row or column)
**Grid Cell:** Single unit of the grid
**Grid Area:** Rectangular area made up of one or more grid cells

#### Visual Mental Model

```
Grid Lines (numbered 1-4):
    1       2       3       4
1   ┌───────┬───────┬───────┐
    │ Cell  │ Cell  │ Cell  │
2   ├───────┼───────┼───────┤
    │ Cell  │ Cell  │ Cell  │
3   ├───────┼───────┼───────┤
    │ Cell  │ Cell  │ Cell  │
4   └───────┴───────┴───────┘

Grid Tracks: The rows and columns
Grid Cells: Each individual box
Grid Area: Any rectangular selection of cells
```

#### When to Use CSS Grid

✅ **Perfect for:**

-   Page layouts (header, sidebar, main, footer)
-   Dashboard layouts
-   Image galleries
-   Magazine-style layouts
-   Any layout requiring precise row AND column control
-   Overlapping content
-   Complex responsive layouts

❌ **Not ideal for:**

-   Simple one-dimensional layouts (use flexbox)
-   When you need items to determine their own size
-   Browser support < IE 11 (though Edge supports it)

#### Grid vs Flexbox Decision Tree

```
Do you need to control rows AND columns?
├─ YES → Use Grid
└─ NO → Do items flow in one direction?
    ├─ YES → Use Flexbox
    └─ NO → Maybe you need both (nested)
```

#### Basic Syntax

```css
.container {
	display: grid;
	/* or */
	display: inline-grid;
}
```

---

### 📚 LESSON 2.2: Defining the Grid

#### grid-template-columns

**Defines the column structure**

```css
.grid {
	display: grid;

	/* Fixed widths */
	grid-template-columns: 200px 400px 200px;

	/* Flexible with fr units */
	grid-template-columns: 1fr 2fr 1fr;

	/* Mixed units */
	grid-template-columns: 200px 1fr 200px;

	/* Repeat function */
	grid-template-columns: repeat(3, 1fr);

	/* Auto columns */
	grid-template-columns: repeat(3, minmax(200px, 1fr));
}
```

**The fr Unit:**

-   Represents a fraction of available space
-   Calculated AFTER fixed units
-   Example: `200px 1fr 2fr` = 200px fixed, remaining space split 1:2

---

#### grid-template-rows

**Defines the row structure**

```css
.grid {
	display: grid;

	/* Fixed heights */
	grid-template-rows: 100px 200px 100px;

	/* Auto-sized (based on content) */
	grid-template-rows: auto auto auto;

	/* Flexible */
	grid-template-rows: 1fr 2fr 1fr;

	/* Minmax for responsive height */
	grid-template-rows: minmax(100px, auto) 1fr auto;
}
```

---

#### Shorthand: grid-template

```css
.grid {
	/* rows / columns */
	grid-template: 100px 1fr 100px / 200px 1fr 200px;
}
```

---

#### gap (grid-gap)

**Space between grid items**

```css
.grid {
	display: grid;

	/* Same for rows and columns */
	gap: 20px;

	/* Different for each */
	gap: 20px 40px; /* row-gap column-gap */

	/* Individual */
	row-gap: 20px;
	column-gap: 40px;
}
```

---

#### repeat() Function

**Repeating patterns efficiently**

```css
.grid {
	/* Repeat 4 columns of 1fr each */
	grid-template-columns: repeat(4, 1fr);

	/* Repeat a pattern */
	grid-template-columns: repeat(3, 100px 200px);
	/* Results in: 100px 200px 100px 200px 100px 200px */

	/* Repeat with auto-fit (responsive!) */
	grid-template-columns: repeat(
		auto-fit,
		minmax(250px, 1fr)
	);

	/* Repeat with auto-fill */
	grid-template-columns: repeat(
		auto-fill,
		minmax(250px, 1fr)
	);
}
```

**auto-fit vs auto-fill:**

-   `auto-fit`: Collapses empty tracks, items expand to fill
-   `auto-fill`: Keeps empty tracks, items don't expand

---

#### minmax() Function

**Set minimum and maximum sizes**

```css
.grid {
	/* Column: minimum 200px, maximum 1fr */
	grid-template-columns: repeat(3, minmax(200px, 1fr));

	/* Row: minimum 100px, maximum based on content */
	grid-template-rows: minmax(100px, auto);

	/* Prevent content overflow */
	grid-template-columns: minmax(0, 1fr);
}
```

**Common Pattern - Responsive Grid:**

```css
.grid {
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(250px, 1fr)
	);
	gap: 2rem;
}
/* Creates responsive columns automatically! */
```

---

### 📚 LESSON 2.3: Placing Grid Items

#### grid-column

**Position items across columns**

```css
.item {
	/* Start at line 1, end at line 3 (span 2 columns) */
	grid-column: 1 / 3;

	/* Span 2 columns from current position */
	grid-column: span 2;

	/* Span all columns */
	grid-column: 1 / -1;

	/* Individual properties */
	grid-column-start: 2;
	grid-column-end: 4;

	/* Span to end, regardless of column count */
	grid-column-start: 1;
	grid-column-end: -1;
}
```

**Visual Example:**

```
     1    2    3    4
   ┌────┬────┬────┬────┐
1  │    │ A (2/4) │    │  ← grid-column: 2 / 4
   └────┴────┴────┴────┘
```

---

#### grid-row

**Position items across rows**

```css
.item {
	/* Start at row 1, end at row 3 */
	grid-row: 1 / 3;

	/* Span 2 rows */
	grid-row: span 2;

	/* Individual properties */
	grid-row-start: 1;
	grid-row-end: 3;
}
```

---

#### Combining Column and Row

**Create spanning items**

```css
.hero {
	/* Span 2 columns and 2 rows */
	grid-column: 1 / 3;
	grid-row: 1 / 3;
}

.sidebar {
	/* Span 3 rows in first column */
	grid-column: 1;
	grid-row: 1 / 4;
}
```

---

#### grid-area (Shorthand)

**All four values in one**

```css
.item {
	/* grid-area: row-start / col-start / row-end / col-end */
	grid-area: 1 / 2 / 3 / 4;

	/* Same as: */
	grid-row-start: 1;
	grid-column-start: 2;
	grid-row-end: 3;
	grid-column-end: 4;
}
```

---

#### Named Grid Lines

**Semantic line names**

```css
.grid {
	display: grid;
	grid-template-columns:
		[sidebar-start] 250px
		[sidebar-end main-start] 1fr
		[main-end];
	grid-template-rows:
		[header-start] 100px
		[header-end content-start] 1fr
		[content-end footer-start] 50px
		[footer-end];
}

.sidebar {
	grid-column: sidebar-start / sidebar-end;
	grid-row: content-start / content-end;
}

.main {
	grid-column: main-start / main-end;
	grid-row: content-start / content-end;
}
```

---

## 📚 LESSON 2.4: Grid Template Areas

### What are Template Areas?

A powerful way to define layouts using named regions instead of numbers.

#### Basic Syntax

```css
.grid {
	display: grid;
	grid-template-columns: 250px 1fr;
	grid-template-rows: 60px 1fr 50px;
	grid-template-areas:
		'sidebar header'
		'sidebar main'
		'footer footer';
	gap: 1rem;
}

.header {
	grid-area: header;
}
.sidebar {
	grid-area: sidebar;
}
.main {
	grid-area: main;
}
.footer {
	grid-area: footer;
}
```

**Visual Representation:**

```
┌─────────┬──────────────────┐
│         │     header       │
│ sidebar ├──────────────────┤
│         │      main        │
├─────────┴──────────────────┤
│         footer             │
└────────────────────────────┘
```

---

#### Empty Cells with Dot

**Create empty grid cells**

```css
.grid {
	grid-template-areas:
		'header header header'
		'.      main   sidebar'
		'footer footer footer';
}
/* The dot creates an empty cell */
```

---

### Responsive Template Areas

**Change layout at breakpoints**

```css
.grid {
	display: grid;
	gap: 1rem;

	/* Mobile: stacked layout */
	grid-template-columns: 1fr;
	grid-template-areas:
		'header'
		'main'
		'sidebar'
		'footer';
}

@media (min-width: 768px) {
	.grid {
		/* Desktop: sidebar layout */
		grid-template-columns: 250px 1fr;
		grid-template-rows: 60px 1fr 50px;
		grid-template-areas:
			'sidebar header'
			'sidebar main'
			'footer  footer';
	}
}
```

---

#### Complex Layout Example

**Magazine-style layout**

```css
.magazine {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: auto;
	gap: 1rem;
	grid-template-areas:
		'hero hero hero hero hero hero'
		'feat1 feat1 feat2 feat2 feat3 feat3'
		'art1 art1 art1 art2 art2 art2'
		'art3 art3 side side side side'
		'footer footer footer footer footer footer';
}

.hero {
	grid-area: hero;
}
.feat1 {
	grid-area: feat1;
}
.feat2 {
	grid-area: feat2;
}
.feat3 {
	grid-area: feat3;
}
.art1 {
	grid-area: art1;
}
.art2 {
	grid-area: art2;
}
.art3 {
	grid-area: art3;
}
.side {
	grid-area: side;
}
.footer {
	grid-area: footer;
}
```

---

### 📚 LESSON 2.5: Alignment in Grid

#### justify-items

**Align items along the row axis (horizontally)**

```css
.grid {
	display: grid;

	justify-items: start; /* Left align */
	justify-items: end; /* Right align */
	justify-items: center; /* Center */
	justify-items: stretch; /* Default: fill cell */
}
```

---

#### align-items

**Align items along the column axis (vertically)**

```css
.grid {
	display: grid;

	align-items: start; /* Top align */
	align-items: end; /* Bottom align */
	align-items: center; /* Center */
	align-items: stretch; /* Default: fill cell */
}
```

---

#### place-items (Shorthand)

**Align and justify together**

```css
.grid {
	/* place-items: align-items justify-items */
	place-items: center center;

	/* Same value for both */
	place-items: center;
}
```

---

#### justify-self / align-self

**Individual item alignment**

```css
.item {
	/* Override container's justify-items */
	justify-self: end;

	/* Override container's align-items */
	align-self: start;

	/* Shorthand */
	place-self: start end;
}
```

---

#### justify-content

**Align the entire grid within container**

```css
.grid {
	display: grid;
	grid-template-columns: repeat(3, 200px);
	width: 800px; /* Container wider than grid */

	justify-content: start; /* Left */
	justify-content: end; /* Right */
	justify-content: center; /* Center */
	justify-content: space-between; /* Spread */
	justify-content: space-around; /* Space around */
	justify-content: space-evenly; /* Even space */
}
```

---

#### align-content

**Align grid vertically within container**

```css
.grid {
	display: grid;
	grid-template-rows: repeat(3, 100px);
	height: 500px; /* Container taller than grid */

	align-content: start;
	align-content: end;
	align-content: center;
	align-content: space-between;
	align-content: space-around;
	align-content: space-evenly;
}
```

---

### 📚 LESSON 2.6: Advanced Grid Techniques

#### Auto-Placement

**Let grid automatically place items**

```css
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 200px; /* Height for auto-placed rows */
	gap: 1rem;
}

/* Items automatically flow into grid */
/* No need to specify grid-column/row */
```

---

#### grid-auto-flow

**Control auto-placement direction**

```css
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	grid-auto-flow: row; /* Default: fill rows first */
	grid-auto-flow: column; /* Fill columns first */
	grid-auto-flow: dense; /* Pack items tightly */
}
```

**dense keyword:**

```css
.grid {
	grid-auto-flow: row dense;
	/* Fills gaps with smaller items */
}
```

---

#### Implicit vs Explicit Grid

**Explicit Grid:** Tracks you define with grid-template-\*
**Implicit Grid:** Tracks created automatically for overflow items

```css
.grid {
	display: grid;

	/* Explicit: 3 columns */
	grid-template-columns: repeat(3, 1fr);

	/* Implicit: auto-created rows */
	grid-auto-rows: minmax(100px, auto);
}

/* If you have 10 items in a 3-column grid:
   - First 3 rows are explicit (if defined)
   - Additional rows are implicit */
```

---

#### Subgrid (Modern Browsers)

**Inherit parent grid tracks**

```css
.parent {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
}

.child {
	grid-column: span 2;

	/* Use parent's column tracks */
	display: grid;
	grid-template-columns: subgrid;
}
```

**Use Case:** Aligning content across nested grids

---

#### Grid with Named Lines and Areas Combined

**Most powerful pattern**

```css
.dashboard {
	display: grid;
	grid-template-columns:
		[full-start] 1fr
		[content-start] minmax(0, 1200px)
		[content-end] 1fr
		[full-end];
	grid-template-rows:
		[header-start] 60px [header-end]
		[main-start] 1fr [main-end]
		[footer-start] 50px [footer-end];
}

.header {
	grid-column: full-start / full-end;
	grid-row: header;
}

.content {
	grid-column: content-start / content-end;
	grid-row: main;
}

.footer {
	grid-column: full;
	grid-row: footer;
}
```

---

#### Overlapping Grid Items

**Stack items on the same cells**

```css
.grid {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
}

.background {
	grid-column: 1;
	grid-row: 1;
	z-index: 1;
}

.content {
	grid-column: 1;
	grid-row: 1;
	z-index: 2;
}

/* Both occupy same cell, use z-index to stack */
```

**Use Case:** Image with text overlay

---

### 🎯 USE CASE EXAMPLES

#### Example 1: Blog Post Layout

**Scenario:** Article with header, featured image, content, sidebar, and comments

```html
<article class="post-layout">
	<header class="post-header">
		<h1>Article Title</h1>
		<p class="meta">By Author | Date</p>
	</header>
	<img class="featured-image" src="hero.jpg" alt="" />
	<div class="post-content">
		<p>Article content...</p>
	</div>
	<aside class="sidebar">
		<h3>Related Posts</h3>
		<ul>
			...
		</ul>
	</aside>
	<section class="comments">
		<h3>Comments</h3>
	</section>
</article>
```

```css
.post-layout {
	display: grid;
	grid-template-columns: 1fr minmax(0, 800px) 300px 1fr;
	grid-template-rows: auto auto 1fr auto;
	gap: 2rem;
	grid-template-areas:
		'. header  header  .'
		'. image   image   .'
		'. content sidebar .'
		'. comments comments .';
}

.post-header {
	grid-area: header;
}
.featured-image {
	grid-area: image;
	width: 100%;
}
.post-content {
	grid-area: content;
}
.sidebar {
	grid-area: sidebar;
}
.comments {
	grid-area: comments;
}

/* Mobile: stack everything */
@media (max-width: 1024px) {
	.post-layout {
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'image'
			'content'
			'sidebar'
			'comments';
	}
}
```

---

#### Example 2: Dashboard with Widgets

**Scenario:** Analytics dashboard with various sized widgets

```html
<div class="dashboard">
	<header class="dash-header">Dashboard</header>
	<div class="widget large">Revenue Chart</div>
	<div class="widget">Users</div>
	<div class="widget">Sessions</div>
	<div class="widget tall">Recent Activity</div>
	<div class="widget wide">Performance</div>
	<div class="widget">Conversion</div>
</div>
```

```css
.dashboard {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 200px;
	gap: 1.5rem;
	padding: 1.5rem;
}

.dash-header {
	grid-column: 1 / -1;
	grid-row: span 1;
}

.widget {
	background: white;
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 1.5rem;
}

/* Larger widgets */
.widget.large {
	grid-column: span 2;
	grid-row: span 2;
}

.widget.tall {
	grid-row: span 2;
}

.widget.wide {
	grid-column: span 2;
}

/* Responsive */
@media (max-width: 1024px) {
	.dashboard {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 640px) {
	.dashboard {
		grid-template-columns: 1fr;
	}

	.widget.large,
	.widget.wide {
		grid-column: span 1;
	}
}
```

---

### Example 3: Image Gallery with Masonry Effect

**Scenario:** Pinterest-style image gallery

```html
<div class="gallery">
	<img src="1.jpg" class="tall" />
	<img src="2.jpg" />
	<img src="3.jpg" class="wide" />
	<img src="4.jpg" />
	<img src="5.jpg" class="big" />
	<img src="6.jpg" />
	<!-- More images -->
</div>
```

```css
.gallery {
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(250px, 1fr)
	);
	grid-auto-rows: 250px;
	gap: 1rem;
	grid-auto-flow: dense; /* Fill gaps */
}

.gallery img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 8px;
}

/* Varying sizes */
.gallery img.tall {
	grid-row: span 2;
}

.gallery img.wide {
	grid-column: span 2;
}

.gallery img.big {
	grid-column: span 2;
	grid-row: span 2;
}

/* Responsive */
@media (max-width: 640px) {
	.gallery {
		grid-template-columns: 1fr;
	}

	.gallery img.wide,
	.gallery img.big {
		grid-column: span 1;
	}
}
```

---

## 💪 PRACTICE EXERCISES

### Exercise 1: Grid Garden

**Objective:** Master grid placement through gamification

**Instructions:**

1. Go to https://cssgridgarden.com/
2. Complete all 28 levels
3. Take screenshots of levels 14, 21, and 28
4. Document tricky concepts

**What you'll learn:**

-   grid-column and grid-row
-   Spanning cells
-   Grid template areas
-   Named lines
-   Complex layouts

**Submission:**

-   Screenshots of completed levels
-   Reflection (150 words): What was most challenging? How is Grid different from Flexbox?

---

### Exercise 2: Holy Grail Layout

**Objective:** Build the classic "Holy Grail" layout with CSS Grid

**Requirements:**

**Desktop Layout:**

```
┌─────────────────────────────────┐
│          Header (60px)          │
├─────────┬─────────────┬─────────┤
│         │             │         │
│ Left    │    Main     │  Right  │
│ Sidebar │   Content   │ Sidebar │
│ (200px) │  (flexible) │ (250px) │
│         │             │         │
├─────────┴─────────────┴─────────┤
│          Footer (50px)          │
└─────────────────────────────────┘
```

**Mobile (< 768px):**

-   Stack all sections vertically
-   Order: Header → Main → Left → Right → Footer

**Technical Requirements:**

-   Use grid-template-areas
-   Page height = 100vh minimum
-   Main content should scroll if overflows
-   Must be CSS Grid (no Flexbox for main layout)
-   Use semantic HTML5 tags

**HTML Structure:**

```html
<div class="holy-grail">
	<header>Site Header</header>
	<aside class="left-sidebar">Left Nav</aside>
	<main>Main Content</main>
	<aside class="right-sidebar">Widgets</aside>
	<footer>Site Footer</footer>
</div>
```

**Content to Include:**

-   Header: Logo and navigation
-   Left Sidebar: 5-6 navigation links
-   Main: 3-4 paragraphs of lorem ipsum
-   Right Sidebar: "Popular Posts" widget
-   Footer: Copyright and social links

**Bonus Challenges:**

1. Add a sticky header (stays at top when scrolling)
2. Make sidebars collapsible with CSS checkbox hack
3. Add a print stylesheet that hides sidebars
4. Implement tablet layout (768px-1024px) with only left sidebar

**Submission:**

-   Complete HTML/CSS files
-   Screenshots at 375px, 768px, and 1440px
-   Explanation of why you chose your grid definition

---

### Exercise 3: Responsive Card Grid

**Objective:** Build a self-responsive grid without media queries

**Requirements:**

**The Grid:**

-   Cards automatically adjust from 1-4 columns based on available space
-   Minimum card width: 280px
-   Cards maintain aspect ratio 3:2
-   Use `repeat(auto-fit, minmax())` pattern

**Each Card Contains:**

-   Image (16:9 aspect ratio, using CSS)
-   Category badge (top-left overlay)
-   Title
-   Short description
-   Author info (avatar + name)
-   Date and read time
-   Tags (horizontally aligned)

**Card Variations:**

-   Default: spans 1 column
-   Featured: spans 2 columns (use class)
-   Highlight: spans 2 rows (use class)

**Technical Requirements:**

-   No media queries for the grid itself
-   Use CSS Grid for the cards
-   All cards have equal height in each row
-   Images use object-fit: cover
-   Accessible (proper heading hierarchy, alt text)

**Sample Card HTML:**

```html
<article class="card">
	<div class="card-image">
		<img src="image.jpg" alt="" />
		<span class="category">Technology</span>
	</div>
	<div class="card-content">
		<h3>Card Title Goes Here</h3>
		<p>Short description of the article...</p>
		<div class="card-meta">
			<div class="author">
				<img src="avatar.jpg" alt="Author" />
				<span>John Doe</span>
			</div>
			<div class="stats">
				<span>Jan 15</span>
				<span>5 min read</span>
			</div>
		</div>
		<div class="tags">
			<span>CSS</span>
			<span>Grid</span>
			<span>Responsive</span>
		</div>
	</div>
</article>
```

**Bonus Challenges:**

1. Add loading skeleton states with CSS
2. Implement hover effects (card lift, image zoom)
3. Add "Load More" button that reveals hidden cards
4. Make the featured card display differently (image on side on desktop)

**Submission:**

-   HTML/CSS files with 12+ cards
-   Include at least 2 featured and 1 highlight card
-   README explaining your minmax() values
-   Animated GIF showing responsive behavior

---

#### Exercise 4: Admin Dashboard

**Objective:** Build a complex, real-world dashboard layout

**Requirements:**

**Layout Structure:**

```
┌────────────────────────────────────────┐
│  Header: Logo | Search | Profile       │
├───────┬────────────────────────────────┤
│       │ Stats Row: 4 stat cards        │
│       ├────────────────────────────────┤
│       │ ┌──────────┐ ┌───────────────┐│
│ Side  │ │ Chart 1  │ │   Chart 2     ││
│ Nav   │ │(2 cols)  │ │  (2 cols)     ││
│       │ └──────────┘ └───────────────┘│
│(200px)│ ┌─────────────────────────────┐│
│       │ │ Recent Activity (4 cols)    ││
│       │ │ (scrollable table)          ││
│       │ └─────────────────────────────┘│
└───────┴────────────────────────────────┘
```

**Components to Build:**

**1. Header (fixed height: 60px)**

-   Logo (left)
-   Search bar (center, flexible)
-   Notifications icon with badge
-   User dropdown (right)

**2. Sidebar Navigation (fixed width: 200px)**

-   Dashboard link (active state)
-   5-6 nav items with icons
-   Collapsible on mobile
-   Fixed position, scrollable

**3. Stats Cards (4 equal cards)**

-   Icon
-   Label
-   Large number
-   Percentage change (green/red)
-   Sparkline graph area

**4. Charts Area**

-   2 chart widgets side by side
-   Each spans 2 columns in a 4-column grid
-   Placeholder for charts (just styled divs)

**5. Activity Table**

-   Spans full width
-   5-6 sample rows
-   Columns: User, Action, Date, Status
-   Responsive: hide columns on mobile

**Responsive Behavior:**

**Desktop (> 1024px):**

-   Full layout as shown

**Tablet (768px-1024px):**

-   Sidebar collapses to icon-only
-   Charts stack vertically
-   Stats cards in 2x2 grid

**Mobile (< 768px):**

-   Header with hamburger menu
-   Sidebar hidden (overlay on toggle)
-   Stats cards stack vertically
-   Charts full width
-   Table: horizontal scroll or card layout

**Technical Requirements:**

-   Use Grid for main layout
-   Use Grid template areas
-   Nested grids for components
-   Page height: 100vh
-   Scrollable content area
-   No fixed positioning except header/sidebar
-   Smooth transitions on collapse

**Bonus Challenges:**

1. Add dark mode toggle (CSS variables)
2. Implement sticky header with scroll shadow
3. Add CSS-only dropdown menus
4. Create a working hamburger menu (CSS checkbox hack)
5. Add skeleton loaders for widgets

**Submission:**

-   Full HTML/CSS (+ optional JS for toggles)
-   Include sample data in all components
-   Annotated code explaining grid structure
-   Video (2-3 min) walking through responsive behavior
-   Comparison: Where would Flexbox have been easier?

---

### Exercise 5: Magazine Layout Challenge

**Objective:** Recreate a complex editorial layout

**Scenario:** You're building the homepage for a digital magazine

**Requirements:**

**Desktop Layout (12-column grid):**

```
┌─────────────────────────────────────────────┐
│ Header: Logo | Nav Links | Search | CTA    │
├──────────────────────────┬──────────────────┤
│                          │                  │
│   Hero Article           │  Featured 1      │
│   (spans 8 cols, 2 rows) │  (4 cols)        │
│                          ├──────────────────┤
│                          │  Featured 2      │
│                          │  (4 cols)        │
├──────────┬──────────┬────┴─────┬────────────┤
│ Story 1  │ Story 2  │ Story 3  │ Story 4    │
│ (3 cols) │ (3 cols) │ (3 cols) │ (3 cols)   │
├──────────┴──────────┴──────────┴────────────┤
│ Full Width Banner / Newsletter Signup       │
├──────────┬────────────────────┬─────────────┤
│          │                    │             │
│ Sidebar  │  Latest Articles   │ Trending    │
│ (3 cols) │  (6 cols grid)     │ (3 cols)    │
│          │  2x3 card grid     │             │
│          │                    │             │
├──────────┴────────────────────┴─────────────┤
│ Footer: Links | Social | Copyright         │
└─────────────────────────────────────────────┘
```

**Content Requirements:**

**Hero Article:**

-   Large image background
-   Category badge
-   Headline (large)
-   Excerpt
-   Author + date
-   "Read More" button

**Featured Articles (2):**

-   Image
-   Category
-   Title
-   Excerpt
-   Read time

**Story Cards (4):**

-   Image
-   Category
-   Title
-   Author info

**Latest Articles Grid:**

-   6 cards (2 rows × 3 cols)
-   Thumbnail
-   Title
-   Date

**Sidebar:**

-   "About" section
-   "Popular Topics" list
-   Ad space

**Trending:**

-   Numbered list (1-5)
-   Small thumbnails
-   Titles

**Technical Constraints:**

-   Must use 12-column grid system
-   Grid template areas for major sections
-   Nested grids for card layouts
-   All images use object-fit
-   Typography scale (6 levels)
-   Consistent spacing (8px grid)

**Responsive Breakpoints:**

**Tablet (768px-1024px):**

-   Hero: 12 cols
-   Featured: 6 cols each (side by side)
-   Stories: 6 cols each (2x2 grid)
-   Latest: 4 cols each (2 rows × 3 cols)
-   Sidebar and Trending: 6 cols each

**Mobile (< 768px):**

-   Everything stacks (1 col)
-   Hero maintains prominence
-   Cards simplify (smaller images)

**Advanced Requirements:**

1. Implement CSS columns for article text (desktop only)
2. Create a sticky sidebar on desktop
3. Add parallax effect to hero (CSS only)
4. Implement reading progress indicator
5. Add print stylesheet

**Design Specifications:**

-   Max width: 1400px
-   Gutter: 24px
-   Margin: 16px mobile, 32px desktop
-   Border radius: 8px
-   Box shadow on cards
-   Smooth hover transitions

**Bonus Challenges:**

1. Add skeleton screens for loading states
2. Implement infinite scroll layout
3. Create a grid-based image gallery lightbox
4. Add CSS-only tabs for filtering articles
5. Implement breadcrumb navigation

**Submission Requirements:**

-   Complete HTML/CSS files
-   Use Lorem Picsum for placeholder images
-   Include print stylesheet
-   Document your grid system in comments
-   README with:
    -   Grid system explanation
    -   Responsive strategy
    -   Challenges faced
    -   What you'd do differently
-   Screenshots at 375px, 768px, 1024px, 1440px
-   CodePen/hosted link

---

# 📏 MODULE 3: UNITS & SPACING

## 🎯 Module Overview

-   **Duration:** 3 hours
-   **Difficulty:** Intermediate
-   **Prerequisites:** CSS basics, responsive principles
-   **Learning Outcomes:**
    -   Master all CSS units (absolute and relative)
    -   Build consistent spacing systems
    -   Create fluid typography
    -   Understand when to use each unit type

---

## 📚 LESSON 3.1: CSS Units Overview

### Absolute Units

**Fixed sizes that don't change based on context**

```css
/* Pixels - most common absolute unit */
width: 200px;
font-size: 16px;
border: 1px solid;

/* Other absolute units (rarely used for screen) */
width: 5cm; /* Centimeters */
width: 2in; /* Inches */
width: 10mm; /* Millimeters */
width: 12pt; /* Points (1/72 of inch) */
width: 1pc; /* Picas (12 points) */
```

**When to use px:**

-   Borders (1px, 2px)
-   Box shadows
-   Small, precise values
-   ⚠️ **Avoid for:** Font sizes, layout widths, spacing

---

### Relative Units

**Size relative to something else**

```css
/* Font-relative */
em    /* Relative to parent font-size */
rem   /* Relative to root font-size */
ex    /* Height of lowercase 'x' */
ch    /* Width of '0' character */

/* Viewport-relative */
vw    /* 1% of viewport width */
vh    /* 1% of viewport height */
vmin  /* 1% of smaller dimension */
vmax  /* 1% of larger dimension */

/* New viewport units (2023+) */
dvh   /* Dynamic viewport height */
svh   /* Small viewport height */
lvh   /* Large viewport height */

/* Container-relative (2023+) */
cqw   /* 1% of container width */
cq /* Container-relative (2023+) */
cqw   /* 1% of container width */
cqh   /* 1% of container height */
cqi   /* 1% of container inline size */
cqb   /* 1% of container block size **/
/* Percentage */
%     /* Relative to parent element */
```

/_ Container-relative (2023+) _/
cqw /_ 1% of container width _/
cqh /_ 1% of container height _/
cqi /_ 1% of container inline size _/
cqb /_ 1% of container block size _/

/_ Percentage _/
% /_ Relative to parent element _/

````

---

### Unit Comparison Table

| Unit | Relative To | Best Use Case | Example |
|------|-------------|---------------|---------|
| px | Fixed | Borders, shadows | `border: 1px solid` |
| em | Parent font-size | Component-level spacing | `padding: 1em` |
| rem | Root font-size | Global sizing, spacing | `font-size: 1.5rem` |
| % | Parent dimension | Widths, responsive sizing | `width: 50%` |
| vw/vh | Viewport | Full-screen sections | `height: 100vh` |
| dvh | Dynamic viewport | Mobile-friendly heights | `min-height: 100dvh` |
| cqw/cqh | Container | Container queries | `font-size: 5cqw` |
| ch | Character width | Input sizing | `width: 20ch` |

---

## 📚 LESSON 3.2: em vs rem Deep Dive

### Understanding em
**Relative to parent element's font-size**

```css
/* Parent has font-size: 16px */
.parent {
  font-size: 16px;
}

.child {
  font-size: 2em;      /* = 32px (16 × 2) */
  padding: 1em;        /* = 32px (relative to own font-size) */
  margin-bottom: 0.5em; /* = 16px */
}
````

**The Compounding Problem:**

```css
.parent {
	font-size: 16px;
}

.level-1 {
	font-size: 1.2em; /* 19.2px */
}

.level-2 {
	font-size: 1.2em; /* 23.04px (19.2 × 1.2) */
}

.level-3 {
	font-size: 1.2em; /* 27.65px (23.04 × 1.2) */
}
/* Each level compounds! */
```

**When to use em:**
✅ Component-level spacing tied to font size
✅ Buttons (padding scales with text)
✅ Media queries (respects user zoom)

```css
.button {
	font-size: 1rem;
	padding: 0.5em 1em; /* Scales with button size */
	border-radius: 0.25em;
}

.button-large {
	font-size: 1.5rem;
	/* Padding automatically larger due to em */
}
```

---

### Understanding rem

**Relative to root (html) font-size**

```css
html {
	font-size: 16px; /* Base: 1rem = 16px */
}

.element {
	font-size: 1.5rem; /* 24px */
	padding: 2rem; /* 32px */
	margin-bottom: 1rem; /* 16px */
}

/* No matter how deep, 1rem = 16px */
.deeply .nested .element {
	font-size: 1.5rem; /* Still 24px */
}
```

**When to use rem:**
✅ Font sizes (consistent scale)
✅ Spacing (margins, padding)
✅ Layout dimensions
✅ Media queries

**Best Practice Setup:**

```css
/* Easy mental math: 1rem = 10px */
html {
	font-size: 62.5%; /* 10px (16px × 0.625) */
}

body {
	font-size: 1.6rem; /* 16px */
}

h1 {
	font-size: 3.2rem;
} /* 32px */
h2 {
	font-size: 2.4rem;
} /* 24px */
p {
	font-size: 1.6rem;
} /* 16px */
```

---

### Practical Example: Button Component

```css
/* Using em for internal spacing */
.btn {
	/* Base size in rem */
	font-size: 1rem;

	/* Spacing in em (scales with font) */
	padding: 0.75em 1.5em;
	border-radius: 0.5em;

	/* Fixed border */
	border: 2px solid currentColor;
}

.btn-small {
	font-size: 0.875rem; /* Padding automatically smaller */
}

.btn-large {
	font-size: 1.25rem; /* Padding automatically larger */
}

/* Using rem for margins (consistent) */
.btn {
	margin-bottom: 1rem; /* Always same spacing */
}
```

---

## 📚 LESSON 3.3: Viewport Units

### Basic Viewport Units

```css
/* vw: 1% of viewport width */
.full-width {
	width: 100vw; /* Full viewport width */
}

.half-width {
	width: 50vw; /* Half viewport width */
}

/* vh: 1% of viewport height */
.hero {
	height: 100vh; /* Full viewport height */
}

.section {
	min-height: 50vh; /* At least half viewport */
}
```

---

### The Mobile Browser Problem

**Issue:** Mobile browsers show/hide address bars while scrolling

```css
/* ❌ Problem: Jumps as address bar appears/disappears */
.hero {
	height: 100vh;
}

/* On scroll:
   100vh includes address bar space
   → Address bar hides
   → Content jumps
   → Bad UX
*/
```

---

### New Viewport Units (2023+)

**Solution: Dynamic viewport units**

```css
/* Large viewport: address bar hidden */
.hero {
	height: 100lvh;
}

/* Small viewport: address bar visible */
.hero {
	height: 100svh;
}

/* Dynamic viewport: adapts on scroll */
.hero {
	height: 100dvh; /* ← Use this for mobile! */
}
```

**When to use each:**

-   `lvh`: When you want content to fit when address bar is hidden
-   `svh`: When you want content to always be visible
-   `dvh`: When you want smooth adaptation (most common)

---

### vmin and vmax

```css
/* vmin: 1% of smaller dimension */
.square {
	width: 50vmin;
	height: 50vmin;
	/* Always square, adapts to orientation */
}

/* vmax: 1% of larger dimension */
.element {
	font-size: 5vmax;
	/* Larger on landscape */
}
```

**Use Cases:**

-   `vmin`: Square elements that adapt to orientation
-   `vmax`: Ensuring elements scale to larger dimension

---

### Fluid Typography with Viewport Units

```css
/* Basic fluid typography */
h1 {
	font-size: 5vw;
}

/* Problem: Too small on mobile, too large on desktop */

/* Solution 1: Clamp with vw */
h1 {
	font-size: clamp(2rem, 5vw, 4rem);
	/* Min 2rem, preferred 5vw, max 4rem */
}

/* Solution 2: Calc with base */
h1 {
	font-size: calc(1.5rem + 2vw);
	/* Starts at 1.5rem, grows with viewport */
}
```

---

### Viewport Units Best Practices

**Do's:**
✅ Use `dvh` for full-height sections on mobile
✅ Combine with `clamp()` for safe fluid sizing
✅ Use `vmin` for elements that need to adapt to orientation
✅ Use for hero sections and full-screen layouts

**Don'ts:**
❌ Don't use raw `vw` for font sizes (can be tiny)
❌ Don't use `100vw` if it causes horizontal scroll
❌ Don't forget to test landscape orientation
❌ Don't use `vh` alone on mobile (use `dvh`)

---

## 📚 LESSON 3.4: Building a Spacing System

### Why a Spacing System?

**Problems without a system:**

-   Inconsistent spacing (13px here, 17px there)
-   Difficult to maintain
-   No visual rhythm
-   Developers make arbitrary decisions

**Benefits of a system:**

-   Consistent visual rhythm
-   Faster development (no decisions)
-   Easier maintenance
-   Professional appearance

---

### The 8-Point Grid System

**Concept:** All spacing uses multiples of 8px

```css
:root {
	/* 8px base unit */
	--space-0: 0;
	--space-1: 0.5rem; /* 8px */
	--space-2: 1rem; /* 16px */
	--space-3: 1.5rem; /* 24px */
	--space-4: 2rem; /* 32px */
	--space-5: 2.5rem; /* 40px */
	--space-6: 3rem; /* 48px */
	--space-8: 4rem; /* 64px */
	--space-10: 5rem; /* 80px */
	--space-12: 6rem; /* 96px */
	--space-16: 8rem; /* 128px */
	--space-20: 10rem; /* 160px */
	--space-24: 12rem; /* 192px */
}
```

**Usage:**

```css
.card {
	padding: var(--space-4); /* 32px */
	margin-bottom: var(--space-6); /* 48px */
	gap: var(--space-3); /* 24px */
}

.section {
	padding-block: var(--space-16); /* 128px */
}

.button {
	padding: var(--space-2) var(--space-4); /* 16px 32px */
}
```

---

### T-Shirt Sizing System

**Alternative:** Named sizes instead of numbers

```css
:root {
	--space-xs: 0.25rem; /* 4px */
	--space-sm: 0.5rem; /* 8px */
	--space-md: 1rem; /* 16px */
	--space-lg: 2rem; /* 32px */
	--space-xl: 4rem; /* 64px */
	--space-2xl: 8rem; /* 128px */
	--space-3xl: 16rem; /* 256px */
}
```

**When to use:**

-   More semantic than numbers
-   Easier for designers to understand
-   Less precise (can be good or bad)

---

### Fluid Spacing System

**Problem:** Fixed spacing doesn't adapt to screen size

**Solution:** Fluid spacing with `clamp()`

```css
:root {
	/* Fluid spacing: grows with viewport */
	--space-xs: clamp(0.5rem, 1vw, 0.75rem);
	--space-sm: clamp(1rem, 2vw, 1.5rem);
	--space-md: clamp(2rem, 4vw, 3rem);
	--space-lg: clamp(3rem, 6vw, 5rem);
	--space-xl: clamp(4rem, 8vw, 8rem);
	--space-2xl: clamp(6rem, 12vw, 12rem);
}
```

**Benefits:**

-   Smooth scaling between breakpoints
-   No media queries needed
-   Better responsive feel

---

### Spacing Scale in Action

**Example: Card Component**

```css
.card {
	/* Border radius scales with size */
	border-radius: var(--space-2);

	/* Internal spacing */
	padding: var(--space-4);

	/* Gap between elements */
	display: flex;
	flex-direction: column;
	gap: var(--space-3);

	/* External spacing */
	margin-bottom: var(--space-6);
}

.card-title {
	/* Spacing after title */
	margin-bottom: var(--space-2);
}

.card-actions {
	/* Spacing between buttons */
	display: flex;
	gap: var(--space-2);

	/* Push to bottom */
	margin-top: auto;
}
```

---

### Tailwind-Style Utility Classes

**Create utility classes for your system:**

```css
/* Margin utilities */
.m-0 {
	margin: 0;
}
.m-1 {
	margin: var(--space-1);
}
.m-2 {
	margin: var(--space-2);
}
.m-4 {
	margin: var(--space-4);
}

.mt-4 {
	margin-top: var(--space-4);
}
.mb-6 {
	margin-bottom: var(--space-6);
}

/* Padding utilities */
.p-0 {
	padding: 0;
}
.p-2 {
	padding: var(--space-2);
}
.p-4 {
	padding: var(--space-4);
}

.px-4 {
	padding-inline: var(--space-4);
}
.py-6 {
	padding-block: var(--space-6);
}

/* Gap utilities */
.gap-2 {
	gap: var(--space-2);
}
.gap-4 {
	gap: var(--space-4);
}
```

---

## 📚 LESSON 3.5: Typography Scale

### Why a Type Scale?

**Benefits:**

-   Clear visual hierarchy
-   Consistent proportions
-   Professional appearance
-   Easier decisions

---

### Modular Scale Theory

**Concept:** Each size is a consistent ratio of the previous

**Common Ratios:**

-   1.125 (Major Second) - Subtle
-   1.200 (Minor Third) - Moderate
-   1.250 (Major Third) - Noticeable ← **Most Common**
-   1.333 (Perfect Fourth) - Strong
-   1.414 (Augmented Fourth) - Dramatic
-   1.500 (Perfect Fifth) - Bold
-   1.618 (Golden Ratio) - Classic

---

### Building a Modular Scale

**Example: 1.250 ratio (Major Third)**

```css
:root {
	/* Base: 16px = 1rem */
	--font-base: 1rem; /* 16px */

	/* Scale down */
	--font-sm: 0.8rem; /* 12.8px (16 ÷ 1.25) */
	--font-xs: 0.64rem; /* 10.24px (12.8 ÷ 1.25) */

	/* Scale up */
	--font-lg: 1.25rem; /* 20px (16 × 1.25) */
	--font-xl: 1.563rem; /* 25px (20 × 1.25) */
	--font-2xl: 1.953rem; /* 31.25px (25 × 1.25) */
	--font-3xl: 2.441rem; /* 39px (31.25 × 1.25) */
	--font-4xl: 3.052rem; /* 48.8px (39 × 1.25) */
	--font-5xl: 3.815rem; /* 61px (48.8 × 1.25) */
}
```

**Apply to Elements:**

```css
body {
	font-size: var(--font-base);
}
small {
	font-size: var(--font-sm);
}

h6 {
	font-size: var(--font-lg);
}
h5 {
	font-size: var(--font-xl);
}
h4 {
	font-size: var(--font-2xl);
}
h3 {
	font-size: var(--font-3xl);
}
h2 {
	font-size: var(--font-4xl);
}
h1 {
	font-size: var(--font-5xl);
}
```

---

### Fluid Typography Scale

**Problem:** Fixed sizes don't adapt to screen size

**Solution:** Fluid typography with `clamp()`

```css
:root {
	/* Fluid type scale */
	--font-sm: clamp(0.875rem, 0.8rem + 0.25vw, 1rem);
	--font-base: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
	--font-lg: clamp(1.25rem, 1rem + 1vw, 1.75rem);
	--font-xl: clamp(1.563rem, 1.2rem + 1.5vw, 2.5rem);
	--font-2xl: clamp(1.953rem, 1.5rem + 2vw, 3.5rem);
	--font-3xl: clamp(2.441rem, 2rem + 3vw, 5rem);
	--font-4xl: clamp(3.052rem, 2.5rem + 4vw, 6rem);
}

/* Usage */
h1 {
	font-size: var(--font-4xl);
}
h2 {
	font-size: var(--font-3xl);
}
h3 {
	font-size: var(--font-2xl);
}
p {
	font-size: var(--font-base);
}
```

**How to Calculate clamp():**

```
clamp(MIN, PREFERRED, MAX)

MIN: Mobile size (e.g., 2rem)
MAX: Desktop size (e.g., 5rem)
PREFERRED: Formula that grows with viewport

Formula: BASE + VIEWPORT_UNIT
Example: 2rem + 3vw
```

---

### Line Height Scale

**Why it matters:** Line height affects readability

```css
:root {
	--leading-none: 1;
	--leading-tight: 1.25;
	--leading-snug: 1.375;
	--leading-normal: 1.5;
	--leading-relaxed: 1.625;
	--leading-loose: 2;
}

/* Apply based on font size */
h1,
h2,
h3 {
	line-height: var(--leading-tight); /* 1.25 */
}

p,
li {
	line-height: var(--leading-relaxed); /* 1.625 */
}

small {
	line-height: var(--leading-normal); /* 1.5 */
}
```

**Rule of Thumb:**

-   Large text (headings): Tighter line height (1.2-1.3)
-   Body text: Comfortable line height (1.5-1.7)
-   Small text: Normal line height (1.4-1.6)

---

### Letter Spacing (Tracking)

```css
:root {
	--tracking-tighter: -0.05em;
	--tracking-tight: -0.025em;
	--tracking-normal: 0;
	--tracking-wide: 0.025em;
	--tracking-wider: 0.05em;
	--tracking-widest: 0.1em;
}

/* Usage */
h1 {
	letter-spacing: var(
		--tracking-tight
	); /* Tighter for large text */
}

.uppercase-text {
	letter-spacing: var(
		--tracking-wide
	); /* Wider for caps */
}

.button {
	letter-spacing: var(
		--tracking-wider
	); /* Wider for buttons */
}
```

---

## 🎯 USE CASE EXAMPLES

### Example 1: Responsive Hero Section

```css
.hero {
	/* Full height using new viewport unit */
	min-height: 100dvh;

	/* Fluid padding */
	padding: clamp(2rem, 5vw, 6rem);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.hero-title {
	/* Fluid typography */
	font-size: clamp(2.5rem, 6vw + 1rem, 6rem);
	line-height: var(--leading-tight);
	letter-spacing: var(--tracking-tight);

	/* Consistent spacing */
	margin-bottom: var(--space-4);
}

.hero-subtitle {
	font-size: clamp(1.25rem, 2vw + 0.5rem, 2rem);
	line-height: var(--leading-relaxed);

	/* Max width for readability */
	max-width: 60ch; /* 60 characters wide */
	margin-bottom: var(--space-6);
}

.hero-cta {
	/* Spacing scales with font */
	font-size: var(--font-lg);
	padding: 0.75em 2em;
	border-radius: 0.5em;
}
```

---

### Example 2: Article Layout

```css
.article-container {
	/* Centered with fluid margins */
	width: min(90%, 70ch); /* Max 70 characters wide */
	margin-inline: auto;
	padding-block: var(--space-12);
}

.article-title {
	font-size: var(--font-4xl);
	line-height: var(--leading-tight);
	margin-bottom: var(--space-3);
}

.article-meta {
	font-size: var(--font-sm);
	color: var(--color-text-muted);
	margin-bottom: var(--space-8);
}

.article-content {
	font-size: var(--font-base);
	line-height: var(--leading-relaxed);
}

.article-content > * + * {
	/* Consistent spacing between elements */
	margin-top: var(--space-4);
}

.article-content h2 {
	font-size: var(--font-2xl);
	margin-top: var(--space-8);
	margin-bottom: var(--space-3);
}

.article-content h3 {
	font-size: var(--font-xl);
	margin-top: var(--space-6);
	margin-bottom: var(--space-2);
}
```

---

### Example 3: Card Grid with Consistent Spacing

```css
.card-grid {
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(300px, 1fr)
	);

	/* Fluid gap */
	gap: clamp(1.5rem, 3vw, 3rem);

	/* Consistent outer spacing */
	padding: var(--space-8);
}

.card {
	border-radius: var(--space-2);
	padding: var(--space-4);

	/* Internal spacing */
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
}

.card-image {
	/* Aspect ratio for consistency */
	aspect-ratio: 16 / 9;
	border-radius: var(--space-1);
	margin: calc(var(--space-4) * -1); /* Negative margin */
	margin-bottom: var(--space-3);
}

.card-title {
	font-size: var(--font-xl);
	line-height: var(--leading-snug);
}

.card-description {
	font-size: var(--font-base);
	line-height: var(--leading-relaxed);
	color: var(--color-text-secondary);

	/* Flexible space */
	flex: 1;
}

.card-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: var(--space-2);

	padding-top: var(--space-3);
	border-top: 1px solid var(--color-border);
}
```

---

## 💪 PRACTICE EXERCISES

### Exercise 1: Build a Spacing System

**Objective:** Create a complete spacing system and apply it consistently

**Part 1: Define the System **

Create CSS custom properties for:

1. **8-Point Grid Scale**

    - 0, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

2. **Fluid Spacing (use clamp)**

    - xs, sm, md, lg, xl, 2xl

3. **Semantic Spacing**
    ```css
    --space-section: /* Large section spacing */
    --space-component: /* Between components */
    --space-element: /* Between elements */
    --space-inline: /* Inline spacing (buttons, etc.) */
    ```

**Part 2: Create Utility Classes **

Build Tailwind-style utilities for:

-   Margin: `.m-{size}`, `.mt-{size}`, `.mr-{size}`, etc.
-   Padding: `.p-{size}`, `.px-{size}`, `.py-{size}`, etc.
-   Gap: `.gap-{size}`

**Part 3: Apply to Layout **

Build a page with:

-   Header
-   Hero section
-   3-column feature grid
-   Testimonial section
-   Footer

**Rules:**

-   Use ONLY your spacing system variables
-   No arbitrary values (no `padding: 17px`)
-   All spacing must be consistent and intentional

**Submission:**

-   CSS file with complete system
-   HTML page using the system
-   Documentation explaining your choices
-   Before/after showing inconsistent vs. consistent spacing

---

### Exercise 2: Fluid Typography System

**Objective:** Build a fluid, responsive typography system

**Requirements:**

**Part 1: Create Type Scale **

1. Choose a modular ratio (1.2, 1.25, 1.333, or 1.5)
2. Create 8 font sizes (xs to 5xl)
3. Make them ALL fluid using `clamp()`
4. Define line heights for each size
5. Add letter spacing where appropriate

**Part 2: Apply to Real Content **

Create a blog post page with:

-   Page title (h1)
-   Section headings (h2, h3)
-   Body paragraphs
-   Blockquote
-   List items
-   Caption text
-   Button text

**Part 3: Responsive Testing **

Test your typography at:

-   375px (mobile)
-   768px (tablet)
-   1440px (desktop)
-   2560px (large desktop)

Ensure:

-   Text is readable at all sizes
-   Line length doesn't exceed 75ch
-   Line heights are comfortable
-   Hierarchy is clear

**Bonus Challenges:**

1. Add a dark mode with adjusted letter spacing
2. Create a "comfortable reading" mode with larger text
3. Implement vertical rhythm (consistent baseline grid)
4. Add print styles with different scale

**Submission:**

-   Complete typography system (CSS)
-   Sample page with all elements
-   Screenshots at 4 breakpoints
-   Documentation of clamp() formulas used
-   Reflection on what worked/didn't work

---

### Exercise 3: Unit Mastery Challenge

**Objective:** Use the right unit for each scenario

**Scenarios to Solve:**

1. **Full-Screen Hero (Mobile-Safe)**

    - Must fill viewport on mobile without jumping
    - Should work with/without address bar

2. **Button Component**

    - Padding should scale with font size
    - 3 sizes: small, medium, large
    - Consistent external margin

3. **Responsive Container**

    - Never touches edges on mobile
    - Max width 1200px on desktop
    - Fluid padding that grows

4. **Card Grid**

    - Minimum card width 280px
    - Fluid gap that scales
    - Cards don't exceed 400px

5. **Article Text**

    - Optimal line length (45-75 characters)
    - Fluid font size (16px-20px)
    - Comfortable line height

6. **Navigation Bar**
    - Fixed height on desktop
    - Items spaced evenly
    - Logo never shrinks

**For Each Scenario, Document:**

-   Which units you chose (px, em, rem, %, vw, vh, ch, etc.)
-   WHY you chose those units
-   Alternative approaches considered

**Submission:**

-   CodePen with all 6 scenarios
-   Commented CSS explaining choices
-   Written comparison (500 words): When to use each unit type

---

### Exercise 4: Design System Component Library

**Objective:** Build a mini design system with consistent spacing and typography

**Requirements:**

**Part 1: Foundation **

Create the system:

1. Spacing scale (8-point grid + fluid variants)
2. Typography scale (modular + fluid)
3. Color system (primary, secondary, neutral, semantic)
4. Border radius scale
5. Shadow scale

**Part 2: Components **

Build 8 components using ONLY your system:

1. **Button** (4 sizes, 3 variants)
2. **Input Field** (with label, helper text, error state)
3. **Card** (with image, title, description, footer)
4. **Alert** (4 types: info, success, warning, error)
5. **Badge** (3 sizes)
6. **Avatar** (4 sizes, with fallback initials)
7. **Modal** (responsive, with header/body/footer)
8. **Navigation** (responsive, with dropdown)

**Part 3: Demo Page **

Create a kitchen sink page showing:

-   All components
-   Different states (hover, focus, disabled, error)
-   Responsive behavior
-   Dark mode toggle

**Technical Requirements:**

-   Use CSS custom properties for everything
-   No magic numbers in components
-   All spacing from system
-   All font sizes from system
-   Responsive without media queries where possible

**Bonus Challenges:**

1. Create React components using your system
2. Generate documentation automatically
3. Build a theme switcher (multiple color schemes)
4. Add accessibility features (focus management, ARIA)

**Submission:**

-   Complete CSS design system file
-   HTML kitchen sink page
-   Component documentation (usage examples)
-   Design tokens file (JSON)
-   README explaining system decisions

---

# 🎛️ MODULE 4: MEDIA QUERIES & CONTAINER QUERIES

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

## 📚 LESSON 4.1: Introduction to Media Queries

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

## 📚 LESSON 4.2: Media Query Features

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
		height: 40px;
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
		display: block;
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
		padding: 1rem;
		min-height: 44px;
		min-width: 44px;
	}

	.button {
		font-size: 1.125rem;
	}
}

/* No pointer (keyboard only, TV remote) */
@media (pointer: none) {
	.focus-indicator {
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
	.card {
		border: 2px solid black;
	}
}

/* Display mode (for PWAs) */
@media (display-mode: standalone) {
	.install-prompt {
		display: none;
	}
}

@media (display-mode: fullscreen) {
	/* Running in fullscreen */
}
```

---

## 📚 LESSON 4.3: User Preference Media Queries

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
		opacity: 0.9;
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
		background-color: #f0f0f0;
	}

	video {
		display: none;
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

## 📚 LESSON 4.4: Media Query Best Practices

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
	font-size: 2rem;
}

@media (min-width: 768px) {
	body {
		font-size: 18px;
	}

	h1 {
		font-size: 2.5rem;
	}
}

@media (min-width: 1024px) {
	h1 {
		font-size: 3rem;
	}
}

/* Better: Use clamp() instead */
h1 {
	font-size: clamp(2rem, 5vw, 3rem);
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

## 💪 PRACTICE EXERCISES - MEDIA QUERIES

### Exercise 1: Responsive Blog Layout

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

**Submission:**

-   Complete HTML/CSS files
-   Screenshots at 3 breakpoints
-   Explanation of breakpoint choices

---

# 📦 SECTION B: CONTAINER QUERIES

## 📚 LESSON 4.5: Introduction to Container Queries

### What are Container Queries?

Container queries allow elements to respond to the size of their **container** rather than the viewport. This enables truly modular, context-aware components.

### The Problem with Media Queries

```css
/* Media queries respond to viewport */
@media (min-width: 768px) {
	.card {
		display: flex; /* Always flexbox on tablets+ */
	}
}

/* Problem: What if card is in a narrow sidebar? */
/* It will still be flexbox even though there's no room! */
```

### The Container Query Solution

```css
/* Container queries respond to container size */
.sidebar {
	container-type: inline-size;
	container-name: sidebar;
}

@container sidebar (min-width: 400px) {
	.card {
		display: flex; /* Only flex if container is wide enough */
	}
}
```

---

### Basic Syntax

```css
/* 1. Define a container */
.container {
	container-type: inline-size; /* or size, normal */
	container-name: mycontainer; /* optional name */
}

/* 2. Query the container */
@container mycontainer (min-width: 400px) {
	.child {
		/* Styles when container is 400px+ wide */
	}
}

/* Query without name (queries nearest container) */
@container (min-width: 400px) {
	.child {
		/* Styles */
	}
}
```

---

### container-type Values

```css
/* inline-size: Query container's width (most common) */
.container {
	container-type: inline-size;
}

/* size: Query both width and height */
.container {
	container-type: size;
}

/* normal: Not a query container (default) */
.container {
	container-type: normal;
}
```

**⚠️ Important:** `container-type: size` creates a new containing block and affects layout. Use `inline-size` unless you need height queries.

---

### Shorthand: container

```css
/* Longhand */
.sidebar {
	container-type: inline-size;
	container-name: sidebar;
}

/* Shorthand: name / type */
.sidebar {
	container: sidebar / inline-size;
}
```

---

## 📚 LESSON 4.6: Container Query Features

### Width (inline-size) Queries

```css
.card-container {
	container-type: inline-size;
}

/* Small container */
@container (max-width: 400px) {
	.card {
		flex-direction: column;
	}
}

/* Medium container */
@container (min-width: 400px) and (max-width: 600px) {
	.card {
		flex-direction: row;
		gap: 1rem;
	}
}

/* Large container */
@container (min-width: 600px) {
	.card {
		flex-direction: row;
		gap: 2rem;
	}
}
```

---

### Container Query Units

**Special units relative to container size:**

```css
.container {
	container-type: inline-size;
}

.child {
	/* cqw: 1% of container width */
	width: 50cqw; /* 50% of container width */

	/* cqh: 1% of container height */
	height: 30cqh;

	/* cqi: 1% of container inline size */
	padding: 2cqi;

	/* cqb: 1% of container block size */
	margin-block: 1cqb;

	/* cqmin: 1% of smaller container dimension */
	font-size: 5cqmin;

	/* cqmax: 1% of larger container dimension */
	border-radius: 2cqmax;
}
```

---

### Fluid Typography with Container Queries

```css
.card-container {
	container-type: inline-size;
}

.card-title {
	/* Font size scales with container */
	font-size: clamp(1.25rem, 5cqw, 2.5rem);
}

.card-body {
	font-size: clamp(0.875rem, 3cqw, 1.125rem);
}

/* Result: Cards adapt their typography based on available space! */
```

---

### Style Queries (Experimental)

```css
/* Query container's CSS properties */
@container style(--theme: dark) {
	.card {
		background: #1a1a1a;
		color: #e0e0e0;
	}
}

/* Query custom property values */
.container {
	--layout: compact;
}

@container style(--layout: compact) {
	.item {
		padding: 0.5rem;
		font-size: 0.875rem;
	}
}
```

**Note:** Style queries are experimental as of 2025. Check browser support.

---

## 📚 LESSON 4.7: Practical Container Query Patterns

### Pattern 1: Responsive Card Component

```html
<div class="card-grid">
	<article class="card">
		<img src="product.jpg" alt="Product" />
		<div class="card-content">
			<h3>Product Title</h3>
			<p>Description goes here...</p>
			<button>Add to Cart</button>
		</div>
	</article>
	<!-- More cards -->
</div>
```

```css
/* Grid container */
.card-grid {
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(250px, 1fr)
	);
	gap: 2rem;
}

/* Each grid cell is a container */
.card-grid > * {
	container-type: inline-size;
}

/* Card base styles (narrow) */
.card {
	display: flex;
	flex-direction: column;
	background: white;
	border-radius: 8px;
	overflow: hidden;
}

.card img {
	width: 100%;
	aspect-ratio: 16/9;
	object-fit: cover;
}

.card-content {
	padding: 1rem;
}

/* When card container is 350px+ wide */
@container (min-width: 350px) {
	.card {
		flex-direction: row;
	}

	.card img {
		width: 40%;
		aspect-ratio: 1;
	}

	.card-content {
		padding: 1.5rem;
	}

	.card h3 {
		font-size: 1.25rem;
	}
}

/* When card container is 500px+ wide */
@container (min-width: 500px) {
	.card {
		flex-direction: column;
	}

	.card img {
		width: 100%;
		aspect-ratio: 16/9;
	}

	.card-content {
		padding: 2rem;
	}

	.card h3 {
		font-size: 1.5rem;
	}

	.card button {
		padding: 0.75rem 2rem;
	}
}
```

---

### Pattern 2: Sidebar vs Main Content

```html
<div class="layout">
	<aside class="sidebar">
		<div class="widget">
			<h3>Widget Title</h3>
			<p>Content...</p>
		</div>
	</aside>
	<main class="main-content">
		<div class="widget">
			<h3>Widget Title</h3>
			<p>Content...</p>
		</div>
	</main>
</div>
```

```css
.layout {
	display: grid;
	grid-template-columns: 250px 1fr;
	gap: 2rem;
}

/* Both areas are containers */
.sidebar,
.main-content {
	container-type: inline-size;
}

/* Widget adapts to its container */
.widget {
	background: white;
	padding: 1rem;
	border-radius: 8px;
}

/* In narrow containers (sidebar) */
@container (max-width: 300px) {
	.widget h3 {
		font-size: 1rem;
	}

	.widget p {
		font-size: 0.875rem;
	}

	.widget img {
		display: none; /* Hide images in narrow space */
	}
}

/* In wide containers (main content) */
@container (min-width: 600px) {
	.widget {
		display: flex;
		gap: 2rem;
		padding: 2rem;
	}

	.widget img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}

	.widget h3 {
		font-size: 1.5rem;
	}
}
```

---

### Pattern 3: Data Table / Card Toggle

```html
<div class="table-container">
	<div class="data-display">
		<div class="data-item">
			<span class="label">Name:</span>
			<span class="value">John Doe</span>
		</div>
		<!-- More items -->
	</div>
</div>
```

```css
.table-container {
	container-type: inline-size;
}

/* Narrow: Card layout */
.data-item {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-bottom: 1px solid #ddd;
}

.label {
	font-weight: bold;
	color: #666;
	font-size: 0.875rem;
}

.value {
	font-size: 1rem;
	margin-top: 0.25rem;
}

/* Wide: Table layout */
@container (min-width: 600px) {
	.data-display {
		display: table;
		width: 100%;
	}

	.data-item {
		display: table-row;
	}

	.label,
	.value {
		display: table-cell;
		padding: 1rem;
		border-bottom: 1px solid #ddd;
	}

	.label {
		width: 30%;
	}
}
```

---

### Pattern 4: Form Layout

```css
.form-container {
	container-type: inline-size;
}

/* Narrow: Stacked inputs */
.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1rem;
}

label {
	font-weight: bold;
}

input {
	padding: 0.75rem;
	border: 1px solid #ddd;
	border-radius: 4px;
}

/* Medium: Inline labels */
@container (min-width: 400px) {
	.form-group {
		flex-direction: row;
		align-items: center;
	}

	label {
		width: 150px;
		flex-shrink: 0;
	}

	input {
		flex: 1;
	}
}

/* Wide: Multi-column form */
@container (min-width: 700px) {
	.form-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem 2rem;
	}

	.form-group {
		flex-direction: column;
		align-items: stretch;
	}

	label {
		width: auto;
	}

	.form-group.full-width {
		grid-column: 1 / -1;
	}
}
```

---

## 📚 LESSON 4.8: Container Queries vs Media Queries

### When to Use Each

**Use Media Queries:**

-   Page-level layout changes
-   Global typography adjustments
-   Navigation restructuring
-   Viewport-specific features (orientation, hover)
-   User preferences (dark mode, reduced motion)

**Use Container Queries:**

-   Component-level responsiveness
-   Reusable components used in different contexts
-   Components in sidebars, grids, or flexible layouts
-   Design system components
-   Micro-layouts within larger pages

---

### Combining Both

```css
/* Media query: Page layout */
@media (min-width: 1024px) {
	.page-layout {
		display: grid;
		grid-template-columns: 250px 1fr 300px;
	}
}

/* Container query: Component adapts to its space */
.widget-container {
	container-type: inline-size;
}

@container (min-width: 400px) {
	.widget {
		display: flex;
		gap: 2rem;
	}
}

/* Result: Widget works in sidebar, main, or anywhere! */
```

---

### Migration Strategy

**Old approach (media queries only):**

```css
/* Tightly coupled to viewport */
@media (min-width: 768px) {
	.sidebar .card {
		font-size: 0.875rem; /* Small in sidebar */
	}

	.main .card {
		font-size: 1rem; /* Normal in main */
	}
}
```

**New approach (container queries):**

```css
/* Component is context-aware */
.card-container {
	container-type: inline-size;
}

@container (max-width: 300px) {
	.card {
		font-size: 0.875rem;
	}
}

@container (min-width: 500px) {
	.card {
		font-size: 1rem;
	}
}
```

---

## 📚 LESSON 4.9: Browser Support & Fallbacks

### Checking Support

```css
@supports (container-type: inline-size) {
	/* Container queries supported */
	.container {
		container-type: inline-size;
	}

	@container (min-width: 400px) {
		.card {
			display: flex;
		}
	}
}

/* Fallback for older browsers */
@supports not (container-type: inline-size) {
	@media (min-width: 768px) {
		.card {
			display: flex;
		}
	}
}
```

---

### Progressive Enhancement

```css
/* Base styles (works everywhere) */
.card {
	display: block;
	padding: 1rem;
}

/* Enhanced with media queries (good support) */
@media (min-width: 600px) {
	.card {
		display: flex;
		gap: 1rem;
	}
}

/* Further enhanced with container queries (modern browsers) */
@supports (container-type: inline-size) {
	.card-container {
		container-type: inline-size;
	}

	@container (min-width: 400px) {
		.card {
			display: flex;
			gap: 1rem;
		}
	}
}
```

---

### Browser Support (2025)

✅ **Full Support:**

-   Chrome 105+
-   Edge 105+
-   Safari 16+
-   Firefox 110+

⚠️ **No Support:**

-   Internet Explorer
-   Older mobile browsers

**Recommendation:** Use progressive enhancement with media query fallbacks for critical layouts.

---

## 💪 PRACTICE EXERCISES - CONTAINER QUERIES

### Exercise 1: Adaptive Component Library

**Objective:** Build a set of components that adapt using container queries

**Components to Build:**

1. **Product Card**

    - Narrow (<300px): Vertical, small image
    - Medium (300-500px): Horizontal
    - Wide (>500px): Vertical with large image

2. **Navigation Menu**

    - Narrow: Hamburger icon, vertical menu
    - Medium: Horizontal icons with text
    - Wide: Full horizontal with dropdown

3. **Data Table**

    - Narrow: Card layout
    - Medium: Simple table
    - Wide: Full featured table with sorting

4. **Video Player**
    - Narrow: Stacked controls
    - Medium: Inline controls
    - Wide: Extended controls with timeline

**Requirements:**

-   Each component must work in ANY container size
-   Use container query units (cqw, cqh) for fluid sizing
-   Provide media query fallbacks
-   Test in sidebar, main content, modal, and grid layouts

**Submission:**

-   Component library with demo page
-   Documentation for each breakpoint
-   Browser compatibility notes

---

### Exercise 2: Responsive Dashboard

**Objective:** Build a dashboard where widgets adapt to their container

**Layout:**

```
┌─────────────────────────────────┐
│  Header                         │
├──────┬──────────────────────────┤
│ Side │  Widget 1  │  Widget 2  │
│ bar  ├────────────┴────────────┤
│      │      Widget 3           │
├──────┴─────────────┬───────────┤
│    Widget 4        │ Widget 5  │
└────────────────────┴───────────┘
```

**Widgets to Create:**

1. **Stats Widget:** Number, label, trend indicator
2. **Chart Widget:** Bar/line chart placeholder
3. **List Widget:** Scrollable list of items
4. **Form Widget:** Input fields and buttons
5. **Calendar Widget:** Month view

**Each Widget Must:**

-   Adapt layout based on container size
-   Adjust font sizes using cqw units
-   Hide/show features based on space
-   Work in any grid position

**Responsive Behavior:**

-   Grid adjusts with media queries (1/2/3 columns)
-   Widgets adapt with container queries
-   Test by resizing widgets between positions

**Submission:**

-   Complete dashboard
-   Demonstrate widget reusability
-   Video showing widgets in different positions

---

## Course Complete

This comprehensive responsive web design course covers:

-   **MODULE 1:** Flexbox Fundamentals
-   **MODULE 2:** CSS Grid Mastery
-   **MODULE 3:** Units & Spacing
-   **MODULE 4, Section A:** Media Queries
-   **MODULE 4, Section B:** Container Queries

For additional resources and advanced topics, refer to:

-   MDN Web Docs
-   CSS-Tricks
-   Web.dev
-   Container Query Polyfill: https://github.com/GoogleChromeLabs/container-query-polyfill

---

**End of Course Document**

This comprehensive responsive web design course covers:

-   **MODULE 1:** Flexbox Fundamentals
-   **MODULE 2:** CSS Grid Mastery
-   **MODULE 3:** Units & Spacing
-   **MODULE 4:** Media Queries

For additional resources and advanced topics, refer to:

-   MDN Web Docs
-   CSS-Tricks
-   Web.dev
