import React, { useState } from "react";
import { CardRequest } from "./styles";

export default function indexRequest({ value, previousValue, status, purchaseDate }) {
    return (
        <CardRequest>
            <div className="photoProduct">
                <h3>Produto</h3>
            </div>
            <div className="info">
                <h2>Nome do produto</h2>
                <div className="pricing">
                    <span>R$ {value}</span>
                    { previousValue && <span>R$ {previousValue}</span>}
                </div>
                <div className="status">
                    <span className={status}>{status}</span> • <span>{purchaseDate}</span>
                </div>
            </div>
        </CardRequest>
    )
}