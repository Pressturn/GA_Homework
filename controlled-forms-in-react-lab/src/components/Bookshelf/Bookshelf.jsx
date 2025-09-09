import { useState } from 'react'

function Bookshelf() {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    function handleInputChange(event) {
        const { name, value } = event.target
        setNewBook({ ...newBook, [name]: value, })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Author
                        <input
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </label>

                    <button type="submit">Add</button>
                </form>

            </div>
            <div className="bookCardsDiv">
                {books.map((book, idx) => (
                    <div key={idx} className="bookCard">
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf

