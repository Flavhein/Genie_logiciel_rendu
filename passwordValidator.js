function isValide(mdp) {
    if (mdp.length < 8){
        return false
    }
    if (!/\d/.test(mdp)){
        return false
    }
    return true
}

module.exports = isValide;

