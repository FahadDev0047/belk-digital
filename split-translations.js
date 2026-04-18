import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.resolve(__dirname, 'src/i18n/translations.ts');
console.log(`Reading from ${srcPath}`);

try {
    const fileContent = fs.readFileSync(srcPath, 'utf8');
    // Handle different newline formats
    const lines = fileContent.split(/\r?\n/);

    const dictionaries = {
        en: { start: 12, end: 1331 },
        ar: { start: 1334, end: 2603 },
        fr: { start: 2606, end: 3874 },
        de: { start: 3877, end: 5138 }
    };

    const dictDir = path.resolve(__dirname, 'src/lib/dictionaries');
    if (!fs.existsSync(dictDir)) {
        fs.mkdirSync(dictDir, { recursive: true });
        console.log(`Created directory ${dictDir}`);
    }

    for (const [lang, range] of Object.entries(dictionaries)) {
        const contentLines = lines.slice(range.start - 1, range.end);
        const cleanedLines = contentLines.map(line => {
            // Simple indentation fix
            if (line.startsWith('    ')) return line.substring(4);
            if (line.startsWith('  ')) return line.substring(2);
            return line;
        });

        const content = 'const translations = {\n' + cleanedLines.join('\n') + '\n};\n\nexport default translations;';

        const destPath = path.join(dictDir, `${lang}.ts`);
        fs.writeFileSync(destPath, content);
        console.log(`Wrote ${lang}.ts`);
    }
} catch (error) {
    console.error('Error:', error);
    process.exit(1);
}
