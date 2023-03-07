function verificaNumerosRepetidos(cpf) {
  var arrayCPF = cpf.split("");
  var numerosRepetidos = true;
  for(let i = 1; i < arrayCPF.length; i++){
      arrayCPF[i -1] == arrayCPF[i] ? numerosRepetidos : numerosRepetidos = false;
      if(!numerosRepetidos){
          return numerosRepetidos;
      }
  }
  return numerosRepetidos;
}

console.log(verificaNumerosRepetidos("111111111111"))


function validaNumerosRepetidos(cpf) {
  const numerosRepetidos = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
  ]

  return numerosRepetidos.includes(cpf)
}


export function data (age){
  console.log(age)
  const dateAtual = new Date()
  const dateField = new Date(age)
  const result =  dateAtual - dateField
  const anos = 1000 * 60 * 60 * 24 * 365;
  console.log(result / anos )
}


export function legalAge(age) {
  const dateAtual = new Date().getUTCFullYear()
  const dateField = new Date(age).getUTCFullYear()
  const result = dateAtual - dateField
  if( result < 19){
    console.log("e menor de idade")
  } else console.log("e maior de idade")
}




function diferencaEmAnos(data1, data2) {
  const diff = new Date(data1) - new Date(data2);
  const millisecondsEmUmAno = 1000 * 60 * 60 * 24 * 365;
  return Math.abs(diff / millisecondsEmUmAno);
}



const message = "meu nome e  carlos  meu Nome e bia meu nome e joao"

const result = message.replace(/nome/gi, "gracadddddddddd")

console.log(result)