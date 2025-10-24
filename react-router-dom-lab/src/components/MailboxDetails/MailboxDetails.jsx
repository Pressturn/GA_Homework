import React from 'react'
import { useParams } from "react-router-dom"

function MailboxDetails({ mailboxes }) {
    const { mailboxId } = useParams();
    const index = Number(mailboxId) - 1;
    const mailbox = mailboxes[index];

    if (!mailbox) {
        return <h2>Mailbox Not Found!</h2>
    }

    return (
        <>
            <h2> Mailbox: {mailboxId}</h2>
            <p>Boxholder: {mailbox.boxOwner}</p>
            <p>Box Size: {mailbox.boxSize}</p>
        </>
    )
}

export default MailboxDetails