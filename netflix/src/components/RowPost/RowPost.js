import React, {useEffect, useState} from 'react'
import Youtube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'

const RowPost = (props) => {

  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    },[])
  })
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  const handleMovieId = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data)
      if(response.data.results.lenght !=0){
        setUrlId(response.data.results[0])
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj) => (
            <img onClick={() => handleMovieId(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt=''></img>
          ))}
        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default RowPost