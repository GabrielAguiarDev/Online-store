import { Layout } from "../../components";

import { Settings } from "../../styles/settings";

export default function indexSettings() {
    return (
        <Layout back menu >
            <Settings>
                <h1>Página de definição</h1>
                <ul>
                    <li>Opção 1</li>
                    <li>Opção 2</li>
                    <li>Opção 3</li>
                    <li>Opção 4</li>
                    <li>Opção 5</li>
                </ul>
            </Settings>
        </Layout>
        
    )
}