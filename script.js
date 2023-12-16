document.addEventListener("DOMContentLoaded", (event) => {
    console.log("loaded")
    lotto("#lotto_649", 6, 49);
});

function lotto(directory, number, from_number) {
    const highNumber = from_number + 1;
    const element = document.querySelector(directory);
    const button = element.children[1];

    function random(min, max) {
        let randomARR = [];
        for(let e = 0; e < number; e++) {
            randomARR.push(Math.floor(Math.random() * (max - min) + min));
        }
        return randomARR;
    }
    button.addEventListener('click', function() {
        console.log(random(number, highNumber));
    });

}