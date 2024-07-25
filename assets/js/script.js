let hoursElm = document.querySelector('.hours');
let minutesElm = document.querySelector('.minutes');
let secondsElm = document.querySelector('.seconds');

setInterval(function() {

    let data = new Date();

    let hours = fixZero(data.getHours());
    let minutes = fixZero(data.getMinutes());
    let seconds = fixZero(data.getSeconds());

    
    hoursElm.querySelector('.number').innerHTML = hours;
    minutesElm.querySelector('.number').innerHTML = minutes;
    secondsElm.querySelector('.number').innerHTML = seconds;

},1000);

const buttonChanceColor = document.querySelector('.button-change-color');
const bg = document.querySelector('.bg');

buttonChanceColor.addEventListener('click', ()=> {

    if(bg.classList.contains('bg')){
        bg.classList.remove('bg')
        bg.classList.add('bg2')
    }else{
        bg.classList.remove('bg2')
        bg.classList.add('bg')
    }

});

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}
