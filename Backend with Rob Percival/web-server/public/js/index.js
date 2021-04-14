var h1 = document.querySelector('h1')
function enlargeText(){
        h1.style.fontSize = '44px';
}
h1.addEventListener('click',enlargeText);

console.log('In index.js', h1);