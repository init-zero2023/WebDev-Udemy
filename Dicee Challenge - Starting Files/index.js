var randomNumber1 = Math.floor(Math.random()*6)+1;

var selectedface1 = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",selectedface1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var selectedface2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",selectedface2);

var heading = document.querySelector("h1")

if(randomNumber1 == randomNumber2){
	heading.innerText="Draw";
}else if(randomNumber2 < randomNumber1){
	heading.innerText = "Player 1 Wins!";
}else{
	heading.innerText = "Player 2 Wins!";
}