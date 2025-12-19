const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home | Zuhair Shah' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About | Zuhair Shah' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects | Zuhair Shah' });
});

app.get('/skills', (req, res) => {
    res.render('skills', { title: 'Skills | Zuhair Shah' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact | Zuhair Shah' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio server running at http://localhost:${PORT}`);
});
