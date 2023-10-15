
/* condicionais do html */
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


 //pegar a tag img
  const img = document.querySelector("#profile img")

  //substiruir a imagem
  if (html.classList.contains('light')) {
    //se tiver o light mode, adiconar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se não tiver sem o light a imagem normal.
    img.setAttribute('src', './assets/avatar.png')
  }
}    
