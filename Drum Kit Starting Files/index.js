function handleClick(){
	// var audio = new Audio("sounds/tom-1.mp3");
	// audio.play();
	var buttonInnertext = this.innerText;
	playsound(buttonInnertext);

	buttonAnimation(buttonInnertext);
}

function playsound(buttonText){
	switch(buttonText){
		case "w" : var tom1 = new Audio("sounds/tom-1.mp3");
					tom1.play();
					break;

		case "a" : var tom2 = new Audio("sounds/tom-2.mp3");
					tom2.play();
					break; 	
		case "s" : var tom3 = new Audio("sounds/tom-3.mp3");
					tom3.play();
					break;
		case "d" : var tom4 = new Audio("sounds/tom-4.mp3");
					tom4.play();
					break;
		case "j" : var snare = new Audio("sounds/snare.mp3");
					snare.play();
					break;
		case "k" : var crash = new Audio("sounds/crash.mp3");
					crash.play();
					break;
		case "l" : var kick = new Audio("sounds/kick-bass.mp3");
					kick.play();
					break;
		default: console.log("Wrong button pressed");
	}
}
var button = document.querySelectorAll(".drum");

button.forEach(element => element.addEventListener('click', handleClick));


document.addEventListener("keydown",function(event){
	playsound(event.key.toLowerCase());
	buttonAnimation(event.key.toLowerCase());
});

function buttonAnimation(currentKey){
	var activeButton = document.querySelector("."+currentKey);
	if(activeButton)
	{activeButton.classList.add("pressed");
	
		setTimeout(function(){
			activeButton.classList.remove("pressed");
		}, 100);}
}