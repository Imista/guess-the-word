const createPopUp = (word, next) => {

    const content = document.createElement('div');
    content.classList.add('popup');
    
    const background = document.createElement('div');
    background.classList.add('popup-background');
    
    const box = document.createElement('div');
    box.classList.add('popup-box');
    box.innerHTML = `<p>La palabra es:</p><p><b>${word}</b></p>`
    
    const buttonBox = document.createElement('div');
    buttonBox.classList.add('popup-buttonBox');
    
    const button = document.createElement('button');
    button.innerHTML = '>';
    buttonBox.appendChild(button);
    button.focus();
    button.addEventListener('click',() => {
        content.remove();
        next();
    });


    box.appendChild(buttonBox);
    content.appendChild(background);
    content.appendChild(box);

    setTimeout(() => {
        content.classList.toggle('activate');
    },1000);
    
    document.querySelector('main').appendChild(content);
}

export default createPopUp;