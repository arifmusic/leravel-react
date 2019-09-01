import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";
import styled from "styled-components";

import list from "~/data/menuHeader";

const MenuMobile = props => {
	const [isSelected, setSelected] = useState(0);
	const onSelect = key => {
		setSelected(key);
	};
	const menu = Menu({ location: props.location.pathname });
	return (
		<div className="App">
			<ScrollMenu
				data={menu}
				arrowLeft={ArrowLeft}
				arrowRight={ArrowRight}
				selected={isSelected}
				onSelect={onSelect}
			/>
		</div>
	);
};

export default withRouter(MenuMobile);

export const Menu = ({ location }) =>
	list.map(el => {
		const { name, link } = el;

		return (
			<MenuItemStyled isActive={location.includes(link)} key={link}>
				<Link to={link} replace>
					<div>{name}</div>
				</Link>
			</MenuItemStyled>
		);
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const MenuItemStyled = styled.div`
	padding: 0 40px;
	margin: 5px 10px;
	user-select: none;
	cursor: pointer;
	border-bottom: ${props => props.isActive && " solid 2px #1967d2"};
	padding: 0 0;
	& a {
		color: ${props => props.isActive ? " #1967d2" : " #72777a"};
	}
`;
