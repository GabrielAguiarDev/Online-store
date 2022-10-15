import { Layout } from "../../../components";

import { ProfileEdit } from "../../../styles/profile/edit"

export default function indexEdit() {
    return (
        <Layout titlePage="Editar Dados" back backUrl="/settings" menu>
            <ProfileEdit>
                <h1>Aqui você poderá editar seus dados</h1>
            </ProfileEdit>
        </Layout>
    )
}