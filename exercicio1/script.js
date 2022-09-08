// Crie um código que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, imprima no console a mensagem: "o número é 
//par".
const num = Number(prompt('Insira um numero'))

if((num%2) === 0){
    console.log("Seu numero e par");
}else{
    console.log('seu numero e impar')
}