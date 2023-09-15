import { Link } from "react-router-dom"
import imdb from '../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import berry from '../assets/PngItem_1381056 1.png'


function CardComp({movies}) {

  return (
	<>
			<div className="feature-see-more">
				<h2>Featured Movie</h2>
				<p>See more</p>
			</div>
		<div className="container">
			<div className="second-con">
				{movies.map(a =>{
					const d = a.release_date // Converted the movie date to toUTCString
					const date = new Date(d).toUTCString()
					{/* console.log(date) */}
					return(
						<Link key={a.id} to={`/movieDetails/${a.id}`}>
							<div className="card" data-testid="movie-card">
								<img className="card-img" src={'https://image.tmdb.org/t/p/w500/'+a.poster_path} alt={a.title} data-testid="movie-poster"/>
								<div className="movie-detail">
									{/* <p>{a.id}</p> */}
									<p data-testid="movie-title">{a.title}</p>
									<p data-testid="movie-release-date">{date}</p>
									<div className='berry-imdb'>
										<div className=''>
											<img src={imdb} alt='image' />
											<p>86.0/100</p>
										</div>
										<div className=''>
											<img src={berry} alt='image' />
											<p>79%</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	</>
  )
}

export default CardComp