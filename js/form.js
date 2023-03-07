import {isValidCpf} from './validedCPF.js';
import { legalAge } from './lvalidedge.js';
import { mensagens }from './messageError.js';

const form = document.querySelector('[data-formulario]');
form.addEventListener('submit', (event)=> {
  event.preventDefault();

  const dadosCadastro = {
    // "nome": event.target.elements["nome"].value,
    // "email": event.target.elements["email"].value,
    // "rg": event.target.elements["rg"].value,
    // "cpf": event.target.elements["cpf"].value,
    // "aniversario": event.target.elements["aniversario"].value
    [event.target.elements["nome"]]: event.target.elements.value
  }

  localStorage.setItem('userCad', JSON.stringify(dadosCadastro))

  window.location.href = "../pages/abrir-conta-form-2.html";
})


const fieldsForm = document.querySelectorAll("[required]");

const typeError = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
]

fieldsForm.forEach((field) => {
field.addEventListener('blur', () => validField(field) )
field.addEventListener('invalid', (e) =>{
  e.preventDefault()
})
})

function validField(field) {
  const cpf = field.value.replace(/\.|-/g, "")
  let message;
  field.setCustomValidity("")
  if(field.name === "cpf" && cpf> 10){
    isValidCpf(cpf)
  }
  if (field.name === "aniversario" && field.value !== "") {
    legalAge(field)
  }

  console.log(field.validity)

  typeError.forEach((error) => {
    if(field.validity[error]){
      message = mensagens[field.name][error]

    }

  })

  const messageError = field.parentNode.querySelector(".mensagem-erro")
  const chekInput = field.checkValidity()
  console.log(messageError)

  if (!chekInput) {
    messageError.textContent = message
  }else {
    messageError.textContent = ""
  }

}
