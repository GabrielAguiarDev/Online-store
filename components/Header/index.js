import Link from "next/link";
import React, { useState, useRef } from "react";

import { MdNotifications, MdMenu } from "react-icons/md";
import { ImSearch } from "react-icons/im";

import { Header, Search, Menu, Overlay } from "./styles";

export default function index() {

  const searchInput = useRef(null);
  const [toggle, setToggle] = useState(null);
  const [menu, setMenu] = useState(null);
  const [search, setSearch] = useState("");

  const searchItem = () => {
    // Pesquisa Item no banco de dados
    console.log(search)
  }

  const handleToggle = async() => {
    await setToggle(true);
    searchInput.current.focus();
  }

  const clickToClose = () => {
    if(toggle === !null) {
      setToggle(!toggle);
    }
    if(menu === !null) {
      setMenu(!menu)
    }
  }

  const handleMenu = () => {
    setMenu(true)
  }

  const handleKeyUp = (e) => {
    if (e.code ==="Enter" && search !== "") {
      searchItem()
      setSearch("");
    }
  }

  return (
    <>
      <Header>
        <Overlay zIndex={toggle || menu} onClick={clickToClose} />
        <div className="logo">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div className="nav">
          <Search display={toggle}>
            <input type="text" autoFocus ref={searchInput} placeholder="Buscar" onKeyUp={handleKeyUp} onChange={e => setSearch(e.target.value)} value={search} />
            <ImSearch onClick={handleToggle} />
          </Search>
          <Link href="/notification">
            <a>
              <MdNotifications />
            </a>
          </Link>
          <button onClick={handleMenu}>
            <MdMenu />
          </button>
        </div>
      </Header>
      <Menu visible={menu} />
    </>
  );
}
