'use client';
import React, { useState } from 'react';

export default function SigninForm() {
	const [email, setEmail] = useState('');
	return (
		<div>
			<input
				className="border border-white"
				value={email}
				type="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
		</div>
	);
}
