import Link from "next/link";
import { useState } from "react"
import { useAuth } from "../../providers/auth";

export default function indexLogin() {

    const { setUser } = useAuth();

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [msg, setMsg] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        const dataUser = JSON.parse(localStorage.getItem("dataUser"))

        if(inputPassword === dataUser.password && inputUsername  === dataUser.username) {
            setMsg("Usuário logou")
            setUser(dataUser)
            
        } else {
            setMsg("usuário ou senha inválida")
        }
    }

    return (
        <>
            <h1>Faça Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Nome de usuario
                    <input 
                        type="text" placeholder="username"
                        onChange={e => setInputUsername(e.target.value)} 
                        value={inputUsername}
                    />
                </label>
                <br/>
                <label>
                    Senha
                    <input 
                        type="password" placeholder="password"
                        onChange={e => setInputPassword(e.target.value)} 
                        value={inputPassword}
                    />
                </label>
                <br/>
                <button>Entrar</button>
            </form>
            <br/>
            <br/>
            {msg && msg}
            <br/>
            <br/>
            <Link href="/register">
                <button>Ir para página de registro</button>
            </Link>
            <br/>
            <br/>
            <Link href="/">
                <button>Ir para Home</button>
            </Link>
        </>
    )
}