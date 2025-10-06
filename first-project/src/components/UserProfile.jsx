import './UserProfile.css';

export default function UserProfile({ fullName, image = '/me-optimized.png', bio }) {
	return (
		<div className="UserProfile">
			<h1>{fullName || 'Enter your full name'}</h1>
			<img src={image} />
			<p>{bio}</p>
		</div>
	);
}
