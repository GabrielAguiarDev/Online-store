import Link from "next/link";
import Image from "next/image";

import { Layout } from "../../components";

import { MessageError } from "../../styles/404";

export default function NotFound() {
    return (
        <Layout titlePage="NotFound" back >
            <MessageError>
                <Image src="/Image/404.jpg" width="320" height="210" alt="NotFound" />
                <h1>Error 404: Página não encontrada</h1>
                <p>A página que você está procurando pode ter sido removida devido a alteração de nome ou está temporariamente indisponível.</p>
                <Link href="/">
                    <a>Ir para página inicial</a>
                </Link>
            </MessageError>
        </Layout>
    )
}