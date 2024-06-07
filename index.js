import { getRandomColor } from "./javascript/simpleFlip.js";
import { getRandomHex } from "./javascript/hexFlip.js";
import { simpleToHex } from "./javascript/simpleToHex.js";

const simpleFlipBtn = document.querySelector("#simple-flip");
const colorCode = document.querySelector("#color-code");
const copyBtn = document.querySelector("#copy-btn");
const copyIcon = copyBtn.querySelector("i");
const copyText = copyBtn.querySelector("span");

const simpleFlip = () => {
	const color = getRandomColor();
	document.body.style.backgroundColor = color;
	colorCode.textContent = color;
};

// Simple flip button event listener
simpleFlipBtn.addEventListener("click", () => {
	simpleFlip();
});

const hexFlipBtn = document.querySelector("#hex-flip");

hexFlipBtn.addEventListener("click", () => {
	const hex = getRandomHex();
	document.body.style.backgroundColor = hex;
	colorCode.textContent = hex;
});

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		navLinks.forEach((link) => link.classList.remove("active"));

		e.target.classList.add("active");
	});
});

// Cargar con fragmen y un color random cargado
window.addEventListener("DOMContentLoaded", () => {
	simpleFlip();
});

copyBtn.addEventListener("click", () => {
	// Crear un elemento de texto temporal
	const tempElement = document.createElement("textarea");
	const colorHex = simpleToHex(colorCode.textContent);
	console.log(colorHex);
	tempElement.value = colorHex; // Establecer el texto a copiar como el contenido del span
	document.body.appendChild(tempElement); // Agregar el elemento al cuerpo del documento

	// Seleccionar todo el texto en el elemento temporal
	tempElement.select();
	tempElement.setSelectionRange(0, 99999); // Para dispositivos móviles

	// Copiar el texto al portapapeles
	document.execCommand("copy");

	// Eliminar el elemento temporal
	document.body.removeChild(tempElement);

	// Cambiar el texto del botón de copia y el icono para indicar que se ha copiado
	copyText.textContent = "Copied!";
	copyIcon.className = "icon-check";

	// Después de un tiempo, volver al estado original del botón
	setTimeout(() => {
		copyText.textContent = "Copy";
		copyIcon.className = "icon-copy";
	}, 2000);
});
