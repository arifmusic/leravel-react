import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
	return (
		<BoxFooter>
			<Link to="/">
				<ForgotPassword>Forgate Password</ForgotPassword>
			</Link>
			<LinkCompany>
				<Company>support</Company>
				<Company>sales</Company>
			</LinkCompany>
		</BoxFooter>
	);
};


const BoxFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
	font-size: 13px;
	color: #757575;
`;

const LinkCompany = styled.div`
	display: flex;
`;

const Company = styled.a`
	margin-left: 1rem;
	color: #757575;
	cursor: pointer;
`;

const ForgotPassword = styled.div`
	color: #1a73e8;
`;