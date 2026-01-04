# 🚀 Harsh Tawar - Portfolio

A modern, interactive portfolio website showcasing my journey as a Full-Stack Developer with expertise in Android, Backend Engineering, and Enterprise Solutions.
## ✨ Features

- **Interactive UI/UX**: Smooth animations and transitions powered by Framer Motion
- **Mouse-Following Gradient**: Dynamic background that responds to cursor movement
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Navigation**: Sticky header with scroll-to-section functionality
- **Performance Optimized**: Fast loading times with optimized assets
- **Modern Aesthetics**: Glassmorphism, gradient effects, and contemporary design patterns

## 🛠️ Built With

- **Frontend Framework**: React 18+
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── Portfolio.jsx      # Main portfolio component
│   ├── App.jsx                 # Root component
│   └── index.css               # Global styles
├── public/
│   └── my_image.jpg            # Profile picture
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gujjarharsh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image**
   - Place your profile picture as `my_image.jpg` in the `public` folder

4. **Run development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Update Personal Information

Edit the `Portfolio.jsx` file to update:
- Name and role
- Bio description
- Project details
- Skills and experience
- Social media links
- Contact information

### Modify Colors

TailwindCSS color scheme can be customized in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Change Animations

Framer Motion animations can be adjusted in the component:
```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 📱 Sections

1. **Hero**: Introduction with animated profile image and CTA buttons
2. **About**: Technical expertise organized by category
3. **Experience**: Professional journey with measurable achievements
4. **Projects**: Featured projects with impact metrics and tech stacks
5. **Contact**: Social links and availability status

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect React and deploy
5. Get your live link!

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `build` folder to [netlify.com](https://netlify.com)
3. Your site is live!

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📊 Performance

- **Lighthouse Score**: 95+ Performance
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Accessibility**: WCAG 2.1 compliant

## 🔧 Technologies & Skills Showcased

### Frontend
- React.js
- TailwindCSS
- Framer Motion
- Responsive Design

### Backend
- Node.js
- PostgreSQL
- RESTful APIs
- Microservices

### Mobile
- Android (Java/Kotlin)
- WebView Integration
- POS Integration

### AI/ML
- TensorFlow
- Deep Learning
- Computer Vision

### Enterprise
- IAM Systems
- SSO & MFA
- LDAP/AD Integration
- Keycloak

## 📧 Contact

- **Email**: gujjarharshtawar@gmail.com
- **LinkedIn**: [harsh-tawar](https://www.linkedin.com/in/harsh-tawar)
- **GitHub**: [Gujjarharsh](https://github.com/Gujjarharsh)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Create React App](https://create-react-app.dev/)

---

⭐ **Star this repo if you found it helpful!**

Made with ❤️ by Harsh Tawar
