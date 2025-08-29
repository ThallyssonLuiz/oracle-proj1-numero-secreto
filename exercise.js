
// Exercício One = Alert VS Prompt
let Mensagemdeboasvindas = "Bem vindo ao app"
alert('Mensagemdeboasvindas')



let senhaDoSistema = "senhaTeste!";

let senha = prompt("Digite a senha do sistema:");

if (senha = senhaDoSistema){
    alert("Acesso ao sistema garantido");
}

// Desáfio One : IF and else

let idade = prompt("Digite sua idade:");

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Exercise Two : While
let contador = 1;

while (contador < 4) {
  console.log('Executando a interação ' + contador);
  contador = contador + 1;
}