function changeColor() {
const corbody = document.getElementById('cor-body');
const fundoTexto = document.getElementById('cor-texto');
const links = document.getElementById('cor-a');
const corP = document.getElementById('cor-p');
const corh1 = document.getElementById('cor-h1');
const corh2 = document.getElementById('cor-h2');
function cor(tag,idCor){ 
  if(tag === 'body'){
    document.querySelectorAll(tag).forEach((item) => {
      item.style.backgroundColor = idCor.value;
    })
  } else if(tag === 'p'){
    document.querySelectorAll(tag).forEach((item) => {
      item.style.color = idCor.value;
    })
  } else if (tag === 'h1'){
    document.querySelectorAll(tag).forEach((item) => {
      item.style.color = idCor.value;
    })
  } else if (tag === 'h2'){
    document.querySelectorAll(tag).forEach((item) => {
      item.style.color = idCor.value;
    })
  } else if (tag === '#caixa'){
    document.querySelectorAll(tag).forEach((item) => {
      item.style.backgroundColor = idCor.value;
    })
  } else if (tag === 'a'){
    document.querySelectorAll(tag).forEach((item) => {
      item.style.color = idCor.value;
    })
  }
}
corbody.addEventListener('change', function(){
  cor('body',corbody);
});
corP.addEventListener('change', function(){
  cor('p',corP);
});
corh1.addEventListener('change', function(){
  cor('h1',corh1);
});
corh2.addEventListener('change', function(){
  cor('h2',corh2);
});
fundoTexto.addEventListener('change', function(){
  cor('#caixa', fundoTexto);
});
links.addEventListener('change', function(){
  cor('a', links);
});
}
changeColor();

function trocarFont(){
const font = document.getElementById('fontes');
function fontFamily() {
  const div = document.getElementById('caixa');
  div.style.fontFamily = font.value;
}
font.addEventListener('change', fontFamily);
}
trocarFont();

function sizeFont() {
const botao1 = document.getElementById('aumentar');
const botao2 = document.getElementById('diminuir');
const elemento = document.querySelectorAll('#caixa, p, address');
let fontSize = 100;
elemento.forEach((item) => {
function fontAumentar() {
  fontSize = fontSize + 1;
  item.style.fontSize = fontSize + 10 + '%';
}
function fontDiminuir() {
  fontSize = fontSize - 1;
  item.style.fontSize = fontSize - 10 + '%';
}
botao1.addEventListener('click', fontAumentar)
botao2.addEventListener('click', fontDiminuir)
})
}
sizeFont();

function navTab() {
const links = document.querySelectorAll('header a');
const imagens = document.querySelectorAll('#caixa img')
function mudarImagem(index) {
  imagens.forEach((imagem) => {
    imagem.classList.remove('active');
  })
  imagens[index].classList.add('active')
}
links.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    mudarImagem(index)
  })
})
}
navTab();



// const corBody = document.getElementById('cor-body');
// function input() {
//    document.querySelectorAll('body').forEach((item) => {
//     item.style.backgroundColor = corBody.value;
//   })
// }
// corBody.addEventListener('change', input());


// const corTexto = document.getElementById('cor-texto');
// function input() {
//   document.querySelectorAll('#caixa').forEach((item) => {
//     item.style.backgroundColor = corBody.value;
//   })
// }
// corBody.addEventListener('change', input);


// function MudarCor(idInput, tag) {
//   this.input = document.getElementById(idInput);
//   this.cor = function() {
//     document.querySelectorAll(tag).forEach((item) => {
//       item.style.backgroundColor = idInput.value;
//     })
//   }
//   this.input.addEventListener('change', this.cor);
// }

// const body = new MudarCor('cor-body', 'body');


