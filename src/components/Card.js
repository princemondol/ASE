import React from 'react';

const Card = ({ title, image }) => {
    return (
		<div className="col-md-3 col-12 p-4 d-flex">
			<div className="card col-md-12 col-10 offset-1 p-0">
				<img className="card-img-top" src={image} alt={title} />
				<div className="card-body">
				<p className="card-text text-center">{title}</p>
				</div>
			</div>
		</div>
    );
}

export default Card;

