import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Layout, CartItem } from "../../components";
import { Cart } from "../../styles/cart";
import { BsX } from "react-icons/bs";

export default function indexCart() {

    const products = [
        {
            value: "250,00",
            amount: "1" 
        },
        {
            value: "20,00",
            amount: "3" 
        },
        {
            value: "50,00",
            amount: "2" 
        },
        {
            value: "150,00",
            amount: "1" 
        },
        {
            value: "330,50",
            amount: "1" 
        },
        {
            value: "190,30",
            amount: "1" 
        },
    ]

    const [subTotal, setSubTotal] = useState(null)
    const [total, setTotal] = useState(null)
    const [descCoupon, setDescCoupon] = useState(null)
    const [inputCoupon, setInputCoupon] = useState("");
    const [classError, setClassError] = useState("")
    const [msgError, setMsgError] = useState(null)
    const coupon = {
        percentage: 25,
        key: "nextjs"
    };
    
    const formatBRL = (value) => {
        return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    const applyCoupon = () => {
        if (inputCoupon === coupon.key) {
            let discount = (coupon.percentage * subTotal) / 100
            let newValueTotal = (subTotal - discount)
            setTotal(newValueTotal)
            setDescCoupon(discount)
            setInputCoupon("")
            setClassError("")
        } else {
            setInputCoupon("")
            setTotal(subTotal)
            setDescCoupon(null)
            setClassError("error")
            setMsgError("Cupom inválido!")
        }
    }

    const removeCoupon = () => {
        setTotal(subTotal)
        setDescCoupon(null)
    }

    const calculateValueAllProducts = () => {
        let sub = 0;
        products.forEach((item) => {
            sub = (sub + (parseInt(item.value) * parseInt(item.amount)))
        })
        setSubTotal(sub)
        setTotal(sub)
    }

    
    useEffect(() => {
        calculateValueAllProducts()  
    }, [])

    return (
        <Layout titlePage="Carrinho" search searchMargin="0 1rem 0 0" back="color" cart="active" >
            <Cart>
                <h1>Meu Carrinho</h1>
                <div className="container-products">
                    { products && products.map((item, index) => <CartItem key={index} value={item.value} amount={item.amount} />) }
                </div>
                <div className={`insertCoupon ${classError}`}>
                    <input type="text" placeholder={msgError ? msgError : "Insira um cupom"} onChange={e => setInputCoupon(e.target.value)} value={inputCoupon}/>
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
                        {subTotal ? (
                            <span>{formatBRL(subTotal)}</span>
                        ) : (
                            <span>R$ 00,00</span>
                        )}
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
                            <span>R$ 00,00</span>
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