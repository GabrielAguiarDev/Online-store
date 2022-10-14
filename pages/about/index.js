import { Layout } from "../../components";

import { About } from "../../styles/about";

export default function index() {
    return (
        <Layout back menu>
            <About>
                <h1>Informações sobre o site</h1>
                <p>Textos...</p>
                <p>Links...</p>
                <p>etc...</p>
            </About>
        </Layout>
    )
}