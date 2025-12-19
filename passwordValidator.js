function isValide(mdp) {
    if (mdp.length < 8){
        return false
    }
    else {return true}
}

module.exports = isValide;

