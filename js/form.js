import {isValidCpf} from './validedCPF.js'
import { legalAge } from './lvalidedge.js'

const fieldsForm = document.querySelectorAll("[required]")

fieldsForm.forEach((field) => {
field.addEventListener('blur', () => validField(field) )
})

function validField(field) {
  const cpf = field.value.replace(/\.|-/g, "")
  if(field.name === "cpf" && cpf> 10){
    isValidCpf(cpf)
  }
  if (field.name === "aniversario" && field.value !== "") {
    legalAge(field.value)
  }

  console.log(field.validity)
}
