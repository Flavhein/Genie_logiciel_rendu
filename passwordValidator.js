function isValide(mdp) {
    if (mdp.length < 8) {
        return false
    }

    let regex = /\d/;
    if (!regex.test(mdp)){
        return false
    }
    return true 
}

module.exports = isValide;

