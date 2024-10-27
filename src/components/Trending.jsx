import React, { useEffect, useState } from 'react'
import axios from 'axios'
import noimage from '../images/noimage.jpg'
import { useNavigate } from 'react-router-dom';
import lod from '../images/loader.gif'


function Trending() {
    const [data, setdata] = useState(null)
    const [page, setpage] = useState(1)

    const navigate = useNavigate()
    useEffect(() => {
        getmovies()
    }, [page])

    const obj = { 'height': data ? 'auto' : '78vh' }
    const getmovies = async () => {
        try {

            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            if (res.status === 200) {
                setdata(res.data.results)

            }
        } catch (e) {

            console.log(e.message)
        }
    }
    return (
        <>
            <div className='home'>
                <div className='tt'>TRENDING TODAY</div>

                <div className='trending' style={obj}>
                    {
                        data ? data.map((elem, i) => {
                            return (
                                <div className='movie' onClick={() => { navigate(`/detail/${elem.media_type}/${elem.id}`) }}>
                                    {elem.backdrop_path ? <img className='movie-i' alt='movie pic'  src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} /> : <img src={noimage} alt='movie pic'  className='movie-i' />}
                                    <div className='h'>{elem.original_title ? elem.original_title.toUpperCase() : 'MISSION JOHN'}</div>
                                    <div className='date'>
                                        <div className='m'>{elem.media_type.toUpperCase()}</div>
                                        <div className='d'>{elem.release_date ? elem.release_date : '2017-7-24'}</div>
                                    </div>
                                </div>
                            )

                        }) : <div className='loading'><img className='loader' src={lod}></img></div>
                    }

                </div>
                <div className='pag'>
                    <div className="pag-i" onClick={() => { setpage(1) }}>1</div>
                    <div className="pag-i" onClick={() => { setpage(2) }}>2</div>
                    <div className="pag-i" onClick={() => { setpage(3) }}>3</div>
                    <div className="pag-i" onClick={() => { setpage(4) }}>4</div>
                    <div className="pag-i" onClick={() => { setpage(5) }}>5</div>
                </div>
            </div>
        </>
    )
}

export default Trending