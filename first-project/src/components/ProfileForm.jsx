import { useEffect, useState } from 'react';
import UserProfile from './UserProfile';

export default function ProfileForm() {
	// useStateSnippet
	const [fullName, setFullName] = useState('');
	const [bio, setBio] = useState('');
	const [file, setFile] = useState(null);
	const [image, setImage] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		if (file) {
			const url = URL.createObjectURL(file);
			if (url) {
				setImage(url);
			}
		}
	}, [file]);
	/* 	useEffect(() => {
		console.log(fullName);
	}, [fullName]); */

	return (
		<>
			{isEditing ? (
				<div className="UserProfile">
					<input
						value={fullName}
						onChange={(event) => {
							setFullName(event.target.value);
						}}
						placeholder="Full name"
					/>
					<input
						type="file"
						placeholder="Upload file"
						multiple
						onChange={(e) => {
							const selected = e.target.files && e.target.files[0];
							if (selected) {
								setFile(selected);
							} else {
								setFile(null);
							}
						}}
					/>
					<textarea
						value={bio}
						onChange={(e) => {
							setBio(e.target.value);
						}}
						placeholder="Biography"
					></textarea>
					<button
						className="edit"
						onClick={() => {
							setIsEditing(false);
						}}
					>
						Save
					</button>
				</div>
			) : (
				<div className="UserProfile">
					<h1>{fullName || 'Enter your full name'}</h1>
					<img src={image} />
					<p>{bio}</p>
					<button
						className="edit"
						onClick={() => {
							setIsEditing(true);
						}}
					>
						edit
					</button>
				</div>
			)}
		</>
	);
}
