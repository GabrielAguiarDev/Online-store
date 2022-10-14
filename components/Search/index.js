import React, { useState, useRef } from "react";

import { Overlay } from "../../components";

import { Search } from "./styles";

import { ImSearch } from "react-icons/im";

export default function indexSearch() {

    const searchInput = useRef(null);
    const [toggle, setToggle] = useState(null);
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
    }

    const handleKeyUp = (e) => {
        if (e.code ==="Enter" && search !== "") {
            searchItem()
            setSearch("");
        }
    }

    return (
        <>
            <Overlay zIndex={toggle} background="transparent" onClick={clickToClose} />
            <Search display={toggle}>
                <input type="text" autoFocus ref={searchInput} placeholder="Buscar" onKeyUp={handleKeyUp} onChange={e => setSearch(e.target.value)} value={search} />
                <ImSearch onClick={handleToggle} />
            </Search>
        </>
    )
}