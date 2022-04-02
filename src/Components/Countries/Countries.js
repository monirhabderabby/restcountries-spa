import React from 'react';
import Country from '../Country/Country';
import useCountries from '../useCountries/useCountries';

const Countries = () => {
    const [countries, setCountries] = useCountries()
    return (
        <div className='grid grid-cols-4 gap-6 pt-12'>
            {
                countries.map(country=> <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Countries;