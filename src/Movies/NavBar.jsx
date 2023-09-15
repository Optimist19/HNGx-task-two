
import tv from '../assets/tv.png'
import menu from '../assets/Menu.png'
import imdb from '../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import berry from '../assets/PngItem_1381056 1.png'
import btn from '../assets/Button.png'
// import NavBarCss from './NavBar.module.css'

function NavBar() {
  return (
	<nav>
		<div className='nav'>
			<div className='nav-details'>
				<div className='movie-input-sign-in'>
					<div className='movie'>
						<img src={tv} alt='image' />
						<p>MovieBox</p>
					</div>
					
					<input type='text' placeholder='Search for your movie'/>
					
					<div className='sign-in'>
						<p className='sign-in'>Sign in</p>
						<img src={menu} alt='image' />
					</div>
				</div>
				<div className='details'>
					<h1>John Wick 3 :</h1>
					<h1>Parabellum</h1>


					<div className='imdb-img-para'>
						<div className='imdb-p'>
							<img src={imdb} alt='image' />
							<p>86.0/100</p>
						</div>
						<div className='berry-percent'>
							<img src={berry} alt='image' />
							<p>79%</p>
						</div>
					</div>


					<div className='john-text'>
						<p>
							John Wick is on the run after killing a member of the international assassin guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
						</p>
					</div>
				</div>
				<img src={btn} alt='image' />
			</div>
		</div>
		
	</nav>
  )
}

export default NavBar

{/* <div className='relative'>
			<img src={poster} alt='poster' />
		</div>
		<div className='absolute'>
		
			<div>
				<img src={tv} alt='image' />
				<p>MovieBox</p>
			</div>
			
				<input type='text' placeholder='Search for your movie'/>
			
			<div>
				<p className='sign-in'>Sign in</p>
				<img src={menu} alt='image' />
			</div>
		</div>
		<div className='john-wick'>
			<div className='john-wick-details'>
				<h1>John Wick 3 :</h1>
				<h1>Parabellum</h1>
				<img src={imdb} alt='image' />
				<p>86.0 / 100</p>
				<img src={berry} alt='image' />
				<p>79</p>
				<div className='john-text'>
					<p>
						John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
					</p>
				</div>
				<img src={btn} alt='image' />
			</div>
		</div> */}