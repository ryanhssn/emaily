import React from 'react';
import office from '../images/office.jpg'

const Landing = () => {
	return (

	  <div className="card">
		    <div className="card-image waves-effect waves-block waves-light">
		      <img style={{height: '500px'}} className="activator" src={office} alt="office" />
		    </div>
		    <div className="card-content">
		      <span className="card-title activator grey-text text-darken-4">Emaily.</span>
		      <p>Get customers response easily.</p>
		    </div>
		    
	  </div>
            
	)
}


export default Landing;