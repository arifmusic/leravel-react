import React from "react";
import styled from "styled-components";

export default () => {
	return (
		<Progress>
			<ProgressActive />
		</Progress>
	);
};

const Progress = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 5px;
	z-index: 10;
	background-color: transparent;
	overflow: hidden;
`;

const ProgressActive = styled.div`
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 2px;
	background-color: #1967d2;
	-webkit-animation: loadBar 2s cubic-bezier(0.09, 0.89, 0.7, 0.71) infinite;
	-moz-animation: loadBar 2s cubic-bezier(0.09, 0.89, 0.7, 0.71) infinite;
	animation: loadBar 2s cubic-bezier(0.09, 0.89, 0.7, 0.71) infinite;
`;
