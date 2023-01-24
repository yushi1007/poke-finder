import React, { useState } from "react";
import FilterType from "../components/FilterType";
import { typeOptions } from "../data/Data";

const Filter = ({ handleTypeFilter, setFilterBy, filterBy }) => {
  const [show, setShow] = useState(false);

  const handleDropdownClick = () => {
    setShow((show) => !show);
  }

  return (
    <div className="filter">
      <div className="filter-header">
        <h3>Filter + Sort</h3>
      </div>
      <FilterType 
        typeOptions={typeOptions}
        label="Select Type"
        handleDropdownClick={handleDropdownClick}
        show={show}
        setShow={setShow}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        handleTypeFilter={handleTypeFilter}
      />
    </div>
  );
};

export default Filter;
