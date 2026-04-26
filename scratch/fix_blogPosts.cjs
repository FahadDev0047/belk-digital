const fs = require('fs');
let content = fs.readFileSync('src/i18n/blogPosts.ts', 'utf8');
content = content.replace(/case 'ar':\s*return blogPostsAR;/g, "case 'es':\n            return blogPostsES;");
fs.writeFileSync('src/i18n/blogPosts.ts', content, 'utf8');
console.log('Fixed');
