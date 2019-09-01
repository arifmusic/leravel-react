import React from "react";
import { Route, Redirect } from "react-router-dom";

import useRole from "~/useHooks/use-auth-role";

import Base from "~/components/Base";

export default ({ component: Component, ...rest }) => {
	const { auth, redirect } = useRole({ type: rest.type });
	return (
		<Route
			{...rest}
			render={props =>
				auth ? (
					<Base>
						<Component {...props} />
					</Base>
				) : (
					<Redirect to={props.location} />
				)
			}
		/>
	);
};
