import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "~/components/Logo";
import Fild from "~/components/Fild/fildInput";
import FildPassword from "~/components/Fild/fildPassword";
import ButtonLogin from "~/components/Button/buttonLogin";

export default ({ handleSubmit, handleChange, error }) => {
	return (
		<BoxForm>
			<BoxContent>
				<Deskription>
					<Logo tittle="Tuber Support" />
					{error && <Error>{error}</Error>}
				</Deskription>
				<form>
					<Fild />
					<FildPassword />
				</form>
				<BoxAction>
					<Link to="/">
						<Register>Register</Register>
					</Link>
					<ButtonLogin tittle="Sign In" handleSubmit={handleSubmit} />
				</BoxAction>
			</BoxContent>
		</BoxForm>
	);
};

const BoxForm = styled.div`
	border: 1px solid #dadce0;
	border-radius: 8px;
`;

const BoxContent = styled.div`
	padding: 50px 40px 150px 40px;
`;

const Deskription = styled.div`
	text-align: center;
	padding-bottom: 4rem;
	position: relative;
`;

const Error = styled.span`
	color: #fb8183;
	top: 70%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	z-index: 1;
`;

const BoxAction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2rem;
`;

const Register = styled.div`
	color: #1a73e8;
	font-size: 14px;
	font-weight: bold;
`;

