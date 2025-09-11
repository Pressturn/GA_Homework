import React from 'react'
import StarshipCard from '../StarshipCard/StarshipCard'

function StarshipList({ starships = [] }) {
    return (
        <div>
        {starships.map((ship) => (
                <StarshipCard key={ship.name} ship={ship} />
            ))
        }
        </div>
    )
    
}

export default StarshipList