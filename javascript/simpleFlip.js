import { colors } from "./simpleColors.js";

let lastRandomNumber;
let randomNumber;

const getRandomColor = () => {
	console.log("rn: ", randomNumber, " lrn: ", lastRandomNumber);

	do {
		randomNumber = Math.floor(Math.random() * colors.length);
	} while (randomNumber === lastRandomNumber);

	lastRandomNumber = randomNumber;

	return colors[randomNumber];
};

export { getRandomColor };
