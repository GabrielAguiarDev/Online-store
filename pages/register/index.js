import React, { useState } from "react";
import Link from "next/link";

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
        <>
            <h1>Crie sua conta</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Primeiro Nome 
                    <input 
                        type="text" 
                        onChange={e => setName(e.target.value)} 
                        value={name}
                    />
                </label>
                <br/>
                <label>
                    Nome de usuário
                    <input 
                        type="text"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                </label>
                <br/>
                <label>
                    Seu Email
                    <input 
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <br/>
                <label>
                    Senha
                    <input 
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <br/>
                <label>
                    Cep
                    <input 
                        type="text" 
                        onChange={e => setCep(e.target.value)}
                        value={cep}
                    />
                </label>
                <br/>
                <label>
                    Número de telefone
                    <input 
                        type="text"
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                </label>
                <br/>
                <label>
                    Dinheiro depositado
                    <input 
                        type="text"
                        onChange={e => setWallet(e.target.value)}
                        value={wallet}
                    />
                </label>
                <br/>
                <button>Criar conta</button>
            </form>
            <br/>
            <br/>
            <Link href="/login">
                <button>Ir para a página de Login</button>
            </Link>
        </>
    )
}