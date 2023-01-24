import React, { useState } from "react";
import FilterType from "../components/FilterType";
import { typeOptions } from "../data/Data";

const Filter = ({ handleTypeFilter }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("Any Type");
console.log(selected)
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
        selected={selected}
        setSelected={setSelected}
        handleTypeFilter={handleTypeFilter}
      />
    </div>
  );
};

export default Filter;
