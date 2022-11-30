import Link from "next/link";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

import { ImPencil } from "react-icons/im";
import { MdNotifications, MdKeyboardArrowLeft } from "react-icons/md";

import { Menu, Search } from "../../components";

import { Header } from "./styles";

export default function indexHeader({ search, searchMargin, menu, back, backUrl, notification, editProfile }) {

  const dataUser = useSelector(selectUser)

  return (
    <>
      <Header back={back} >
        {back ? (
          <a className="back" onClick={() => window.history.back()}>
            <MdKeyboardArrowLeft />
          </a>
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
          {dataUser.isLogged === true && editProfile &&  <Link href="/profile/edit">
            <a className="edit">
              <ImPencil />
            </a>
          </Link>}
          
          {menu && <Menu />}
        </div>
      </Header>
    </>
  );
}
