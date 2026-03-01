/**
 * MAIN SCRIPT
 * 
 */

const App = {
    // Set up Init
    init() {
        this.loadComponents();
        this.setupStyleSwitcher();
        this.setupImageFallbacks();
        this.setupProjectModal();   // 
        this.initMap();             // For map in maps.html
    },

    // loads components: header.html and footer.html
    loadComponents() {
        // Array of page components stored as objects
        const components = [
            { id: 'header-placeholder', file: 'header.html' },
            { id: 'footer-placeholder', file: 'footer.html' }
        ];

        // For each component inside the components array
        components.forEach(comp => {
            // find component in DOM, and store in ele variable
            const ele = document.getElementById(comp.id);
            if (ele) {
                fetch(comp.file)
                    .then(res => res.text())
                    .then(html => {
                        ele.innerHTML = html;
                        if (comp.id === 'header-placeholder') this.highlightActiveLink();
                    })
                    .catch(err => console.error(`Error loading ${comp.file}:`, err));
            }
        });
    },

    // Highlight current tab on navbar
    highlightActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        // Select all elements with header.nav.a parent, and for each element's link, check if equal to current page link.
        document.querySelectorAll('header nav a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    },

    // toggle css/mysite.css || css/back-upmysite.css
    setupStyleSwitcher() {
        const themeLink = document.getElementById('theme-link');
        // use SASS by default
        const useSass = localStorage.getItem('useSass') === 'true';

        if (themeLink) {
            themeLink.href = useSass ? 'css/mysite.css' : 'css/backup-mysite.css';
        }
    },

    // Set up Demo video Modal
    setupProjectModal() {
        const modal = document.querySelector("#videoModal");
        const openBtn = document.querySelector("#openDemo");
        const closeBtn = document.querySelector("#closeDemo");

        if (modal && openBtn && closeBtn) {
            openBtn.addEventListener("click", () => modal.showModal());

            closeBtn.addEventListener("click", () => {
                modal.close();
                // stop video after closing demo
                const iframe = modal.querySelector('iframe');
                if (iframe) {
                    const src = iframe.src;
                    iframe.src = src;
                }
            });
        }
    },

    // MAP: uses Leaflet script
    initMap() {
        const mapContainer = document.getElementById('interactive-map');
        if (!mapContainer) return;

        // Set view to cover Southwest US and Northern Mexico
        const map = L.map('interactive-map').setView([28.0, -110.0], 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Locations extracted from index.html, photos.html, and contact.html
        const locations = [
            // Core Life Locations
            { coords: [33.4484, -112.0740], text: "<b>Phoenix, AZ</b><br>Where I currently live and study at GCU." },
            { coords: [33.5386, -112.1860], text: "<b>Glendale, AZ</b><br>GCC where I played soccer and earned my Associate's." },
            { coords: [31.7333, -106.4833], text: "<b>Ciudad Juárez, MX</b><br>My hometown where I was raised (2004-2021)." },

            // Soccer & Local Trips
            { coords: [32.6927, -114.6277], text: "<b>Yuma, AZ</b><br>Road trip for a college soccer match." },
            { coords: [33.3703, -112.5838], text: "<b>Buckeye, AZ</b><br>Where I went skydiving in 2024!" },
            { coords: [34.8697, -111.7610], text: "<b>Sedona, AZ</b><br>Beautiful trip with my girlfriend." },
            { coords: [35.1983, -111.6513], text: "<b>Flagstaff, AZ</b><br>Friends trip to the mountains in 2023." },

            // Adventures in Mexico
            { coords: [27.0722, -109.4444], text: "<b>Navojoa, MX</b><br>Visiting my girlfriend's hometown in 2026." },
            { coords: [23.2329, -106.4062], text: "<b>Mazatlán, MX</b><br>Family vacation in 2020." },
            { coords: [21.1619, -86.8515], text: "<b>Cancún, MX</b><br>Memorable family trip in 2021." },
            { coords: [28.8231, -111.9408], text: "<b>Bahía de Kino, MX</b><br>Beach trip with a friend in 2023." },
            { coords: [27.9489, -111.0114], text: "<b>San Carlos, MX</b><br>Family trip to the coast in 2024." },
            { coords: [20.2925, -103.1895], text: "<b>Chapala, MX</b><br>Friends trip to Lake Chapala in 2024." },
            { coords: [28.6330, -106.0691], text: "<b>Chihuahua, MX</b><br>Recent adventure with friends in 2026." },

            // Other US Trips
            { coords: [33.3317, -105.6730], text: "<b>Ruidoso, NM</b><br>Multiple mountain trips with friends (2020 & 2024)." },
            { coords: [33.8121, -117.9190], text: "<b>Anaheim, CA</b><br>Family trip to Disneyland in 2025." }
        ];

        // Add markers to the map
        locations.forEach(loc => {
            L.marker(loc.coords).addTo(map).bindPopup(loc.text);
        });
    },

    // Fallback images when links are broken
    setupImageFallbacks() {
        // svg
        const placeholder = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23eeeeee"/><text x="50%" y="50%" fill="%23aaaaaa" font-family="sans-serif" font-size="20" text-anchor="middle" dominant-baseline="middle">Image Not Available</text></svg>';

        document.querySelectorAll('img').forEach(img => {
            // if image is broken, display svg
            img.onerror = () => {
                img.src = placeholder;
                img.classList.add('is-fallback');
            };

            if (img.complete && img.naturalWidth === 0) {
                img.src = placeholder;
            }
        });
    }
};

// Start App when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());