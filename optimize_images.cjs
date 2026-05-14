const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');

async function optimize() {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (!file.match(/\.(png|jpg|jpeg|webp)$/i)) continue;
        if (file === 'favicon.png') continue;
        
        const fullPath = path.join(dir, file);
        const name = path.parse(file).name;
        const newPath = path.join(dir, `${name}_opt.webp`);
        
        try {
            await sharp(fullPath)
                .resize({ width: 1200, withoutEnlargement: true }) // Max width 1200px
                .webp({ quality: 80, effort: 6 })
                .toFile(newPath);
            
            // Delete original file to save space and rename the new one back to .webp
            fs.unlinkSync(fullPath);
            fs.renameSync(newPath, path.join(dir, `${name}.webp`));
            console.log(`Optimized ${file}`);
        } catch(e) {
            console.error(`Error optimizing ${file}:`, e);
        }
    }
}
optimize();
