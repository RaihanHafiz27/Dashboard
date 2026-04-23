import { FormDataTypes } from "@/pages/settings";
import { City, Country } from "country-state-city";
import { useMemo } from "react";

export const useLocationLogic = (formUser: FormDataTypes) => {
  const allCountries = Country.getAllCountries();

  const countryOptions = useMemo(() => {
    return allCountries.map((country) => ({
      value: country.isoCode,
      title: country.name,
    }));
  }, []);

  const cityOptions = useMemo(() => {
    if (!formUser.country) return [];
    const citiesOfCountry = City.getCitiesOfCountry(formUser.country);
    return citiesOfCountry?.map((city) => ({
      value: `${city.name}-${city.latitude}`,
      title: city.name,
    }));
  }, [formUser.country]);
  return {
    countryOptions,
    allCitiesOfCountry: cityOptions,
  };
};
