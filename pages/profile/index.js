import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../providers/auth";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

import { Layout, InfoProfile } from "../../components";

import { Profile } from "../../styles/profile";

export default function indexProfile() {

    const data = useSelector(selectUser)

    const [dataUser, setDataUser] = useState(undefined)

    useEffect(() => {
        if(data.isLogged === true) {
            setDataUser([data])
        }
    }, [])

    return (
        <Layout titlePage="Perfil" menu editProfile navbar profile="active">
            <Profile>
                {dataUser ? (
                    dataUser.map((user, index) => <InfoProfile key={index} user={user} />)
                ) : (
                    <>
                        <div className="noLogin">
                            <h1>Usuário não logado</h1>
                            <div className="links">
                                <Link href="/login">
                                    <a>Página de Login</a>
                                </Link>
                                <Link href="/register">
                                    <a>Página de Registro</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </Profile>
        </Layout>
    )
}