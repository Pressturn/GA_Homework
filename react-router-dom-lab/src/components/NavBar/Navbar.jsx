import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/mailboxes">Mailbox</Link>
            <Link to="/new-mailbox">New Mailbox</Link>
        </nav>
    )
}

export default Navbar