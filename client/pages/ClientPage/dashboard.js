import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "~/components/Button/buttonLogin";

import open from "~/static/images/open.png";
import closed from "~/static/images/closed.png";

export default () => {
	return (
		<Container>
			<CardBox>
				<Card>
					<PreviewDetail>
						<h3>Privacy & personalization</h3><br/>
						<p>
							See the data in your Google Account and choose what
							activity is saved to personalize your Google
							experience
						</p>
					</PreviewDetail>
					<PreviewIcon src={open} alt="open tiket" />
				</Card>
				<BotomLink>
					<One>Detail</One>
					<Status>closed</Status>
				</BotomLink>
			</CardBox>
			<CardBox>
				<Link to="/client-open-tiket">
					<Card3>
						<One>+ Open Tiket</One>
					</Card3>
				</Link>
			</CardBox>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const CardBox = styled.div`
	width: 100%;
	margin: 1rem;
`;
const Card = styled.div`
	border: 1px solid #c6c6c6;
	padding: 2rem;
	display: flex;
	border-radius: 7px 7px 0 0;
`;

const One = styled.a`
	color: #1a73e8;
	font-weight: bold;
`;

const Card3 = styled.div`
	border: 1px solid #c6c6c6;
	padding: 2rem;
	display: flex;
	border-radius: 7px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 180px;
	cursor: pointer;
	border: 2px dashed rgba(0, 0, 0, 0.12);
	&:hover {
		background-color: rgba(26, 115, 232, 0.039);
	}
`;

const PreviewDetail = styled.div`
	margin-right: 1.5rem;
`;

const PreviewIcon = styled.img`
	width: 15%;
	height: auto;
`;

const BotomLink = styled.div`
	padding: 1rem;
	color: blue;
	border-radius: 0 0 7px 7px;
	border-bottom: 1px solid #c6c6c6;
	border-right: 1px solid #c6c6c6;
	border-left: 1px solid #c6c6c6;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Status = styled.h4`
	color: #ccc;
`;
