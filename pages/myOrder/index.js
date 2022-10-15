import { Layout, RequestItem } from "../../components";

export default function MyOrder() {
    return (
        <Layout titlePage="Pedidos" search notification menu navbar myOrder="active" >
            <h1>Minhas Compras</h1>
            <RequestItem />
            <RequestItem />
            <RequestItem />
            <RequestItem />
        </Layout>
    )
}