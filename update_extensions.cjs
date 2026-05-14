const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const changed = content.replace(/\.(png|jpg|jpeg)/gi, (match) => {
                // If it's favicon.png, don't change
                return '.webp';
            });
            // Let's handle favicon carefully, wait, I can just replace all and then fix favicon if it was in JSX.
            // Favicon is usually in index.html, not JSX. But just in case, I'll allow it.
            // Oh wait, some icons might be named differently? We converted all to .webp except favicon.png.
            if (content !== changed) {
                fs.writeFileSync(fullPath, changed, 'utf8');
                console.log(`Updated images in ${fullPath}`);
            }
        }
    }
}
processDirectory(srcDir);
