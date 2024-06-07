export const simpleToHex = (color) => {
	// Validar si el nombre de color ya es un código hexadecimal
	if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
		return color;
	}

	const span = document.createElement("span");
	span.style.color = color;
	document.body.appendChild(span);
	const colorRGB = window.getComputedStyle(span).color;
	document.body.removeChild(span);

	// Convertir el color RGB a hexadecimal
	const match = colorRGB.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	if (!match) {
		throw new Error("No se pudo convertir el color a hexadecimal.");
	}

	const hex =
		"#" +
		("0" + parseInt(match[1], 10).toString(16)).slice(-2) +
		("0" + parseInt(match[2], 10).toString(16)).slice(-2) +
		("0" + parseInt(match[3], 10).toString(16)).slice(-2);
	return hex;
};
