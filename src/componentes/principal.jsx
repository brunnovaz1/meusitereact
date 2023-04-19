import Home from "../pages/home";
import Novo from "../pages/novo";
import Pedidos from "../pages/pedidos";
import Sobre from "../pages/sobre";

export default function Principal(){
    return(
        <main>
        <Home />
        <Pedidos />
        <Novo />
        <Sobre />

        </main>
    )
}