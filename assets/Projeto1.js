const botao_m = document.querySelector("#botao_m");
const humor_m = document.querySelector("#humor_m");
let imagem_m = document.getElementById("imagem_m");


botao_m.addEventListener("mouseover", function(){
    botao_m.style.backgroundColor = "grey";
});

botao_m.addEventListener("mouseout", function(){
    botao_m.style.backgroundColor = "orange";
});

botao_m.addEventListener("click", function(){
  
  if(imagem_m.src.match("./assets/preto.png")){
  humor_m.innerText = "Vermelho";
  imagem_m.src = "./assets/vermelho.png";
}
  else if (imagem_m.src.match("./assets/vermelho.png")){
  humor_m.innerText = "Amarelo";
  imagem_m.src = "./assets/amarelo.png";
}
  else if (imagem_m.src.match("./assets/amarelo.png")){
  humor_m.innerText = "Verde";
  imagem_m.src = "./assets/verde.png";
}
  else if (imagem_m.src.match("./assets/verde.png")){
  humor_m.innerText = "Azul";
  imagem_m.src = "./assets/azul.png";
}
  else if (imagem_m.src.match("./assets/azul.png")){
  humor_m.innerText = "Cor";
  imagem_m.src = "./assets/preto.png";
}
});