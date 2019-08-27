import React from "react";
import { Switch } from "react-router-dom";

import routes from "./routes";

import Public from "./route/public";
import Split from "./route/split";
import Private from "./route/private";
import NotFound from "./route/notFound";

export default () => (
	<Switch>
		{routes.map(route => {
			if (route.auth && route.fallback) {
				return <Split key={route.path} {...route} />;
			} else if (route.auth) {
				return <Private key={route.path} {...route} />;
			} else if (route.exact) {
				return <Public key={route.path} {...route} />;
			}
			return <NotFound key={route.path} {...route} />;
		})}
	</Switch>
);
