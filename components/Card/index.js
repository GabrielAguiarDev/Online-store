import React, { useState } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { Card } from "./styles";

import { BiTrash, BiHeart } from "react-icons/bi";
import { GoStar } from "react-icons/go"
import { HiHeart } from "react-icons/hi";
import { BsHandbagFill } from "react-icons/bs";

export default function indexCard({width, minWidth, minHeight, flexDirection, photo, photoAlt, photoWidth, photoHeight, name, price, previous, status, buy, purchaseDate, heart, trash, star, amount, addAmount, subtractAmount, button, onClick }) {  
    
    const [Clickheart, setClickHeart] = useState(false)

    const formatBRL = (value) => {
        if (value === undefined) return
        return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    return (
        <Card width={width} minWidth={minWidth} minHeight={minHeight} flexDirection={flexDirection} >
            {heart && (Clickheart === true ? (
                <HiHeart onClick={() => setClickHeart(false)} />
            ) : (
                <BiHeart onClick={() => setClickHeart(true)} />
            ))}
            {trash && <BiTrash />}
            <div className="photoProduct">
                <h3>{photo ? (
                    <Image src={photo} width={photoWidth ? photoWidth : "90px"} height={photoHeight ? photoHeight : "90px"} alt={photoAlt ? photoAlt : name} />
                ) : "Produto"}</h3>
            </div>
            {price && <div className="info">
                <h2>{name ? name : "Nome do produto"}</h2>
                <div className="pricing">
                    <span>{formatBRL(price)}</span>
                    { previous && <span>{formatBRL(previous)}</span>}
                </div>
                {status && <div className="status">
                    <span className={status}>{status}</span> • <span>{purchaseDate}</span>
                </div>}
                {amount && <div className="amount">
                    <button onClick={addAmount}>+</button>
                    <span>{amount}</span>
                    <button onClick={subtractAmount}>-</button>
                </div>}
                {button && <button className="button" onClick={onClick}>{button}</button>}
                {star && <div className="info_bottom">
                    {star && <span className="star"><GoStar /> ({star})</span>}
                    {buy && <Link href={`/category/product/${buy}`}>
                        <a className="buy"><BsHandbagFill /></a>
                    </Link>}
                </div>}
            </div>}
        </Card>
    )
}