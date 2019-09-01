import React, { useState } from "react";
import styled from "styled-components";

import useScroll from "~/useHooks/use-scroll";
import useWindowSize from "~/useHooks/use-window-size";

import Logo from "../Logo";
import NavUser from "./navUser";
import HeaderMobile from "../HeaderMobile";

export default props => {
	const [isScroll, setScroll] = useState(0);
	useScroll(setScroll);
	const size = useWindowSize();
	return (
		<HeaderBase scroll={isScroll}>
			<Content size={size.width}>
				<Logo tittle="Tuber Clients" />
				<NavUser />
			</Content>
			{size.width <= 1023 && <HeaderMobile />}
		</HeaderBase>
	);
};

const HeaderBase = styled.div`
	position: fixed;
	background-color: #fff;
	z-index: 1;
	width: 100%;
	transition: all 0.3s ease-in-out 0s;
	border-bottom: 1px solid #ccc;
	box-shadow: ${props =>
		props.scroll === 0 ? "" : "0 1px 5px rgba(0,0,0,0.30)"};
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${props => props.size <= 600 ? "0 0.7rem" : "0 2rem"};
	height: 5rem;
`;
