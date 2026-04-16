const fs = require('fs');
const path = require('path');

const srcDir = path.join('d:\\\\New folder - Copy', 'src');

const localImages = [
    "/images/monexa ventures 1.jpg",
    "/images/monexa ventures 2.jpg",
    "/images/monexa ventures 3.jpg",
    "/images/monexa ventures 4.jpg",
    "/images/monexa ventures 5.jpg",
    "/images/monexa ventures 6.jpg",
    "/images/monexa ventures 7.jpg",
    "/images/monexa ventures 8.jpg",
    "/images/monexa ventures 10.jpg",
    "/images/monexa ventures 11.jpg",
    "/images/monexa ventures 12.jpg",
    "/images/monexa ventures 13.jpg",
    "/images/monexa ventures 14.jpg",
    "/images/monexa ventures 15.jpg",
    "/images/monexa ventures 16.jpg",
    "/images/monexa ventures 17.jpg",
    "/images/monexa ventures 18.jpg"
];

let imageIndex = 0;
function getNextImage() {
    const img = localImages[imageIndex];
    imageIndex = (imageIndex + 1) % localImages.length;
    return img;
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const changed = content.replace(/https:\/\/images\.unsplash\.com\/[^'"`]+/g, () => {
                return getNextImage();
            });
            if (content !== changed) {
                fs.writeFileSync(fullPath, changed, 'utf8');
                console.log(`Updated images in ${fullPath}`);
            }
        }
    }
}

processDirectory(srcDir);
console.log('Done replacing Unsplash URLs with local images.');
