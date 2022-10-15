import React, { useState } from "react";
import Link from "next/link";

import { Language, Layout, Overlay } from "../../components";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md"

import { Settings, CheckboxEmail, CheckboxMsg } from "../../styles/settings";

export default function indexSettings() {

    const [lightTheme, setLightTheme] = useState(false);
    const [checkEmail, setCheckEmail] = useState(true);
    const [checkMsg, setCheckMsg] = useState(true);
    const [showLanguage, setShowLanguage] = useState(false)

    const handleThemes = () => {
        setLightTheme(!lightTheme);
    }

    const handleCheckboxEmail = () => {
        setCheckEmail(!checkEmail)
    }

    const handleCheckboxMsg = () => {
        setCheckMsg(!checkMsg)
    }

    const handleLanguage = () => {
        setShowLanguage(!showLanguage)
    }

    return (
        <Layout titlePage="Configurações" back menu >
            <Overlay zIndex={showLanguage} onClick={handleLanguage} />
            <Settings>
                <h1>Definições</h1>
                <ul>
                    <li>
                        <label>
                            <span>Notificação por Email</span>
                            <CheckboxEmail active={checkEmail}>
                                <div className="circle"></div>
                                <input type="checkbox" onChange={handleCheckboxEmail} />
                            </CheckboxEmail>
                        </label>
                    </li>
                    <li>
                        <label>
                            <span>Notificação por Mensagem</span>
                            <CheckboxMsg active={checkMsg}>
                                <div className="circle"></div>
                                <input type="checkbox" onChange={handleCheckboxMsg} />
                            </CheckboxMsg>
                        </label>
                    </li>
                    {lightTheme ? (
                        <li onClick={handleThemes}>
                            <span>Tema escuro</span>
                            <BsMoonFill />
                        </li>
                    ) : (
                        <li onClick={handleThemes}>
                            <span>Tema claro</span>
                            <BsSunFill />
                        </li>
                    )}
                    <Link href="/profile/edit">
                        <li>
                            <span>Editar Perfil</span>
                            <MdKeyboardArrowRight />
                        </li>
                    </Link>
                    <li onClick={handleLanguage}>
                        <span>Linguagem</span>
                        <MdKeyboardArrowRight />
                    </li>
                </ul>
            </Settings>
            <Language show={showLanguage} />
        </Layout>
        
    )
}