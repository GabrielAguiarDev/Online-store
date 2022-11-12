import Link from "next/link";
import { IoIosFitness } from "react-icons/io"

import Title from "../TitleSection";
import { Categories } from "./styles";

export default function index({ onClick1, onClick2, onClick3, title}) {
    return (
        <Categories>
            {title && <Title title="Categorias Populares" link="/category" />}
            <div className="category">
                {onClick1 ? (
                    <>
                        <a onClick={onClick1}><IoIosFitness /></a>
                        <a onClick={onClick2}><IoIosFitness /></a>
                        <a onClick={onClick3}><IoIosFitness /></a>
                    </>
                ) : (
                    <>
                        <Link href="/category/supplement">
                            <a><IoIosFitness /></a>
                        </Link>
                        <Link href="/category/fashion">
                            <a><IoIosFitness /></a>
                        </Link>
                        <Link href="/category/equipment">
                            <a><IoIosFitness /></a>
                        </Link>
                    </>
                )}
            </div>
        </Categories>
    )
}