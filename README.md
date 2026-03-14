# Luis Tirado — Personal Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet.js-199900?style=flat&logo=leaflet&logoColor=white)

A responsive, multi-page personal portfolio website built with vanilla web technologies. Designed to showcase software development projects, technical writing, and personal interests — with a focus on clean code, modular architecture, and mobile-first design.

---

## 📋 Overview

This site was developed as part of the **CST-120: Web Development** course at Grand Canyon University. It demonstrates a progression from static HTML pages toward a more maintainable, component-driven approach using jQuery for dynamic fragment loading.

**Live pages include:**
- `index.html` — Landing page / About me
- `projects.html` — Software development portfolio
- `automotive-blog.html` — Technical writing on automotive design & engineering
- `hobbies.html` — Personal interests
- `photos.html` — Photography gallery
- `map.html` — Interactive map with Leaflet.js
- `contact.html` — Contact form with external processing

---

## ✨ Features

- **Modular Header/Footer** — Reusable HTML fragments loaded via jQuery, keeping navigation consistent and easy to update across all pages.
- **Dynamic Active Navigation** — JavaScript automatically detects the current page URL and applies the `.active` class to the matching nav link.
- **Automotive Design Blog** — Technical entries covering aerodynamics, mechanical maintenance, and cockpit ergonomics.
- **Interactive Map** — Powered by [Leaflet.js](https://leafletjs.com/) with custom markers and a mobile-friendly interface.
- **Contact Form** — Bootstrap-styled form configured for external processing (Postman Echo / EmailJS).
- **SCSS Architecture** — Source styles are organized in `/scss` and compiled to `/css` for clean, scalable theming.
- **Responsive Design** — Mobile-first layout using Bootstrap 5, tested across desktop, tablet, and smartphone viewports.

---

## 🛠️ Tech Stack

| Category      | Technologies                          |
|---------------|---------------------------------------|
| Markup        | HTML5                                 |
| Styling       | CSS3, SCSS                            |
| Frameworks    | Bootstrap 5                           |
| Libraries     | jQuery, Leaflet.js                    |
| Dev Tools     | VS Code, Git, Live Server             |

---

## 📂 Project Structure

```
personal-website/
├── css/                  # Compiled production stylesheets
├── scss/                 # Source SCSS files (nested, modular)
├── js/                   # Custom JavaScript (main.js, fragment loader)
├── img/                  # Static images and icons
├── media/                # Multimedia assets (videos, logos)
├── files/                # Downloadable assets (PDFs, reports)
├── index.html            # Landing page
├── projects.html         # Portfolio / projects
├── automotive-blog.html  # Technical blog
├── hobbies.html          # Personal interests
├── photos.html           # Photo gallery
├── map.html              # Interactive Leaflet map
├── contact.html          # Contact form
├── header.html           # Reusable header fragment
├── footer.html           # Reusable footer fragment
└── README.md
```

---

## ⚙️ Getting Started

> **Note:** This project uses asynchronous fragment loading (jQuery `.load()`), so it must be served over HTTP — opening `index.html` directly in a browser won't work correctly.

### 1. Clone the repository

```bash
git clone https://github.com/luis-tirado/personal-website.git
cd personal-website
```

### 2. Run a local server

**Option A — VS Code Live Server (recommended)**
Right-click `index.html` and select **"Open with Live Server"**.

**Option B — Python**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🗺️ Roadmap

- [ ] Dark mode toggle using SCSS variables
- [ ] Project gallery with filter-by-tech-stack functionality
- [ ] SEO optimization and Lighthouse performance audit
- [ ] Migrate fragment loading to a static site generator or build step

---

## 👤 Author

**Luis Tirado**
Software Development Student @ Grand Canyon University
Associate of Computer Science @ Glendale Community College

---

## 📄 License

© 2026 Luis Tirado. All rights reserved.
