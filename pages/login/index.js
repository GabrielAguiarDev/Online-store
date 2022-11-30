import Link from "next/link";
import React, { useState, useEffect } from "react";

import { InputForm, ButtonForm } from "../../components";

import { StyleLogin } from "../../styles/login";

import { useDispatch } from "react-redux";
import { changeUser } from "../../redux/userSlice";

export default function indexLogin() {

    const dispatch = useDispatch();

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [viewHeight, setViewHeight] = useState(undefined)
    const [viewWidth, setViewWidth] = useState(undefined)

    const [msg, setMsg] = useState({})

    const handleLogin = (e) => {
        e.preventDefault()
        const dataUser = JSON.parse(localStorage.getItem("dataUser"))

        if(inputPassword === dataUser.password && inputUsername  === dataUser.username) {
            setMsg({type: "success", text: "Usuário logou"})
            dispatch(changeUser(dataUser))
            
        } else {
            setMsg({type: "error", text: "usuário ou senha inválida!"})
        }
    }

    useEffect(() => {
        setViewHeight(window.innerHeight)
        setViewWidth(window.innerWidth)
    }, [])

    return (
        <StyleLogin height={viewHeight} width={viewWidth}>
            <form onSubmit={handleLogin}>
                <h1>Faça Login</h1>
                <InputForm
                    titulo={"Nome de usuário"}
                    type={"text"}
                    placeholder={"username"}
                    onChange={e => setInputUsername(e.target.value)}
                    value={inputUsername}
                />
                <InputForm
                    titulo={"Senha"}
                    type={"password"}
                    placeholder={"password"}
                    onChange={e => setInputPassword(e.target.value)}
                    value={inputPassword}
                />
                <ButtonForm text={"Entrar"} />
            </form>
            {msg.type &&
                <div className={`msg ${msg.type}`} onClick={() => setMsg({})}>{msg.text}</div>}
            <div className="links">
                <Link href="/register">
                    <button>Ir para página de registro</button>
                </Link>
                <Link href="/">
                    <button>Ir para Página inicial</button>
                </Link>
            </div>
            
        </StyleLogin>
    )
}