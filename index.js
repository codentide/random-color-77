import { getRandomColor } from "./javascript/simpleFlip.js";
import { getRandomHex } from "./javascript/hexFlip.js";

const simpleFlipBtn = document.querySelector("#simple-flip");
const colorCode = document.querySelector("#color-code");

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

	// Definir el fragmento por defecto
	const defaultHash = "#simple-flip";

	// Si no hay ningún fragmento en la URL, agregar el fragmento por defecto
	if (!window.location.hash) {
		window.location.hash = defaultHash;
	}
});

// Agregar evento de clic al botón
colorCode.addEventListener("click", (e) => {
	// Crear un elemento de texto temporal
	const tempElement = document.createElement("textarea");
	tempElement.value = e.target.textContent; // Establecer el texto a copiar como el contenido del span
	document.body.appendChild(tempElement); // Agregar el elemento al cuerpo del documento

	// Seleccionar todo el texto en el elemento temporal
	tempElement.select();
	tempElement.setSelectionRange(0, 99999); // Para dispositivos móviles

	// Copiar el texto al portapapeles
	document.execCommand("copy");

	// Eliminar el elemento temporal
	document.body.removeChild(tempElement);

	// Notificar al usuario que el texto se ha copiado
	alert("¡Código de color copiado!");
});
