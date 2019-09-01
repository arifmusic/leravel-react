import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useForm from "~/useHooks/use-form";

import Progress from "~/components/Progress";
import FormLogin from "~/components/Form/formLogin";
import FooterLogin from "~/components/Footer/footerLogin";

export default props => {
	const type = "client";
	const [handleSubmit, handleChange, error, loading] = useForm(type);

	return (
		<div>
			<Box>
				<FormLogin
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					error={error}
				/>
			<FooterLogin />
			</Box>
			{loading && <BlockUi><Progress /></BlockUi>}
		</div>
	);
};

const Box = styled.div`
	background: #fff;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 450px;
	box-sizing: border-box;
	max-width: 100%;
`;

const BlockUi = styled.div`
	width: 100%;
	height: 100%;
	background-color: hsla(360, 100%, 100%, 0.54);
	top: 50%;
	position: fixed;
	left: 50%;
	transform: translate(-50%, -50%);
`;
