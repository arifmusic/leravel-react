import React from "react";
import styled from "styled-components";

import Button from "~/components/Button/buttonLogin";
import Fild from "~/components/Fild/fild";
import FildText from "~/components/Fild/fildTextArea";
import Btn from "~/components/Button/buttonLogin";
import Modal from "~/components/Modal";

import logo from "~/static/images/flex.jpg";

export default () => {
	return (
		<div>
			<Box>
				<form>
					<Fild name="a" label="Perusahaan" />
					<Fild name="b" label="Aplikasi" />
					<select>
						<option value="0">Select car:</option>
						<option value="1">Audi</option>
						<option value="2">BMW</option>
					</select>
					<FildText name="d" label="Deskription" />
				</form>
				<Asdf src={logo} />
			</Box>
			<BtnBox>
				<Btn tittle="input" />
			</BtnBox>
		</div>
	);
};

const Box = styled.div`
	padding: 2rem 2.4rem;
	border-radius: 8px;
	border: none;
	margin-bottom: 2rem;
	box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
		0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;

const BtnBox = styled.div`
	float: right;
`;
const Asdf = styled.img`
	width: 70px;
	hight: auto;
`;
