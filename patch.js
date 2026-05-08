import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

for (const depType of ['dependencies', 'devDependencies']) {
    if (!pkg[depType]) continue;
    for (const [key, val] of Object.entries(pkg[depType])) {
        if (key.startsWith('@workspace')) {
            delete pkg[depType][key];
        } else if (val === 'catalog:') {
            pkg[depType][key] = 'latest';
        }
    }
}
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
