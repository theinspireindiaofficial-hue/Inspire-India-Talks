/**
 * Post-build script: Extracts OG-relevant business-insight data and writes to
 * dist/business-insights-og-data.json.
 * This JSON file is consumed by the Vercel serverless API function at runtime
 * (api/business-insight.ts). Mirrors generate-og-data.js / generate-events-og-data.js.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const srcPath = join(ROOT, 'src', 'data', 'businessinsights.ts');
const distPath = join(ROOT, 'dist', 'business-insights-og-data.json');

if (!existsSync(join(ROOT, 'dist'))) {
    console.error('❌ dist/ directory not found. Run "vite build" first.');
    process.exit(1);
}

const content = readFileSync(srcPath, 'utf8');

// Extract each business-insight object block from the array
const blocks = [];
const arrayMatch = content.match(/export\s+const\s+businessinsights\s*:\s*BusinessInsight\[\]\s*=\s*\[([\s\S]*)\];/);

if (!arrayMatch) {
    console.error('❌ Could not find businessinsights array in source file.');
    process.exit(1);
}

const arrayContent = arrayMatch[1];

// Match each object block { ... }, skipping // line comments (so the commented
// TEMPLATE block is ignored). Same state-machine approach as the sibling scripts.
let depth = 0;
let blockStart = -1;

for (let i = 0; i < arrayContent.length; i++) {
    const char = arrayContent[i];

    if (char === '/' && arrayContent[i + 1] === '/') {
        while (i < arrayContent.length && arrayContent[i] !== '\n') i++;
        continue;
    }

    if (char === '{') {
        if (depth === 0) blockStart = i;
        depth++;
    } else if (char === '}') {
        depth--;
        if (depth === 0 && blockStart !== -1) {
            blocks.push(arrayContent.substring(blockStart, i + 1));
            blockStart = -1;
        }
    }
}

function extractField(block, fieldName) {
    const regex = new RegExp(`${fieldName}\\s*:\\s*["'\`]([\\s\\S]*?)["'\`]\\s*[,}]`);
    const match = block.match(regex);
    return match ? match[1].trim() : '';
}

const ogData = blocks.map(block => {
    const id = extractField(block, 'id');
    if (!id) return null;

    return {
        id,
        title: extractField(block, 'title'),
        excerpt: extractField(block, 'excerpt'),
        image: extractField(block, 'image'),
        category: extractField(block, 'category'),
        date: extractField(block, 'date'),
    };
}).filter(Boolean);

writeFileSync(distPath, JSON.stringify(ogData, null, 2), 'utf8');
console.log(`✅ Generated business-insights-og-data.json with ${ogData.length} articles → ${distPath}`);
