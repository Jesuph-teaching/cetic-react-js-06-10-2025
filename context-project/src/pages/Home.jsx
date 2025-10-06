import { Link } from 'react-router';

export default function Home() {
	return (
		<div>
			<h1>Welcome to our website</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis recusandae labore explicabo quam
				voluptatem ducimus sit esse rem voluptatum, eveniet eligendi repudiandae. Magni aliquid id debitis ex
				architecto ipsam et.
			</p>
			<Link to={'/signin'}>Sign in</Link>
		</div>
	);
}
