document.getElementById('fileInput').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function() {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = this.width;
                canvas.height = this.height;
                ctx.drawImage(this, 0, 0);
                var dataURL = canvas.toDataURL('assets/img/pedo'); // Change 'image/png' to desired format
                saveImage(dataURL);
            };
        };
        reader.readAsDataURL(file);
    }
});

function saveImage(dataURL) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Image saved successfully!");
            } else {
                console.error("Error saving image.");
            }
        }
    };
    xhr.open('POST', 'http://127.0.0.1:3000/save-image', true); // Adjust the URL to your backend endpoint
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ image: dataURL }));
}
