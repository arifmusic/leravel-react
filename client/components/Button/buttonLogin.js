import React from "react";
import styled from "styled-components";

export default ({ handleSubmit, tittle }) => {
	return <Button onClick={handleSubmit}>{tittle}</Button>;
};

const Button = styled.button`
	background: #1a73e8;
	color: #fff;
	border-radius: 4px;
	border: none;
	padding: 0.9rem 1.5rem;
	cursor: pointer;
	font-weight: bold;
	:focus {
		outline: 0;
	}
`;
