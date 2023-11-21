let uno = document.querySelector(".uno");
let dos = document.querySelector(".dos");
let tres = document.querySelector(".tres");
let cuatro = document.querySelector(".cuatro");
let cinco = document.querySelector(".cinco");
let seis = document.querySelector(".seis");
let siete = document.querySelector(".siete");
let ocho = document.querySelector(".ocho");
let nueve =  document.querySelector(".nueve");
let casilla = document.querySelectorAll(".casilla");
let txt = document.querySelectorAll(".txt");
let inicio = document.querySelector('.jugar');
let restart = document.querySelector('.reiniciar');
let btn = document.querySelector(".btn");
let puntosX = document.querySelector(".puntosX");
let puntosO = document.querySelector(".puntosO");
let color = document.querySelector(":root");
let btnColor = document.querySelector(".color");
let pos = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
let cruz = true;
let circulo = false;
let green = false;
let blue = true;
let red = false;
let puntajeO = 0;
let puntajeX = 0;
let winner;
let enJuego;
let ocupada;
let wnr = document.querySelector(".wnr");

restart.addEventListener("click", ()=>{
  if (enJuego == false) {
    enJuego = true;
  }
  for(i = 0; i < 9; i++){
    txt[i].innerHTML = "";
    uno = "";
    dos = "";
    tres = "";
    cuatro = "";
    cinco = "";
    seis = "";
    siete = "";
    ocho = "";
    nueve = "";
  }
  jugar();
})

inicio.addEventListener("click", ()=>{
  enJuego = true;
  jugar();
  alert("que comience el juego");
  btn.removeChild(inicio);
  restart.classList.add("show");
})


const jugar = ()=>{
  for (let i = 0; i < casilla.length; i++) {
   casilla[i].addEventListener("click", ()=> {
    if (enJuego) {
      if (txt[i].textContent != "") {
      }else{
       if(cruz) {
        txt[i].textContent += "x";
        posicion(casilla[i]);
        cruz = false;
        circulo = true;
      }else{
        txt[i].textContent += "o";
        posicion(casilla[i]);
        cruz = true;
        circulo = false;
      }
    }
  }else{
    console.log("el juego ha terminado");
  };
})}
 }




 const posicion = (casilla)=>{
  for (let x = 0; x <= 8; x++) {
    if (casilla.classList.contains(pos[x])) {
      if (cruz) {
        punto(pos[x], "x");
        x = 9;
      }else{
        punto(pos[x], "o");
        x = 9;
      }
    }
  }
}



const punto = (posicion, jugador)=>{
  switch(posicion){
    case "uno":
    uno = jugador;
    break;

    case "dos":
    dos = jugador;
    break;

    case "tres":
    tres = jugador;
    break;

    case "cuatro":
    cuatro = jugador;
    break;

    case "cinco":
    cinco = jugador;
    break;

    case "seis":
    seis = jugador;
    break;

    case "siete":
    siete = jugador;
    break;

    case "ocho":
    ocho = jugador;
    break;

    case "nueve":
    nueve = jugador;
    break;

    default:
    console.log("error");
    break;
  }
  verificar();
}

const verificar  = ()=> {
  if(uno === "x" && dos === "x" && tres === "x"){ 
    alert("Gano el jugador de las X");
    winner = "X";
    acabarJuego();

  }else if(uno === "x" && cuatro === "x" && siete === "x"){
    alert("Gano el jugador de las X");
    winner = "X";
    acabarJuego();

  }else if(uno === "x" && cinco === "x" && nueve === "x"){
   alert("Gano el jugador de las X");
   winner = "X";
   acabarJuego();

 }else if(dos === "x" && cinco === "x" && ocho === "x"){
   alert("Gano el jugador de las X");
   winner = "X";
   acabarJuego();

 }else if(cuatro === "x" && cinco === "x" && seis === "x"){                                    
   alert("Gano el jugador de las X");
   winner = "X";
   acabarJuego();

 }else if(siete === "x" && ocho === "x" && nueve === "x"){                                   
   alert("Gano el jugador de las X");
   winner = "X";
   acabarJuego();

 }else if(tres === "x" && seis === "x" && nueve === "x"){                                    
  alert("Gano el jugador de las X");
  winner = "X";
  acabarJuego();
  
}else if(siete === "x" && cinco === "x" && tres === "x"){                                    
  alert("Gano el jugador de las X");
  winner = "X"; 
  acabarJuego();
  
}else if(uno === "o" && dos === "o" && tres === "o"){ 
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  
}else if(uno === "o" && cuatro === "o" && siete === "o"){
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  
}else if(uno === "o" && cinco === "o" && nueve === "o"){
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(dos === "o" && cinco === "o" && ocho === "o"){
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(cuatro === "o" && cinco === "o" && seis === "o"){                                    
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(siete === "o" && ocho === "o" && nueve === "o"){                                   
 alert("Gano el jugador de las o");
 winner = "O";
 acabarJuego();
 
}else if(tres === "o" && seis === "o" && nueve === "o"){                                    
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  
}else if(siete === "o" && cinco === "o" && tres === "o"){                                    
  alert("Gano el jugador de las o");
  winner = "O";
  acabarJuego();
  ;
}

}

const acabarJuego = ()=>{
  if (winner === "X") {
    puntajeX += 1;
    puntosX.textContent =  puntajeX;
    wnr.classList.add("win");
  }else{
    puntajeO += 1;
    puntosO.textContent =  puntajeO;
  }
  for (let i = 0; i < casilla.length; i++) {
    enJuego = false;
  }
}







if(localStorage.getItem('Red') === 'true'){
  Red();
} else if (localStorage.getItem('blue') === 'true'){
  Blue();
}else if (localStorage.getItem('green') === 'true'){
  Green();
}

function Blue() {
  color.style.setProperty('--colorPrincipal', '#29ddfd');
  color.style.setProperty('--blanco', '#fff');
  color.style.setProperty('--negro', '#000');
  color.style.setProperty('--hover', '#222');
  blue = true;
}

function Red() {
  color.style.setProperty('--colorPrincipal', '#ff0571');
  color.style.setProperty('--blanco', '#fff');
  color.style.setProperty('--negro', '#000');
  color.style.setProperty('--hover', '#222');
  red = true;
} 

function Green() {
  color.style.setProperty('--colorPrincipal', '#00ff00');
  color.style.setProperty('--blanco', '#fff');
  color.style.setProperty('--negro', '#000');
  color.style.setProperty('--hover', '#222');
  green = true;
} 


btnColor.addEventListener('click', () => {
  if(red) {
    Blue();
    red = false;
    localStorage.removeItem('red');
    localStorage.setItem('blue', 'true');
  }else if(blue) {
    Green();
    blue = false;
    localStorage.removeItem('blue');
    localStorage.setItem('green', 'true');
  } else if(green){
    Red();
    green = false;
    localStorage.removeItem('green');
    localStorage.setItem('red', 'true');    }
  })


