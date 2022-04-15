import startGame from "@logic/startGame.logic";
import Home from "@pages/Home.page";
import getHash from '@utils/getHash.utils';
import Error404 from "@pages/Error.page";

const routes = {
    '/': Home,
    'play': startGame,
}

const router = () => {
    const route = getHash();
    const render = routes[route] ? routes[route] : Error404;
    render();
}

export default router;