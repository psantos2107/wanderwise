import { countries } from "countries-list";

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
