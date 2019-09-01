import React from "react";
import { Route } from "react-router-dom";

import useRole from "~/useHooks/use-auth-role";
import { useAuth } from "~/useHooks/use-auth";

import Base from "~/components/Base";
import Progress from "~/components/Progress";

export default ({ component: Component, fallback: Fallback, ...rest }) => {
	const { auth } = useRole({ type: rest.type });
	const { isLoading } = useAuth();
	return (
		<Route
			{...rest}
			render={props =>
				isLoading ? (
					<Progress />
				) : auth ? (
					<Base>
						<Component {...props} />
					</Base>
				) : (
					<Fallback {...props} />
				)
			}
		/>
	);
};
