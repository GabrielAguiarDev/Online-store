import { Layout, RequestItem } from "../../components";
import { Order } from "../../styles/myOrder";

export default function MyOrder() {
    return (
        <Layout titlePage="Pedidos" search notification menu navbar myOrder="active" >
            <Order>
                <h1>Minhas Compras</h1>
                <div className="container-products">
                    <RequestItem value="120,00" status="Delivered" purchaseDate="03/10/2022" />
                    <RequestItem value="320,00" previousValue="440,50" status="Pending" purchaseDate="09/10/2022" />
                    <RequestItem value="750,80" status="Cancelled" purchaseDate="14/10/2022" />
                    <RequestItem value="530,00" status="Processing" purchaseDate="17/10/2022" />
                </div>
            </Order>
        </Layout>
    )
}