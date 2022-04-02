import React from 'react';

const Country = ({country}) => {
    console.log(country);
    return (
        <div className='mx-auto shadow-lg p-2 w-48'>
            <div className='flex items-center flex-col'>
                <div>
                    <img className='h-16 w-32' src={country.flag} alt="" />
                </div>
                <div>
                    <h1>{country.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default Country;