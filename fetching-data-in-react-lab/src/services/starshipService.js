// src/services/starshipService.js

const BASE_URL = "https://swapi.info/api/starships";

async function getStarships() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed To Fetch Starships.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error in starshipService:", error);
    throw error;
  }
}

export { getStarships };