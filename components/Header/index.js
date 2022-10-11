import Link from "next/link";
import React, { useState, useRef } from "react";

import { MdNotifications, MdMenu } from "react-icons/md";
import { ImSearch } from "react-icons/im";

import { Header, Search, Overlay } from "./styles";

export default function index() {

  const searchInput = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");

  const searchItem = () => {
    console.log(search)
  }

  async function handleToggle() {
    await setToggle(!toggle);
    searchInput.current.focus();
  }

  const handleKeyUp = (e) => {
    if (e.code ==="Enter" && search !== "") {
      searchItem()
      setSearch("");
    }
  }

  return (
    <Header>
      <Overlay zIndex={toggle} onClick={() => {handleToggle()}} />
      <div className="logo">Logo</div>
      <div className="nav">
        <Search display={toggle}>
          <input type="text" autoFocus ref={searchInput} placeholder="Buscar" onKeyUp={handleKeyUp} onChange={e => setSearch(e.target.value)} />
          <ImSearch onClick={() => {handleToggle()}} />
        </Search>
        <Link href="/notification">
          <a>
            <MdNotifications />
          </a>
        </Link>
        <button onClick={() => {console.log("clicou button!")}}>
          <MdMenu />
        </button>
      </div>
    </Header>
  );
}
