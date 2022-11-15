import React, { useState } from "react";
import Link from "next/link";

import { Message } from "./styles";

import { MdNotifications } from "react-icons/md";
import { FaWallet, FaPercent } from "react-icons/fa"
import { BsHeartFill, BsHandbagFill, BsCheckLg } from "react-icons/bs"

export default function MessageNotification({ icon, text, url}) {

    const switchIcon = (iconMsg) => {
        switch (iconMsg) {
            case 1:
                return <FaWallet />
            case 2: 
                return <MdNotifications />
            case 3: 
                return <BsHeartFill />
            case 4: 
                return <FaPercent />
            case 5: 
                return <BsHandbagFill />
            case 6: 
                return <BsCheckLg />
            default:
                return <MdNotifications />

        }
    }

    return (
        <Message>
            {url ? (
                <Link href={url}>
                    <span>{switchIcon(icon)}</span>
                    <p>{text}</p>
                </Link>
            ) : (
                <>
                    <span>{switchIcon(icon)}</span>
                    <p>{text}</p>
                </>
            )}
        </Message>
    )
}