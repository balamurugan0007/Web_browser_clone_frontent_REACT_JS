import React, { useState } from 'react'
//import {IoSettingsSharp,IoMdApps} from "react-icons/io5"
import {GrApps} from "react-icons/gr"
import {AiOutlineSetting} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {MdOutlineClear} from "react-icons/md"
import "./navbar.css"
import Requst from '../request/Requst'
import {FiSearch} from "react-icons/fi"
//import Result from '../Results/Result'
import Searches from '../Results/SearchResults'


const Navbar2 =()=> {



 



  const [search,setSearch]=useState('')
  
//post  request

const[result,setresult]=useState('')

const requestOptions = {
      method: 'POST',
      body:JSON.stringify({
        "find":search
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };

//all search
  const submit=async()=>{
    
    console.log(search)
  fetch('http://127.0.0.1:8000/', requestOptions)
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     setresult(data)
     // Handle data
  })
      .catch(Error=>(
        console.log(Error)
      ))
      
    }

  const Images=()=>{
    fetch(Requst.image, requestOptions)
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     setresult(data)
     // Handle data
  })
  }
    
  
  const Videos=()=>{
    fetch(Requst.videos, requestOptions)
  .then((response) => response.json())
  .then((data) => {
     console.log(data);
     setresult(data)
     // Handle data
  })
  }
 
    
    





  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='navbar mt-4 d-flex justify-content-start' >
            <div className='navbar-brand mx-4 '>
                safeGuard
            </div>
            <div className='shadow'  id='navbar2-form'>
              <BiSearch className='mx-3'/>
                <input className=' mx-3' 
                    placeholder='search'  id='input2'
                    
                    onChange={e=>setSearch(e.target.value)}
                />
                {
                  search?<MdOutlineClear className='mx-3' 
                  />:null
                }
                <button onClick={submit} ><FiSearch /></button>
            </div>
            <div className='d-flex justify-content-end'>
                  <GrApps className='mx-3'/>
                  <AiOutlineSetting className='mx-4'/>
            </div>

        </div>
      </div>

      <div className=' row '>
        <div className='col-2'>

        </div>
        <div className='col'>
        <div className='btn-group d-flex' role='group'>
        
        <button  className='mt-2 mx-2'  id='bt-group' onClick={submit}>All</button>
        <button className='mt-2 mx-2' id='bt-group' onClick={Images}>Images</button>
        <button className='mt-2 mx-2'  id='bt-group' onClick={Videos}>Videos</button>
        
          </div>
        </div>
      </div>

      {result?result.map((results) => (
          

          

         <Searches key={results.id} results={results}/>
         

        )):null}

      
       

       
    </div>
  )
}


export default Navbar2
