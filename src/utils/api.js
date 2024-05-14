import axios from "axios";

export const fetchBeers = async () => {
  try {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching beers:", error);
    return [];
  }
};
