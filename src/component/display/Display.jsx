import React from 'react'
import {GoSearch} from 'react-icons/go';
import {BsPlay} from 'react-icons/bs';
import { useState } from 'react';
import Axios from 'axios';


function Display() {
    const [wordText, setWordText] = useState("")
    const [wordParameters, setWordParameters] = useState(null)

    const getDictionaryApi = () => {
      if (wordText === "") {
        alert("Please Input a word");
        
      } else {
      Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordText}`).then((res) => {
        setWordParameters(res.data[0]);
      })
      .catch(() => {
        alert("Please check your spellings and try again");
        
      })
     }
    }
  

    let audio = new Audio(wordParameters?.phonetics[0].audio);
    const start = () => {
      audio.play();
    }
    


  return (
    <section className='my-8'>
      <form onSubmit = {(e)=> {getDictionaryApi(e.preventDefault());}}>
      <h1 className='flex justify-center items-center font-semibold text-fuchsia-800 text-2xl my-4 '>SearchWord...</h1>
        <div className='flex flex-row justify-center items-center '>
            <input type="text" autoFocus placeholder='Search word'  onChange={(e) => setWordText(e.target.value)} className='p-4 rounded-lg bg-gray-200 text-fuchsia-600 font-bold outline-none border-none shadow-sm w-1/2 ' ></input>
            <button onClick={getDictionaryApi} className=' bg-fuchsia-300 p-5 rounded-lg outline-none'><GoSearch /></button>
        </div>
        
      </form>
      
          
        <div className=' m-auto max-w-2xl p-4'>
          
          <ul className='flex flex-col justify-center items-start '>
            <li className='my-4'>{wordParameters?.word}
             <br />{wordParameters?.phonetics[0].audio &&
             (<button onClick={start} className='bg-fuchsia-300 mt-3  p-2 rounded-full'><BsPlay /></button>)
             }{" "} 
             <span>{wordParameters?.phonetics[0].text}</span></li>
            <li className='my-4'>{wordParameters?.meanings[0].partOfSpeech}</li>
            {wordParameters?.meanings[0].definitions[0].definition && (<li className='mt-4 flex flex-col'  >
              <span className='text-2xl text-fuchsia-800 italic font-semibold'>Definitions:</span>
               <br />
             {wordParameters?.meanings[0].definitions[0].definition}</li>)}
            <li className='my-4'> {wordParameters?.meanings[0].definitions[1].definition}</li>
            {wordParameters?.meanings[0].definitions[0].synonyms[0] && (<li className='mt-4  flex flex-col'>
              
              <span className='text-2xl text-fuchsia-800 italic font-semibold'>Synonyms:</span>
               <br/>
             {wordParameters?.meanings[0].definitions[0].synonyms[0]}</li>)}
             {wordParameters?.meanings[0].definitions[0].antonyms[0] && (<li className='mt-4  flex flex-col'>
              <span className='text-2xl text-fuchsia-800 italic font-semibold'>Antonyms:</span>
               <br />
             {wordParameters?.meanings[0].definitions[0].antonyms[0]}</li>)}
          </ul>
        </div>
        <p className='text-gray-300 text-sm flex justify-center items-end my-5'>All Right & Reserved by Bamidele Tosin.</p>
       

      
    </section>
  )
}

export default Display
