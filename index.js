const path = require("path");
const fs = require("fs");

const envConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "../../../config/env.json")));

for(let i = 0, n = envConfig.length; i < n; i++) {
    if(process.env[envConfig[i]] === "") throw new Error(`The environment variable ${envConfig[i]} is empty`);
}
