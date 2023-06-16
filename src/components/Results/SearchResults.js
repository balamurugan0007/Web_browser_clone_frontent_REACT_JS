import React, { forwardRef } from 'react'

import "./result.css"
const SearchResults = forwardRef(({results},ref) => {





 
  return (
    <div className='container' ref={ref} key={results.id}>
        <div className='card shadow mt-4' id='card'>
            <div className='card-body'>
                <h5 className='mx-2'>{results.title}</h5>
                <h2>
                  <a href={results.link} >
                    {results.link}
                    </a> 
                </h2>

                <p>
                  {results.description}
                </p>
            </div>
        </div>
     



       

{results.video?
       <div className='mt-2'>
        <h2 className='mt-2 mx-2' id='bt-group' >{results.ref_title}</h2>
       
        <div className='row'>
        <a href={results.video} >
           <div className='card shadow mt-4' id='vid-card'>
           
               <div className='card-body'>

                 
                 <img src={results.image} alt="pic"/>
                   
   
               </div>
               <div className='card-footer'>
               <h5 className='mx-2'>{results.title}</h5>
               <p>{results.views}</p>
               </div>
               
           </div>
        </a>
          </div>
       </div>
         :null }
      
    </div>
  )
})

export default SearchResults
