import React, { useState } from 'react';

export default class ControlledInput extends React.Component {
	state = { value: 0, email: '' };
	render() {
		return (
			<button
				onClick={() => {
					this.setState({ value: this.state.value + 1, email: this.state.email });
				}}
			>
				{this.state.value}
			</button>
		);
	}
}

export function ControlledInputFunction() {
	const [value, setValue] = useState(0);
	console.log('this component changed', value);
	return (
		<button
			onClick={() => {
				setValue(value + 1);
			}}
		>
			{value}
		</button>
	);
}
