import backgroundControl from "@handlers/backgroundControl.handler";
import createTutorial from "@templates/createTutorial.templates";

const Home = () => {
    //View
    const view = `
    <aside class="Bg">
        <div class="menu">
            <h1 class="menu-title">Name/Logo</h1>
            <a href="#/play" class="menu-button type-1">Iniciar</a>
            <button class="menu-button type-3">?</button>
        </div>
    </aside>
    <div class="tutorial"></div>
    <main class="Home-background">
        <ul class="squares">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
        </ul>
    </main>`;
    // <a href="#/about" class="menu-button type-2">Acerca de</a>
    document.body.innerHTML = view;
    //Logic
    backgroundControl();
    const showTutorial = document.querySelector('.type-3');
    showTutorial.addEventListener('click', () => {
        createTutorial();
    });
}

export default Home;