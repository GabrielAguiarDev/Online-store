import Title from "../TitleSection";
import Card from "../Card";

import { Featured } from "./styles";

export default function index() {
    return (
        <Featured>
            <Title title="Produtos em Destaque" link="/featured" />
            <div className="container_featured">
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
                <Card minWidth="130px" minHeight="200px" />
            </div>
        </Featured>
    )
}