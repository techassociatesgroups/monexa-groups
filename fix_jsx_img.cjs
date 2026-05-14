const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function fixDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            fixDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Fix instances of `/ loading="lazy"` -> `loading="lazy" />`
            let changed = content.replace(/\/\s*loading="lazy">/g, 'loading="lazy" />');
            changed = changed.replace(/\/\s*loading="eager"(.*?)>/g, 'loading="eager"$1 />');
            
            if(content !== changed) {
                fs.writeFileSync(fullPath, changed, 'utf8');
                console.log('Fixed img tags in', fullPath);
            }
        }
    }
}
fixDirectory(srcDir);
