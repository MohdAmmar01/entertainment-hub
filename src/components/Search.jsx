import React,{useEffect,useState} from 'react'
import axios from 'axios'
import noimage from '../images/noimage.jpg'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [data,setdata]=useState(null)
  const [search,setsearch]=useState(null)
  const [bb1,setbb1]=useState(true)
  const [bb2,setbb2]=useState(false)
  const [type,settype]=useState(true)
const [page,setpage]=useState(1)
const navigate=useNavigate()


useEffect(()=>{
getmovies()
},[page,type,search])

const getmovies=async()=>{
    try{

        const res=await axios.get(`https://api.themoviedb.org/3/search/${type?'movie':'tv'}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&query=${search?search:'avengers'}`)
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
<div className='search-here'>
  <form className='search'>
    <div className='s-i'>
<div >search</div>
<input type='text' className='inp' onChange={(e)=>{
  setsearch(e.target.value)
}} value={search} placeholder='search here for latest movies or  TV series'/>
    </div>
    {/* <div type='submit' className='sub' onClick={(e)=>{
      e.preventDefault();
      setfs(search)
    }}>
      <AiOutlineSearch />
    </div> */}
  </form>
</div>

<div className='search-by'>
  <div className="sbi" onClick={()=>{
 if(!type){settype(true)}
    bb1?setbb1(false):setbb1(true) ;
    setbb2(false)
    
    }} style={{'border-bottom':bb1?'1px solid white':null}}>SEARCH MOVIES</div>
  <div className="sbi"  onClick={()=>{
    if(type) {settype(false)}

    bb2?setbb2(false):setbb2(true);
    setbb1(false)
    
    }} style={{'border-bottom':bb2?'1px solid white':null}}>SEARCH TVSERIES</div>
</div>
<div className='trending'>
        {
            data? data.map((elem,i)=>{
                return(
                    <div className='movie'  onClick={()=>{{type?navigate(`/detail/movie/${elem.id}`):navigate(`/detail/tv/${elem.id}`)}}}>
                     {elem.backdrop_path ?   <img className='movie-i' src={`https://image.tmdb.org/t/p/w300/${elem.backdrop_path}`} />:null}
                     <div className='h'>{elem.original_title?elem.original_title:elem.name}</div>
                     <div className='date'>
                        <div className='m'>{type?'Movie':'TV Series'}</div>
                        <div className='d'>{elem.release_date?elem.release_date:elem.first_air_date}</div>
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

export default Search