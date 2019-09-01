import React, { useState } from "react";
import styled from "styled-components";
import { FiEyeOff, FiEye } from "react-icons/fi";

export default () => {
	const [isPassword, setPassword] = useState(false);
	const hadleDrob = event => {
		event.preventDefault();
		setPassword(isPassword ? false : true);
	};
	return (
		<BoxPassword>
			<div className="field">
				<input
					type={isPassword ? "text" : "password"}
					name="firstname"
					className="field_input_password"
				/>
				<div className="field_border" />
				<label className="field_label">password</label>
			</div>
			<BoxIcon>
				<Icon onClick={hadleDrob}>
					{isPassword ? <FiEye /> : <FiEyeOff />}
				</Icon>
			</BoxIcon>
		</BoxPassword>
	);
};

const BoxPassword = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	position: relative;
`;

const BoxIcon = styled.div`
	z-index: 1;
	position: absolute;
	top: 12.5px;
	right: 0;
	padding: 1rem;
	font-size: 22px;
`;

const Icon = styled.div`
	cursor: pointer;
`;