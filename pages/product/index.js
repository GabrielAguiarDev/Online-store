import React, { useState } from "react";

import { Card, Layout } from "../../components";

import { Products } from "../../styles/product";

import { TiThSmall } from "react-icons/ti";
import { FaList } from "react-icons/fa";

export default function indexProduct() {

    const [displayForm, setDisplayForm] = useState(true)
    const [AllProducts, setAllProducts] = useState([
        { id: 1, name: "Nome do produto 01", price: 420, previous: 499.99, category: 1, stars: 5},
        { id: 2, name: "Nome do produto 02", price: 43.80, category: 1, stars: 1},
        { id: 3, name: "Nome do produto 03", price: 87.50, previous: 125.30, category: 1, stars: 4},
        { id: 4, name: "Nome do produto 04", price: 159.99, category: 1, stars: 4},
        { id: 5, name: "Nome do produto 05", price: 69.99, category: 1, stars: 4},
        { id: 6, name: "Nome do produto 06", price: 290.30, previous: 340.50, category: 1, stars: 5},
        { id: 7, name: "Nome do produto 07", price: 234, previous: 349.99, category: 2, stars: 3},
        { id: 8, name: "Nome do produto 08", price: 13.30, category: 2, stars: 2},
        { id: 9, name: "Nome do produto 09", price: 45.20, previous: 125.30, category: 2, stars: 3},
        { id: 10, name: "Nome do produto 10", price: 455.99, category: 2, stars: 5},
        { id: 11, name: "Nome do produto 11", price: 24.90, category: 2, stars: 5},
        { id: 12, name: "Nome do produto 12", price: 224.30, previous: 340.50, category: 2, stars: 3},
        { id: 13, name: "Nome do produto 13", price: 843, previous: 499.99, category: 3, stars: 4},
        { id: 14, name: "Nome do produto 14", price: 240, category: 3, stars: 4},
        { id: 15, name: "Nome do produto 15", price: 82.40, previous: 125.30, category: 3, stars: 5},
        { id: 16, name: "Nome do produto 16", price: 143.99, category: 3, stars: 4},
        { id: 17, name: "Nome do produto 17", price: 54.35, category: 3, stars: 3},
        { id: 18, name: "Nome do produto 18", price: 79.30, previous: 90.50, category: 3, stars: 5},
        { id: 19, name: "Nome do produto 19", price: 420, previous: 499.99, category: 1, stars: 5},
        { id: 20, name: "Nome do produto 20", price: 43.80, category: 1, stars: 1},
        { id: 21, name: "Nome do produto 21", price: 87.50, previous: 125.30, category: 1, stars: 4},
        { id: 22, name: "Nome do produto 22", price: 159.99, category: 1, stars: 4},
        { id: 23, name: "Nome do produto 23", price: 69.99, category: 1, stars: 4},
        { id: 24, name: "Nome do produto 24", price: 290.30, previous: 340.50, category: 1, stars: 5},
        { id: 25, name: "Nome do produto 25", price: 234, previous: 349.99, category: 2, stars: 3},
        { id: 26, name: "Nome do produto 26", price: 13.30, category: 2, stars: 2},
        { id: 27, name: "Nome do produto 27", price: 45.20, previous: 125.30, category: 2, stars: 3},
        { id: 28, name: "Nome do produto 28", price: 455.99, category: 2, stars: 5},
        { id: 29, name: "Nome do produto 29", price: 24.90, category: 2, stars: 5},
        { id: 30, name: "Nome do produto 30", price: 224.30, previous: 340.50, category: 2, stars: 3},
        { id: 31, name: "Nome do produto 31", price: 843, previous: 499.99, category: 3, stars: 4},
        { id: 32, name: "Nome do produto 32", price: 240, category: 3, stars: 4},
        { id: 33, name: "Nome do produto 33", price: 82.40, previous: 125.30, category: 3, stars: 5},
        { id: 34, name: "Nome do produto 34", price: 143.99, category: 3, stars: 4},
        { id: 35, name: "Nome do produto 35", price: 54.35, category: 3, stars: 3},
        { id: 36, name: "Nome do produto 36", price: 79.30, previous: 90.50, category: 3, stars: 5},
    ]);

    return (
        <Layout back search searchMargin="0 1rem 0 0" navbar>
            <Products>
                <div className="container_top">
                    <h1>Todos os Produtos</h1>
                    <div className="buttonList">
                        <button className={`${!displayForm ? "active" : ""}`} onClick={() => setDisplayForm(false)}><TiThSmall /></button>
                        <button className={`${displayForm ? "active" : ""}`} onClick={() => setDisplayForm(true)}><FaList /></button>
                    </div>
                </div>
                <div className="container_products">
                    {displayForm ? (
                        AllProducts.map((product, index) => <Card 
                            key={index}
                            name={product.name}
                            price={product.price}
                            previous={product.previous}
                            heart={true}
                            width="95%"
                            marginRight="10px"
                            button="Adicione ao carrinho"
                        />)
                    ) : (
                        AllProducts.map((product, index) => <Card 
                            key={index}
                            name={product.name}
                            star={product.stars}
                            price={product.price}
                            previous={product.previous}
                            buy={`${product.category}=${product.id}`}
                            heart={true}
                            minHeight="200px" 
                            maxWidth="163px"
                            photoWidth="147px"
                            photoHeight="141px"
                            marginBottom="10px"
                            flexDirection={true} 
                        />)
                    )}
                </div>
            </Products>
        </Layout>
    )
}