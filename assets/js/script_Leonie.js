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

var language = {
	eng: {
		translation1: "Spatial",
		translation2: "This is a blog that will help you to use Javascript, HTML and CSS on websites.",
		translation3: "What's your next adventure?",
		translation4: "Get Started",

	},
	fr: {
		translation1: "Spatiale",
		translation2: "Il s'agit d'un blog qui vous aidera à utiliser Javascript, HTML et CSS sur les sites Web.",
		translation3: "Quelle est ta prochaine aventure?",
		translation4: "Allez",
	
	},
	de: {
		translation1: "Räumlich",
		translation2: "Dies ist ein Blog, der dir dabei helfen wird, Javascript, HTML und CSS auf Webseiten zu verwenden.",
		translation3: "Was ist dein nächstes Abenteuer?",
		translation4: "Los gehts",

	},
};

/*function Delay() {
	setTimeout(function(){ }, 200);
} */

function toggleLanguage(lang)
{
	if(lang === "english"){
		text1.textContent = language.eng.translation1;
		text2.textContent = language.eng.translation2;
		text2_1.textContent = language.eng.translation3;
		text3.textContent = language.eng.translation4;

	}
	
	if(lang === "french"){
		text1.textContent = language.fr.translation1;
		text2.textContent = language.fr.translation2;
		text2_1.textContent = language.fr.translation3;
		text3.textContent = language.fr.translation4;
		
	}
	if(lang === "german"){
		text1.textContent = language.de.translation1;
		text2.textContent = language.de.translation2;
		text2_1.textContent = language.de.translation3;
		text3.textContent = language.de.translation4;
	}


}

//Ajax-Request (Secret Information: generic)

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		  document.getElementById("Ajax").innerHTML = this.responseText;
		}
	  };
	  xhttp.open("GET", "ajax_text.txt", true);
	  xhttp.send();
	}

// Bilder beim Klicken vergrößern

function ImgBigger (adress) {
	windowNow = window.open (adress, "2ndWindow", "width=300, 400, left=100, top=200");
	windowNow.focus();
}


// Nameneingabe

window.setTimeout (Nameneingabe, 1000);

function Nameneingabe () {
var eingabe = prompt ("Bitte nennen Sie uns Ihren Namen", "");
if (eingabe == "" || eingabe == null) {
	history.back();
}
else {
	alert("Hallo " + eingabe);
}
}
