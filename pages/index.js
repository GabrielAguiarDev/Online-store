import { useEffect } from "react";
import { useAuth } from "../providers/auth";

import { Layout, Carrosel, Categories, Suggested, Promotion, Featured } from "../components";

export default function Home() {

  const { setUser } = useAuth();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataUser"))
    if(data) {
      setUser(data)
    } else {
      setUser(undefined)
    }
}, [])

  return (
      <Layout titlePage="Inicio" search menu notification navbar home="active">
        <Carrosel />
        <Categories title={true}/>
        <Suggested />
        <Promotion />
        <Featured />
      </Layout>
  )
}
