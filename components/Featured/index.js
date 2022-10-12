import Title from "../TitleSection";
import Card from "../CardItem";

import { Featured } from "./styles";

export default function index() {
    return (
        <Featured>
            <Title title="Produtos em Destaque" link="/featured" />
            <div className="container_featured">
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
                <Card width="130px" />
            </div>
        </Featured>
    )
}