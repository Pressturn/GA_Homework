import React from 'react'
import { Link } from 'react-router-dom'

function MailboxList({ mailboxes }) {
    if (mailboxes.length === 0)
        return <p>No mailbox yet.</p>

    return (
        <ul>
            {mailboxes.map((mailbox, idx) => (
                <li key={idx}>
                    <Link to={`/mailboxes/${idx + 1}`}>{mailbox.boxOwner}</Link>
                </li>
            ))}
        </ul>
    );
}

export default MailboxList