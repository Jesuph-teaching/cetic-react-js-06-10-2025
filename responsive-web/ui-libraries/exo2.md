---

## 🎯 EXERCISE 2: Blog Magazine Layout

### Objective
Build a responsive blog/magazine layout demonstrating:
- **Flexbox**: Article headers, author info, tag lists
- **Grid**: Article grid, featured sections, sidebar layout
- **Media Queries**: Breakpoint-based layout changes
- **Container Queries**: Article cards that adapt to different widths

### Duration
120 minutes

---

## 📋 Requirements Overview

### Layout Breakpoints

**Mobile (< 768px):**
- Single column
- Stacked articles
- Full-width images
- Simplified navigation

**Tablet (768px - 1024px):**
- 2-column article grid
- Sidebar below content
- Medium images

**Desktop (≥ 1024px):**
- 3-column layout (main + sidebar)
- Featured article spanning 2 columns
- Large hero images

---

## 💻 Complete Code Solution

### BlogApp.jsx - Main Layout

```jsx
// src/BlogApp.jsx
import { useState } from 'react';
import { 
  Menu, Search, User, BookOpen, 
  TrendingUp, Clock, Eye 
} from 'lucide-react';
import ArticleGrid from './components/ArticleGrid';
import Sidebar from './components/BlogSidebar';
import HeroSection from './components/HeroSection';

export default function BlogApp() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 
        FLEXBOX: Top Navigation
        - Responsive spacing
        - Items alignment
      */}
      <nav className="
        bg-white 
        border-b border-gray-200
        sticky top-0 z-50
        shadow-sm
      ">
        <div className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
        ">
          <div className="
            flex 
            items-center 
            justify-between 
            h-16
          ">
            {/* Left: Logo + Nav Links */}
            <div className="
              flex 
              items-center 
              gap-8
            ">
              <h1 className="
                text-2xl 
                font-bold 
                bg-gradient-to-r 
                from-purple-600 
                to-blue-600
                bg-clip-text 
                text-transparent
              ">
                TechBlog
              </h1>
              
              {/* 
                FLEXBOX: Desktop Navigation
                - Hidden on mobile
                - Horizontal gap
              */}
              <div className="
                hidden 
                md:flex 
                items-center 
                gap-6
              ">
                <a href="#" className="
                  text-gray-700 
                  hover:text-purple-600
                  font-medium
                  transition-colors
                ">
                  Home
                </a>
                <a href="#" className="
                  text-gray-700 
                  hover:text-purple-600
                  font-medium
                  transition-colors
                ">
                  Technology
                </a>
                <a href="#" className="
                  text-gray-700 
                  hover:text-purple-600
                  font-medium
                  transition-colors
                ">
                  Design
                </a>
                <a href="#" className="
                  text-gray-700 
                  hover:text-purple-600
                  font-medium
                  transition-colors
                ">
                  Development
                </a>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="
              flex 
              items-center 
              gap-4
            ">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="
                  p-2 
                  hover:bg-gray-100 
                  rounded-lg
                  transition-colors
                "
              >
                <Search size={20} />
              </button>
              
              <button className="
                hidden sm:flex
                items-center gap-2
                px-4 py-2
                bg-purple-600
                text-white
                rounded-lg
                hover:bg-purple-700
                transition-colors
              ">
                <User size={18} />
                <span className="hidden md:inline">Sign In</span>
              </button>
              
              <button className="
                md:hidden
                p-2
                hover:bg-gray-100
                rounded-lg
              ">
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* 
            FLEXBOX: Search Bar (expandable)
            - Full width
            - Conditional rendering
          */}
          {searchOpen && (
            <div className="py-4">
              <input
                type="search"
                placeholder="Search articles..."
                className="
                  w-full
                  px-4 py-2
                  border border-gray-300
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-purple-500
                "
                autoFocus
              />
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* 
        GRID: Main Content + Sidebar
        - Mobile: Stacked (1 column)
        - Desktop: Sidebar layout (main + aside)
      */}
      <div className="
        max-w-7xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-8
      ">
        <div className="
          grid 
          grid-cols-1 
          lg:grid-cols-3 
          gap-8
        ">
          {/* Main Content (2/3 on desktop) */}
          <div className="lg:col-span-2">
            <ArticleGrid />
          </div>

          {/* Sidebar (1/3 on desktop) */}
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
```

---

### HeroSection.jsx - Flexbox Hero

```jsx
// src/components/HeroSection.jsx
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="
      bg-gradient-to-br 
      from-purple-600 
      to-blue-600 
      text-white
    ">
      <div className="
        max-w-7xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-12 lg:py-20
      ">
        {/* 
          GRID: Hero Layout
          - Mobile: Stacked
          - Desktop: Image + Content side-by-side
        */}
        <div className="
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          gap-8 lg:gap-12 
          items-center
        ">
          {/* Content */}
          <div className="
            space-y-6
            /* Order: Content first on mobile */
            order-2 lg:order-1
          ">
            <span className="
              inline-block
              px-3 py-1
              bg-white/20
              rounded-full
              text-sm
              font-semibold
              backdrop-blur-sm
            ">
              Featured Article
            </span>
            
            <h2 className="
              text-4xl 
              sm:text-5xl 
              lg:text-6xl 
              font-bold 
              leading-tight
            ">
              The Future of Web Development in 2025
            </h2>
            
            <p className="
              text-lg 
              sm:text-xl 
              text-white/90
            ">
              Exploring the latest trends, tools, and techniques that are shaping modern web development.
            </p>

            {/* 
              FLEXBOX: Author Info
              - Horizontal layout
              - Gap spacing
            */}
            <div className="
              flex 
              flex-wrap
              items-center 
              gap-4 
              text-white/80
            ">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Nov 18, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>8 min read</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="
              flex items-center gap-2
              px-6 py-3
              bg-white
              text-purple-600
              rounded-lg
              font-semibold
              hover:bg-gray-100
              transition-colors
              shadow-lg
            ">
              Read Article
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Image */}
          <div className="
            /* Order: Image first on mobile */
            order-1 lg:order-2
          ">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              alt="Hero"
              className="
                w-full 
                h-64 sm:h-80 lg:h-96
                object-cover 
                rounded-2xl 
                shadow-2xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### ArticleGrid.jsx - Grid with Container Queries

```jsx
// src/components/ArticleGrid.jsx
import ArticleCard from './ArticleCard';

const articles = [
  {
    id: 1,
    title: 'Getting Started with React Server Components',
    excerpt: 'Learn how React Server Components are changing the way we build web applications.',
    category: 'React',
    author: 'Jane Smith',
    date: 'Nov 15, 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    featured: true,
  },
  {
    id: 2,
    title: 'CSS Container Queries: A Complete Guide',
    excerpt: 'Master the new responsive design paradigm with container queries.',
    category: 'CSS',
    author: 'Mike Johnson',
    date: 'Nov 14, 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400',
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for 2025',
    excerpt: 'Essential patterns and practices for writing better TypeScript code.',
    category: 'TypeScript',
    author: 'Sarah Lee',
    date: 'Nov 13, 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
  },
  {
    id: 4,
    title: 'Building Accessible Web Applications',
    excerpt: 'A practical guide to making your websites accessible to everyone.',
    category: 'Accessibility',
    author: 'David Chen',
    date: 'Nov 12, 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400',
  },
  {
    id: 5,
    title: 'State Management Patterns in Modern React',
    excerpt: 'Comparing different approaches to managing state in React applications.',
    category: 'React',
    author: 'Emily Brown',
    date: 'Nov 11, 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
  },
  {
    id: 6,
    title: 'Performance Optimization Techniques',
    excerpt: 'Speed up your web applications with these proven strategies.',
    category: 'Performance',
    author: 'Tom Wilson',
    date: 'Nov 10, 2025',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
  },
];

export default function ArticleGrid() {
  // Separate featured article
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="
        flex 
        items-center 
        justify-between
      ">
        <h2 className="
          text-3xl 
          font-bold 
          text-gray-900
        ">
          Latest Articles
        </h2>
        
        {/* 
          FLEXBOX: Filter Buttons
          - Responsive gap
          - Hide some on mobile
        */}
        <div className="
          flex 
          gap-2
        ">
          <button className="
            px-4 py-2
            bg-purple-600
            text-white
            rounded-lg
            text-sm
            font-medium
          ">
            All
          </button>
          <button className="
            hidden sm:block
            px-4 py-2
            bg-gray-200
            text-gray-700
            rounded-lg
            text-sm
            font-medium
            hover:bg-gray-300
          ">
            React
          </button>
          <button className="
            hidden md:block
            px-4 py-2
            bg-gray-200
            text-gray-700
            rounded-lg
            text-sm
            font-medium
            hover:bg-gray-300
          ">
            CSS
          </button>
        </div>
      </div>

      {/* Featured Article - Full Width */}
      {featuredArticle && (
        <ArticleCard article={featuredArticle} featured />
      )}

      {/* 
        GRID: Regular Articles
        MEDIA QUERIES:
        - Mobile: 1 column
        - Tablet: 2 columns
        - Desktop (in main area): 2 columns
        
        Note: When sidebar present, this is already
        in a narrower container, so max 2 cols works well
      */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        gap-6
      ">
        {regularArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
```

---

### ArticleCard.jsx - Container Queries Magic

```jsx
// src/components/ArticleCard.jsx
import { Calendar, Clock, User, Bookmark, Share2 } from 'lucide-react';

export default function ArticleCard({ article, featured = false }) {
  if (featured) {
    return (
      /* 
        FEATURED ARTICLE LAYOUT
        GRID: Image + Content side-by-side on desktop
      */
      <article 
        className="
          bg-white 
          rounded-2xl 
          shadow-lg 
          overflow-hidden
          hover:shadow-xl
          transition-shadow
          /* Enable container queries */
          @container
        "
        style={{ containerType: 'inline-size' }}
      >
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2
        ">
          {/* Image */}
          <div className="relative h-64 md:h-auto">
            <img
              src={article.image}
              alt={article.title}
              className="
                w-full 
                h-full 
                object-cover
              "
            />
            <span className="
              absolute top-4 left-4
              px-3 py-1
              bg-purple-600
              text-white
              text-xs
              font-semibold
              rounded-full
            ">
              Featured
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col">
            <span className="
              inline-block
              self-start
              px-3 py-1
              bg-purple-100
              text-purple-600
              text-xs
              font-semibold
              rounded-full
              mb-3
            ">
              {article.category}
            </span>

            <h3 className="
              text-2xl 
              md:text-3xl 
              font-bold 
              text-gray-900 
              mb-3
            ">
              {article.title}
            </h3>

            <p className="
              text-gray-600 
              mb-4 
              flex-grow
            ">
              {article.excerpt}
            </p>

            {/* 
              FLEXBOX: Meta Info
              - Wrap on small screens
            */}
            <div className="
              flex 
              flex-wrap 
              items-center 
              gap-4 
              text-sm 
              text-gray-500
              mb-4
            ">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="
              flex 
              items-center 
              gap-3
            ">
              <button className="
                flex-1
                px-4 py-2
                bg-purple-600
                text-white
                rounded-lg
                font-semibold
                hover:bg-purple-700
                transition-colors
              ">
                Read More
              </button>
              <button className="
                p-2
                border border-gray-300
                rounded-lg
                hover:bg-gray-50
              ">
                <Bookmark size={20} />
              </button>
              <button className="
                p-2
                border border-gray-300
                rounded-lg
                hover:bg-gray-50
              ">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    /* 
      REGULAR ARTICLE CARD
      CONTAINER QUERY: Adapts layout based on container width
    */
    <article 
      className="
        bg-white 
        rounded-xl 
        shadow-md 
        overflow-hidden
        hover:shadow-lg
        transition-all
        duration-300
        group
        /* Enable container queries */
        @container
      "
      style={{ containerType: 'inline-size' }}
    >
      {/* Image */}
      <div className="
        relative 
        overflow-hidden 
        /* CONTAINER QUERY: Height adjusts */
        h-48
        @[400px]:h-56
      ">
        <img
          src={article.image}
          alt={article.title}
          className="
            w-full 
            h-full 
            object-cover
            group-hover:scale-110
            transition-transform
            duration-300
          "
        />
        <span className="
          absolute top-3 left-3
          px-2 py-1
          bg-white/90
          backdrop-blur-sm
          text-purple-600
          text-xs
          font-semibold
          rounded-full
        ">
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="
        p-4
        /* CONTAINER QUERY: More padding when wider */
        @[400px]:p-6
      ">
        <h3 className="
          font-bold 
          text-gray-900 
          mb-2
          /* CONTAINER QUERY: Font size adjusts */
          text-lg
          @[400px]:text-xl
          line-clamp-2
        ">
          {article.title}
        </h3>

        <p className="
          text-gray-600 
          mb-4
          /* CONTAINER QUERY: Show more text when wider */
          text-sm
          @[400px]:text-base
          line-clamp-2
          @[400px]:line-clamp-3
        ">
          {article.excerpt}
        </p>

        {/* 
          FLEXBOX: Meta Info
          CONTAINER QUERY: Layout changes
        */}
        <div className="
          /* Stack vertically on narrow */
          flex flex-col gap-2
          /* Horizontal when wider */
          @[350px]:flex-row 
          @[350px]:items-center 
          @[350px]:justify-between
          text-sm text-gray-500
          mb-4
        ">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span className="
              /* Truncate author name */
              truncate
            ">
              {article.author}
            </span>
          </div>
          <div className="
            flex items-center gap-3
          ">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span className="
                /* Hide date on very narrow */
                hidden
                @[300px]:inline
              ">
                {article.date}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* 
          FLEXBOX: Action Buttons
          CONTAINER QUERY: Button size/text
        */}
        <div className="
          flex 
          items-center 
          gap-2
        ">
          <button className="
            flex-1
            px-3 py-2
            bg-purple-600
            text-white
            rounded-lg
            font-medium
            hover:bg-purple-700
            transition-colors
            /* CONTAINER QUERY: Padding */
            @[400px]:px-4 
            @[400px]:py-2.5
            text-sm
            @[400px]:text-base
          ">
            <span className="
              /* Show full text only when wide enough */
              hidden
              @[350px]:inline
            ">
              Read Article
            </span>
            <span className="
              @[350px]:hidden
            ">
              Read
            </span>
          </button>
          <button className="
            p-2
            border border-gray-300
            rounded-lg
            hover:bg-gray-50
            transition-colors
          ">
            <Bookmark size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
```

---

### BlogSidebar.jsx - Sidebar Components

```jsx
// src/components/BlogSidebar.jsx
import { TrendingUp, Tag, User } from 'lucide-react';

const trendingPosts = [
  { id: 1, title: 'How to Master Tailwind CSS', views: '12.5K' },
  { id: 2, title: 'React 19: What\'s New?', views: '10.2K' },
  { id: 3, title: 'Web Performance Tips', views: '8.7K' },
  { id: 4, title: 'TypeScript Advanced Patterns', views: '7.3K' },
];

const popularTags = [
  'React', 'JavaScript', 'CSS', 'TypeScript', 
  'Web Design', 'Performance', 'Accessibility', 'Node.js'
];

export default function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Newsletter Card */}
      <div className="
        bg-gradient-to-br 
        from-purple-600 
        to-blue-600
        text-white 
        rounded-2xl 
        p-6
        shadow-lg
      ">
        <h3 className="
          text-2xl 
          font-bold 
          mb-2
        ">
          Stay Updated
        </h3>
        <p className="
          text-white/90 
          mb-4
        ">
          Get the latest articles delivered to your inbox weekly.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="
            w-full
            px-4 py-2
            rounded-lg
            text-gray-900
            mb-3
            focus:outline-none
            focus:ring-2
            focus:ring-white
          "
        />
        <button className="
          w-full
          px-4 py-2
          bg-white
          text-purple-600
          rounded-lg
          font-semibold
          hover:bg-gray-100
          transition-colors
        ">
          Subscribe
        </button>
      </div>

      {/* Trending Posts */}
      <div className="
        bg-white 
        rounded-xl 
        shadow-md 
        p-6
      ">
        <div className="
          flex 
          items-center 
          gap-2 
          mb-4
        ">
          <TrendingUp className="text-purple-600" size={24} />
          <h3 className="
            text-xl 
            font-bold 
            text-gray-900
          ">
            Trending Posts
          </h3>
        </div>

        {/* 
          FLEXBOX: Trending List
          - Vertical stack with dividers
        */}
        <div className="space-y-4">
          {trendingPosts.map((post, index) => (
            <div key={post.id}>
              <a href="#" className="
                flex 
                items-start 
                gap-3
                group
              ">
                <span className="
                  flex-shrink-0
                  w-6 h-6
                  flex items-center justify-center
                  bg-purple-100
                  text-purple-600
                  rounded-full
                  text-sm
                  font-bold
                  group-hover:bg-purple-600
                  group-hover:text-white
                  transition-colors
                ">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="
                    text-gray-900 
                    font-medium
                    group-hover:text-purple-600
                    transition-colors
                    line-clamp-2
                  ">
                    {post.title}
                  </p>
                  <p className="
                    text-sm 
                    text-gray-500 
                    mt-1
                  ">
                    {post.views} views
                  </p>
                </div>
              </a>
              {index < trendingPosts.length - 1 && (
                <div className="
                  h-px 
                  bg-gray-200 
                  mt-4
                " />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="
        bg-white 
        rounded-xl 
        shadow-md 
        p-6
      ">
        <div className="
          flex 
          items-center 
          gap-2 
          mb-4
        ">
          <Tag className="text-purple-600" size={24} />
          <h3 className="
            text-xl 
            font-bold 
            text-gray-900
          ">
            Popular Tags
          </h3>
        </div>

        {/* 
          FLEXBOX: Tag Cloud
          - Wrap tags
          - Gap spacing
        */}
        <div className="
          flex 
          flex-wrap 
          gap-2
        ">
          {popularTags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="
                px-3 py-1.5
                bg-gray-100
                text-gray-700
                rounded-full
                text-sm
                font-medium
                hover:bg-purple-100
                hover:text-purple-600
                transition-colors
              "
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="
        bg-white 
        rounded-xl 
        shadow-md 
        p-6
      ">
        <div className="
          flex 
          items-center 
          gap-2 
          mb-4
        ">
          <User className="text-purple-600" size={24} />
          <h3 className="
            text-xl 
            font-bold 
            text-gray-900
          ">
            About
          </h3>
        </div>
        <p className="
          text-gray-600 
          leading-relaxed
        ">
          TechBlog is your go-to resource for web development tutorials, tips, and industry insights. Join our community of developers!
        </p>
      </div>
    </div>
  );
}
```

---

## 🎓 Key Learning Points - Exercise 2

### 1. **Flexbox for Navigation & Lists**
```jsx
// Horizontal nav with gap
<div className="flex items-center gap-6">

// Vertical list with dividers
<div className="space-y-4">

// Wrap tags flexibly
<div className="flex flex-wrap gap-2">
```

### 2. **Grid for Layout Structure**
```jsx
// Main + Sidebar layout
<div className="
  grid 
  grid-cols-1        /* Mobile: stack */
  lg:grid-cols-3     /* Desktop: 3 columns */
  gap-8
">
  <div className="lg:col-span-2">Main</div>
  <aside>Sidebar</aside>
</div>
```

### 3. **Container Queries for Cards**
```jsx
// Card adapts to container width
<article 
  className="@container"
  style={{ containerType: 'inline-size' }}
>
  <h3 className="
    text-lg
    @[400px]:text-xl     /* Larger when container ≥ 400px */
  ">
  
  <p className="
    line-clamp-2
    @[400px]:line-clamp-3  /* Show more lines */
  ">
```

### 4. **Responsive Ordering**
```jsx
// Change visual order at breakpoints
<div className="
  order-2        /* Second on mobile */
  lg:order-1     /* First on desktop */
">
```

---

## 🚀 Testing Checklist - Exercise 2

**Responsive Layouts:**
- [ ] Navigation collapses on mobile
- [ ] Hero stacks on mobile, side-by-side on desktop# Tailwind 4 Responsive Exercises in React

---

## 🎯 EXERCISE 1: E-Commerce Product Dashboard

### Objective
Build a responsive e-commerce dashboard that demonstrates:
- **Flexbox**: Navigation, stat cards, action buttons
- **Grid**: Product grid, analytics widgets
- **Media Queries**: Layout changes at breakpoints
- **Container Queries**: Cards that adapt to their container size

### Duration
120 minutes

---

## 📋 Requirements Overview

### Layout Breakpoints

**Mobile (< 640px):**
- Hamburger menu
- Single column grid
- Stacked stats
- Simplified cards

**Tablet (640px - 1024px):**
- Horizontal navigation
- 2-column grid
- Stats in row
- Medium cards

**Desktop (≥ 1024px):**
- Full sidebar + main layout
- 3-4 column grid
- Stats dashboard
- Detailed cards

### Container Query Areas
- Product cards adapt based on parent width
- Sidebar widgets change layout
- Stats cards show/hide details

---

## 💻 Complete Code Solution

### 1. Project Setup

```bash
# Create React + Vite project
npm create vite@latest ecommerce-dashboard -- --template react

cd ecommerce-dashboard

# Install Tailwind CSS 4 (beta as of 2025)
npm install tailwindcss@next @tailwindcss/postcss@next

# Install dependencies
npm install lucide-react
```

### 2. Tailwind Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}
```

```css
/* src/index.css */
@import "tailwindcss";

/* Enable container queries globally */
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
  Menu, X, Search, Bell, User, ShoppingCart, 
  TrendingUp, Package, DollarSign, Users 
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
      <nav className="
        bg-white 
        border-b border-gray-200 
        sticky top-0 z-50
      ">
        <div className="
          flex items-center justify-between 
          px-4 py-3 
          lg:px-6
        ">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger - Hidden on Desktop */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="
                lg:hidden 
                p-2 
                hover:bg-gray-100 
                rounded-lg
                transition-colors
              "
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <h1 className="
              text-xl font-bold text-gray-900
              sm:text-2xl
            ">
              ShopAdmin
            </h1>
          </div>

          {/* 
            FLEXBOX: Center Search (Hidden on Mobile)
            - Grows to fill available space
          */}
          <div className="
            hidden md:flex 
            flex-1 
            max-w-lg 
            mx-8
          ">
            <div className="
              relative 
              w-full
            ">
              <Search className="
                absolute left-3 top-1/2 
                transform -translate-y-1/2 
                text-gray-400
              " size={20} />
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
            <button className="
              md:hidden 
              p-2 
              hover:bg-gray-100 
              rounded-lg
            ">
              <Search size={20} />
            </button>
            
            <button className="
              relative 
              p-2 
              hover:bg-gray-100 
              rounded-lg
            ">
              <Bell size={20} />
              <span className="
                absolute top-1 right-1 
                w-2 h-2 
                bg-red-500 
                rounded-full
              "></span>
            </button>
            
            <button className="
              flex items-center gap-2
              p-2 
              hover:bg-gray-100 
              rounded-lg
            ">
              <User size={20} />
              <span className="hidden sm:inline text-sm">Admin</span>
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
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* 
          Main Content Area
          - Flexible width
          - Padding responsive
        */}
        <main className="
          flex-1 
          p-4 
          lg:p-6
          min-h-screen
        ">
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
  LayoutDashboard, Package, ShoppingCart, 
  Users, BarChart3, Settings 
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
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
      <aside className={`
        fixed lg:static
        inset-y-0 left-0
        z-50
        w-64
        bg-white
        border-r border-gray-200
        transform transition-transform duration-300
        lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* 
          FLEXBOX: Sidebar Content
          - Column direction
          - Full height
        */}
        <div className="flex flex-col h-full">
          {/* Logo area (hidden on desktop - in nav) */}
          <div className="
            lg:hidden 
            p-4 
            border-b border-gray-200
          ">
            <h2 className="text-xl font-bold">ShopAdmin</h2>
          </div>

          {/* 
            FLEXBOX: Navigation Menu
            - Vertical stack
            - Gap between items
          */}
          <nav className="
            flex-1 
            p-4 
            space-y-2
          ">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`
                  flex items-center gap-3
                  w-full
                  px-4 py-3
                  rounded-lg
                  transition-colors
                  ${item.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User info at bottom */}
          <div className="
            p-4 
            border-t border-gray-200
          ">
            <div className="
              flex items-center gap-3
              p-3
              rounded-lg
              bg-gray-50
            ">
              <div className="
                w-10 h-10 
                rounded-full 
                bg-blue-500 
                flex items-center justify-center
                text-white font-semibold
              ">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@shop.com</p>
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
import { TrendingUp, Package, DollarSign, Users } from 'lucide-react';

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
    <div className="
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
    ">
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
            <div className={`
              p-3 
              rounded-lg 
              ${stat.bgColor}
            `}>
              <stat.icon className={stat.iconColor} size={24} />
            </div>
            <span className={`
              text-sm font-semibold
              ${stat.positive ? 'text-green-600' : 'text-red-600'}
            `}>
              {stat.change}
            </span>
          </div>

          {/* 
            FLEXBOX: Card Content
            - Column direction
          */}
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <p className="
              text-3xl 
              font-bold 
              text-gray-900
              /* Responsive font size */
              sm:text-2xl 
              lg:text-3xl
            ">
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
      <div className="
        flex 
        items-center 
        justify-between 
        mb-6
      ">
        <h2 className="
          text-2xl 
          font-bold 
          text-gray-900
        ">
          Products
        </h2>
        
        {/* Filter buttons - responsive */}
        <div className="
          flex 
          gap-2
          /* Hide some on mobile */
        ">
          <button className="
            px-4 py-2 
            rounded-lg 
            bg-blue-500 
            text-white
            text-sm
            hover:bg-blue-600
            transition-colors
          ">
            All
          </button>
          <button className="
            hidden sm:block
            px-4 py-2 
            rounded-lg 
            bg-white 
            text-gray-700
            text-sm
            hover:bg-gray-100
            transition-colors
          ">
            Electronics
          </button>
          <button className="
            hidden md:block
            px-4 py-2 
            rounded-lg 
            bg-white 
            text-gray-700
            text-sm
            hover:bg-gray-100
            transition-colors
          ">
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
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-6
      ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
          <span className={`
            absolute top-2 right-2
            px-2 py-1
            text-xs font-semibold
            rounded-full
            ${product.badge === 'Sale' ? 'bg-red-500' : ''}
            ${product.badge === 'New' ? 'bg-green-500' : ''}
            ${product.badge === 'Hot' ? 'bg-orange-500' : ''}
            text-white
          `}>
            {product.badge}
          </span>
        )}

        {/* 
          FLEXBOX: Hover Actions
          - Hidden by default
          - Shown on hover
          - Absolute positioned
        */}
        <div className="
          absolute inset-0
          bg-black/40
          flex items-center justify-center
          gap-2
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        ">
          <button className="
            p-2 
            bg-white 
            rounded-full
            hover:bg-gray-100
            transition-colors
          ">
            <Heart size={20} className="text-gray-700" />
          </button>
          <button className="
            p-2 
            bg-white 
            rounded-full
            hover:bg-gray-100
            transition-colors
          ">
            <Eye size={20} className="text-gray-700" />
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
      <div className="
        p-4
        /* Container query: More padding when wider */
        @[400px]:p-6
      ">
        {/* Category */}
        <p className="
          text-xs 
          text-gray-500 
          uppercase 
          mb-1
        ">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="
          font-semibold 
          text-gray-900 
          mb-2
          /* Container query: Larger text when wider */
          text-base
          @[400px]:text-lg
          /* Truncate on small containers */
          truncate
          @[400px]:whitespace-normal
        ">
          {product.name}
        </h3>

        {/* Rating - Hidden on small containers */}
        <div className="
          /* CONTAINER QUERY: Hidden when < 300px */
          hidden
          @[300px]:flex
          items-center 
          gap-1 
          mb-3
        ">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`
                  w-4 h-4 
                  ${i < Math.floor(product.rating) 
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
        <div className="
          flex 
          items-center 
          justify-between
        ">
          <div>
            <p className="
              text-xl 
              font-bold 
              text-gray-900
              /* Container query: Larger price */
              @[400px]:text-2xl
            ">
              ${product.price}
            </p>
            {product.oldPrice && (
              <p className="
                text-sm 
                text-gray-500 
                line-through
              ">
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
          <button className="
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
          ">
            <ShoppingCart size={18} />
            {/* Hide text on small containers */}
            <span className="
              hidden
              @[350px]:inline
            ">
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
- [ ] Test at 375px (iPhone SE)
- [ ] Test at 640px (Small tablet)
- [ ] Test at 768px (iPad portrait)
- [ ] Test at 1024px (Desktop)
- [ ] Test at 1440px (Large desktop)

**Container Queries:**
- [ ] Product cards in narrow sidebar (< 300px)
- [ ] Product cards in 2-column grid (~350px each)
- [ ] Product cards in single column (full width)
- [ ] Stats cards adapt in different layouts

**Interactions:**
- [ ] Sidebar toggle works on mobile
- [ ] Hover states work on desktop
- [ ] Touch targets ≥ 44px on mobile
- [ ] Navigation keyboard accessible

