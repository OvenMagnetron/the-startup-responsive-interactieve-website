// Kleine schets hoe ik denk dat de JS er ongeveer uit moet gaan zien.

let magicMode = false;

function checkMagic() {
    var defaultElements = document.querySelectorAll(".default");
    var magicElements = document.querySelectorAll(".magic");

    if (magicMode == false) {
        magicElements.forEach(function(element) {
            element.style.display = 'none';
        });
        defaultElements.forEach(function(element) {
            element.style.display = 'block';
        });

        magicMode = true;
    } else if (magicMode == true) {
        magicElements.forEach(function(element) {
            element.style.display = 'block';
        });
        defaultElements.forEach(function(element) {
            element.style.display = 'none';
        });

        magicMode = false;
    } else {
        console.log("Error: Magicmode is", magicMode);
    }
}

function closeDetails(details) {
    details.removeAttribute('open');
}

// var detailsElements = document.querySelectorAll("details");

// detailsElements.forEach((details) => {
//     details.addEventListener('mouseover'); {
//         details.removeAttribute('open');
//     }
// });

window.onload = function() {
    checkMagic();
};