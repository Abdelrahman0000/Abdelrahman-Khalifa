const fs = require("fs");
const path = require("path");

const dir = path.join("src", "img", "shots");
const files = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".thumb.webp"))
  .sort();

const body = files
  .map((file) => {
    const b64 = fs.readFileSync(path.join(dir, file)).toString("base64");
    return `  ${JSON.stringify(file)}: "data:image/webp;base64,${b64}"`;
  })
  .join(",\n");

const out = `/* Small work previews, inlined so the strip does not wait on one request per photo. */\nexport const shotThumbs = {\n${body}\n};\n`;

fs.writeFileSync(path.join("src", "img", "shotThumbs.js"), out);
console.log(files.length, out.length);
