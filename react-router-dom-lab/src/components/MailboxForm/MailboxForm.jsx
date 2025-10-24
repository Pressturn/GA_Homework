import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function MailboxForm({ addBox }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        boxOwner: '',
        boxSize: "Small",
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        addBox(formData);
        navigate("/mailboxes");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Owner
                <input
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Size
                <select
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </label>
            <button type="submit">Create Mailbox</button>
        </form>
    )
}

export default MailboxForm