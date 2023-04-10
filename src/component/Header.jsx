import React from 'react';
import {FiBook} from 'react-icons/fi';


function Header() {
  return (
    <div className='header'>
    <section className='max-w-5xl m-auto pt-2  py-3 '>
        <div className='flex flex-row justify-start items-center gap-2'>
           <h1  className='w-22 bg-fuchsia-200 p-3 rounded-full'>< FiBook /></h1> 
            <p className='font-extrabold text-fuchsia-700'>Lexicon</p>
        </div>
    </section>
    </div>
  )
}

export default Header
