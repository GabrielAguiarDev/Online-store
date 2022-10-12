import Title from "../TitleSection";
import { Suggested } from "./styles";

import Card from "../CardItem";

export default function index() {
    return (
        <Suggested>
            <Title title="Itens Sugeridos" link={`/category`} />
            <div className="container_cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Suggested>
    )
}