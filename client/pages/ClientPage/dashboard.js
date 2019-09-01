import React from "react";
import styled from "styled-components";

import image from "~/static/images/tiket.png";
import Button from "~/components/Button/buttonLogin";

export default () => {
	var str = "Hello world!";
	return (
		<Box>
			<img src={image} alt="not foud" className="use-margin-2" />
			<h2 className="use-margin-1">Di sini kosong</h2>
			<p className="use-margin-2">sialah kan untuk mengeisi tiket</p>
			<Button tittle="Open Tiket" />
		</Box>
	);
};

const Box = styled.div`
	text-align: center;
	color: rgb(170, 170, 170);
`;
