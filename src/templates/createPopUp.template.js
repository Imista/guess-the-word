const createPopUp = (word, next) => {

    const content = document.createElement('div');
    content.classList.add('popup');
    
    const background = document.createElement('div');
    background.classList.add('popup-background');
    
    const box = document.createElement('div');
    box.classList.add('popup-box');


    const button = document.createElement('button');
    const buttonBox = document.createElement('div');
    buttonBox.appendChild(button);
    
    //Normal
    if(word){
        box.innerHTML = `<p>La palabra es:</p><p><b>${word}</b></p>`
        
        buttonBox.classList.add('popup-buttonBox');
        
        button.innerHTML = '>';
        box.appendChild(buttonBox);
        
    }else{
        box.innerHTML = `
        <p class= "popup-coffee">¿Porque no tomas un cafe para descansar?</p>
        <p class= "popup-coffee">¿Me invitas uno?</p>
        <div class="popup-image"></div>`;

        button.classList.add('popup-coffeButton');
        button.classList.add('type-2');
        button.innerHTML = 'Continuar >';

        buttonBox.classList.add('popup-coffeButton-content');
        buttonBox.innerHTML = `<a href="https://www.paypal.com/donate/?hosted_button_id=PDL887NS8F7LY" 
        target="_blank" class="popup-coffeButton type-1">Comprar un cafe &#9749;</a>${buttonBox.innerHTML}`;
        
        
        box.appendChild(buttonBox);
        
        // box.innerHTML += `<a class="popup-coffeExplain">¿Porque veo esta ventana?</a>`
    }

    //Action listener
    button.addEventListener('click',() => {
        content.remove();
        next();
    });

    content.appendChild(background);
    content.appendChild(box);

    setTimeout(() => {
        content.classList.toggle('activate');
    },1000);
    
    document.querySelector('main').appendChild(content);

    //I cannot fix this
    if(!word){
        document.querySelector('.popup-coffeButton.type-2').addEventListener('click',() => {
            content.remove();
            next();
        });
    }
}

export default createPopUp;