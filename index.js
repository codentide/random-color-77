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
