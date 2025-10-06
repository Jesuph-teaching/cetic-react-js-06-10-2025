import React from 'react';
import { Link } from 'react-router';

export default function Notfound() {
	return (
		<div>
			<h1>Not found</h1>
			<h2>404</h2>
			<Link to={-1}>Go back</Link>
			<br />
			<Link to={'/'}>Go Home</Link>
		</div>
	);
}
