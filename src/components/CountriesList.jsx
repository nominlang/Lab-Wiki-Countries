import countriesData from '../countries.json'
import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";  


function CountriesList() {
  const [countries, setCountries] = useState([]);

  const { countrieId } = useParams();
  console.log('countrieId', countrieId);  

  useEffect(() => {                                      // <== ADD
    const countrie = countriesData.find((countrieObj) => {
      return countrieObj._id === countrieId;
    })
 
    if (countrie) {
      setCountries(countrie);
    }
    
  }, [countrieId]);
 

 
  return (
    <div>
      <h1>Countries CountriesList</h1>
      
      {!countries && <h3>Countrie not found!</h3>}
      
      {countries && (
        <>
          <h2>{countries.name}</h2>
          <Link to="/CountryDetails">Back</Link>
        </>
      )}
    </div>
  )
}
 

export default CountriesList;
