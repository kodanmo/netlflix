import axios from '../../Axios'
import YouTube from 'react-youtube'
import {API_KEY,imageUrl} from '../../Constant/Constant'
import React, { useEffect, useState } from 'react'
import "./Post.css"

function Post(props) {


const [movies,setMovies] = useState([])
const [urle,setUrl] = useState('')
   

 useEffect(() => {
  axios.get(props.url).then((response)=>
  { console.log(response.data)
    setMovies(response.data.results)
  })
 }, [])
 



  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };

  const handle = (id)=>{

    console.log(id)   
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{ 
     
      if(response.data.results.length !== 0)
      {
          setUrl(response.data.results[2])
      }

     })
  }



  return (
    <div className='row'>

        <h2>{props.title}</h2>

        <div className="post">
          {
            movies.map((obj,index)=>
                
              <img onClick={()=>handle(obj.id)} className={props.small ? 'sp' :'po'} src={`${imageUrl+obj.backdrop_path}`} alt="poster"></img>
            )
          }   
        </div>

       { urle && <YouTube videoId={urle.key} opts={opts} /> }
  
    </div>
  )
}

export default Post