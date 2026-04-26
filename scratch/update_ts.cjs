const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function replaceBlock(filePath, searchRegex, replaceWith) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(searchRegex, replaceWith);
    fs.writeFileSync(filePath, content, 'utf-8');
}

// 1. Update faqData.ts
const faqPath = path.join(srcDir, 'i18n', 'faqData.ts');
let faqContent = fs.readFileSync(faqPath, 'utf-8');

// Match faqDataEN block
const enFaqMatch = faqContent.match(/export const faqDataEN: FAQCategory\[\] = \[([\s\S]*?)\];/);
if (enFaqMatch) {
    const esFaqBlock = `export const faqDataES: FAQCategory[] = [${enFaqMatch[1]}];`;
    // Replace AR block with ES block
    faqContent = faqContent.replace(/export const faqDataAR: FAQCategory\[\] = \[[\s\S]*?\];/, esFaqBlock);
    fs.writeFileSync(faqPath, faqContent, 'utf-8');
    console.log('Updated faqData.ts');
}

// 2. Update blogPosts.ts
const blogPath = path.join(srcDir, 'i18n', 'blogPosts.ts');
let blogContent = fs.readFileSync(blogPath, 'utf-8');

// Match blogPostsEN block
const enBlogMatch = blogContent.match(/export const blogPostsEN: BlogPost\[\] = \[([\s\S]*?)\];/);
if (enBlogMatch) {
    const esBlogBlock = `export const blogPostsES: BlogPost[] = [${enBlogMatch[1]}];`;
    // Replace AR block with ES block
    blogContent = blogContent.replace(/export const blogPostsAR: BlogPost\[\] = \[[\s\S]*?\];/, esBlogBlock);
    fs.writeFileSync(blogPath, blogContent, 'utf-8');
    console.log('Updated blogPosts.ts');
}

// 3. Update translations.ts
const transPath = path.join(srcDir, 'i18n', 'translations.ts');
let transContent = fs.readFileSync(transPath, 'utf-8');

const enTransMatch = transContent.match(/en: \{([\s\S]*?)\},\n\s*ar: \{/);
if (enTransMatch) {
    const esTransBlock = `es: {${enTransMatch[1]}},`;
    transContent = transContent.replace(/ar: \{[\s\S]*?\},\n\s*fr: \{/, `${esTransBlock}\n    fr: {`);
    fs.writeFileSync(transPath, transContent, 'utf-8');
    console.log('Updated translations.ts');
}
