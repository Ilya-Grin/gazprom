const sections = document.querySelectorAll('.section');
const buttonStart = document.querySelector('.button__start');
const inputs = document.querySelectorAll('.input__block');
let counter = 0;

console.log(inputs);

const cardNext = () => {
	if (counter >= 4) {
		return false;
	} else {
		counter++;
		console.log(counter);

		sections.forEach(e => {
			e.style.display = 'none';
		});

		sections[counter].style.display = 'flex';
	}
}

inputs.forEach(e => {
	e.onclick = () => {
		cardNext();
	}
});

const cardBack = () => {
	if (counter <= 0) {
		return false;
	} else {
		counter--;

		sections.forEach(e => {
			e.style.display = 'none';
		});

		sections[counter].style.display = 'flex';
	}
}

buttonStart.onclick = () => {
	cardNext();
	buttonStart.disabled = true;
}
