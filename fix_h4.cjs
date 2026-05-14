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
            // Revert all </h3> to </h4> if they are matching an opening <h4>
            // A safer way: just find <h4> and close them properly
            // Actually, we can just replace </h3> with </h4> where an opening <h4> exists without a closing </h4>.
            // Let's just fix it manually where it broke, or use a simple regex.
            let lines = content.split('\n');
            let changed = false;
            for(let i=0; i<lines.length; i++) {
                if(lines[i].includes('<h4') && !lines[i].includes('</h4>') && lines[i].includes('</h3>')) {
                    lines[i] = lines[i].replace('</h3>', '</h4>');
                    changed = true;
                } else if (lines[i].includes('<h4')) {
                    // Check next few lines for </h3>
                    for(let j=1; j<=3; j++) {
                        if(lines[i+j] && lines[i+j].includes('</h3>')) {
                            lines[i+j] = lines[i+j].replace('</h3>', '</h4>');
                            changed = true;
                        }
                    }
                }
            }
            if(changed) {
                fs.writeFileSync(fullPath, lines.join('\n'), 'utf8');
                console.log('Fixed', fullPath);
            }
        }
    }
}
fixDirectory(srcDir);
