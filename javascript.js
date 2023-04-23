// DECLARACIONES

let colors = [];
let square = document.querySelectorAll(".square");
let pickedColor;
let span = document.querySelector("#colorDisplay");
let mensaje = document.querySelector("span#message");
let clickedColor;
let h1 = document.querySelector("h1");
let numberOfSquares = 6;

// LLAMADOS

generateRandomColors(square.length);
pickColor();
span.textContent = `${pickedColor}`; // movemos esta línea al final de la función después de que se ha asignado un valor a pickedColor

//JUEGO

for (let i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i]; // le asigna color a los cuadrados
  square[i].addEventListener("click", function () {
    // cuando haces click en un cuadrado...
    clickedColor = square[i].style.backgroundColor; // almacena el color al que le hiciste click
    console.log(`Clicked Color: (${clickedColor})`);
    if (pickedColor != clickedColor) {
      // si es distinto cambia el color del cuadrado al del fondo y cambia el texto
      mensaje.textContent = "Try Again";
      square[i].style.backgroundColor = "black";
    } else {
      // si son  iguales cambia el texto y cambia el color del h1 y del resto de cuadrados al elegido
      mensaje.textContent = "Correct!";
      h1.style.backgroundColor = pickedColor;
      changeColors();
    }
  });
}

// FUNCIONES

function changeColors() {
  // cambia el color de todos los cuadrados
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = pickedColor;
  }
  reset.textContent = "Play Again?";
}

function pickColor() {
  // asigna un color aleatorio
  // for (let i = 0; i < colors.length; i++) {
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  // }
}

function randomColor() {
  // genera un color rgb aleatorio
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(numberOfSquares) {
  // pushea los colores aleatorios generados por la funcion randomColor dentro del arreglo colors
  colors = [];
  for (let i = 0; i < numberOfSquares; i++) {
    colors.push(randomColor());
  }
}

// BOTONES

let reset = document.querySelector("button#reset");
let easy = document.querySelector("#easyButton");
let hard = document.querySelector("#hardButton");

reset.addEventListener("click", function () {
  // botón resetea el juego
  colors = [];
  if (hard.classList.contains("selected")) {
    generateRandomColors(numberOfSquares);
    hard.classList.add("selected");
    easy.classList.remove("selected");
  } else {
    generateRandomColors(numberOfSquares);
    easy.classList.add("selected");
    hard.classList.remove("selected");
  }
  console.log(colors);
  pickColor();
  console.log(`Picked Color: (${pickedColor})`);
  span.textContent = `${pickedColor}`;
  h1.style.backgroundColor = "black";
  mensaje.textContent = "";
  reset.textContent = "New Colors";
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
});

hard.addEventListener("click", function () {
  // botón cambia dificultad a hard
  numberOfSquares = 6;
  easy.classList.remove("selected");
  hard.classList.add("selected");
  colors = [];
  generateRandomColors(numberOfSquares);
  console.log(colors);
  pickColor();
  console.log(`Picked Color: (${pickedColor})`);
  span.textContent = `${pickedColor}`;
  h1.style.backgroundColor = "black";
  mensaje.textContent = "";
  reset.textContent = "New Colors";
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].style.display = "block";
  }
  clickedColor = null;
});

easy.addEventListener("click", function () {
  // botón cambia dificultad a easy
  numberOfSquares = 3;
  hard.classList.remove("selected");
  easy.classList.add("selected");
  colors = [];
  generateRandomColors(numberOfSquares);
  console.log(colors);
  pickColor();
  console.log(`Picked Color: (${pickedColor})`);
  span.textContent = `${pickedColor}`;
  h1.style.backgroundColor = "black";
  for (let i = 0; i < square.length; i++) {
    if (square[i].classList.contains("cuadrado-easy")) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    } else {
      square[i].style.display = "none";
    }
  }
  clickedColor = null;
});

console.log(colors);
console.log(`Picked Color: (${pickedColor})`);
