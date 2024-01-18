
// Magic mode
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

// Window onload
window.onload = function() {
    checkMagic();

    var detailsElements = document.querySelectorAll("details");

    detailsElements.forEach(details => {
        if (screen.width <= 960) { // Check of de grootte groter is dan 960pixels (mobiel)
            console.log("Scherm onder 960px, Scherm grootte is" + screen.width)
            details.addEventListener("click", function() { // Mobiel
                if (details.hasAttribute('open')){
                    details.removeAttribute('open');
                    console.log("Verwijder open")
                }
            });
        } else if (screen.width >= 960) {
            console.log("Scherm boven 960px, Scherm grootte is" + screen.width)
            details.addEventListener("mouseover", function () {
                if (!details.hasAttribute('open')) {
                    details.toggleAttribute('open');
                }
            });
            details.addEventListener("mouseout", function () {
                details.removeAttribute('open');
            });
        }
    })
};