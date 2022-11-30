import React, { useState } from "react";
import Link from "next/link";

import { StyleRegister } from "../../styles/register";

import { InputForm, ButtonForm } from "../../components";

export default function indexRegister() {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cep, setCep] = useState("")
    const [phone, setPhone] = useState("")
    const [wallet, setWallet] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
        const dataUser = {
            name: name,
            username: username,
            email: email,
            password: password,
            address: cep,
            phone: phone,
            wallet: wallet,
            image: null,
        }
        localStorage.setItem("dataUser", JSON.stringify(dataUser))
    }

    

    return (
        <StyleRegister>
            <form onSubmit={handleRegister}>
                <h1>Crie sua conta</h1>
                <InputForm
                    titulo={"Primeiro Nome"}
                    type={"text"}
                    placeholder={"username"}
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <InputForm
                    titulo={"Nome de usuário"}
                    type={"text"}
                    placeholder={"username"}
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
                <InputForm
                    titulo={"Seu Email"}
                    type={"email"}
                    placeholder={"exemplo@gmail.com"}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <InputForm
                    titulo={"Senha"}
                    type={"password"}
                    placeholder={"password"}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <InputForm
                    titulo={"Cep"}
                    type={"text"}
                    placeholder={"45807-000"}
                    onChange={e => setCep(e.target.value)}
                    value={cep}
                />
                <InputForm
                    titulo={"Número de Telefone"}
                    type={"text"}
                    placeholder={"+55 73 9 9848-6884"}
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                />
                <InputForm
                    titulo={"Dinheiro Depositado"}
                    type={"number"}
                    placeholder={"250.5"}
                    onChange={e => setWallet(e.target.value)}
                    value={wallet}
                />
                <ButtonForm text={"Criar conta"} />
            </form>
            <div className="link">
                <Link href="/login">
                    <button>Ir para a página de Login</button>
                </Link>
            </div>
        </StyleRegister>
    )
}