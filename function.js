
const selectors = {
    casillaAzul: '[data-colorBlue]',
    casillaRojo: '[data-colorRed]',
    casillaPara: '[data-para]',
    casillaReset: '[data-colorNegro]'
} 

const BotonElementAzul = document.querySelector(selectors.casillaAzul)
const BotonElementRojo = document.querySelector(selectors.casillaRojo)
const TextChange = document.querySelector(selectors.casillaPara)
const ResetColor = document.querySelector(selectors.casillaReset)
console.log(BotonElementAzul);
BotonElementAzul.addEventListener('click', function () { 
    TextChange.classList.add('colorazul');
    TextChange.classList.remove('colorrojo');
    //var TextChange = document.querySelector(selectors.casillaPara);
      
    if (TextChange.innerHTML === "Cualquier texto acá") {
        TextChange.innerHTML = "UwU";
    } else {
        TextChange.innerHTML = "UwU";
    }
}) 
BotonElementRojo.addEventListener('click', function changeColor() { 
    TextChange.classList.add('colorrojo'); 
    TextChange.classList.remove('colorazul');
    //var CambioTextRojo = document.querySelector(selectors.casillaPara);
      
    if (TextChange.innerHTML === "Cualquier texto acá") {
        TextChange.innerHTML = "EwE";
    } else {
        TextChange.innerHTML = "EwE";
    }
}) 
ResetColor.addEventListener('click', function changeColor() {
    TextChange.classList.remove('colorazul');
    TextChange.classList.remove('colorrojo');
    if (TextChange.innerHTML !== "Cualquier texto acá") {
        TextChange.innerHTML = "Cualquier texto acá";
    } 
})



ResetColor.addEventListener('click', () => {
    (input => input.value = '')    
})
