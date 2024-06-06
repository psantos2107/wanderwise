import { countries } from "countries-list";

//creates an array of all countries in the world, sorted in alphabetical order.
function getCountryList() {
  const countryArr = [];
  for (const country in countries) {
    if (countries.hasOwnProperty(country)) {
      countryArr.push(countries[country].name);
    }
  }
  return countryArr.sort();
}

export default getCountryList;
