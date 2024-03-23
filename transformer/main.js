import * as fs from 'fs';

const OUTPUT = './output.txt';
const SEPARATOR = '\n';

const items = JSON.parse(
    fs.readFileSync(`./storage/key_value_stores/default/items.json`)
);
fs.writeFile(
    OUTPUT,
    items.map(item => item.url).join(SEPARATOR),
    (err) => console.error(err));