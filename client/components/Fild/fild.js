import React from "react";

export default ({name, label}) => {
	return (
		<div className="base-field">
			<input type="text" id={name} required />
			<label htmlFor={name} >{label}</label>
		</div>
	);
};
