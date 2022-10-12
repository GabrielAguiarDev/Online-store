import Link from "next/link";
import { IoIosFitness } from "react-icons/io"

import Title from "../TitleSection";
import { Categories } from "./styles";

export default function index() {
    return (
        <Categories>
            <Title title="Categorias Populares" link="/category" />
            <div className="category">
                <Link href="/category/supplement">
                    <a><IoIosFitness /></a>
                </Link>
                <Link href="/category/fashion">
                    <a><IoIosFitness /></a>
                </Link>
                <Link href="/category/equipment">
                    <a><IoIosFitness /></a>
                </Link>
            </div>
        </Categories>
    )
}