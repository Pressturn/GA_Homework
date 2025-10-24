import { useState, useEffect } from 'react'
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import StarshipList from './components/StarshipList/StarshipList'
import { getStarships } from './services/starshipService'
import './app.css'

function App() {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])

  useEffect(() => {
    async function loadStarShips() {
      try {
        const ships = await getStarships();
        setStarshipsData(ships);
        setDisplayedStarships(ships);
      } catch (error) {
        console.error(error);
      }
    }
    loadStarShips()
  }, [])

  function handleSearch(searchTerm) {
    setDisplayedStarships(
      starshipsData.filter((starship) =>
        starship.name.toLowerCase().includes(searchTerm.toLowerCase())
      ))
  }
  function resetSearch() {
    setDisplayedStarships(starshipsData);
  }

  return (
    <>
      <StarshipSearch
        onSearch={handleSearch}
        onReset={resetSearch}
        count={displayedStarships.length} />
      <StarshipList starships={displayedStarships} />
    </>
  )
}

export default App