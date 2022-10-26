import Title from "../TitleSection";
import { Suggested } from "./styles";

import Card from "../Card";

export default function index() {
    return (
        <Suggested>
            <Title title="Itens Sugeridos" link={`/category`} />
            <div className="container_cards">
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
                <Card minHeight="200px" />
            </div>
        </Suggested>
    )
}