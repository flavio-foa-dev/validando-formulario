const btnPhoto = document.querySelector('[data-video-botao]')
const fieldCamera = document.querySelector('[data-camera]')
const movie = document.querySelector('[data-video]')
const btnTirarPhoto = document.querySelector('[data-tirar-foto]')
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";

btnPhoto.addEventListener("click", async() => {
  const camera = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false})

    btnPhoto.style.display = "none"
    fieldCamera.style.display = "block"

    movie.srcObject = camera
})

btnTirarPhoto.addEventListener("click", () => {
 console.log("Tirar Photo")

  canvas.getContext('2d').drawImage(movie, 0, 0, canvas.width, canvas.height);

  imagemURL = canvas.toDataURL('image/jpeg', 1.0);

  fieldCamera.style.display = "none"
  mensagem.style.display = "block"

  //movie.srcObject.getTracks().forEach(track => track.stop())

})


botaoEnviarFoto.addEventListener("click", () =>{
  const dadoCad = JSON.parse(localStorage.getItem('userCad'))
  dadoCad.image = imagemURL;

  console.log(dadoCad)
  localStorage.setItem('userCad', JSON.stringify(dadoCad))

  window.location.href = "../pages/abrir-conta-form-3.html"
})
