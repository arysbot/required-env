const path = require("path");
const fs = require("fs");

module.exports = () => {
    let envConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "../../../config/env.json")));
    const globalEnvConfig = JSON.parse(fs.readFileSync("./node_modules/@arys/required-env/env.json"));
    envConfig = envConfig.concat(globalEnvConfig);
    const missingVariables = [];
    for(let i = 0, n = envConfig.length; i < n; i++) {
        if(process.env[envConfig[i]] === "" || process.env[envConfig[i]] === undefined) {
            missingVariables.push(envConfig[i]);
        }
    }
    if(missingVariables.length !== 0) throw new Error(`The following environment variables are empty: ${envConfig}`);
};
