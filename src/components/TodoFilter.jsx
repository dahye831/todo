import React, { useState } from 'react';

export default function TodoFilter({ filters, onFilter }) {
  const [selected, setSelected] = useState(null)
  return (
    <ul className="filterList">
      {filters.map((value, index) => (
        <li
          className={`filterItem ${selected === value && "filterItem--on"}`}
          key={index}
        >
          <button
            className="filterItem__button"
            onClick={() => {
              onFilter(value);
              setSelected(value);
            }}
            aria-selected={selected === value}
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
}

