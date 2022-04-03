import showFooter from "@templates/showFooter.templates";

const Error404 = () => {
    //View
    const view = `
    <div class="errorPage">
        <header class="return">
            <a href="#/">< Volver</a>
        </header >
        <main class="error">
            <div class="error-image"></div>
            <p class="error-text">Lo sentimos, se perdio la pagina que estas buscando.</p>
        </main>
        <footer></footer>
    </div>`;
    document.body.innerHTML = view;
    //Footer
    const footer = document.querySelector('footer');
    footer.innerHTML = showFooter();
}

export default Error404;