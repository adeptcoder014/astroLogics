// ========= DEPENDENCIES ===========================================================
import React, { useState } from "react";
// ========= Component_Funtion ===========================================================

const Autocomplete = ({ locations, setLocation }) => {
  // ========= STATES/MODEL ===========================================================

  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [hideLocationDropdown, setHideLocationDropdown] = useState(true);
// ========= EVENT_HANDLERS/CONTROLLERS ===========================================================

  const handleInputChange = (e) => {
    const value = e.target.value;

    console.log("===========================>", value);
    setInputValue(value);
    setHideLocationDropdown(false);
    const ssasas = locations.filter((location) => {
      if (location.name.includes(value)) {
        setHideLocationDropdown(false);
      }
    });
    // setLocation({
    //   ...location,
    //   lat: value.latitude,
    //   long: value.longitude,
    // });

    // Filter the options based on the input value
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    if (e.target.value === "") {
      setFilteredOptions([]);
      setHideLocationDropdown(true);
    }
  };

  const handleOptionClick = (location) => {
    console.log("================== locations", location);
    setInputValue(location.name);
    setLocation({
      ...location,
    });
    setHideLocationDropdown(true);

    // Do something with the selected location, e.g., pass it to a parent component
    // console.log(location);

    // Clear the filtered options and input value
    setFilteredOptions([]);
    // setInputValue("");
  };
// ========= VIEW ===========================================================

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <input
        className="dropdownLocation"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a location..."
      />
      <ul
        className={
          hideLocationDropdown
            ? "dropdownlocationboxhide"
            : "dropdownLocationBox"
        }
      >
        {filteredOptions.map((location) => (
          <li
            key={location.coordinates}
            onClick={() => handleOptionClick(location)}
          >
            {location.name ? location.name : "No city found"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
