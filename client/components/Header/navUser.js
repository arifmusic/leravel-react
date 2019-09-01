import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FiBell } from "react-icons/fi";

import useOutside from "~/useHooks/use-outside";

import avatar from "~/static/images/avatar.png";
import Dropdown from "./dropdown";

export default () => {
	const [isDrob, setDrob] = useState(false);
	const wrapperRef = useRef(null);
	const hadleDrob = event => {
		event.preventDefault();
		setDrob(isDrob ? false : true);
	};
	useOutside(wrapperRef, setDrob);
	return (
		<Box>
			<Notif>
				<FiBell title="notification" />
			</Notif>
			<User ref={wrapperRef}>
				<Avatar onClick={hadleDrob} src={avatar} title="avatar user" />
				{isDrob && <Dropdown />}
			</User>
		</Box>
	);
};

const Box = styled.ul`
	display: flex;
	align-items: center;
`;

const Notif = styled.li`
	font-size: 22px;
	margin-left: 1.5rem;
`;

const User = styled.li`
	margin-left: 1.5rem;
`;

const Avatar = styled.img`
	cursor: pointer;
	width: 33px;
	height: 33px;
	border-radius: 50%;
`;
