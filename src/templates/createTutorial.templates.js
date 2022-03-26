import tutorialControl from "@handlers/tutorialControl.handler";

const createTutorial = () => {
    const tutorial = `
    <div class="popup">
        <div class="popup-background"></div>
        <div class="popup-box tutorial">
            <div class="tutorial-box">
                <!-- Part A -->
                <div class="tutorial-info">
                    <p class="tutorial-info-text"><b>¡Prueba tu suerte 🍀!</b></p>
                    <p class="tutorial-info-text">Combina diferentes letras para formar una palabra</p>
                    <div class="tutorial-words">
                        <div class="tutorial-word"></div>
                        <div class="tutorial-word"></div>
                        <div class="tutorial-word"></div>
                        <div class="tutorial-word"></div>
                        <div class="tutorial-word-button">></div>
                    </div>
                </div>
                <!-- Part B -->
                <div class="tutorial-info Part-B">
                    <p class="tutorial-info-text"><b>Entiende los colores 🎨</b></p>
                    <div class="tutorial-box-partB">
                        <div class="tutorial-box-partB-letters">
                            <div class="tutorial-word partB disable correct">A</div>
                            <div class="tutorial-word partB disable partial">B</div>
                            <div class="tutorial-word partB disable">C</div>
                        </div>
                        <div>
                            <table class="tutorial-table">
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td>Letra</td>
                                    <td>Posicion</td>
                                </tr>
                                <tr>
                                    <td class="table-green">Verde</td>
                                    <td>&#x2713</td>
                                    <td>&#x2713</td>
                                </tr>
                                <tr>
                                    <td class="table-yellow">Amarillo</td>
                                    <td>&#x2713</td>
                                    <td>&#x2715</td>
                                </tr>
                                <tr>
                                    <td class="table-red">Rojo</td>
                                    <td>&#x2715</td>
                                    <td>&#x2715</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Part C -->
                <div class="tutorial-info">
                    <p class="tutorial-info-text"><b>¡Tienes tiempo ⏳!</b></p>
                    <div class="tutorial-timer-border">
                        <div class="tutorial-timer-bar"></div>
                    </div>
                </div>
                <!-- Part D -->
                <div class="tutorial-info">
                    <p class="tutorial-info-text"><b>¿Necesitas una pista? 🔍</b></p>
                    <div class="tutorial-category">
                        <p class='tutorial-category-text'><i>Frutas</i></p>
                    </div>
                    <p class="tutorial-info-text">Recuerda que hay una categoria por cada palabra</p>
                </div>
            </div>
            <button class="popup-coffeButton type-1">Cerrar</button>
        </div>
    </div>`;

    //Activate
    const content = document.querySelector('.tutorial');
    content.innerHTML = tutorial;
    const popUp = document.querySelector('.popup');
    setTimeout(() => {
        popUp.classList.toggle('activate');
        tutorialControl();
    },200);
    
    //Desactivate
    const button = document.querySelector('.popup-coffeButton');
    button.addEventListener('click',() => {
        popUp.classList.toggle('activate');
        setTimeout(() => {
            content.innerHTML = '';
        },200);
    })
}

export default createTutorial;