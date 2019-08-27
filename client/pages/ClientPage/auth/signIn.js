import React from "react";

import useForm from "~/useHooks/use-form";
import { useAuth } from "~/useHooks/use-auth.js";

const SignIn = props => {
	const type = "client";
	const asdf = useAuth();
	const [handleSubmit, handleChange, error] = useForm(type);
	return (
		<div>
			<h2>Client</h2>
			<h3>
				{asdf.user ? (
					<React.Fragment>Sedang Log In</React.Fragment>
				) : (
					"Sedang Log Out"
				)}
			</h3>
			{error && error}
			<form>
				<input onChange={handleChange} name="email" />
				<input onChange={handleChange} name="password" />
				<button onClick={handleSubmit}>submit</button>
			</form>
		</div>
	);
};

export default SignIn;
