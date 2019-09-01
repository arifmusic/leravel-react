import React, { Suspense } from "react";
import styled from "styled-components";

import useWindowSize from "~/useHooks/use-window-size";

import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";
import Progress from "../Progress";

export default ({ children }) => {
	const size = useWindowSize();
	return (
		<div>
			<Header />
			<Content>
				{size.width >= 1023 && (
					<MainSideBar>
						<SideBar />
					</MainSideBar>
				)}
				<MainContent size={size.width}>
					<Main>
						<Suspense fallback={<Progress />}>{children}</Suspense>
					</Main>
				</MainContent>
			</Content>
			<Footer />
		</div>
	);
};

const Content = styled.div`
	padding-top: 6rem;
`;

const MainSideBar = styled.div`
	flex: 0 0 auto;
`;

const MainContent = styled.div`
	flex: 1 1 auto;
	overflow: auto;
	min-height: calc(100vh - 9rem);
	padding: ${props => (props.size >= 1023 ? "0 2rem 0 22rem" : "0.5rem")};
`;

const Main = styled.div`
	width: 100%;
	display: flex;
`;
