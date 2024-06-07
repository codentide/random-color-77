import { colors } from "./simpleColors.js";

let lastRandomNumber;
let randomNumber;

const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const getRandomColor = () => {
	console.log("rn: ", randomNumber, " lrn: ", lastRandomNumber);

	do {
		randomNumber = Math.floor(Math.random() * colors.length);
	} while (randomNumber === lastRandomNumber);

	lastRandomNumber = randomNumber;

	return capitalize(colors[randomNumber]);
};

export { getRandomColor };
