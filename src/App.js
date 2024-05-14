import React, { useState, useEffect } from "react";
import BeerCard from "./components/BeerCard";
import SearchBar from "./components//SearchBar";
import { fetchBeers } from "./utils/api";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBeers();
      setBeers(data);
      setFilteredBeers(data);
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
