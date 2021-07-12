var validUrl = require('valid-url');

function checkUrl(urlText) {
    console.log("::: Running checkForURL :::", urlText);
    
    if (validUrl.isUri(urlText)){
        return true
    } else {
        return false
    }
}

export {checkUrl}