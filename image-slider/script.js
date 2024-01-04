document.addEventListener("DOMContentLoaded", function() {
    let imgElement = document.getElementById('img');
    let urlList = ['images/genius-andrew-judd.jpg', 'images/image2.jpg', 'images/boucher-francois-fountain-of-love-1748.jpg'];
    let previousButton = document.getElementById('previousButton');
    let nextButton = document.getElementById('nextButton');
    
    let imgSrc = imgElement.src;  // Initialize imgSrc here

    function previousImage() {
        if (urlList.indexOf(imgSrc) !== 0) {
            imgSrc = urlList[urlList.indexOf(imgSrc) - 1];
        } else {
            imgSrc = urlList[urlList.length - 1];
        }
        imgElement.src = imgSrc;
    }

    function nextImage() {
        if (urlList.indexOf(imgSrc) === urlList.length - 1) {
            imgSrc = urlList[0];
        } else {
            imgSrc = urlList[urlList.indexOf(imgSrc) + 1];
        }
        imgElement.src = imgSrc;
    }

    previousButton.addEventListener('click', previousImage);
    nextButton.addEventListener('click', nextImage);
});
