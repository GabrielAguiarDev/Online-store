import { Layout } from "../../components";

import { Featured } from "../../styles/featured";

export default function index() {
    return (
        <Layout back search menu >
            <Featured>
                <h1>Aqui ficara os itens em destaques renderizados</h1>
            </Featured>
        </Layout>
    )
}