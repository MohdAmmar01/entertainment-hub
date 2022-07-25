import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsYoutube } from "react-icons/bs";
import { MdSettingsInputSvideo } from 'react-icons/md'
function Movie(props) {
    const [data,setdata]=useState(null)
    const [video,setvideo]=useState(null)
    const {id,tag}=useParams()
    useEffect(()=>{
getdata()
getvideo()
    },[])
    const getdata=async ()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/${tag}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
       console.log(res)
        if(res.status===200){setdata(res.data)}
    }
    const getvideo=async ()=>{
        
        const vid=await axios.get(`https://api.themoviedb.org/3/${tag}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        if(vid.status===200){setvideo(vid.data.results[0].key)}
    }
  return (
  <>
  {data?    
  <div className='mov'>
    <img src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`} alt='movie image' className='mov-i' />
    <div className='desc'>
        <div className='head'>{data.original_title}</div>
        <div className='tag'>{data.tagline}</div>
        <div className='de'>{data.overview}</div>
        <Link  to={`https://www.youtube.com/watch?v=${video}`}   target="_blank"    className='watch-trailer'    ><BsYoutube className='y-s' />WATCH TRAILER </Link>
    </div>
  </div>:'loading...'}
  </>
  )
}

export default Movie