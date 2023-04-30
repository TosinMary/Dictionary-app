import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {FiBook} from 'react-icons/fi';


function Header() {
  return (
    <section className='container text-center '>
        <div className='row flex justify-center '>
          <div className="col col-lg-6">
          <h3 className='rounded-4'>< FiBook /></h3> 
          </div>
        </div>
    </section>
  )
}

export default Header
