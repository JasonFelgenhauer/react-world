import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className='navigation'>
			<NavLink to='/' activeclassname='nav-active'>
				Accueil
			</NavLink>
			<NavLink to='/about' activeclassname='nav-active'>
				À propos
			</NavLink>
		</div>
	);
};

export default Navigation;
