import React from 'react';
import {FiBook} from 'react-icons/fi';

function Header() {
  return (
    <section className='max-w-5xl m-auto mt-2 border-b-2 border-fuchsia-200 py-3 '>
        <div className='flex flex-row justify-start items-center gap-2'>
           <h1  className='w-22 bg-fuchsia-200 p-3 rounded-full'>< FiBook /></h1> 
            <p className='font-extrabold text-fuchsia-700'>Lexicon</p>
        </div>
    </section>
  )
}

export default Header
