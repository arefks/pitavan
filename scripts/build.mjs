import { access, cp, mkdir, readFile, rm, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const files = ['index.html', 'impressum.html', 'datenschutz.html', 'styles.css', 'app.js', 'assets', 'data'];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  const target = path.join(dist, file);
  const entry = await stat(source);
  await cp(source, target, { recursive: entry.isDirectory() });
}

await Promise.all(['index.html', 'impressum.html', 'datenschutz.html'].map(async (file) => {
  const html = await readFile(path.join(dist, file), 'utf8');
  if (!html.includes('<!doctype html>') || !html.includes('</html>')) {
    throw new Error(`${file} ist kein vollständiges HTML-Dokument.`);
  }

  const references = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map((match) => match[1]);
  const localReferences = references
    .filter((reference) => !/^(?:https?:|mailto:|tel:)/.test(reference))
    .map((reference) => reference.split(/[?#]/)[0]);
  await Promise.all(localReferences.map((reference) => access(path.resolve(dist, path.dirname(file), reference))));
}));

console.log(`Build erfolgreich: ${files.length} Einträge kopiert, HTML und lokale Verweise geprüft.`);
