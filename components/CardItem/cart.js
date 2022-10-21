import React, { useState } from "react";

import { BiTrash } from "react-icons/bi";

import { CardCart } from "./styles";

export default function indexCart({ value, previousValue, amount }) {

    const [newAmount, setNewAmount] = useState(parseInt(amount))

    return (
        <CardCart>
            <BiTrash />
            <div className="photoProduct">
                <h3>Produto</h3>
            </div>
            <div className="info">
                <h2>Nome do produto</h2>
                <div className="pricing">
                    <span>R$ {value}</span>
                    { previousValue && <span>R$ {previousValue}</span>}
                </div>
                <div className="amount">
                    <button onClick={() => {
                        setNewAmount(newAmount + 1)
                    }}>+</button>
                    <span>{newAmount}</span>
                    <button onClick={() => {
                        if (newAmount === 1) return
                        setNewAmount(newAmount - 1)
                    }}>-</button>
                </div>
            </div>
        </CardCart>
    )
}