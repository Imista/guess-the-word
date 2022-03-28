const createCountdown = () => {
    const countdownBox = document.querySelector('.countdown-content');
    const countdownObject = document.querySelector('.countdown');
    const countdownText = document.querySelector('.countdown-text')
    let percentaje = 0;

    const countdownInterval = setInterval(() => {
        percentaje++;
        countdownObject.style.background = `conic-gradient(
            #0971af ${percentaje * 3.6}deg,
            rgba(9, 113, 175,40%) 1deg
        )`;
        //Change text
        if(percentaje % 33 === 0){
            countdownText.innerText = 3 - ((percentaje)/33); 
        }
        //Stop
        if(percentaje === 100){
            clearInterval(countdownInterval);
            countdownObject.style.background = `conic-gradient(
            #85c040 360deg, #fff 0deg)`;
            countdownText.classList.add('stop');
            //Delete
            setTimeout(() => {
                countdownObject.style.transform = `translate(-50%, -80vh)`;
                countdownBox.style.background = `rgba(0,0,0,0)`;
                setTimeout(() =>{
                    countdownBox.remove();
                }
                ,200);
            },200);
        }
    }, 20);
}

export default createCountdown;