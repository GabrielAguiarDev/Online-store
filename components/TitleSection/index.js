import Link from "next/link";

import { Title } from "./styles";

export default function index({ title, link, margin }) {
    return (
        <Title margin={margin}>
            <h2>{title}</h2>
            {link && <Link href={`${link}`}>
                <a>Ver Mais</a>
            </Link>}
        </Title>
    )
}