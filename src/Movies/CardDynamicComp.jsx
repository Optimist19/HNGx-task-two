import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'



function CardDynamicComp() {

	
	const navigate = useNavigate()
	const getTheParam = useParams()
	const param = getTheParam?.id
	// const userDetails = data.find(user => user.id === parseInt(param))

	const [movieDetails, setMovieDetails] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	// const [movieDuration, setMovieDuration] = useState()


	useEffect(()=>{
	
		fetch(`https://api.themoviedb.org/3/movie/${param}?api_key=e003fb2bc9d1768b06f003c525c46c2c&language=en-US&append_to_response=credits`)
		.then(res=> res.json())
		.then(displayData => {
			setIsLoading(false)
			setMovieDetails(displayData)
			
		})
		.catch(err =>{
			// const myErr = 'Something went wrong!'
				// setIsLoading(false)
				setIsLoading(false)
				
				console.log(err.message)
			
			
		})
	},[])



  return (
	<>	
		<div className='dynamic-con'>
			<div className='lt'>
				<p onClick={()=>navigate(-1)}>&lt;</p>
			</div>
			{isLoading ? <h1>Loading</h1> :<main className='dynamic-main'>
			<div>
				<div>
					<img src={'https://image.tmdb.org/t/p/w500/'+movieDetails?.backdrop_path} />

				</div>
				<div className='dynamic-comp-detail'>
					{/* <p>{movieDetails?.id}</p> */}
					<p data-testid="movie-title">{movieDetails?.original_title}</p>
					<div>
						<p data-testid="movie-overview">{movieDetails?.overview}</p>
					</div>
			
					<p data-testid="movie-release-date">{new Date(movieDetails?.release_date).toUTCString()}</p>
					<p>{movieDetails?.vote_average}</p>
					<p data-testid="movie-runtime">{movieDetails?.runtime}Minutes</p>
					<p>{movieDetails?.status}</p>
					
					{/* <p>{movieDetails.production_companies.name}</p> */}
					{/* <p>{company}</p> */}
				</div>
				</div>
			</main>}
		</div>
	</>
  )
}

export default CardDynamicComp