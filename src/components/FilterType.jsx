import React from 'react'

const FilterType = ({ typeOptions, label }) => {
  return (
    <div className="type-filter">
      <div className="filter-group">
        {label && <span className="filter-label">{label}</span>}
      </div>
      <div className="filter-dropdown">
        <input type="text" className="textBox" placeholder="Type" /> 
        <div className="option">
          {typeOptions.map((type) => {
            return(
              <div key={type.name}><img src={type.image} alt="type image" />{type.name}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FilterType