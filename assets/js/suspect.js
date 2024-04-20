
document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.querySelector('.image-grid');
    console.log(imageGrid.innerHTML);
    // Function to remove all children
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    // Remove existing images
    removeAllChildNodes(imageGrid);

    // Fetch images from the server
// List of image paths
 //get all images from server/images
// Fetch images from the server
fetch('http://127.0.0.1:3000/images')
.then(response => response.json())
.then(imagePaths => {
    imagePaths.forEach(imgPath => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        const image = document.createElement('img');
        image.src = './server/images/'+imgPath;
        imageDiv.appendChild(image);
        imageGrid.appendChild(imageDiv);
    });
})
.catch(error => console.error('Error:', error));
});

