const path = require("path");
console.log(__dirname)

const public_path = path.join(__dirname, "public");

module.exports = {
    public_path,
}