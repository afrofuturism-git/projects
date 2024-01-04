document.addEventListener('DOMContentLoaded', function () {
    const lightButton = document.getElementById('light');
    const darkButton = document.getElementById('dark');
    const nav = document.getElementById('nav');
    var allImages = document.querySelectorAll('img');
    var elements = document.querySelectorAll('.text');

    lightButton.addEventListener('click', function () {
        for (var i = 0; i < allImages.length; i++) {
            allImages[i].style.filter = 'invert(100%)';
        }

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = 'black';
        }

        document.body.style.cssText = 'background-color: white !important';
        nav.style.cssText = 'background-color: white !important';
        nav.style.color = 'black';
        lightButton.style.cssText = 'background-color: white !important; border: 2px solid black';
        lightButton.style.color = 'black';
        darkButton.style.cssText = 'background-color: white !important; border: 2px solid black';
        darkButton.style.color = 'black';

    });

    darkButton.addEventListener('click', function () {
        for (var i = 0; i < allImages.length; i++) {
            allImages[i].style.filter = 'invert(0%)';
        }

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = 'white';
        }
        document.body.style.cssText = 'background-color: black !important';
        nav.style.cssText = 'background-color: black !important';
        lightButton.style.cssText = 'background-color: black !important';
        lightButton.style.color = 'white';
        darkButton.style.cssText = 'background-color: black !important';
        darkButton.style.color = 'white';

        // Set the text color of the navigation links to white in dark mode
    });
});
