import Link from "next/link"

import { BsHouseFill, BsHandbagFill, BsCartFill, BsHeartFill, BsPersonFill } from "react-icons/bs";

import { Nav } from "./styles"

export default function Navbar({ home, myOrder, cart, favorites, profile }) {
    return (
        <Nav>
            <ul>
                <li>
                    <Link href="/">
                        <a className={home}>
                            <BsHouseFill />
                            <span>Inicio</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/myOrder">
                        <a className={myOrder}>
                            <BsHandbagFill />
                            <span>Compras</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a className={cart}>
                            <BsCartFill />
                            <span>Carrinho</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/favorites">
                        <a className={favorites}>
                            <BsHeartFill />
                            <span>Favoritos</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <a className={profile}>
                            <BsPersonFill />
                            <span>Perfil</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </Nav>
    )
}