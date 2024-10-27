import React, { useEffect, useState } from 'react'
import axios from 'axios'
import noimage from '../images/noimage.jpg'
import { useNavigate } from 'react-router-dom'
import lod from '../images/loader.gif'


function Tvseries() {
    const [data, setdata] = useState(null)
    const [page, setpage] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        getmovies()
    }, [page])

    const getmovies = async () => {
        try {

            const res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`)
            if (res.status === 200) {
                setdata(res.data.results)
            }
        } catch (e) {

            console.log(e.message)
        }
    }
    const obj = { 'height': data ? 'auto' : '78vh' }

    return (
        <>
            <div className='home'>
                <div className='tt'>EXPLORE  TVSERIES</div>

                <div className='trending' style={obj}>
                    {
                        data ? data.map((elem, i) => {
                            return (
                                <div className='movie' onClick={() => { navigate(`/detail/tv/${elem.id}`) }}>
                                    {elem.backdrop_path ? <img className='movie-i'  alt='movie pic'  src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} /> : <img src={noimage} alt='movie pic'  className='movie-i' />}
                                    <div className='h'>{elem.original_name}</div>
                                    <div className='date'>
                                        <div className='m'>TV Series</div>
                                        <div className='d'>{elem.first_air_date}</div>
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

export default Tvseries