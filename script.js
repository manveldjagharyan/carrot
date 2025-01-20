const sound = document.getElementById('clickSound');
const plus = document.getElementById('myButton1');
const minus = document.getElementById('myButton2');
const array = document.getElementById('array');
const priceElement = document.getElementById('price');

let Kg = 1.0;
let Grams = 0;
const unitPricePerKg = 400;

function updateDisplay() {
    const displayKg = Math.floor(Kg);
    const displayGrams = Grams;
    array.textContent = displayKg + '.' + displayGrams;
    const Price = Kg * unitPricePerKg + (Grams / 1000) * unitPricePerKg;
    priceElement.textContent = Math.round(Price) + ' AMD';
}

plus.addEventListener('click', () => {
    Grams += 100;
    if (Grams >= 1000) {
        Kg += 1;
        Grams -= 1000;
    }
    updateDisplay();
    sound.currentTime = 0;
    sound.play();
});

minus.addEventListener('click', () => {
    if (Kg > 1 || (Kg === 1 && Grams > 0)) {
        Grams -= 100;
        if (Grams < 0) {
            if (Kg > 1) {
                Kg -= 1;
                Grams += 1000;
            } else {
                Grams = 0;
            }
        }
        updateDisplay();
        sound.currentTime = 0;
        sound.play();
    }
});
updateDisplay();