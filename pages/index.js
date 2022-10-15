import { Layout, Carrosel, Categories, Suggested, Promotion, Featured } from "../components";

export default function Home() {
  return (
      <Layout titlePage="Inicio" search menu notification navbar home="active">
        <Carrosel />
        <Categories />
        <Suggested />
        <Promotion />
        <Featured />
      </Layout>
  )
}