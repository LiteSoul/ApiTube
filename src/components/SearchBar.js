import React, { useState } from "react";

export default function SearchBar({ onTermSubmit }) {
	const [input, setInput] = useState("enter any search term");

	const onInputChange = e => {
		setInput(e.target.value);
		console.log(input);
	};

	const onFormSubmit = e => {
		e.preventDefault();
		//callback from parent component
		onTermSubmit(input);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input type="text" placeholder={input} onChange={onInputChange} />
				</div>
			</form>
		</div>
	);
}
