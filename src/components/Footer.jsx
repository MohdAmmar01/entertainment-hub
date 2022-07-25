import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TbTrendingUp } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Footer() {
    const navigate=useNavigate()
  return (
    <>
     <div className='footer'>
        <div className='s' >
        <div className="sel"  onClick={()=>{
            navigate('/')
        }}>
          <div className="i"><TbTrendingUp /></div>
          <div className="i">Trending</div>
            
            </div>
        <div className="sel" onClick={()=>{
            navigate('/movies')
        }}>
        <div className="i"><BiMoviePlay /></div>
          <div className="i">Movies</div>
            </div>
        <div className="sel" onClick={()=>{
            navigate('/tvseries')
        }}>
        <div className="i"><MdOutlinePersonalVideo /></div>
          <div className="i">Tvseries</div>
            </div>
        <div className="sel" onClick={()=>{
            navigate('/search')
        }}>
        <div className="i"><AiOutlineSearch /></div>
          <div className="i">Search</div>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Footer
