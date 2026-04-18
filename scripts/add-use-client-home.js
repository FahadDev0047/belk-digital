import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '../src/components/home');

fs.readdir(componentsDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const filePath = path.join(componentsDir, file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading file ${file}:`, err);
                    return;
                }

                if (!data.trim().startsWith('"use client"') && !data.trim().startsWith("'use client'")) {
                    const newData = `"use client";\n${data}`;
                    fs.writeFile(filePath, newData, 'utf8', (err) => {
                        if (err) {
                            console.error(`Error writing file ${file}:`, err);
                        } else {
                            console.log(`Added "use client" to ${file}`);
                        }
                    });
                }
            });
        }
    });
});
