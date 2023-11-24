const time = document.querySelector('.time span');
const buttons = document.querySelectorAll('.button button');
let stopwatch = { elapsedTime: 0 };

function updateStopwatch(){
    stopwatch.startTime = Date.now();
    stopwatch.interval = setInterval(updateTime, 1000);
    
    function updateTime(){
        const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime;

        const seconds = parseInt((elapsedTime/1000) % 60);
        const minutes = parseInt((elapsedTime/(1000 * 60) % 60));
        const hour = parseInt((elapsedTime/(1000 * 60 * 60) % 24));

        setTime(hour, minutes, seconds);
    }
}

function setTime(hour, minutes, seconds){
    const addZero = [hour, minutes, seconds].map(time => {
        return time < 10 ? `0${time}` : time
    });

    time.innerHTML = addZero.join(' : ');
}

buttons[0].addEventListener('click', updateStopwatch);
buttons[1].addEventListener('click', () => {
    stopwatch.startTime = (!stopwatch.startTime) ? Date.now() : stopwatch.startTime;
    stopwatch.elapsedTime += Date.now() - stopwatch.startTime;
    clearInterval(stopwatch.interval);
});

buttons[2].addEventListener('click', () => {
    stopwatch.elapsedTime = 0;
    stopwatch.startTime = Date.now();
    setTime(0, 0, 0);
    clearInterval(stopwatch.interval);
})



