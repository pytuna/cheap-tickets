
const {authenticate} = require("./authenticate")
const {authorize} = require("./authorize")

function auth(...arr){
    
    return [authenticate, authorize(arr)]
}

module.exports = {
    auth, authenticate, authorize
}