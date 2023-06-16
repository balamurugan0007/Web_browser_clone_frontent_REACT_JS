import React, { useState } from 'react'

import "./navbar.css"

import {HiArrowSmallLeft,HiArrowRight} from "react-icons/hi2"
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {BsShareFill} from "react-icons/bs"


const Navbar = () => {

  const [search,setSearch]=useState()

   
const left=()=>{
  console.log(search)
}
   
   
   
  return (
    <div className='container-fluid'>
       
            <div className='row'>
                <div className='navbar d-flex '>
                  <div className='justify-content-start'>
                  <HiArrowSmallLeft onClick={left} id='navbar-icons-arrow' className='mx-1'/>
              <HiArrowRight id='navbar-icons-arrow' className='mx-1'/>
                  </div>
                
              <form className='form mx-4' id='navbar1-form'>
                <BiSearch className='mx-4' id='search-icons'/>
              
                <input className=''  
                      placeholder='Search safeGuard or type URL' 
                      onChange={e=>setSearch(e.target.value)}></input>
               <BsShareFill className='mx-4' id='share-icons'/>
               
 
            </form>
            <div className='d-flex justify-content-start'>
            <h4>user</h4>
                <BsThreeDotsVertical className='mx-4 '  id='navbar-icons-settings'/>
            </div>
            

            </div>
          </div>
       

       
      
    </div>
  )
}

export default Navbar
