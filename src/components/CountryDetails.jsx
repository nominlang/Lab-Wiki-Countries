// src/pages/ProjectDetailsPage.js
import countries from './countries.json'
import { useParams, Link } from 'react-router-dom'

function CountriesDetailsPage() {
  
  const { countrieId } = useParams();
  console.log('countrieId -->', countrieId);
  
  return (
    <div>
  
    </div>
  )
}

export default CountriesDetailsPage;
