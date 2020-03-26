// Youtube und Instagram Counter

const counters = document.querySelectorAll('.counter');
const speed = 200; 

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		
		const inc = target / speed;

		if (count < target) {

			counter.innerText = count + inc;

			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

// Scroll Event: Text wird beim Scrollen erscheinen
function textAppear(){
	var appearedText = document.querySelector('.appeared-text');
	var introPosition = appearedText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.7;

	if(introPosition < screenPosition){
		appearedText.classList.add('text-appear');
	}
}

window.addEventListener('scroll', textAppear);


// Uhranzeige auf der Startseite
setInterval(setClock, 1000)

const hourPointer = document.querySelector('[data-hour-pointer]')
const minutePointer = document.querySelector('[data-minute-pointer]')
const secondPointer = document.querySelector('[data-second-pointer]')

function setClock(){
	const currentDate = new Date()
	const seconds = currentDate.getSeconds() / 60
	const minutes = (seconds + currentDate.getMinutes()) / 60
	const hours = (minutes + currentDate.getHours()) / 12
	setRotation(secondPointer, seconds)
	setRotation(minutePointer, minutes)
	setRotation(hourPointer, hours)
}

function setRotation(element, rotation) {
	element.style.setProperty('--rotation', rotation * 360)

}
setClock()

// Sprache der Seite ändern

var dataReload = document.querySelectorAll("[data-reload]");

var language = {
	eng: {
		title: "Spatial"
	},
	fr: {
		title: "Spatiale"
	},
	de: {
		title: "Räumlich"
	}
};

if (window.location.hash) {
	if(window.location.hash === '#fr'){
		banner.textContent = language.fr.title;
	}
}
if (window.location.hash) {
	if(window.location.hash === '#de'){
		banner.textContent = language.de.title;
	}
}

for (i = 0; i <= dataReload.length; i++){
	dataReload[i].onclick = function() {
		location.reload(true);
	};
}
