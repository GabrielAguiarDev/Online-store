import Link from "next/link";

import { Card } from "./styles";

export default function index({ width }) {
    return (
        <Link href="/">
            <Card width={width} >
                <h3>Produto</h3>
            </Card>
        </Link>
    )
}