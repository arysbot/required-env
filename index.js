const path = require("path");
const fs = require("fs");

let envConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "../../../config/env.json")));
const globalEnvConfig = JSON.parse(fs.readFileSync("./env.json"));
envConfig = envConfig.concat(globalEnvConfig);
for(let i = 0, n = envConfig.length; i < n; i++) {
    if(process.env[envConfig[i]] === "") throw new Error(`The environment variable ${envConfig[i]} is empty`);
}
