// buisiness
function eq(side1, side2, side3) {
    return (side1 === side2 && side2 === side3);
}

function iso(side1, side2, side3) {
    return (side1 === side2 || side1 === side3 || side2 === side3);
}

function sca(side1, side2, side3) {
    return (side1 + side2 === side3 || side1 + side3 === side2 || side2 + side3 === side1);
}

function check(side1, side2, side3) {
    if (eq(side1, side2, side3)) {
        return "Equilateral";
    } else if (iso(side1, side2, side3)) {
        return "Isosceles";
    } else if (sca(side1, side2, side3)) {
        return "Scalene";
    } else {
        return "NONE";
    }
}

// ui

addEventListener("load", function() {
    const form = this.document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const res = document.getElementById("result");

        const side1 = parseInt(document.getElementById("side-1").value);
        const side2 = parseInt(document.getElementById("side-2").value);
        const side3 = parseInt(document.getElementById("side-3").value);
    })
});