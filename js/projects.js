
    document.addEventListener('DOMContentLoaded', function() {
        const demoButton = document.querySelector('a[href*="asteroid_blaster"] .btn');
    
        if (demoButton) {
            demoButton.addEventListener('click', function(event) {
                // event.preventDefault(); // Prevent link from navigating immediately
                console.log('Demo button clicked!');
                alert('Demo button clicked!');
            });
        } else {
            console.log('Demo button for Asteroid Blaster not found on page load.');
        }
    });
    
