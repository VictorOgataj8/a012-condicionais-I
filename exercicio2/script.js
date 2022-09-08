let idade= Number(prompt('Insira sua idade'))
let IsMaiorDeIdade
let TerminouEM= confirm('Terminou o ensino medio?')
let isCursandoOutraFaculdade= prompt('esta cursando a faculdade?')

if(idade>=18){
    console.log('Maior de idade')

}else{
    console.log('Menor de idade')
}
if(TerminouEM===true){
    console.log('A pessoa terminou o ensimo medio')
}else{
    console.log('A pessoa nao terminou o ensino medio')
}
if(isCursandoOutraFaculdade === "sim"){
    console.log('Esta cursando uma faculdade')
}else{
    console.log('Nao esta cursando faculdade')
}