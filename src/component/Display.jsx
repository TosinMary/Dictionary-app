import React from 'react'
import {GoSearch} from 'react-icons/go';
import {BsPlay} from 'react-icons/bs';
import { useState } from 'react';

function Display() {
    const [inputText, setInputText] = useState("")


  return (
    <section className='my-8'>
          <h1 className='flex justify-center items-center font-semibold text-fuchsia-800 text-2xl my-4 '>SearchWord...</h1>
        <div className='flex flex-row justify-center items-center '>
            <input type="text" onChange={(e) => setInputText(e.target.value)} className='p-4 bg-gray-200 text-fuchsia-600 font-bold outline-none border-none shadow-sm w-1/2 ' ></input>
            <button className=' bg-fuchsia-300 p-5 rounded-lg outline-none'><GoSearch /></button>
        </div>
        <div className='flex justify-center items-center gap-20 lg:gap-20 m-auto my-10 w-48 bg-fuchsia-200 p-2'>
        <p className='text-sm italic text-fuchsia-800'>Sound</p>
        <button className='bg-fuchsia-600  p-2 rounded-full'><BsPlay /></button>

        </div>
       <p>{inputText}</p> 
        

      
    </section>
  )
}

export default Display
