import startGame from "@logic/startGame.logic";
import Home from "@pages/Home.page";
import getHash from '@utils/getHash.utils';

const routes = {
    '/': Home,
    'play': startGame,
}

const router = () => {
    const route = getHash();
    const render = routes[route] ? routes[route] : Home;
    render();
    console.log(route);
}

export default router;