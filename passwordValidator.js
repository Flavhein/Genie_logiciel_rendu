function isValide(mdp) {
    if (mdp.length < 8) {
        return false
    }

    let regexDigit = /\d/;
    if (!regexDigit.test(mdp)){
        return false
    }

    var regexLetter = /[a-zA-Z]/g;
    if (!regexLetter.test(mdp)){
        return false
    }
    return true 
}

module.exports = isValide;

