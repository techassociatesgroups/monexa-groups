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
            
            // Fix contrast issue
            content = content.replace(/#C5A059/gi, '#8B6B22'); 
            
            // Ensure aria-labels on standard buttons without text
            content = content.replace(/<button([^>]+)>/g, (match, p1) => {
                if (p1.includes('aria-label') || p1.includes('aria-expanded')) return match;
                if (match.includes('onClick={nextSlide}')) return `<button${p1} aria-label="Next Slide">`;
                if (match.includes('onClick={prevSlide}')) return `<button${p1} aria-label="Previous Slide">`;
                // Add default aria-label if icon only? Too risky to guess, but we know nextSlide is one.
                return match;
            });
            
            // Fix heading h4 -> h3 if there's no h3 around
            content = content.replace(/<h4 className="font-semibold text-\[#0F2A44\]">/g, '<h3 className="text-xl font-semibold text-[#0F2A44]">');
            content = content.replace(/<\/h4>/g, '</h3>');
            
            // Fix img tags to have loading="lazy" if not eager
            content = content.replace(/<img([^>]+)>/g, (match, p1) => {
                if (p1.includes('loading=')) return match;
                if (p1.includes('logo')) {
                    return `<img${p1} loading="eager" width="160" height="50">`;
                }
                return `<img${p1} loading="lazy">`;
            });
            
            fs.writeFileSync(fullPath, content, 'utf8');
        }
    }
}
processDirectory(srcDir);
console.log('Fixed contrast and basic a11y');
