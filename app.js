
let numberMaxim = 5000
let numberSecret = parseInt(Math.random() * numberMaxim + 1)
let choice
let tentativa = 1

//enquanto...
while (choice != numberSecret) {

// para armazenar (let choice = prompt) let salva
choice = prompt(` Choice a number until 1 and ${numberMaxim}`);

    //primeiro código, sem o while
if (numberSecret == choice) {
    break; // para o código
    console.log("You Win, congratulations! The secret Number is" + numberSecret + "with" + tentativa + "tentatives");
    // Juntar STRING and FUNCTIONS - `` + ${}
    alert(`You Win, congratulations! The secret Number is ${numberSecret} with ${tentativa} tentatives`);
} else{
    if (numberSecret > choice) {
       alert(`The number is bigger than ${choice}`);
    } else{
        alert(`The number is mall than ${choice}`);
    }

    //console.log("You dont Win, sorry. Try in next time!");
    //alert("You dont Win, sorry. Try in Next Time!");
}

//tentativa = tentativa + 1
tentativa++

};

// operador ternário
let wordTentative = tentativa > 1 ? 'tentatives' : 'tentative';
 alert(`You Win, congratulations! The secret Number is ${numberSecret} with ${tentativa} ${wordTentative}`)

//if (tentativa > 1) {
//    alert(`You Win, congratulations! The secret Number is ${numberSecret} with ${tentativa} tentatives!`);    
//} else{
//    alert(`You Win, congratulations! The secret Number is ${numberSecret} with ${tentativa} tentative!`);
//}

