import React, { useState } from "react";

import { Layout, InfoProfile } from "../../components";

import { Profile } from "../../styles/profile";

export default function indexProfile() {

    const [dataUser, setDataUser] = useState([
        { name: "Nome do usuário", image: null, wallet: 458.50, username: "@name", phone: "+55 73 9 8765-4321", email: "info@exemple.com", address: "653 Southern Street, California, USA" }
    ])

    return (
        <Layout titlePage="Perfil" menu editProfile navbar profile="active">
            <Profile>
                {dataUser && dataUser.map((user, index) => <InfoProfile key={index} user={user} />)}
            </Profile>
        </Layout>
    )
}