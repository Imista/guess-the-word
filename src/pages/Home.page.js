import backgroundControl from "@handlers/backgroundControl.handler";

const Home = () => {
    //View
    const view = `
    <aside class="Bg">
        <div class="menu">
            <h1 class="menu-title">Name/Logo</h1>
            <a href="#/play" class="menu-button type-1">Iniciar</a>
            <a href="#/about" class="menu-button type-2">Acerca de</a>
        </div>
    </aside>
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
    </main>`
    document.body.innerHTML = view;
    //Logic
    backgroundControl()
}

export default Home;