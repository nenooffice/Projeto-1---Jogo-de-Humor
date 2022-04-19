const botao_m = document.querySelector("#botao_m");
const humor_m = document.querySelector("#humor_m");
let imagem_m = document.getElementById("imagem_m");

let a = 0;


botao_m.addEventListener("mouseover", function(){
    botao_m.style.backgroundColor = "grey";
});

botao_m.addEventListener("mouseout", function(){
    botao_m.style.backgroundColor = "orange";
});

botao_m.addEventListener("click", function(){
  
  if(a == 0){
  humor_m.innerText = "Vermelho";
  imagem_m.src = "./assets/vermelho.png";
}
  else if (a == 1){
  humor_m.innerText = "Amarelo";
  imagem_m.src = "./assets/amarelo.png";
}
  else if (a == 2){
  humor_m.innerText = "Verde";
  imagem_m.src = "./assets/verde.png";
}
  else if (a == 3){
  humor_m.innerText = "Azul";
  imagem_m.src = "./assets/azul.png";
}
  a++;

  if(a == 4){
    a = 0;
  }
});