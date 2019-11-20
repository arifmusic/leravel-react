import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import useScroll from "~/useHooks/use-scroll";
import useWindowSize from "~/useHooks/use-window-size";
import usePath from "~/useHooks/use-path-name";

import Logo from "../Logo";
import NavUser from "./navUser";

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
			{RenderHeaderBack(props.location)}
		</HeaderBase>
	);
};

export const RenderHeaderBack = (location) => {
	if (usePath(location)) {
		return;
	}
	return (
		<BackLink>
			<Link to="/client-home">
				<BackIcon>
					<FiArrowLeft />
				</BackIcon>
			</Link>
			<BackTitle>kembali</BackTitle>
		</BackLink>
	);
};

const HeaderBase = styled.div`
	position: fixed;
	background-color: #fff;
	z-index: 1;
	width: 100%;
	transition: all 0.3s ease-in-out 0s;
	border-bottom: solid 1px rgba(0,0,0,0.12);
	box-shadow: ${props =>
		props.scroll === 0 ? "" : "0 1px 5px rgba(0,0,0,0.30)"};
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${props => props.size <= 600 ? "0 0.7rem" : "0 2rem"};
	height: 4.5rem;
`;

const BackLink = styled.div`
	width: 690px;
	margin: 0 auto;
	display: flex;
`;

const BackIcon = styled.div`
	font-size: 23px;
	margin: 0;
	align-items: center;
	cursor: pointer;
	color: #202124;
`;

const BackTitle = styled.h1`
	margin: 0 0 0 1rem;
	font-weight: 400;
	color: #202124;
	font-size: 1.375rem;
	align-items: center;
`;