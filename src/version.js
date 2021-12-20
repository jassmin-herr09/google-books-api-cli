//async keyword is optional here.

export async function version() {
    const packagejson = require('../package.json');
    console.log(packagejson.version);
}