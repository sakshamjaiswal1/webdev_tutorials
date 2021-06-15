const fs = require("fs");
fs.readFile("sak.txt", "utf-8", (data)=>{
    console.log(data);
});
console.log("This is a message");