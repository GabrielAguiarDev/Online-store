import Link from "next/link";
import React, { useState, useCallback } from "react";

import { Layout, Card } from "../../components";
import { Cart } from "../../styles/cart";
import { BsX } from "react-icons/bs";

export default function indexCart() {
    const [allProducts, setAllProducts] = useState([
        { id: 1, name: "Nome do produto", price: 250, amount: 1, total: 0},
        { id: 2, name: "Nome do produto", price: 20, amount: 3, total: 0},
        { id: 3, name: "Nome do produto", price: 50, amount: 2, total: 0},
        { id: 4, name: "Nome do produto", price: 150, amount: 1, total: 0},
        { id: 5, name: "Nome do produto", price: 330.50, previous: 399.99, amount: 1, total: 0},
        { id: 6, name: "Nome do produto", price: 190.30, amount: 1, total: 0},
    ]);
    const [total, setTotal] = useState(null);
    const [descCoupon, setDescCoupon] = useState(null);
    const [inputCoupon, setInputCoupon] = useState("");
    const [classError, setClassError] = useState("");
    const [msgError, setMsgError] = useState(null);
    const coupon = {
        percentage: 25,
        key: "nextjs"
    };

    const formatBRL = (value) => {
        if (value === undefined) return
        return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    const changeAmount = useCallback(
        (id, add) => {
            const newState = [...allProducts];
            const item = newState.find((product) => product.id === id);
            if (add) {
                item.amount += 1
            } else {
                if (item.amount > 1) {
                    item.amount -= 1
                }
            }
            item.total = item.amount * item.price
            setAllProducts(newState);
        },
        [allProducts]
    );

    const applyCoupon = () => {
        if (inputCoupon.toLowerCase() === coupon.key) {
            let sub = allProducts.reduce((subTotal, product) => (subTotal += product.price * product.amount), 0)
            let discount = (coupon.percentage * sub) / 100
            let newValueTotal = (sub - discount)
            setTotal(newValueTotal)
            setDescCoupon(discount)
            setInputCoupon("")
            setClassError("")
        } else {
            setInputCoupon("")
            setTotal(null)
            setDescCoupon(null)
            setClassError("error")
            setMsgError("Cupom inválido!")
        }
    }

    const removeCoupon = () => {
        setTotal(null)
        setDescCoupon(null)
    }

    return (
        <Layout titlePage="Carrinho" search searchMargin="0 1rem 0 0" back="color">
            <Cart>
                <h1>Meu Carrinho</h1>
                <div className="container-products">
                    { allProducts && allProducts.map((product, index) => {
                        return (
                            <Card
                                key={index} 
                                trash={true}
                                name={product.name}
                                price={product.price} 
                                previous={product.previous}
                                amount={product.amount}
                                addAmount={() => changeAmount(product.id, true)}
                                subtractAmount={() => changeAmount(product.id, false)}
                                width="95%"
                            />
                        )
                        
                    }) }
                </div>
                <div className={`insertCoupon ${classError}`}>
                    <input 
                        type="text" 
                        placeholder={msgError ? msgError : "Insira um cupom"} onChange={e => setInputCoupon(e.target.value)} 
                        value={inputCoupon}
                    />
                    <button onClick={applyCoupon}>Aplicar Cupom</button>
                </div>
                {descCoupon && <div className="infoCoupon">
                    <BsX onClick={removeCoupon} />
                    <p>
                        <span>Cupom: </span>
                        <span>{coupon.key}</span>
                    </p>
                    <p>
                        <span>Desconto: </span>
                        <span>- {coupon.percentage}%</span>
                    </p>
                </div>}
                <div className="final-price">
                    <div className="sub">
                        <span>Sub-total dos Produtos</span>
                        <span>{allProducts && formatBRL(allProducts.reduce((subTotal, product) => (subTotal += product.price * product.amount), 0))}</span>
                    </div>
                    <div className="coupon">
                        <span>Cupom</span>
                        {descCoupon ? (
                            <span>- {formatBRL(descCoupon)}</span>
                        ) : (
                            <span>R$ 00,00</span>
                        )}
                    </div>
                    <div className="total">
                        <span>Pagamento Total</span>
                        {total ? (
                            <span>{formatBRL(total)}</span>
                        ) : (
                            <span>{formatBRL(allProducts.reduce((total, product) => (total += product.price * product.amount), 0))}</span>
                        )}
                    </div>
                </div>
                <Link href="/checkout">
                    <a className="checkout">Finalizar compra</a>
                </Link>
            </Cart>
        </Layout>
    )
}