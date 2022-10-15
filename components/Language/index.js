import React, { useState } from "react";
import Image from "next/image";

import { Language } from "./styles";

import { BiCheck } from "react-icons/bi";

export default function indexLanguage({ show }) {

    const [activeLanguage, setActiveLanguage] = useState("br");


    return (
        <Language active={activeLanguage} show={show}>
            <h2>Idioma</h2>
            <ul>
                <li onClick={() => {setActiveLanguage("br")}}>
                    <div className="nameCountry">
                        {activeLanguage === "br" && <BiCheck />}
                        <span>Português</span>
                    </div>
                    <Image src="https://countryflagsapi.com/png/br" alt="flag" width="40px" height="20px" />
                </li>
                <li onClick={() => {setActiveLanguage("us")}}>
                    <div className="nameCountry">
                        {activeLanguage === "us" && <BiCheck />}
                        <span>English</span>
                    </div>
                    <Image src="https://countryflagsapi.com/png/us" alt="flag" width="40px" height="20px" />
                </li>
                <li onClick={() => {setActiveLanguage("it")}}>
                    <div className="nameCountry">
                        {activeLanguage === "it" && <BiCheck />}
                        <span>Italian</span>
                    </div>
                    <Image src="https://countryflagsapi.com/png/it" alt="flag" width="40px" height="20px" />
                </li>
                <li onClick={() => {setActiveLanguage("es")}}>
                    <div className="nameCountry">
                        {activeLanguage === "es" && <BiCheck />}
                        <span>Spain</span>
                    </div>
                    <Image src="https://countryflagsapi.com/png/es" alt="flag" width="40px" height="20px" />
                </li>
                <li onClick={() => {setActiveLanguage("cn")}}>
                    <div className="nameCountry">
                        {activeLanguage === "cn" && <BiCheck />}
                        <span>Chinese</span>
                    </div>
                    <Image src="https://countryflagsapi.com/png/cn" alt="flag" width="40px" height="20px" />
                </li>
                <li onClick={() => {setActiveLanguage("de")}}>
                    <div className="nameCountry">
                        {activeLanguage === "de" && <BiCheck />}
                        <span>Germany</span>
                    </div>
                    <Image src="https://countryflagsapi.com/png/de" alt="flag" width="40px" height="20px" />
                </li>
            </ul>
        </Language>
    )
}