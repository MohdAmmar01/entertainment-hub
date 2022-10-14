import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsYoutube } from "react-icons/bs";
import lod from '../images/loader.gif'

function Movie(props) {
    const [data, setdata] = useState(null)
    const [video, setvideo] = useState(null)
    const [similar, setsimilar] = useState(null)
    const { id, tag } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getdata()
        getvideo()
        getsimilar()
    }, [id])
    const getdata = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/${tag}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        if (res.status === 200) { setdata(() => { return (res.data) }) }
    }
    const getsimilar = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/${tag}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        console.log(res.data)
        if (res.status === 200) { setsimilar(() => { return (res.data.results) }) }
    }
    const getvideo = async () => {

        const vid = await axios.get(`https://api.themoviedb.org/3/${tag}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        if (vid.status === 200) { setvideo(() => { return (vid.data.results[0].key) }) }
    }

    return (
        <>
            {data && video && similar ?
                <div className='mov' style={{ 'height': 'auto', padding: '0px', display: 'flex'}}>
                    <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt='movie pic' className='mov-i' />
                    <div className='desc'>
                        <div className='head'>{data.original_title}</div>
                        <div className='tag'>{data.tagline}</div>
                        <div className='de'>{data.overview}</div>
                        <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" className='watch-trailer'    ><BsYoutube className='y-s' />WATCH TRAILER </a>
                    </div>
                    <div className='similar-h'>SIMILAR MOVIES</div>
                    <div className='similar-movies'>
                        {
                            similar.map((elem, i) => {
                                return (
                                    <img onClick={() => { navigate(`/detail/movie/${elem.id}`) }} src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} alt='similar movies' className='s-i' />
                                )
                            })
                        }
                    </div>
                </div> : <div className='loading'><img className='loader' src={lod}></img></div>}
        </>
    )
}

export default Movie