import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {GoSearch} from 'react-icons/go';
import {BsPlay} from 'react-icons/bs';
import { useState } from 'react';
import Axios from 'axios';



function Display() {
    const [wordText, setWordText] = useState("")
    const [wordParameters, setWordParameters] = useState(null)


    const getDictionaryApi = () => {
      if (wordText === "" || wordText === " ") {
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
    <section className='container text-center mt-4'>
      <div className="row flex justify-center">
        <div className="col col-lg-6">
        <form onSubmit = {(e)=> {getDictionaryApi(e.preventDefault());}}>
      <h3 className='mb-2'>WordFinder</h3>
        <div >
        <div class="input-group mb-3">
       <input type="text" class="form-control" placeholder="Search word"onChange={(e) => setWordText(e.target.value)}  aria-label="Recipient's username" aria-describedby="button-addon2"/>
       <button onClick={getDictionaryApi} class="btn btn-outline-secondary" type="button" id="button-addon2"><GoSearch /></button>
      </div>
        </div>
      </form>
        </div>
      </div>
        <div className="col">
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
        </div>
      
        <p className='text-gray-300 text-sm flex justify-center items-end my-5'>All Right & Reserved by Bamidele Tosin.</p>
       

      
    </section>
  )
}

export default Display
