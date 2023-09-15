import youtube from '../assets/Vector (3).png'
import twitter from '../assets/Vector (2).png'
import insta from '../assets/Vector (1).png'
import facebook from '../assets/Vector.png'

function Footer() {
  return (
	<div className='footer-con'>
		<div className='con'>
			<div className='social-media'>
				<img src={youtube} alt='youtube' />
				<img src={twitter} alt='twitter' />
				<img src={insta} alt='insta' />
				<img src={facebook} alt='facebook' />
			</div>
			<div className='terms'>
				<p>Conditions of Use</p>
				<p>Privacy &amp; Policy</p>
				<p>Press Room</p>
			</div>
			<small>&copy; 2021 MoxieBox by Optimist19</small>
		</div>
	</div>
  )
}

export default Footer