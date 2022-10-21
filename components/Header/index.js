import Link from "next/link";

import { MdNotifications, MdKeyboardArrowLeft } from "react-icons/md";

import { Menu, Search } from "../../components";

import { Header } from "./styles";

export default function indexHeader({ search, searchMargin, menu, back, backUrl, notification }) {
  return (
    <>
      <Header back={back} >
        {back ? (
          <Link href={backUrl ? backUrl : "/"}>
            <a className="back">
              <MdKeyboardArrowLeft />
            </a>
          </Link>
        ) : (
          <div className="logo">
            <Link href="/">
              <a>Logo</a>
            </Link>
          </div>
        )}
        <div className="nav">
          {search && <Search margin={searchMargin} />}
          {notification && <Link href="/notification">
            <a className="notification">
              <MdNotifications />
            </a>
          </Link>}
          {menu && <Menu />}
        </div>
      </Header>
    </>
  );
}
