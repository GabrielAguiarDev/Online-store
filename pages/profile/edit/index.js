import React, { useState } from "react"
import { Layout } from "../../../components";
import { useAuth } from "../../../providers/auth";

import { BiCamera } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs"

import { ProfileEdit, Button } from "../../../styles/profile/edit"

export default function indexEdit() {

    const { user, setUser } = useAuth();
  console.log(user);

    // Dados que viram do banco de dados
    const [dataUser, setDataUser] = useState([
        { name: "Nome do usuário", image: null, wallet: 458.50, username: "@name", phone: "+55 73 9 8765-4321", email: "info@exemple.com", address: "653 Southern Street, California, USA" }
    ]);

    const [changeName, setChangeName] = useState(dataUser[0].name);
    const [changeUserName, setChangeUserName] = useState(dataUser[0].username);
    const [changeEmail, setChangeEmail] = useState(dataUser[0].email);
    const [changeAddress, setChangeAddress] = useState(dataUser[0].address);
    const [changePhone, setChangePhone] = useState(dataUser[0].phone);
    const [verifyChange, setVerifyChange] = useState(true);

    return (
        <Layout titlePage="Editar Dados" back menu navbar>
            <ProfileEdit>
                <div className="container-image">
                    <div className="image">
                        <BsPersonFill />
                    </div>
                    <BiCamera className="camera" />
                </div>
                <div className="container-info">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Seu nome" 
                        onChange={e => setChangeName(e.target.value)}
                        value={changeName}
                    />
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="@username" 
                        onChange={e => setChangeUserName(e.target.value)}
                        value={changeUserName}
                    />
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="info@exemple.com" 
                        onChange={e => setChangeEmail(e.target.value)}
                        value={changeEmail}
                    />
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="653 Southern Street, California, USA" 
                        onChange={e => setChangeAddress(e.target.value)}
                        value={changeAddress}
                    />
                    <input 
                        type="text"
                        name="phone" 
                        placeholder="+55 73 9 8765-4321"
                        onChange={e => setChangePhone(e.target.value)}
                        value={changePhone}
                    />
                </div>
                <Button change={verifyChange}>Salvar alterações</Button>
                
            </ProfileEdit>
        </Layout>
    )
}
