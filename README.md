# Portfolio Website - Node.js & Express.js

A modern, responsive portfolio website built with **Node.js** and **Express.js**, featuring beautiful animations and a clean glassmorphism design.

## 🎨 Features

- **Modern Design**: Glassmorphism UI with gradient effects
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Fade-in and scroll animations
- **EJS Templating**: Dynamic page rendering
- **Express Server**: Fast and lightweight Node.js framework
- **Static Asset Serving**: Optimized CSS and JavaScript
- **Multiple Pages**: Home, About, Projects, Skills, Contact

## 📁 Project Structure

```
portfolio/
├── server.js              # Express server configuration
├── package.json           # Project dependencies
├── views/                 # EJS template files
│   ├── index.ejs         # Home page
│   ├── about.ejs         # About page
│   ├── projects.ejs      # Projects page
│   ├── skills.ejs        # Skills page
│   ├── contact.ejs       # Contact page
│   └── 404.ejs           # 404 error page
├── public/               # Static files
│   ├── style.css         # Styling
│   └── script.js         # Client-side JavaScript
└── run.sh                # Startup script
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation & Running

**Option 1: Using the run script**
```bash
chmod +x run.sh
./run.sh
```

**Option 2: Manual setup**
```bash
# Install dependencies
npm install

# Start the server
npm start
```

**Option 3: Development mode with auto-reload**
```bash
npm install --save-dev nodemon
npm run dev
```

## 🌐 Accessing the Portfolio

Once the server is running, open your browser and navigate to:
```
http://localhost:3000
```

## 📄 Pages

- **Home (`/`)** - Landing page with hero section and featured projects
- **About (`/about`)** - About me section with background and expertise
- **Projects (`/projects`)** - Showcase of completed projects
- **Skills (`/skills`)** - Technical skills and proficiency levels
- **Contact (`/contact`)** - Contact information and ways to reach out

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Glassmorphism, Gradient effects, CSS animations

## 🎯 Key Sections

### Navigation
- Sticky navigation bar with smooth underline animations
- Active link indicators
- Responsive mobile navigation ready

### Hero Section
- Profile image with hover effects
- Gradient text effects
- Call-to-action buttons
- Scroll indicator

### Animations
- Fade-in-up animations on page load
- Staggered element animations
- Scroll-based animations using Intersection Observer
- Hover effects on interactive elements

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎨 Color Scheme

- **Primary**: Purple (#a855f7)
- **Accent**: Light Purple (#c084fc)
- **Text Primary**: Light Gray (#f1f5f9)
- **Background**: Dark (#0f0f0f)

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "ejs": "^3.1.10"
}
```

**Dev Dependencies**:
```json
{
  "nodemon": "^3.0.1"
}
```

## 🔧 Configuration

The server runs on port `3000` by default. To change the port, modify `server.js`:

```javascript
const PORT = process.env.PORT || 3000; // Change 3000 to your desired port
```

## 📝 Customization

### Update Content
Edit the EJS files in the `views/` folder to customize content:
- `views/index.ejs` - Home page content
- `views/about.ejs` - About section
- `views/projects.ejs` - Projects showcase
- `views/skills.ejs` - Skills and expertise
- `views/contact.ejs` - Contact information

### Update Styles
Modify `public/style.css` to customize:
- Colors and themes
- Fonts and typography
- Layout and spacing
- Animations and transitions

### Update Scripts
Edit `public/script.js` to add:
- Custom interactions
- Form handling
- Additional animations

## 🚀 Deployment

### Heroku
```bash
heroku create your-portfolio
git push heroku main
```

### Vercel
```bash
vercel
```

### Other Platforms
The portfolio can be deployed to any Node.js hosting platform:
- AWS
- DigitalOcean
- Render
- Railway
- Replit

## 📧 Contact Information

- **Email**: zuhairshah2006@gmail.com
- **Phone**: +91 89398 30817
- **LinkedIn**: [Syed Zuhair Shah](https://linkedin.com/in/syedzuhairshah-mlstudent/)
- **Instagram**: [@Lucifer_5430](https://instagram.com/Lucifer_5430)

## 📄 License

This project is open source and available under the ISC License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📞 Support

If you encounter any issues, please create an issue in the repository or contact me directly.

---

**Made with ❤️ by Syed Muhammed Zuhair Shah**
