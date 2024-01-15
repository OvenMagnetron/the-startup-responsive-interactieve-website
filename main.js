// Kleine schets hoe ik denk dat de JS er ongeveer uit moet gaan zien.

var magicMode = false

function checkMagic() {
    if (magicMode == false) {

    } else if (magicMode == true) {

    } else {
        console.log("Error: Magicmode is", magicMode)
    }
}

function toggleMagic() {
    if (buttonispressed) {
        var magicMode = true;
        checkMagic;

    } else {
        var magicMode = false;
        checkMagic;
    }
}