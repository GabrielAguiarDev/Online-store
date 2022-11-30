import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

import { MdSettings, MdMenu } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsHouseFill, BsCartFill, BsHeartFill, BsPersonFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

import { Overlay, ButtonLogout } from "../../components";

import { Button, Menu, Profile, Links } from "./styles";

export default function indexMenu() {

    const { name } = useSelector(selectUser)

    const [menu, setMenu] = useState(null);

    const clickToClose = () => {
      if(menu === !null) {
        setMenu(!menu)
      }
    }

    const handleMenu = () => {
      setMenu(true)
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
                    <span>{name ? name : "Nome do usuário" }</span>
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
                        <ButtonLogout text={"Sair"} />
                    </li>
                </Links>
            </Menu>
        </>
        
    )
}