import React from 'react';

const Loader = () => {
	return ( 
		<div className="container text-center">
			<div className="spinner-border text-light" role="status">
				<span className="sr-only">Loading...</span>
  			</div>
		</div>
	);
}
 
export default Loader;