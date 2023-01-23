import React from "react";
import FilterType from "../components/FilterType";
import { typeOptions } from "../data/Data";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-header">
        <h3>Filter + Sort</h3>
      </div>
      <FilterType 
        typeOptions={typeOptions}
        label="Select Type"
      />
    </div>
  );
};

export default Filter;
