import React from "react";

const FilterType = ({
  typeOptions,
  label,
  show,
  handleDropdownClick,
  setShow,
  filterTerm,
  setFilterTerm,
  handleTypeFilter
}) => {
  return (
    <div className="type-filter">
      <div className="filter-group">
        {label && <span className="filter-label">{label}</span>}
      </div>
      <div className={show ? "filter-dropdown active" : "filter-dropdown"}>
        <div
          onClick={handleDropdownClick}
          className="input"
        >
          {filterTerm}
        </div>
        {show && (
          <div className="option">
            {typeOptions.map((type) => {
              return (
                <div
                  value={type.name}
                  key={type.name}
                  onClick={(e) => {
                    setFilterTerm(type.name);
                    setShow(false);
                    handleTypeFilter(e);
                  }}
                  onChange={(e) => handleTypeFilter(e.target.id)}
                >
                {type.image && (<img src={type.image} alt="type image" />)}
                  {type.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterType;
