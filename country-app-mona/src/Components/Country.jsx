// import './Country.css';
import { useState, useEffect } from "react";
import axios from "axios";
const Country = (props) => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [foundCountry, setFoundCountry] = useState(countries);
  const [display, setDisplay] = useState("none");
   useEffect(() => {
    // console.log(click)
    // fetch('https://restcountries.eu/rest/v2/all')
    //     .then(response => response.json())
    //     .then(response => setCountries(response.results))
    axios
      .get("https://restcountries.eu/rest/v2/all")

      .then((response) => {
        console.log(response);
        setCountries(response.data);
      });
  }, []);

  const filter = (e) => {
    setDisplay("block");
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = countries.filter((country) => {
        return country.name.toUpperCase().startsWith(keyword.toUpperCase());
      });
      setFoundCountry(results);
    } else {
      setFoundCountry(countries);
    }
    setName(keyword);
  };
  return (
    <div>    
    <div className="dropdown">
      <div id="myDropdown" className="dropdown-content">
        <input
          type="search"
          value={name}
          onChange={filter}
          onClick={filter}
          id="myInput"
          placeholder="type or search country "
        />
          {foundCountry && foundCountry.length > 0 ? (
            foundCountry.map((country, index) => (
              <li className="tooltip" key={index}>
                <img src={country.flag}></img> <p>{country.name} </p>
                <span class="tooltiptext">population {country.population}</span>
              </li>
            ))
          ) : (
            <h3 style={{ display: display }}>No results found!</h3>
          )}
      </div>
    </div>
    </div>
  );
};
export default Country;
