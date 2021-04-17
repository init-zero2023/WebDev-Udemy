var h1 = document.querySelector('h1')
function enlargeText(){
        h1.style.fontSize = '44px';
        console.log('In index.js', h1);
}
h1.addEventListener('click',enlargeText);

// console.log('In index.js', h1);

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const error = document.querySelector('#error');
const message = document.querySelector('#data');

weatherForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const location = search.value;

        error.textContent = 'Loading....';
        message.textContent = '';

        // console.log(location);
        fetch(`http://localhost:6600/weather?address=${location}`)
        .then(response => response.json())
        .then(data => {
                if(data.error){
                        error.textContent = data.error;
                }else{
                        // console.log(data.location);
                        // console.log(data.forecastdata);
                        error.textContent = data.location;
                        message.textContent = data.forecastdata;
                }
        })
})