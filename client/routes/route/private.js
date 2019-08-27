import React from "react";
import { Route, Redirect } from "react-router-dom";

import useRole from "~/useHooks/use-auth-role";

export default ({ component: Component, ...rest }) => {
	const { auth, redirect } = useRole({ type: rest.type });
	return (
		<Route
			{...rest}
			render={props =>
				auth ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: redirect,
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};
