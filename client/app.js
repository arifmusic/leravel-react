import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";

import { ProvideAuth } from "./useHooks/use-auth.js";

import Header from "./components/header.js";
import Routes from "./routes";

export default props => {
	return (
		<HashRouter>
			<ProvideAuth>
				<Header />
				<Suspense fallback={<div>Loading...</div>}>
					<Routes />
				</Suspense>
			</ProvideAuth>
		</HashRouter>
	);
};
