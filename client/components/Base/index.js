import React, { Suspense } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import useWindowSize from "~/useHooks/use-window-size";
import usePath from "~/useHooks/use-path-name";

import Header from "../Header";
import Footer from "../Footer";
import Progress from "../Progress";

const Base =  ({ children, location, ...props }) => {
	const size = useWindowSize();
	return (
		<div>
			<Header location={location.pathname} />
			<Content location={usePath(location.pathname)}>
				<Suspense fallback={<Progress />}>{children}</Suspense>
			</Content>
			<Footer />
		</div>
	);
};

export default withRouter(Base);

const Content = styled.div`
	min-height: calc(100vh - 2.5rem);
	padding-top: ${prop=>prop.location ? "5rem" : "8rem"};
	margin: 0 auto;
	max-width: 690px;
	box-sizing: border-box;
`;

