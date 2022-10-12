import Head from 'next/head';
import Image from 'next/image';

import { Navbar, Carrosel, Categories, Suggested, Promotion, Featured } from "../components";

export default function Home() {
  return (
    <>
      <Navbar home="active"/>
      <Carrosel />
      <Categories />
      <Suggested />
      <Promotion />
      <Featured />
    </>
  )
}