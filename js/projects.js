
    document.addEventListener('DOMContentLoaded', function() {
        const demoButton = document.querySelector('#demo-button');
    
        if (demoButton) {
            demoButton.addEventListener('click', function() {
                console.log('Demo button clicked!');
                alert('Demo button clicked!');
            });
        } else {
            console.log('Demo button not found on page load.');
        }
    });
    
