const sections = document.querySelectorAll('.section');
const buttonStart = document.querySelector('.button__start');
let counter = 0;

const cardNext = () => {
	if (counter >= 4) {
		return false;
	} else {
		counter++;

		sections.forEach(e => {
			e.style.display = 'none';
		});

		sections[counter].style.display = 'flex';
	}
}

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
