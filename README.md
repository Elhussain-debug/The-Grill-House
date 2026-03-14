# The Grill House - Restaurant Website

A complete, responsive restaurant website for The Grill House, a Nigerian grill and international cuisine restaurant in Kaduna, Nigeria.

## 📁 Project Structure

```
the grill house/
├── index.html      # Main HTML file
├── styles.css      # All styling (dark ember theme)
├── script.js       # JavaScript functionality
└── images/         # Folder for any images you want to add
```

## 🚀 Getting Started

Simply open `index.html` in any web browser. No build process required!

### Option 1: Open Directly
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

### Option 2: Use a Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

## 🎨 Design Features

- **Dark Ember Theme**: Deep charcoal backgrounds with ember orange and smoky gold accents
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Animations**: Smooth scroll-triggered fade-in effects
- **Responsive**: Mobile-first design that works on all devices
- **WhatsApp Integration**: Reservation form sends directly to restaurant WhatsApp

## 📱 Pages & Sections

1. **Hero** - Full-screen with restaurant branding and CTAs
2. **Services Bar** - Quick feature highlights
3. **About** - Restaurant story and features
4. **Menu Highlights** - 6 signature dishes with ordering
5. **Reviews** - Customer testimonials with Google rating
6. **Reservation** - Booking form + map + contact info
7. **Footer** - Quick links, contact, and social media

## 🔧 Customization

### Change Colors
Edit the `:root` variables in `styles.css`:

```css
:root {
    --color-primary: #e85d04;  /* Ember orange */
    --color-bg-dark: #0c0c0c;  /* Dark background */
    /* ... more variables */
}
```

### Update Restaurant Info
Search and replace in `index.html`:
- Phone number: `+234 803 068 5948`
- Address: `17 Alkali Road, Ungwan Sarki, Kaduna`
- Social media links (href attributes)

### Add Real Images
Replace the placeholder divs with actual images:
```html
<!-- Change this: -->
<div class="card-image food-1"><span class="food-label">Chicken Shawarma</span></div>

<!-- To this: -->
<div class="card-image" style="background-image: url('images/shawarma.jpg');"></div>
```

## 📱 Features

- Smooth scroll navigation
- Mobile hamburger menu
- Scroll animations
- WhatsApp reservation/ordering
- Google Maps integration
- Contact form with validation
- Review cards with star ratings

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Copyright © 2025 The Grill House. All rights reserved.

---

Built with ❤️ for The Grill House, Kaduna