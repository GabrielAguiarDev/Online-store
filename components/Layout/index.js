import Head from "next/head";

import Header from "../Header";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Loja Online</title>
        <meta name="description" content="loja online de suplementos e outros." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <main className="main-container">{children}</main>
        <Navbar />
    </>
  );
}
