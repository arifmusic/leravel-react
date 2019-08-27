import React from "react";

import useForm from "~/useHooks/use-form";
import { useAuth } from "~/useHooks/use-auth.js";

const SignIn = props => {
	const type = "support";
	const asdf = useAuth();
	const [handleSubmit, handleChange, error] = useForm(type);
	return (
		<div>
			<h2>Support</h2>
			<h3>
				{asdf.support ? (
					<React.Fragment>Sedang Log In Support</React.Fragment>
				) : (
					"Sedang Log Out Support"
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
