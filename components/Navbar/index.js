import Link from "next/link"

import { BsHouseFill, BsHandbagFill, BsCartFill, BsHeartFill, BsPersonFill } from "react-icons/bs";

import { Nav } from "./styles"

export default function Navbar() {
    return (
        <Nav>
            <ul>
                <li>
                    <Link href="/">
                        <a className="active">
                            <BsHouseFill />
                            <span>Inicio</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/myOrder">
                        <a>
                            <BsHandbagFill />
                            <span>Compras</span>
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
                    <Link href="/favorites">
                        <a>
                            <BsHeartFill />
                            <span>Favoritos</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <a>
                            <BsPersonFill />
                            <span>Perfil</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </Nav>
    )
}