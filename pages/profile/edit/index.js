import React, { useState } from "react"
import { Layout } from "../../../components";

import { useDispatch, useSelector } from "react-redux";
import { changeUser, selectUser } from "../../../redux/userSlice";

import { BiCamera } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs"

import { ProfileEdit, Button } from "../../../styles/profile/edit"

export default function indexEdit() {

    const dispatch = useDispatch();
    const dataUser = useSelector(selectUser)

    const [changeName, setChangeName] = useState(dataUser.name);
    const [changeUserName, setChangeUserName] = useState(dataUser.username);
    const [changePassword, setChangePassword] = useState("");
    const [changeEmail, setChangeEmail] = useState(dataUser.email);
    const [changeAddress, setChangeAddress] = useState(dataUser.address);
    const [changePhone, setChangePhone] = useState(dataUser.phone);

    const handleEditProfile = () => {
        dispatch(changeUser({
            name: changeName,
            username: changeUserName,
            email: changeEmail,
            address: changeAddress,
            phone: changePhone,
            wallet: dataUser.wallet
        }))
        const dataLocalStorage = {
            name: changeName,
            username: changeUserName,
            password: changePassword,
            email: changeEmail,
            address: changeAddress,
            phone: changePhone,
            wallet: dataUser.wallet,
            image: null,
        }
        localStorage.setItem("dataUser", JSON.stringify(dataLocalStorage))
    }

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
                        name="password" 
                        placeholder="password" 
                        onChange={e => setChangePassword(e.target.value)}
                        value={changePassword}
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
                <Button onClick={handleEditProfile}>Salvar alterações</Button>
                
            </ProfileEdit>
        </Layout>
    )
}
