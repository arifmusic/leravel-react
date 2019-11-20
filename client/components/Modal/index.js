import React, { useState } from "react";
import styled from "styled-components";

export default () => {
	return (
		<Modal>
			<ModalMain>
				<button>Close</button>
			</ModalMain>
		</Modal>
	);
};

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: hsla(360, 100%, 100%, 0.54);
	z-index: 1000;
`;

const ModalMain = styled.main`
	position: fixed;
	background: white;
	width: 60%;
	height: 300px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px;
	overflow: hidden;
	background: rgb(255, 255, 255);
	border: 1px solid rgb(190, 190, 190);
`;
