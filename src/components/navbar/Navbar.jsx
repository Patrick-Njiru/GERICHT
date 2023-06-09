import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurant } from 'react-icons/md'

import { images } from '../../constants'
import './navbar.css'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<nav className='navbar'>
			<img src={images.gericht} alt='logo' className='navbar__logo' />
			<ul className='navbar__links'>
				<li className='p__opensans navbar__li'><a href='#home'> Home </a></li>
				<li className='p__opensans navbar__li'><a href='#about'> About </a></li>
				<li className='p__opensans navbar__li'><a href='#menu'> Menu </a></li>
				<li className='p__opensans navbar__li'><a href='#awards'> Awards </a></li>
				<li className='p__opensans navbar__li'><a href='#contact'> Contact </a></li>
			</ul>
			<div className='navbar__login'>
				<a href='#login' className='p__opensans'> Log In / Register </a>
				<div />
				<a href='/' className='p__opensans'> Book Table </a>
			</div>
			<div className='navbar__small-screen'>
				<GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
				
				{ toggleMenu && (
					<div className='navbar__overlay flex-center slide-bottom'>
						<MdOutlineRestaurant fontSize={27} className='overlay__close' onClick={()=> setToggleMenu(false)} />
						<ul>
							<li className='p__opensans'><a href='#home'> Home </a></li>
							<li className='p__opensans'><a href='#about'> About </a></li>
							<li className='p__opensans'><a href='#menu'> Menu </a></li>
							<li className='p__opensans'><a href='#awards'> Awards </a></li>
							<li className='p__opensans'><a href='#contact'> Contact </a></li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
} 

export default Navbar