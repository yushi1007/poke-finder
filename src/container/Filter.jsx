import React from "react";
import FilterType from "../components/FilterType";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-header">
        <h3>Filter + Sort</h3>
      </div>
      <FilterType />
    </div>
  );
};

export default Filter;
