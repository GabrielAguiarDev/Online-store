import Link from "next/link";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

import { ButtonLogout } from "./styles";

import { FaSignOutAlt } from "react-icons/fa";

export default function Logout({ text }) {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Link href="/login">
            <ButtonLogout onClick={handleLogout}>
                <FaSignOutAlt />
                {text}
            </ButtonLogout>
        </Link>
    )
}