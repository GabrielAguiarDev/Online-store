import { BiTrash } from "react-icons/bi";

import { CardCart } from "./styles";

export default function indexCart({ price, name, previousValue, amount, addAmount, subtractAmount}) {
    return (
        <CardCart>
            <BiTrash />
            <div className="photoProduct">
                <h3>Produto</h3>
            </div>
            <div className="info">
                <h2>{name}</h2>
                <div className="pricing">
                    <span>{price}</span>
                    { previousValue && <span>{previousValue}</span>}
                </div>
                <div className="amount">
                    <button onClick={addAmount}>+</button>
                    <span>{amount}</span>
                    <button onClick={subtractAmount}>-</button>
                </div>
            </div>
        </CardCart>
    )
}