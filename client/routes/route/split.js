import React from "react";
import { Route } from "react-router-dom";

import useRole from "~/useHooks/use-auth-role";

export default ({ component: Component, fallback: Fallback, ...rest }) => {
	const { auth } = useRole({ type: rest.type });
	return (
		<Route
			{...rest}
			render={props =>
				auth ? <Component {...props} /> : <Fallback {...props} />
			}
		/>
	);
};
