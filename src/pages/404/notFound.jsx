import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div className={'content'}>
		<div className="row h-100 align-items-center justify-content-center no-result">
			<div className="col-12 text-center">
				<img src="images/notfound.svg" className="img-fluid" alt="Page not found" />
				<h2>Oops! The page you were looking for doesn't exist</h2>
				<Link to={'/'} className="btn btn-primary btn-lg">
					Go to Dashboard
				</Link>
			</div>
		</div>
	</div>
);

export default NotFound;
