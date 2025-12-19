function isLongEnough(mdp) {
    if (mdp.length < 8) {
        return false
    }
    return true
}
module.exports = isLongEnough