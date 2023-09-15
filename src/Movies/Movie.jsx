import { useState, useEffect } from "react"
import CardComp from "./CardComp"
import NavBar from "./NavBar"
import tv from '../assets/tv.png'
import Footer from "./Footer"

function Movie() {

	const [movieState, setMovieState] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState()

	useEffect(()=>{

		async function getData(){
			try{
				const response = await fetch('https://api.themoviedb.org/3/movie/top_rated',{
				method: 'GET',
				headers:{
					'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDAzZmIyYmM5ZDE3NjhiMDZmMDAzYzUyNWM0NmMyYyIsInN1YiI6IjY0YjgyNDdjNTViMGMwMDBmZmIwZGZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n0Cuf1zswhdiK3E4m5ZEdbDUimZcX8AWZWBnJC3e6WI',
					'accept': 'application/json'
				}
			})
			const data = await response.json()
			const a = data?.results
			const b = a.slice(0, 10)
			setMovieState(b)
			// localStorage.setItem('movieApi', JSON.stringify(b))
			// console.log(data)
			setIsLoading(false)
		}catch(err){
				const myErr = 'Something went wrong!'
				setIsLoading(false)
				setIsError(myErr)
				console.log(err.message)
			
			}
		
		}
		getData()
	},[])

	// console.log(movieState)


  return (
	<>
		<NavBar />
		<div className="movie-error">
			<h1>{isError}</h1>
		</div>
		{isLoading? 
			<div className="tv-spinner">
				<img src={tv} alt="tv-spinner"/>
			</div> : 
			<CardComp movies={movieState}/>
		}
			<Footer />
	</>
  )
}

export default Movie