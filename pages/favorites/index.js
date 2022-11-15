import React, { useState } from "react";
import { Layout, Card } from "../../components";
import { Favorites } from "../../styles/favorites";

export default function indexFavorites() {

    const [productsFavorites, setProductsFavorites] = useState([
        { id: 1, name: "Nome do produto", price: 420, previous: 499.99},
        { id: 2, name: "Nome do produto", price: 43.80},
        { id: 3, name: "Nome do produto", price: 87.50, previous: 125.30},
        { id: 4, name: "Nome do produto", price: 159.99},
        { id: 5, name: "Nome do produto", price: 69.99},
        { id: 6, name: "Nome do produto", price: 290.30, previous: 340.50},
    ])
    const [totalProducts, setTotalProducts] = useState(productsFavorites.length)

    return (
        <Layout titlePage="Favoritos" back="color" search searchMargin="0 1rem 0 0" navbar favorites="active" >
            <Favorites>
                <h1>Favoritos</h1>
                <span>({totalProducts})</span>
                <div className="container-products">
                    {productsFavorites && productsFavorites.map((product, index) => <Card
                        key={index}
                        trash={true}
                        name={product.name}
                        price={product.price}
                        previous={product.previous}
                        width="95%"
                        marginRight="10px"
                        button="Adicione ao carrinho"
                        onClick={() => console.log("adicionado ao carrinho")}
                    />)}
                </div>
            </Favorites>
        </Layout>
    )
}