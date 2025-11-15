# Netflix Clone - Responsive Web App

A fully responsive Netflix clone built with Next.js 16, React 19, and Tailwind CSS. This project replicates the Netflix movie streaming interface with a professional design and smooth user experience.

## 🎬 Features

### ✨ Core Features
- **Responsive Hero Banner** - Eye-catching hero section with featured content
- **Movie Grid Layout** - Beautiful card-based layout for movies and shows
- **Horizontal Scrolling** - Smooth horizontal scroll with navigation arrows
- **Navigation Bar** - Fixed header with logo and navigation links
- **Footer** - Multi-column footer with company, help, legal, and account links
- **Hover Effects** - Interactive movie cards with overlay and play button
- **Lazy Loading** - Images load on demand for better performance
- **Dark Theme** - Netflix-inspired dark theme with red accents

### 🎨 Design Features
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Mobile-First** - Optimized for all screen sizes
- **Smooth Animations** - Transitions and hover effects throughout
- **High-Quality Images** - Professional movie poster images from Unsplash
- **Accessibility** - Semantic HTML and ARIA labels

### 📱 Responsive Breakpoints
- **Desktop**: Full grid layout with large cards
- **Tablet**: Adjusted grid and spacing (768px)
- **Mobile**: Optimized 3-column grid (480px)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd netflix_clone1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page with content rows
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx          # Navigation and hero section
│   ├── ContentRow.tsx      # Reusable movie/show row component
│   ├── MovieCard.tsx       # Individual movie card component
│   └── Footer.tsx          # Footer component
└── data/
    └── movies.ts           # Movie data and collections
```

## 🎯 Movie Collections

The app includes 6 movie collections:

1. **🔥 Trending Now** - Currently popular shows and movies
2. **⭐ Top Rated** - Highest rated content
3. **💥 Action Movies** - Action-packed films
4. **😂 Comedy Shows** - Funny series and movies
5. **❤️ Romantic Films** - Love stories and romances
6. **🎬 Documentaries** - Documentary series

Each collection contains 8 movies/shows with high-quality poster images.

## 🎨 Key Styling

### Colors
- **Background**: `#0a0a0a` (Netflix Dark)
- **Accent**: `#e50914` (Netflix Red)
- **Text**: `#ffffff` (White)

### Responsive Grid
- **Desktop**: Grid of 200px cards
- **Tablet**: Grid of 150px cards
- **Mobile**: 3-column grid (120px cards)

## 🔧 Build for Production

```bash
npm run build
npm run start
```

## 📸 Image Sources

All images are sourced from [Unsplash](https://unsplash.com/), a free high-quality image platform. You can replace any image URL with your own or use different Unsplash images.

## 🎮 Interactive Features

- **Play Button**: Click "▶ Play" on any movie card to trigger an action
- **More Info Button**: Additional information button on the hero
- **Scroll Navigation**: Left/right arrow buttons for horizontal scrolling
- **User Profile**: Clickable profile avatar in navigation

## 💻 Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **CSS Grid & Flexbox** - Modern layout techniques

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- Lazy loading for images
- Optimized CSS with Tailwind
- Smooth scroll behavior
- Efficient re-rendering with React 19

## 📝 Customization

### Adding New Movies

Edit `src/data/movies.ts` to add new movie collections:

```typescript
export const movieCollections = {
  yourCollection: [
    { id: 1, title: "Movie Title", poster: "image-url" },
    // ... more movies
  ]
};
```

### Changing Colors

Edit `globals.css` to modify the color scheme:

```css
:root {
  --netflix-red: #e50914;
  --netflix-dark: #0a0a0a;
  /* ... other colors */
}
```

### Adjusting Layout

Modify the responsive breakpoints in `globals.css` or adjust grid properties in `ContentRow.tsx`.

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Images Not Loading
- Check internet connection
- Verify Unsplash URLs are accessible
- Try replacing with different Unsplash images

### Styling Issues
- Clear Next.js cache: `rm -r .next`
- Rebuild: `npm run dev`

## 📄 License

This project is for educational purposes only.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📞 Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy Coding! 🎬🍿**
