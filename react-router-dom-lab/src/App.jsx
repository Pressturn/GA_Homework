// src/App.jsx
import Navbar from "./components/NavBar/Navbar"
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { Route, Routes } from "react-router-dom"
import { useState } from "react";
import "./App.css"

function App() {

  const [mailboxes, setMailboxes] = useState([]);

  function addBox(formData) {
    const newMailbox = { _id: mailboxes.length + 1, ...formData }
    setMailboxes([...mailboxes, formData]);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  )
};

export default App;
