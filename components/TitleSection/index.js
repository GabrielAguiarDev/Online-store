import Link from "next/link";

import { Title } from "./styles";

export default function index({ title, link }) {
    return (
        <Title>
            <h2>{title}</h2>
            <Link href={`${link}`}>
                <a>Ver Mais</a>
            </Link>
        </Title>
    )
}