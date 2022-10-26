import Image from "next/image";
import { Card } from "./styles";

import { BiTrash } from "react-icons/bi";

export default function indexCard({width, minWidth, minHeight, photo, photoAlt, photoWidth, photoHeight, name, price, previous, status, purchaseDate, trash, amount, addAmount, subtractAmount, button, onClick }) {    

    const formatBRL = (value) => {
        if (value === undefined) return
        return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    return (
        <Card width={width} minWidth={minWidth} minHeight={minHeight} >
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
            </div>}
        </Card>
    )
}