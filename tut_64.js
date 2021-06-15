const fs = require("fs");
let text =fs.readFileSync("sak.txt","utf-8");
text=text.replace("opened","will be opened");
console.log("the content of the file is");
console.log(text);

console.log("creating a new file...");
fs.writeFileSync("will_be.txt",text);
