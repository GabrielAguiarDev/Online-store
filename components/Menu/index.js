import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../../providers/auth";

import { MdSettings, MdMenu } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BsHouseFill, BsCartFill, BsHeartFill, BsPersonFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

import { Overlay } from "../../components";

import { Button, Menu, Profile, Links } from "./styles";

export default function indexMenu() {

    const { setUser } = useAuth();
    const [menu, setMenu] = useState(null);

    const clickToClose = () => {
      if(menu === !null) {
        setMenu(!menu)
      }
    }

    const handleMenu = () => {
      setMenu(true)
    }

    const handleLogout = () => {
        setUser(undefined)
        localStorage.removeItem("dateUser")
    }

    return (
        <>
            <Overlay zIndex={menu} onClick={clickToClose} />
            <Button onClick={handleMenu}>
                <MdMenu />
            </Button>
            <Menu visible={menu}>
                <h2 onClick={clickToClose}>Nome do site</h2>
                <Link href="/profile">
                    <Profile>
                    <div className="image">
                        <BsPersonFill />
                    </div>
                    <span>Nome do usuário</span>
                </Profile>
                </Link>
                <h3>Menus</h3>
                <Links>
                    <li>
                        <Link href="/">
                            <a>
                                <BsHouseFill />
                                <span>Inicio</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category">
                            <a>
                                <BiCategory />
                                <span>Categorias</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/favorites">
                            <a>
                                <BsHeartFill />
                                <span>Favoritos</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            <a>
                                <BsCartFill />
                                <span>Carrinho</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings">
                            <a>
                                <MdSettings />
                                <span>Configurações</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>
                                <FcAbout />
                                <span>Sobre</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a onClick={handleLogout}>
                                <FaSignOutAlt />
                                <span>Sair</span>
                            </a>
                        </Link>
                    </li>
                </Links>
            </Menu>
        </>
        
    )
}