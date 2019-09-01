import React from "react";
import { HashRouter, Switch } from "react-router-dom";

import { ProvideAuth } from "./useHooks/use-auth";

import routes from "./routes";
import Public from "./routes/route/public";
import Split from "./routes/route/split";
import Private from "./routes/route/private";
import NotFound from "./routes/route/notFound";

import "./styles/main.scss";

export default props => {
	return (
		<ProvideAuth>
			<HashRouter>
				<Switch>
					{routes.map((route, i) => {
						if (route.auth && route.fallback) {
							return <Split key={i} {...route} />;
						} else if (route.auth) {
							return <Private key={i} {...route} />;
						} else if (route.exact) {
							return <Public key={i} {...route} />;
						}
						return <NotFound key={i} {...route} />;
					})}
				</Switch>
			</HashRouter>
		</ProvideAuth>
	);
};

