"use strict";

// Ejercicios

/*Preguntar por nombre al usuario y saluder por nombre.
Si el usuario no escribe su nombre, saludar: "Hola, desconocido.*/
/*
function saludar() {
  if (nombre) {
    document.write("Bienvenido, " + nombre);
  } else {
    document.write("Bienvenido, desconocido.");
  }
}
const nombre = prompt("Hola, Cuál es tu nombre?");

saludar();
*/

// Leer nombre y apellido, saludar por nombre y apellido.
/*
function saludar() {
  if (nombre) {
    document.write("Bienvenido, " + nombre);
  } else {
    document.write("Bienvenido, desconocido.");
  }
}
const nombres = prompt("Hola, Cuál es tu nombre?");
saludar();
*/
/*
const nombre = prompt("Hola, Cuál es tu nombre?");
const apellido = prompt("Cuál es tu apellido?");

function saludar(nombre, apellido) {
  if (nombre || apellido) {
    document.write(`Bienvenido, ${nombre} ${apellido}`);
  } else {
    document.write("Bienvenido, desconocido.");
  }
}

saludar(nombre, apellido);
*/
// Pregunte al usuario si desea continuar, responder con hola o adiós.
/*
function preguntar() {
  if (confirm("Desea continuar?")) {
    document.write("Bienvenido");
  } else {
    document.write("Hasta la próxima");
  }
}

preguntar();
*/
// Leer nombre y edad, Mostrar si es o no mayor de edad.
/*
const nombre = prompt("Cuál es tu nombre?");
let edad = prompt("Qué edad tienes?");
function seguridad() {
  if (edad >= 18) {
    document.write(`${nombre} es mayor de edad, puede pasar.`);
  } else {
    document.write(`${nombre} es menor de edad, no puede pasar.`);
  }
}
seguridad();
*/
// Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.
/*
function perfil() {
  if (confirm("Es usted un cliente?")) {
    document.write("Mostrar catálogo");
  } else if (confirm("Eres del Staff?")) {
    document.write("Pedir Staff ID");
  } else if (confirm("Eres un admin?")) {
    document.write("Solicitar contraseña");
  } else {
    alert("Debes escoger una opción");
  }
}
perfil();
*/
// Leer un número, mostrar el doble de n.
/*
let numero = prompt("Dame un número que quieras duplicar");
function duplicar() {
  let duplica = numero * 2;
  document.write(`Tú número: ${numero} fue duplicado a: ${duplica}`);
}
duplicar();
*/
// Leer un número, mostrar la mitad de n.
/*
let numero = prompt("Dame un número que quieras partir a la mitad");
function doblar() {
  let mitad = numero / 2;
  document.write(`Tú número: ${numero} fue dividido a: ${mitad}`);
}
doblar();
*/
// Leer un número, mostrar si es positivo, negativo o cero.
/*
function mostrar() {
  let numero = prompt("Dame un número");
  if (numero < 0) {
    document.write(`Tú número es -Negativo`);
  } else if (numero > 0) {
    document.write(`Tú número es +Positivo`);
  } else if (numero == 0) {
    document.write(`Tú número es 0`);
  } else {
    document.write(`Digita un número válido`);
  }
}
mostrar();
*/
// Leer un número, mostrar si es par o impar.
/*
function mostrar() {
  let numero = prompt("Dame un número entero");
  if (numero % 2 == 0) {
    document.write(`Tú número es PAR`);
  } else if (numero) {
    document.write(`Tú número es IMPAR`);
  } else {
    document.write(`Digita un número válido`);
  }
}
mostrar();
*/
// Leer dos números, mostrar el mayor.
/*
let num1 = prompt(`Dame un primer numero`);
let num2 = prompt(`Dame un segundo numero`);

function mayor() {
  if (num1 > num2) {
    document.write(`${num1} es mayor`);
  } else if (num1 == num2) {
    document.write(`${num1} es igual a ${num2}`);
  } else {
    document.write(`${num2} es mayor`);
  }
}
mayor();
*/
// Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).
/*
let a = new Number(prompt(`Dame un primer numero`));
let b = new Number(prompt(`Dame un segundo numero`));

function operaciones() {
  let suma = a + b;
  let resta = a - b;
  let multiplicacion = a * b;
  let division = a / b;
  document.write(
    `Esta es su suma: ${suma}, esta es su resta: ${resta}, esta es su multiplicación: ${multiplicacion}, y esta es su dividisión: ${division}.`
  );
}

operaciones();
*/
// Leer dos números, mostrar la suma dividido en la resta.
/*
let a = new Number(prompt(`Dame un primer numero`));
let b = new Number(prompt(`Dame un segundo numero`));

function operacion() {
  let suma = a + b;
  let resta = a - b;
  let resultado = suma / resta;
  document.write(`Esta es su suma: ${suma}, esta es su resta: ${resta}. `);
  document.write(
    `Este es el resultado de la división entre la suma y la resta: ${resultado}`
  );
}

operacion();
*/

//Pedir un número y mostrar los números pares desde 1 hasta n
/*
function pares() {
  let numero = prompt("Dame un número");
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      document.write(i + "<br>");
    } else {
      //alert("Ingrese un número válido");
    }
  }
}
pares();
*/
// Pedir un número, mostrar la suma total desde 1 hasta n.
/*
function pares() {
  let numero = prompt("Dame un número");
  let suma = 0;
  let resultado = "";
  for (let i = 1; i <= numero; i++) {
    if (i % 1 === 0) {
      suma += i;
      resultado += `${i} + `;
    }
  }
  document.write(`${resultado.slice(0, -2)} = ${suma}`);
}
pares();
*/
// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
/*
function sumaDePares() {
  let n = prompt("Dame un número");
  let suma = 0;
  let resultado = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      suma += i;
      resultado += `${i} + `;
    }
  }
  document.write(`${resultado.slice(0, -2)} = ${suma}`);
}
sumaDePares();
*/
// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
/*
function sumaDeImpares() {
  let n = prompt("Dame un número");
  let suma = 0;
  let resultado = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      suma += i;
      resultado += `${i} + `;
    }
  }
  document.write(`${resultado.slice(0, -2)} = ${suma}`);
}
sumaDeImpares();
*/
// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
/*
function multiplos() {
  let numero = prompt("Dame un número");
  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0) {
      document.write(i + "<br>");
    } else {
      //alert("Ingrese un número válido");
    }
  }
}
multiplos();
*/
// Pedir un número, mostrar los números desde n hasta 0.
/*
function descendente() {
  let numero = prompt("Dame un número");
  for (numero; numero >= 0; numero--) {
    document.write(numero + "<br>");
  }
}
descendente();
*/
// Pedir un número, mostrar los números desde 0 hasta n.
/*
function ascendente() {
  let numero = prompt("Dame un número");
  for (let i = 0; numero >= i; i++) {
    document.write(i + "<br>");
  }
}
ascendente();
*/
// Pedir un número, mostrar su tabla de multiplicar desde 0 hasta 10.
/*
function tablas() {
  let numero = prompt("Dame un número");
  for (let tabla = 0; tabla <= 10; tabla++) {
    let frase = `${numero} * ${tabla} = ${numero * tabla} <br> `;
    document.write(frase);
  }
}
tablas();
*/
// Programa que retorne el área de un cuadrado.

const cuadradoArea = document.getElementById("cuadradoArea");
const resultadoAreaCuadrado = document.getElementById("resultadoAreaCuadrado");

cuadradoArea.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let lado = cuadradoArea.lado.value;
  let area = lado * lado;
  resultadoAreaCuadrado.textContent = `El area de un cuadrado es su alto: ${lado} por su ancho: ${lado}, resultado = ${area}`;
});

// Programa que retorne el resultado de convertir grados Fahrenheit a Celsius. (32°F − 32) × 5/9 = 0°C

const fahrenheitCelsius = document.getElementById("fahrenheitCelsius");
const resultadoGradosCelsius = document.getElementById(
  "resultadoGradosCelsius"
);

fahrenheitCelsius.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let fahrenheit = fahrenheitCelsius.fahrenheit.value;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  resultadoGradosCelsius.textContent = `${fahrenheit} Grados Fahrenheit equivalen a ${celsius} Grados Celsius.`;
});

// Ejercicios FIN---------------------------------------

// API
/*
const urlApi = "https://random-d.uk/api/v2/random";
const $pato1 = document.getElementById("btn-pato1");
const $pato2 = document.getElementById("btn-pato2");

$pato1.addEventListener("click", obtenerPato1);

$pato2.addEventListener("click", obtenerPato2);

function obtenerPato1() {
  fetch(urlApi)
    .then((res) => res.json())
    .then((obj) => console.log(obj))
    .catch((error) => console.log(error));
}

async function obtenerPato2() {
  try {
    const res = await fetch(urlApi);
    const obj = await res.json();
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
}
*/

// Ejercicio Boton1: Pinta del 1 al 100 y si es múltiplo de 3 pinta BIT, de 5 pinta Institute y de ambos pinta BITInstitute

const $btn1 = document.getElementById("btn1");

$btn1.addEventListener("click", btnEjemplo, { once: true });

function btnEjemplo() {
  console.log("soy un boton");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      const num1 = document.createElement("span");
      num1.classList.add("num1");
      num1.innerHTML = `BITInstitute `;
      text1.append(num1);
    } else if (i % 3 === 0) {
      const num1 = document.createElement("span");
      num1.classList.add("num1");
      num1.innerHTML = `BIT `;
      text1.append(num1);
    } else if (i % 5 === 0) {
      const num1 = document.createElement("span");
      num1.classList.add("num1");
      num1.innerHTML = `Institute `;
      text1.append(num1);
    } else {
      const num1 = document.createElement("span");
      num1.classList.add("num1");
      num1.innerHTML = `${i}, `;
      text1.append(num1);
    }
  }
}

//Buton 2: Pedir nombre por un label input y al oprimir un boton, mostras nombre de 3 maneras, 1: En mayusculas, 2: En minusculas, 3: Primera letra en Mayuscula.

const $btn2 = document.getElementById("btn2");
$btn2.addEventListener("click", mostrarNombre);

function mostrarNombre() {
  // Obtener el nombre
  let $nombre = document.getElementById("nombre").value; //value para que lea lo escrito
  // Cambiarlo a Mayusculas con el UpperCase
  let nombreMayus = `Nombre en Mayúsculas: ${$nombre.toUpperCase()}`;
  // Minusculas con el LowerCase
  let nombreMinus = `Nombre en Minúsculas: ${$nombre.toLowerCase()}`;
  // Capital con charAt(0).toUpperCase() que toma la primera letra y slice(1).toLowerCase() que toma el resto desde el segundo caracter
  let nombreCapital = `Tú Nombre: ${$nombre.charAt(0).toUpperCase()}${$nombre
    .slice(1)
    .toLowerCase()}`;
  // Mostrar resultados
  document.getElementById("text2").innerHTML =
    nombreMayus + "<br>" + nombreMinus + "<br>" + nombreCapital;
}
