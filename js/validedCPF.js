export function  isValidCpf(fieldCPF) {
  console.log(fieldCPF, "cpf >>>>")
  if( isNumbersRepited(fieldCPF)
     || validedCPFDigVerOne(fieldCPF)
     || validedCPFDigVerTwo(fieldCPF)
    ){

      console.log("CPF invalido tente novamente")
    } else {
      console.log("CPF valido")
    }

}

function isNumbersRepited(fieldCPF){
  const parseCPF = fieldCPF.split("");
  let isRepited = true;

  for(let i = 1; i < parseCPF.length; i++) {
    parseCPF[i -1] === parseCPF[i] ? isRepited : isRepited = false;
      if(!isRepited) return isRepited;
    }

  return isRepited;
}

function validedCPFDigVerOne(fieldCPF){
  let soma = 0
  let multiplication = 10

  for(let i = 0; i < 9; i++) {
    soma +=fieldCPF[i] * multiplication
    multiplication -= 1
  }

  soma = (soma * 10 ) % 11

  if (soma == 10 || soma == 11){
    soma = 0
  }

  return soma != fieldCPF[9]
}




function validedCPFDigVerTwo(fieldCPF){
  let soma = 0
  let multiplication = 11

  for(let i = 0; i < 10; i++) {
    soma +=fieldCPF[i] * multiplication
    multiplication -= 1
  }

  soma = (soma * 10 ) % 11

  if (soma == 10 || soma == 11){
    soma = 0
  }

  return soma != fieldCPF[10]
}

