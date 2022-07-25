import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Footer from './Footer'
import Header from './Header'
import noimage from '../images/noimage.jpg'
import { useNavigate } from 'react-router-dom'

function Tvseries() {
  const [data,setdata]=useState(null)
const [page,setpage]=useState(1)
const navigate=useNavigate()

useEffect(()=>{
getmovies()
},[page])

const getmovies=async()=>{
    try{

        const res=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`)
        if(res.status===200){
            setdata(res.data.results)
        console.log(res.data)
        
        }}catch(e){
        
            console.log(e.message)
        }
}
  return (
 <>
 <div className='home'>
 <div className='tt'>EXPLORE  TVSERIES</div>

 <div className='trending'>
        {
            data? data.map((elem,i)=>{
                return(
                    <div className='movie' onClick={()=>{navigate(`/detail/tv/${elem.id}`)}}>
                     {elem.backdrop_path ?   <img className='movie-i' src={`https://image.tmdb.org/t/p/w300/${elem.backdrop_path}`} />:null}
                     <div className='h'>{elem.original_name}</div>
                     <div className='date'>
                        <div className='m'>TV Series</div>
                        <div className='d'>{elem.first_air_date}</div>
                        </div>
                   </div>
                )

            }):'loading....'
        }

    </div>
    <div className='pag'>
        <div className="pag-i" onClick={()=>{setpage(1)}}>1</div>
        <div className="pag-i" onClick={()=>{setpage(2)}}>2</div>
        <div className="pag-i" onClick={()=>{setpage(3)}}>3</div>
        <div className="pag-i" onClick={()=>{setpage(4)}}>4</div>
        <div className="pag-i" onClick={()=>{setpage(5)}}>5</div>
    </div>
 </div>

 </>
  )
}

export default Tvseries