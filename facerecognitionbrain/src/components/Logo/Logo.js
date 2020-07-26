import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import Brain from './brain.png'
 

const Logo = () => {
	return (
		<div>
			<Tilt className="Tilt shadow-2" options={{ max : 60 }} style={{ height: 100, width: 100 }} >
			 <div className="Tilt-inner pa3"> 
			 	<img style= {{ paddingTop: '5px' }} alt='Logo' src={Brain} />
			 </div>
			</Tilt>
		</div>
	)
}

export default Logo;