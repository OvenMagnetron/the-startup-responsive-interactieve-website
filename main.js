// Magic mode
let magicMode = false;

function checkMagic() {
    // Selecteer de standaard en magische elementen
    var defaultElements = document.querySelectorAll(".default");
    var magicElements = document.querySelectorAll(".magic");
    var bodyElement = document.querySelector("body")
    var magicWand = document.querySelector(".magic-wand")
    var magicStars = document.querySelectorAll(".magic-stars")

    // Controleer of magicMode uit staat
    if (magicMode == false) {
        // Verberg magische elementen en toon standaard elementen
        magicElements.forEach(function (element) {
            element.style.display = 'none';
        });
        defaultElements.forEach(function (element) {
            element.style.display = 'block';
        });

        magicWand.classList.remove('shake');

        magicStars.forEach(function (element) {
            element.classList.remove('poof');
        });

        bodyElement.classList.remove("stars");


        // Zet magicMode aan
        magicMode = true;
    }
    // Controleer of magicMode aan staat
    else if (magicMode == true) {
        // Toon magische elementen en verberg standaard elementen
        magicElements.forEach(function (element) {
            element.style.display = 'block';
        });
        defaultElements.forEach(function (element) {
            element.style.display = 'none';
        })

        magicWand.classList.add('shake');

        magicStars.forEach(function (element) {
            element.classList.add('poof');
        });

        bodyElement.classList.add("stars");

        // Zet magicMode uit
        magicMode = false;
    }
    // Onverwachte situatie
    else {
        console.log("Error: Magicmode is", magicMode);
    }
}

// Filters
function filterQ(e) {
    // Selecteer alle details elementen
    const Qmensen = document.querySelectorAll("details");
    // Haal het filter op uit het event
    let filter = e.target.dataset.filter;
    // Controleer het filter
    if (filter === '*') {
        // Toon alle personen
        Qmensen.forEach(person => person.classList.remove('hidden'));
    } else {
        // Toon of verberg personen op basis van het filter
        Qmensen.forEach(person => {
            person.classList.contains(filter) ?
                person.classList.remove('hidden') :
                person.classList.add('hidden');
        });
    }
}

// Window onload
window.onload = function () {
    // Voer checkMagic uit bij het laden van de pagina
    checkMagic();

    // Selecteer alle details elementen
    var detailsElements = document.querySelectorAll("details");

    // Probleem opgelost met het verspringen van de afbeeldingen
    detailsElements.forEach(details => {
        var image = details.querySelector("img");
        var aspectRatio = image.naturalWidth / image.naturalHeight;
        details.style.height = image.clientWidth / aspectRatio + "px";
    });

    // Voeg event listeners toe aan details elementen op basis van schermgrootte
    detailsElements.forEach(details => {
        if (screen.width <= 960) { // Controleer of schermgrootte kleiner is dan 960 pixels (mobiel)
            console.log("Scherm onder 960px, Scherm grootte is" + screen.width)
            details.addEventListener("click", function () { // Voor mobiel
                if (details.hasAttribute('open')) {
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
