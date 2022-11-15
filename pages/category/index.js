import React, { useState } from "react";

import { Layout, Card, Categories, Title } from "../../components";

import { AllCategories } from "../../styles/category";

export default function indexCategories() {

    const [CategorySelected, setCategorySelected] = useState(1);

    const [CategoryAll, setCategoryAll] = useState([
        { id: 1, name: "Nome do produto 01", price: 420, previous: 499.99, category: 1, stars: 5},
        { id: 2, name: "Nome do produto 01", price: 43.80, category: 1, stars: 1},
        { id: 3, name: "Nome do produto 01", price: 87.50, previous: 125.30, category: 1, stars: 4},
        { id: 4, name: "Nome do produto 01", price: 159.99, category: 1, stars: 4},
        { id: 5, name: "Nome do produto 01", price: 69.99, category: 1, stars: 4},
        { id: 6, name: "Nome do produto 01", price: 290.30, previous: 340.50, category: 1, stars: 5},
        { id: 7, name: "Nome do produto 02", price: 234, previous: 349.99, category: 2, stars: 3},
        { id: 8, name: "Nome do produto 02", price: 13.30, category: 2, stars: 2},
        { id: 9, name: "Nome do produto 02", price: 45.20, previous: 125.30, category: 2, stars: 3},
        { id: 10, name: "Nome do produto 02", price: 455.99, category: 2, stars: 5},
        { id: 11, name: "Nome do produto 02", price: 24.90, category: 2, stars: 5},
        { id: 12, name: "Nome do produto 02", price: 224.30, previous: 340.50, category: 2, stars: 3},
        { id: 13, name: "Nome do produto 03", price: 843, previous: 499.99, category: 3, stars: 4},
        { id: 14, name: "Nome do produto 03", price: 240, category: 3, stars: 4},
        { id: 15, name: "Nome do produto 03", price: 82.40, previous: 125.30, category: 3, stars: 5},
        { id: 16, name: "Nome do produto 03", price: 143.99, category: 3, stars: 4},
        { id: 17, name: "Nome do produto 03", price: 54.35, category: 3, stars: 3},
        { id: 18, name: "Nome do produto 03", price: 79.30, previous: 90.50, category: 3, stars: 5},
    ])

    const filterCategory1 = () => {
        setCategorySelected(1)
    }

    const filterCategory2 = () => {
        setCategorySelected(2)
    }

    const filterCategory3 = () => {
        setCategorySelected(3)
    }

    return (
        <Layout back search menu navbar>
            <AllCategories>
                <h1>categorias</h1>
                <Categories onClick1={filterCategory1} onClick2={filterCategory2} onClick3={filterCategory3} />
                <Title title={`Categoria - ${CategorySelected}`} margin="2rem 0" />
                <div className="container_products">
                    {CategoryAll.map((product) => {
                        if(product.category === CategorySelected) {
                            return (
                                <Card 
                                    key={product.id} heart={true} 
                                    star={product.stars}
                                    name={product.name} price={product.price} 
                                    buy={`${product.category}=${product.id}`}
                                    previous={product.previous} minHeight="200px" flexDirection={true} />
                            )
                        }
                    })}
                </div>
            </AllCategories>
        </Layout>
    )
}