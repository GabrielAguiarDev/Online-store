import React, { useState } from "react";

import { Layout, MsgNotification } from "../../components";
import { Notification } from "../../styles/notification";

export default function indexNotification() {

    const [message, setMessage] = useState([
        {icon: 1, text: "Balance has benn added"},
        {icon: 2, text: "Welcome to Shop template!"},
        {icon: 3, text: "Your wishlist is updated."},
        {icon: 4, text: "Black Friday Sale"},
        {icon: 5, text: "You have 2 new orders waiting."},
        {icon: 6, text: "Your enquiry has been successfully sent."},
    ])

    const [totalNotification, setTotalNotification] = useState(message.length)

    return (
        <Layout back menu navbar>
            <Notification>
                <h1>Suas Notificações</h1>
                <span className="totalNotification">({totalNotification})</span>
                <div className="container_message">
                    {message.map((message, index) => <MsgNotification 
                        key={index}
                        icon={message.icon}
                        text={message.text}
                    />)}
                </div>
            </Notification>
        </Layout>
    )
}