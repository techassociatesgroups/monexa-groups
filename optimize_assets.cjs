const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'assests');

async function optimize() {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;
        
        const fullPath = path.join(dir, file);
        const name = path.parse(file).name;
        const newPath = path.join(dir, `${name}.webp`);
        
        try {
            await sharp(fullPath)
                .resize({ width: 1200, withoutEnlargement: true }) // Max width 1200px
                .webp({ quality: 80, effort: 6 })
                .toFile(newPath);
            
            // Delete original file to save space
            fs.unlinkSync(fullPath);
            console.log(`Optimized ${file} to ${name}.webp`);
        } catch(e) {
            console.error(`Error optimizing ${file}:`, e);
        }
    }
}
optimize();
