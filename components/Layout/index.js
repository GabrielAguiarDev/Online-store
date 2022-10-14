import Head from "next/head";

import { Header, Navbar } from "../../components";

export default function index({ navbar, back, search, notification, menu, titlePage, children, home, myOrder, cart, favorites, profile }) {
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content="loja online de suplementos e outros." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header search={search} notification={notification} menu={menu} back={back} />
      <main className="main-container">{children}</main>
      {navbar && <Navbar home={home} myOrder={myOrder} cart={cart} favorites={favorites} profile={profile} />}
    </>
  );
}