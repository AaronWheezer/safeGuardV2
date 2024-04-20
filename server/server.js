// Node.js with Express
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
    
// Add CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.use(express.json({ limit: '50mb' }));

// Route to save image
app.post('/save-image', (req, res) => {
    const base64Data = req.body.image.replace(/^data:image\/png;base64,/, '');
    const filename = 'image_' + Date.now() + '.png'; // Adjust filename as needed
    const filePath = path.join(__dirname, 'images', filename); // Adjust the path to save the images

    fs.writeFile(filePath, base64Data, 'base64', function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving image.');
        } else {
            console.log('Image saved successfully!');
            res.sendStatus(200);
        }
    });
});

// Route to get the list of image names
app.get('/images', (req, res) => {
    const directoryPath = path.join(__dirname, 'images');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading directory.');
            return;
        }
        const imageNames = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
        });
        res.json(imageNames);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
