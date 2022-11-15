import React, { useState } from "react";

import { Layout, Card } from "../../components";
import { Order } from "../../styles/myOrder";

export default function MyOrder() {
    const [orderProducts, setOrderProducts] = useState([
        { id: 1, name: "Nome do produto", price: 120, status: "Delivered", purchaseDate: "03/10/2022"},
        { id: 2, name: "Nome do produto", price: 320, previous: 440.50, status: "Pending", purchaseDate: "09/10/2022"},
        { id: 3, name: "Nome do produto", price: 750.80, status: "Cancelled", purchaseDate: "14/10/2022"},
        { id: 4, name: "Nome do produto", price: 530, status: "Processing", purchaseDate: "17/10/2022"}
    ])
    return (
        <Layout titlePage="Pedidos" search notification menu navbar myOrder="active" >
            <Order>
                <h1>Minhas Compras</h1>
                <div className="container-products">
                    {orderProducts && orderProducts.map((product, index) => (
                        <Card 
                            key={index}
                            name={product.name}
                            price={product.price}
                            previous={product.previous}
                            status={product.status} 
                            purchaseDate={product.purchaseDate}
                            marginRight="10px"
                            width="95%"
                        />
                    ))}
                </div>
            </Order>
        </Layout>
    )
}