function isValide(mdp,minDigit,minLetter,newRules=[/./]) {
    if (mdp.length < minDigit+minLetter){return false}
    if ((mdp.match(/\d/g) || []).length<minDigit){return false}
    if ((mdp.match(/[A-Za-z]/g) || []).length<minLetter){return false}
    for (let rule of newRules){if (!rule.test(mdp)){return false}}
    return true
}

module.exports = isValide;

