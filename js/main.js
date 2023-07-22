let siete = document.getElementById("btn7");
let ocho = document.getElementById("btn8");
let nueve = document.getElementById("btn9");
let mas = document.getElementById("btnMas");
let cuatro = document.getElementById("btn4");
let cinco = document.getElementById("btn5");
let seis = document.getElementById("btn6");
let menos = document.getElementById("btnMenos");
let uno = document.getElementById("btn1");
let dos = document.getElementById("btn2");
let tres = document.getElementById("btn3");
let por = document.getElementById("btnPor");
let cero = document.getElementById("btn0");
let punto = document.getElementById("btnPunto");
let igual = document.getElementById("btnIgual");
let entre = document.getElementById("btnEntre");
let clearAll = document.getElementById("clear");
let clearLast = document.getElementById("clearLast");


let lblText = document.getElementById("lblText");
let resultado = document.getElementById("resultado");

let num1 = "";
let num2 = "";
let operacion = null;
let resultadoOperacion = null;
let otraOperacion = true;
let operacionEscrita;
let pasarAlNum2 = false;
let num;
let terminarNum2 = false;
let llenarNum1 = true;
let llenarNum2 = false;
let operacionHecha = false;

siete.addEventListener("click", function (event) {
  event.preventDefault();
  num = this.innerText;
  number(num);
});

ocho.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  nueve.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  seis.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  cinco.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  cuatro.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  tres.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  dos.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });


  uno.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  cero.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

  punto.addEventListener("click", function (event) {
    event.preventDefault();
    num = this.innerText;
    number(num);
  });

mas.addEventListener("click", function (event) {
  if (!operacionHecha){

  event.preventDefault();
  operacion = this.innerText;
  resultado.value += this.innerText;
  pasarAlNum2 = true;
  llenarNum2 = true;
  llenarNum1 = false;
  operacionHecha = true;
}});

menos.addEventListener("click", function (event) {
  if (!operacionHecha){

    event.preventDefault();
    operacion = this.innerText;
    resultado.value += this.innerText;
    pasarAlNum2 = true;
    llenarNum2 = true;
    llenarNum1 = false;
    operacionHecha = true;
  }});

  por.addEventListener("click", function (event) {
    if (!operacionHecha){

    event.preventDefault();
    operacion = this.innerText;
    resultado.value += this.innerText;
    pasarAlNum2 = true;
    llenarNum2 = true;
    llenarNum1 = false;
    operacionHecha = true;
  }});

  entre.addEventListener("click", function (event) {
    if (!operacionHecha){
      event.preventDefault();
      operacion = this.innerText;
      resultado.value += this.innerText;
      pasarAlNum2 = true;
      llenarNum2 = true;
      llenarNum1 = false;
      operacionHecha = true;
    }
  });

  clearAll.addEventListener("click", function(event){
    event.preventDefault();
    num1 = "";
    num2 = "";
    resultado.value = "";
    operacionHecha = false;
  });

  clearLast.addEventListener("click", function(event){
    event.preventDefault();
    if (pasarAlNum2){
      num2 = String(num2);
      num2 = num2.substring(0, num2.length - 1);
      resultado.value = `${num1} ${operacion} ${num2}`;

    }
    if (!pasarAlNum2){
      num1 = String(num1);
      num1 = num1.substring(0, num1.length - 1);
      resultado.value = num1;
    }

    if(num2 == ""){
      operacionHecha = false;
      operacion = "";
      resultado.value = num1;
    } 
  });

igual.addEventListener("click", function (event) {
  event.preventDefault();
  hacerOperacion();
  siguienteNumero = true;
});

function number(num) {
  if (llenarNum1) {
    if (!pasarAlNum2) {
      num1 += num;
      num1 = num1;
      resultado.value += num;
    } else {
      num1 = num;
      resultado.value = num;
    }
  }

  if (llenarNum2) {
    if (!terminarNum2) {
      num2 += num;
      resultado.value += num;
    } else {
      num2 = num;
      resultado.value += num;
      siguienteNumero = false;
    }
  }
}

function hacerOperacion() {
  operacionEscrita = `${num1} ${operacion} ${num2}`;
  terminarNum2 = true;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operacion) {
    case "+":
      num1 = num1 + num2;
      break;
    case "-":
      num1 = num1 - num2;
      break;
    case "/":
      num1 = num1 / num2;
      num1 = parseFloat(num1).toFixed(5);
      break;
    case "x":
      num1 = num1 * num2;
      break;
  }

  lblDatos.innerHTML = operacionEscrita;
  resultado.value = parseFloat(num1).toFixed(5);
  otraOperacion = true;
  pasarAlNum2 = false;
  terminarNum2 = false;
  llenarNum1 = true;
  llenarNum2 = false;
  num2 = "";
  operacionHecha = false;
}