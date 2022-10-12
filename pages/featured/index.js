import { Navbar } from "../../components";

import { Featured } from "./styles";

export default function index() {
    return (
        <Featured>
            <Navbar />
            <h1>Aqui ficara os itens em destaques renderizados</h1>
        </Featured>
    )
}