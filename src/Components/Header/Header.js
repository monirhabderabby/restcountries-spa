import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow-lg'>
            <div className='flex justify-between mx-32 m-auto font-mono h-16 items-center'>
           <div>
               <h1 className='text-3xl'>Countries</h1>
            </div>
            <div className='flex'>
                <Link to={'/countries'} className='mr-8 text-lg'>Countries</Link>
                <Link to={'/bangladesh'} className='mr-8 text-lg'>Bangladesh</Link>
                <Link to={'/contact'} className='mr-8 text-lg'>Contact</Link>
            </div>
        </div>
        </div>
    );
};

export default Header;