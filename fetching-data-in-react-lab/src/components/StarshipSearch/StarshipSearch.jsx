import { useState } from 'react'


function StarshipSearch({ onSearch, onReset, count }) {

  const [searchTerm, setSearchTerm] = useState('')
  const [prevSearchTerm, setPrevSearchTerm] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm)
    setPrevSearchTerm(searchTerm);
    setSearchTerm
  }

  function handleReset() {
    onReset();
    setPrevSearchTerm('');
  }

  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
      
      <form onSubmit={handleSubmit}>
        Search Term:
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

        <p>Number of result: {count}</p>
        <p>
          {prevSearchTerm
            ? `Last Search: ${prevSearchTerm}`
            : 'Search for a starship by name.'}
        </p>

      {prevSearchTerm && (
        <button type="button"
          onClick={handleReset}>
          Show all starships
        </button>
      )}
    </>
  )
}

export default StarshipSearch