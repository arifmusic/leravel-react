import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useAuth } from "~/useHooks/use-auth";

import profile from "~/static/images/avatar.png";

export default () => {
	const auth = useAuth();
	const handleLogout = () => {
		auth.signout();
	};
	return (
		<Box>
			<Container>
				<BoxContent>
					<ImageBox title="ganti gambar">
						<ContentImage>
							<Profile src={profile} />
							<ImageLink>ubah</ImageLink>
						</ContentImage>
					</ImageBox>
					<MainMenu>
						<Ul>
							<Nama>nama</Nama>
							<li>email@gmail.com</li>
						</Ul>
					</MainMenu>
				</BoxContent>
			</Container>
			<BoxAction>
				<Button>Setting</Button>
				<Button onClick={handleLogout}>Log Out</Button>
			</BoxAction>
		</Box>
	);
};

const Box = styled.div`
	position: absolute;
	margin-top: 0.5rem;
	margin-right: 0.5rem;
	right: 0;
	background-color: #fff;
	width: 21.9rem;
	height: 10rem;
	z-index: 999;
`;

const Container = styled.div`
	padding: 1rem;
	border: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`;

const BoxContent = styled.div`
	display: flex;
`;

const ImageBox = styled.div`
	display: flex;
	align-items: center;
`;

const ContentImage = styled.div`
	margin-right: 1rem;
	cursor: pointer;
	overflow: hidden;
	border-radius: 50%;
	display: flex;
	align-items: center;
	position: relative;
`;

const Profile = styled.img`
	height: 100px;
	width: 100px;
`;
const ImageLink = styled.span`
	bottom: 0;
	color: #fff;
	font-size: 9px;
	font-weight: bold;
	left: 0;
	line-height: 9px;
	position: absolute;
	padding: 10px 0 10px 0;
	background: rgba(0, 0, 0, 0.54);
	text-align: center;
	width: 100px;
`;

const MainMenu = styled.div`
	font-size: 12px;
`;

const Ul = styled.ul`
	margin-bottom: 0.3rem;
`;

const Nama = styled.li`
	color: #000;
	font-weight: bold;
`;

const BoxAction = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	border-left: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-right: 1px solid #ccc;
	background: #f5f5f5;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
	background: #f8f8f8;
	color: #666;
	border: 1px solid #c6c6c6;
	padding: 0.3rem 1rem;
	cursor: pointer;
	padding: 0.5rem;
`;
