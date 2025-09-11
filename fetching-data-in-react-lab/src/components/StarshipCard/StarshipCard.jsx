import React from 'react'

function StarshipCard({ ship }) {
  const { name, starship_class, manufacturer, model } = ship
  return (
    <>
      <p> {name} </p>
      <p>Class:{starship_class}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Model:{model}</p>
    </>
  )
}

export default StarshipCard