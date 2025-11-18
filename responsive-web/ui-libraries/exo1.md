# Tailwind 4 Responsive Exercises in React

---

## 🎯 EXERCISE 1: E-Commerce Product Dashboard

### Objective

Build a responsive e-commerce dashboard that demonstrates:

-   **Flexbox**: Navigation, stat cards, action buttons
-   **Grid**: Product grid, analytics widgets
-   **Media Queries**: Layout changes at breakpoints
-   **Container Queries**: Cards that adapt to their container size

### Duration

120 minutes

---

## 📋 Requirements Overview

### Layout Breakpoints

**Mobile (< 640px):**

-   Hamburger menu
-   Single column grid
-   Stacked stats
-   Simplified cards

**Tablet (640px - 1024px):**

-   Horizontal navigation
-   2-column grid
-   Stats in row
-   Medium cards

**Desktop (≥ 1024px):**

-   Full sidebar + main layout
-   3-4 column grid
-   Stats dashboard
-   Detailed cards

### Container Query Areas

-   Product cards adapt based on parent width
-   Sidebar widgets change layout
-   Stats cards show/hide details

---

## 💻 Complete Code Solution

### 1. Project Setup

```bash
# Create React + Vite project
npm create vite@latest ecommerce-dashboard -- --template react

cd ecommerce-dashboard

# Install Tailwind CSS 4
npm install tailwindcss @tailwindcss/vite

# Install dependencies
npm install lucide-react

```

### 2. Tailwind Configuration

```javascript
// edit vite.config.js to include Tailwind plugin
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
		// other plugins if needed
	],
});
```

```css
/* src/index.css */
@import 'tailwindcss';

/* Enable container queries globally (optional) */
* {
	container-type: inline-size;
}
```

---

## 📱 Component Code

### App.jsx - Main Layout

```jsx
// src/App.jsx
import { useState } from 'react';
import {
	Menu,
	X,
	Search,
	Bell,
	User,
	ShoppingCart,
	TrendingUp,
	Package,
	DollarSign,
	Users,
} from 'lucide-react';
import ProductGrid from './components/ProductGrid';
import StatsCards from './components/StatsCards';
import Sidebar from './components/Sidebar';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* 
        FLEXBOX: Top Navigation Bar
        - Mobile: Hamburger + Logo + Actions
        - Desktop: Full nav with search
      */}
			<nav
				className="
        bg-white 
        border-b border-gray-200 
        sticky top-0 z-50
      "
			>
				<div
					className="
          flex items-center justify-between 
          px-4 py-3 
          lg:px-6
        "
				>
					{/* Left: Menu + Logo */}
					<div className="flex items-center gap-4">
						{/* Hamburger - Hidden on Desktop */}
						<button
							onClick={() =>
								setSidebarOpen(!sidebarOpen)
							}
							className="
                lg:hidden 
                p-2 
                hover:bg-gray-100 
                rounded-lg
                transition-colors
              "
						>
							{sidebarOpen ? (
								<X size={24} />
							) : (
								<Menu size={24} />
							)}
						</button>

						<h1
							className="
              text-xl font-bold text-gray-900
              sm:text-2xl
            "
						>
							ShopAdmin
						</h1>
					</div>

					{/* 
            FLEXBOX: Center Search (Hidden on Mobile)
            - Grows to fill available space
          */}
					<div
						className="
            hidden md:flex 
            flex-1 
            max-w-lg 
            mx-8
          "
					>
						<div
							className="
              relative 
              w-full
            "
						>
							<Search
								className="
                absolute left-3 top-1/2 
                transform -translate-y-1/2 
                text-gray-400
              "
								size={20}
							/>
							<input
								type="text"
								placeholder="Search products..."
								className="
                  w-full 
                  pl-10 pr-4 py-2
                  border border-gray-300 
                  rounded-lg
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-500
                "
							/>
						</div>
					</div>

					{/* 
            FLEXBOX: Right Actions
            - Horizontal on all sizes
            - Gap for spacing
          */}
					<div className="flex items-center gap-2 sm:gap-4">
						{/* Search icon for mobile */}
						<button
							className="
              md:hidden 
              p-2 
              hover:bg-gray-100 
              rounded-lg
            "
						>
							<Search size={20} />
						</button>

						<button
							className="
              relative 
              p-2 
              hover:bg-gray-100 
              rounded-lg
            "
						>
							<Bell size={20} />
							<span
								className="
                absolute top-1 right-1 
                w-2 h-2 
                bg-red-500 
                rounded-full
              "
							></span>
						</button>

						<button
							className="
              flex items-center gap-2
              p-2 
              hover:bg-gray-100 
              rounded-lg
            "
						>
							<User size={20} />
							<span className="hidden sm:inline text-sm">
								Admin
							</span>
						</button>
					</div>
				</div>
			</nav>

			{/* 
        FLEXBOX: Main Layout Container
        - Mobile: Column (stacked)
        - Desktop: Row (sidebar + main)
      */}
			<div className="flex">
				{/* 
          Sidebar Component
          - Mobile: Fixed overlay
          - Desktop: Static sidebar
        */}
				<Sidebar
					isOpen={sidebarOpen}
					onClose={() => setSidebarOpen(false)}
				/>

				{/* 
          Main Content Area
          - Flexible width
          - Padding responsive
        */}
				<main
					className="
          flex-1 
          p-4 
          lg:p-6
          min-h-screen
        "
				>
					{/* 
            GRID: Stats Cards
            - Mobile: 1 column
            - Tablet: 2 columns
            - Desktop: 4 columns
          */}
					<StatsCards />

					{/* 
            GRID: Product Grid with Container Queries
          */}
					<ProductGrid />
				</main>
			</div>
		</div>
	);
}

export default App;
```

---

### Sidebar.jsx - Responsive Sidebar

```jsx
// src/components/Sidebar.jsx
import {
	LayoutDashboard,
	Package,
	ShoppingCart,
	Users,
	BarChart3,
	Settings,
} from 'lucide-react';

const menuItems = [
	{
		icon: LayoutDashboard,
		label: 'Dashboard',
		active: true,
	},
	{ icon: Package, label: 'Products' },
	{ icon: ShoppingCart, label: 'Orders' },
	{ icon: Users, label: 'Customers' },
	{ icon: BarChart3, label: 'Analytics' },
	{ icon: Settings, label: 'Settings' },
];

export default function Sidebar({ isOpen, onClose }) {
	return (
		<>
			{/* 
        Mobile Overlay
        - Only visible when sidebar open
        - Fixed positioning
      */}
			{isOpen && (
				<div
					className="
            fixed inset-0 
            bg-black/50 
            z-40 
            lg:hidden
          "
					onClick={onClose}
				/>
			)}

			{/* 
        Sidebar Panel
        RESPONSIVE BEHAVIOR:
        - Mobile: Fixed, slide from left
        - Desktop: Static, always visible
      */}
			<aside
				className={`
        fixed lg:static
        inset-y-0 left-0
        z-50
        w-64
        bg-white
        border-r border-gray-200
        transform transition-transform duration-300
        lg:transform-none
        ${
			isOpen
				? 'translate-x-0'
				: '-translate-x-full lg:translate-x-0'
		}
      `}
			>
				{/* 
          FLEXBOX: Sidebar Content
          - Column direction
          - Full height
        */}
				<div className="flex flex-col h-full">
					{/* Logo area (hidden on desktop - in nav) */}
					<div
						className="
            lg:hidden 
            p-4 
            border-b border-gray-200
          "
					>
						<h2 className="text-xl font-bold">
							ShopAdmin
						</h2>
					</div>

					{/* 
            FLEXBOX: Navigation Menu
            - Vertical stack
            - Gap between items
          */}
					<nav
						className="
            flex-1 
            p-4 
            space-y-2
          "
					>
						{menuItems.map((item, index) => (
							<button
								key={index}
								className={`
                  flex items-center gap-3
                  w-full
                  px-4 py-3
                  rounded-lg
                  transition-colors
                  ${
						item.active
							? 'bg-blue-50 text-blue-600'
							: 'text-gray-700 hover:bg-gray-100'
					}
                `}
							>
								<item.icon size={20} />
								<span className="font-medium">
									{item.label}
								</span>
							</button>
						))}
					</nav>

					{/* User info at bottom */}
					<div
						className="
            p-4 
            border-t border-gray-200
          "
					>
						<div
							className="
              flex items-center gap-3
              p-3
              rounded-lg
              bg-gray-50
            "
						>
							<div
								className="
                w-10 h-10 
                rounded-full 
                bg-blue-500 
                flex items-center justify-center
                text-white font-semibold
              "
							>
								A
							</div>
							<div className="flex-1 min-w-0">
								<p className="font-medium text-sm truncate">
									Admin User
								</p>
								<p className="text-xs text-gray-500 truncate">
									admin@shop.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
```

---

### StatsCards.jsx - Grid with Media Queries

```jsx
// src/components/StatsCards.jsx
import {
	TrendingUp,
	Package,
	DollarSign,
	Users,
} from 'lucide-react';

const stats = [
	{
		icon: DollarSign,
		label: 'Total Revenue',
		value: '$45,283',
		change: '+12%',
		positive: true,
		bgColor: 'bg-blue-100',
		iconColor: 'text-blue-600',
	},
	{
		icon: Package,
		label: 'Products Sold',
		value: '1,893',
		change: '+8%',
		positive: true,
		bgColor: 'bg-green-100',
		iconColor: 'text-green-600',
	},
	{
		icon: Users,
		label: 'New Customers',
		value: '583',
		change: '+23%',
		positive: true,
		bgColor: 'bg-purple-100',
		iconColor: 'text-purple-600',
	},
	{
		icon: TrendingUp,
		label: 'Growth Rate',
		value: '23.5%',
		change: '-3%',
		positive: false,
		bgColor: 'bg-orange-100',
		iconColor: 'text-orange-600',
	},
];

export default function StatsCards() {
	return (
		<div
			className="
      /* GRID: Responsive columns
         - Mobile: 1 column (stack)
         - Tablet: 2 columns
         - Desktop: 4 columns
      */
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-4 
      mb-6
    "
		>
			{stats.map((stat, index) => (
				<div
					key={index}
					className="
            bg-white 
            rounded-xl 
            shadow-sm 
            p-6
            hover:shadow-md
            transition-shadow
            duration-200
          "
				>
					{/* 
            FLEXBOX: Card Header
            - Space between icon and change
          */}
					<div className="flex items-center justify-between mb-4">
						<div
							className={`
              p-3 
              rounded-lg 
              ${stat.bgColor}
            `}
						>
							<stat.icon
								className={stat.iconColor}
								size={24}
							/>
						</div>
						<span
							className={`
              text-sm font-semibold
              ${
					stat.positive
						? 'text-green-600'
						: 'text-red-600'
				}
            `}
						>
							{stat.change}
						</span>
					</div>

					{/* 
            FLEXBOX: Card Content
            - Column direction
          */}
					<div className="space-y-1">
						<p className="text-gray-500 text-sm">
							{stat.label}
						</p>
						<p
							className="
              text-3xl 
              font-bold 
              text-gray-900
              /* Responsive font size */
              sm:text-2xl 
              lg:text-3xl
            "
						>
							{stat.value}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
```

---

### ProductGrid.jsx - Container Queries

```jsx
// src/components/ProductGrid.jsx
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
	{
		id: 1,
		name: 'Wireless Headphones',
		category: 'Electronics',
		price: 129.99,
		oldPrice: 159.99,
		rating: 4.5,
		image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
		badge: 'Sale',
	},
	{
		id: 2,
		name: 'Smart Watch Pro',
		category: 'Wearables',
		price: 299.99,
		rating: 4.8,
		image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
		badge: 'New',
	},
	{
		id: 3,
		name: 'Laptop Bag',
		category: 'Accessories',
		price: 49.99,
		rating: 4.3,
		image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
	},
	{
		id: 4,
		name: 'Mechanical Keyboard',
		category: 'Electronics',
		price: 159.99,
		rating: 4.7,
		image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
		badge: 'Hot',
	},
	{
		id: 5,
		name: 'USB-C Hub',
		category: 'Accessories',
		price: 39.99,
		oldPrice: 59.99,
		rating: 4.4,
		image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400',
		badge: 'Sale',
	},
	{
		id: 6,
		name: 'Wireless Mouse',
		category: 'Electronics',
		price: 79.99,
		rating: 4.6,
		image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
	},
];

export default function ProductGrid() {
	return (
		<section>
			{/* Section Header with Flexbox */}
			<div
				className="
        flex 
        items-center 
        justify-between 
        mb-6
      "
			>
				<h2
					className="
          text-2xl 
          font-bold 
          text-gray-900
        "
				>
					Products
				</h2>

				{/* Filter buttons - responsive */}
				<div
					className="
          flex 
          gap-2
          /* Hide some on mobile */
        "
				>
					<button
						className="
            px-4 py-2 
            rounded-lg 
            bg-blue-500 
            text-white
            text-sm
            hover:bg-blue-600
            transition-colors
          "
					>
						All
					</button>
					<button
						className="
            hidden sm:block
            px-4 py-2 
            rounded-lg 
            bg-white 
            text-gray-700
            text-sm
            hover:bg-gray-100
            transition-colors
          "
					>
						Electronics
					</button>
					<button
						className="
            hidden md:block
            px-4 py-2 
            rounded-lg 
            bg-white 
            text-gray-700
            text-sm
            hover:bg-gray-100
            transition-colors
          "
					>
						Accessories
					</button>
				</div>
			</div>

			{/* 
        GRID: Product Cards
        MEDIA QUERIES for columns:
        - Mobile (default): 1 column
        - Small (640px+): 2 columns
        - Medium (768px+): 2 columns (same as small)
        - Large (1024px+): 3 columns
        - XL (1280px+): 4 columns
      */}
			<div
				className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-6
      "
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</section>
	);
}
```

---

### ProductCard.jsx - Container Queries in Action

```jsx
// src/components/ProductCard.jsx
import { Heart, ShoppingCart, Eye } from 'lucide-react';

export default function ProductCard({ product }) {
	return (
		/*
      CONTAINER QUERY ENABLED:
      This card adapts based on its CONTAINER width, not viewport
      
      @container (min-width: 300px) - Compact layout
      @container (min-width: 400px) - Full layout with details
    */
		<div
			className="
        bg-white 
        rounded-xl 
        shadow-sm 
        overflow-hidden
        hover:shadow-lg
        transition-all
        duration-300
        group
        /* Enable container queries for this element */
        @container
      "
			style={{ containerType: 'inline-size' }}
		>
			{/* Image Container */}
			<div className="relative overflow-hidden aspect-square">
				<img
					src={product.image}
					alt={product.name}
					className="
            w-full 
            h-full 
            object-cover
            group-hover:scale-110
            transition-transform
            duration-300
          "
				/>

				{/* Badge */}
				{product.badge && (
					<span
						className={`
            absolute top-2 right-2
            px-2 py-1
            text-xs font-semibold
            rounded-full
            ${product.badge === 'Sale' ? 'bg-red-500' : ''}
            ${product.badge === 'New' ? 'bg-green-500' : ''}
            ${
				product.badge === 'Hot'
					? 'bg-orange-500'
					: ''
			}
            text-white
          `}
					>
						{product.badge}
					</span>
				)}

				{/* 
          FLEXBOX: Hover Actions
          - Hidden by default
          - Shown on hover
          - Absolute positioned
        */}
				<div
					className="
          absolute inset-0
          bg-black/40
          flex items-center justify-center
          gap-2
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
				>
					<button
						className="
            p-2 
            bg-white 
            rounded-full
            hover:bg-gray-100
            transition-colors
          "
					>
						<Heart
							size={20}
							className="text-gray-700"
						/>
					</button>
					<button
						className="
            p-2 
            bg-white 
            rounded-full
            hover:bg-gray-100
            transition-colors
          "
					>
						<Eye
							size={20}
							className="text-gray-700"
						/>
					</button>
				</div>
			</div>

			{/* 
        Card Content
        CONTAINER QUERIES:
        - Padding adjusts based on card width
        - Text size adjusts
        - Button changes from icon-only to full
      */}
			<div
				className="
        p-4
        /* Container query: More padding when wider */
        @[400px]:p-6
      "
			>
				{/* Category */}
				<p
					className="
          text-xs 
          text-gray-500 
          uppercase 
          mb-1
        "
				>
					{product.category}
				</p>

				{/* Product Name */}
				<h3
					className="
          font-semibold 
          text-gray-900 
          mb-2
          /* Container query: Larger text when wider */
          text-base
          @[400px]:text-lg
          /* Truncate on small containers */
          truncate
          @[400px]:whitespace-normal
        "
				>
					{product.name}
				</h3>

				{/* Rating - Hidden on small containers */}
				<div
					className="
          /* CONTAINER QUERY: Hidden when < 300px */
          hidden
          @[300px]:flex
          items-center 
          gap-1 
          mb-3
        "
				>
					<div className="flex">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className={`
                  w-4 h-4 
                  ${
						i < Math.floor(product.rating)
							? 'text-yellow-400'
							: 'text-gray-300'
					} 
                  fill-current
                `}
								viewBox="0 0 20 20"
							>
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
							</svg>
						))}
					</div>
					<span className="text-sm text-gray-600 ml-1">
						{product.rating}
					</span>
				</div>

				{/* 
          FLEXBOX: Price and Button
          - Space between
          - Align items center
        */}
				<div
					className="
          flex 
          items-center 
          justify-between
        "
				>
					<div>
						<p
							className="
              text-xl 
              font-bold 
              text-gray-900
              /* Container query: Larger price */
              @[400px]:text-2xl
            "
						>
							${product.price}
						</p>
						{product.oldPrice && (
							<p
								className="
                text-sm 
                text-gray-500 
                line-through
              "
							>
								${product.oldPrice}
							</p>
						)}
					</div>

					{/* 
            Add to Cart Button
            CONTAINER QUERY:
            - Icon only on narrow containers
            - Full button on wide containers
          */}
					<button
						className="
            flex items-center gap-2
            bg-blue-500 
            hover:bg-blue-700
            text-white 
            font-semibold
            px-3 py-2
            rounded-lg
            transition-colors
            /* Container query: More padding when wider */
            @[400px]:px-4 
            @[400px]:py-2.5
          "
					>
						<ShoppingCart size={18} />
						{/* Hide text on small containers */}
						<span
							className="
              hidden
              @[350px]:inline
            "
						>
							Add
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
```

---

## 🎓 Key Learning Points - Exercise 1

### 1. **Flexbox Usage**

```jsx
// Navigation bar with space-between
<div className="flex items-center justify-between px-4 py-3">

// Action buttons with gap
<div className="flex items-center gap-4">

// Sidebar menu - vertical stack
<nav className="flex flex-col space-y-2">
```

### 2. **Grid with Media Queries**

```jsx
// Responsive columns
<div className="
  grid
  grid-cols-1        /* Mobile: 1 column */
  sm:grid-cols-2     /* Tablet: 2 columns */
  lg:grid-cols-4     /* Desktop: 4 columns */
  gap-4
">
```

### 3. **Container Queries**

```jsx
// Enable on parent
<div style={{ containerType: 'inline-size' }}>

  // Query in children
  <h3 className="
    text-base
    @[400px]:text-lg    /* When container ≥ 400px */
  ">

  <button className="
    hidden
    @[350px]:inline     /* Show when container ≥ 350px */
  ">
```

### 4. **Responsive States**

```jsx
// Hide/show at breakpoints
<div className="
  block              /* Show on mobile */
  lg:hidden          /* Hide on desktop */
">

// Transform based on viewport
<aside className="
  -translate-x-full  /* Hidden off-screen */
  lg:translate-x-0   /* Visible on desktop */
">
```

---

## 🚀 Testing Checklist

**Responsive Breakpoints:**

-   [ ] Test at 375px (iPhone SE)
-   [ ] Test at 640px (Small tablet)
-   [ ] Test at 768px (iPad portrait)
-   [ ] Test at 1024px (Desktop)
-   [ ] Test at 1440px (Large desktop)

**Container Queries:**

-   [ ] Product cards in narrow sidebar (< 300px)
-   [ ] Product cards in 2-column grid (~350px each)
-   [ ] Product cards in single column (full width)
-   [ ] Stats cards adapt in different layouts

**Interactions:**

-   [ ] Sidebar toggle works on mobile
-   [ ] Hover states work on desktop
-   [ ] Touch targets ≥ 44px on mobile
-   [ ] Navigation keyboard accessible

---

## 🏁 Conclusion

This exercise provides hands-on experience with Tailwind CSS 4's advanced responsive design features, including Flexbox, Grid, Media Queries, and Container Queries. By building a functional e-commerce dashboard, you will enhance your skills in creating adaptable and user-friendly interfaces.
