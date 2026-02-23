/**
 * REFACTORED SASS SCRIPT
 * This version includes the improved image fallback and the University logo logic.
 */

// 1. Improved Global Image Fallback
function initFallbacks() {
    const fallback = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%23ecf0f1"/><text x="50%" y="50%" fill="%237f8c8d" font-size="24" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">📸 Image Not Found</text></svg>';

    document.querySelectorAll('img').forEach(img => {
        const handleErr = () => {
            if (img.src !== fallback) {
                img.onerror = null;
                img.src = fallback;
            }
        };

        img.addEventListener('error', handleErr);
        if (img.complete && img.naturalWidth === 0) handleErr();
    });
}

// 2. University Section Logic
// This function ensures the accordion content is enhanced when opened
function initUniversitySection() {
    const universityDetails = document.querySelector('details:first-of-type');
    if (universityDetails) {
        universityDetails.addEventListener('toggle', () => {
            if (universityDetails.open) {
                console.log("User is viewing University info.");
            }
        });
    }
}

// 3. Map Logic with full set of pins
function initMap() {
    const mapContainer = document.getElementById('interactive-map');

    // Only run the Leaflet code IF the map container actually exists on this page
    if (mapContainer) {
        // Initialize the map and set its starting view (Latitude, Longitude, Zoom Level)
        var map = L.map('interactive-map').setView([31.5, -111.0], 5);

        // Load the map tiles (the actual street/terrain graphics) from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // --- Add Markers (Pins) ---

        // Pin 1: Phoenix, AZ (College / Current Location)
        var phoenixMarker = L.marker([33.4484, -112.0740]).addTo(map);
        phoenixMarker.bindPopup("<b>Phoenix, Arizona</b><br>Where I currently study at GCU.");

        // Pin 2: Glendale, AZ (GCC)
        var glendaleMarker = L.marker([33.5386, -112.1860]).addTo(map);
        glendaleMarker.bindPopup("<b>Glendale Community College</b><br>Earned my Associate's degree and played soccer here.");

        // Pin 3: Cancun, Mexico
        var cancunMarker = L.marker([21.1619, -86.8515]).addTo(map);
        cancunMarker.bindPopup("<b>Cancun, Mexico</b><br>Took a family trip here in 2021! ⛱️");

        // Pin 4: Ruidoso, New Mexico
        var ruidosoMarker = L.marker([33.3317, -105.6730]).addTo(map);
        ruidosoMarker.bindPopup("<b>Ruidoso, New Mexico</b><br>Fun trips with friends in 2020 and 2024. 🌲");

        // Pin 5: Sedona, AZ 
        var sedonaMarker = L.marker([34.8697, -111.7610]).addTo(map);
        sedonaMarker.bindPopup("<b>Sedona, Arizona</b><br>A beautiful trip with my girlfriend.");

        // Pin 6: Flagstaff, AZ (Added from your trips)
        var flagstaffMarker = L.marker([35.1983, -111.6513]).addTo(map);
        flagstaffMarker.bindPopup("<b>Flagstaff, Arizona</b><br>Friends trip to Flagstaff in 2023. ⛰️");

        // Pin 7: Disney, California (Added from your trips)
        var disneyMarker = L.marker([33.8121, -117.9190]).addTo(map);
        disneyMarker.bindPopup("<b>Disneyland, California</b><br>Family trip to Disney in 2025. 🎢");

        // Pin 8: Ciudad Juarez, Mexico (Hometown)
        var juarezMarker = L.marker([31.7333, -106.4833]).addTo(map);
        juarezMarker.bindPopup("<b>Ciudad Juarez, Mexico</b><br>Where I was raised and lived from 2004 to 2021.");
    }
}

// Initialize everything
window.onload = () => {
    initFallbacks();
    initUniversitySection();
    initMap();
};