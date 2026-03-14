Personal Professional Portfolio

A comprehensive professional portfolio website designed to showcase software development projects, technical expertise, and personal interests. This project serves as a central hub for my professional growth, featuring a responsive design and modular architecture.

📋 Project Overview

This website was developed as part of the CST-120: Web Development course at Grand Canyon University. It highlights the transition from static web pages to dynamic, component-based web applications, focusing on clean code and user experience.

🚀 Key Features

Modular Architecture: Utilizes jQuery to load reusable HTML fragments (Header/Footer), ensuring consistent navigation and branding while making the site much easier to maintain.

Automotive Design Blog: A dedicated space exploring the intersection of engineering and design, featuring technical entries on aerodynamics, mechanical maintenance, and cockpit ergonomics.

Dynamic Navigation: Custom JavaScript logic that automatically detects the current page URL and applies the active class to the corresponding navigation link.

Interactive Mapping: Integrated Leaflet.js to provide mobile-friendly, interactive maps with custom markers.

Professional Contact System: A fully functional contact form powered by Bootstrap and configured for external data processing services (Postman Echo/EmailJS).

Responsive Design: Built with a "mobile-first" approach using Bootstrap 5, ensuring accessibility across desktops, tablets, and smartphones.

🛠️ Technologies Used

Frontend: HTML5, CSS3, and SCSS for scalable styling.

Frameworks: Bootstrap 5 for layout and UI components.

Libraries: jQuery for DOM manipulation and asynchronous fragment loading.

Mapping: Leaflet.js (Open-source interactive maps).

Dev Tools: VS Code, Git, Live Server.

📂 Project Structure

📂 personal-website
├── 📁 css            # Compiled production styles
├── 📁 scss           # Source SCSS files (clean, nested styling)
├── 📁 js             # Custom scripts (main.js, fragment loading)
├── 📁 fragments      # Reusable HTML components (_header.html, _copyright.html)
├── 📁 media          # Multimedia assets (Images, Videos, Logos)
├── 📁 files          # Downloadable assets (Reports, PDF Credentials)
├── automotive-blog.html
├── contact.html      # Process-ready contact page
└── index.html        # Main landing page


⚙️ Installation & Setup

To run this project locally:

Clone the Repository:

git clone [https://github.com/luis-tirado/personal-website.git](https://github.com/luis-tirado/personal-website.git)


Navigate to the Folder:

cd personal-website


Run Locally:
Because this project uses asynchronous loading for header/footer fragments, you must use a local server.

In VS Code, right-click index.html and select "Open with Live Server".

Alternatively, use any local HTTP server (like python -m http.server).

🗺️ Roadmap

[ ] Implementation of Dark Mode toggle using SCSS variables.

[ ] Integration of a Project Gallery with filtering by technology stack.

[ ] SEO optimization and performance audits via Lighthouse.

Luis Tirado Software Development Student @ Grand Canyon University Associate of Computer Science @ Glendale Community College

© 2026 Luis Tirado. All rights reserved.
