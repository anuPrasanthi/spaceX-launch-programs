import React, { useState, useEffect } from "react";
import getDataByFilters from "../services/spaceX";
import Box from "@material-ui/core/Box";
import FilterCards from "./filter_card";
import Cards from "./cards";
// import '../styles/style.css'

export default () => {
  console.log(getDataByFilters);

  const [filters, applyFilters] = useState({
    launch_success: true,
    land_success: false,
    launch_year: 2008,
  });
  const [cards, applyCards] = useState([]);
  useEffect(() => {
    getFilteredCards();
  }, [filters]);

  const getFilteredCards = () => {
    getDataByFilters(filters).then((response) => {
      console.log(response);
      applyCards(response);
    });
  };
  const handleLaunch = (value) => () => {
    applyFilters({ launch_success: value });
  };
  const handleLand = (value) => () => {
    applyFilters({ land_success: value });
  };
  const handleYear = (value) => () => {
    applyFilters({ launch_year: value });
  };
  return (
    <Box display="flex" p={1}>
      <FilterCards
        launch_success={filters}
        handleLaunch={handleLaunch}
        land_success={filters}
        handleLand={handleLand}
        launch_year={filters}
        handleYear={handleYear}
      />
      <Cards cards={cards} />
    </Box>
  );
};
