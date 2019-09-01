import React from "react";
import styled from "styled-components";

export default ({ tittle }) => {
	return <Logo>{tittle}</Logo>;
};

const Logo = styled.h2`
	text-transform: uppercase;
	background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 20vw;
	}
`;
