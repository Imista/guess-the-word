const gamePreparation = () => {
    
    //Clear body
    const view = `<header><div class="category"></div><div class="timer"></div></header>
    <main>
        <div class="countdown-content">
            <div class="countdown">
                <div class="countdown-text">3</div>
            </div>
        </div>
        <div class="main"></div>
    </main>
    <footer></footer>`;
    document.body.innerHTML = view;
}

export default gamePreparation;