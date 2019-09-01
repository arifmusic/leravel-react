import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import useHover from "~/useHooks/use-hover";

const Dashboard = props => {
	const [hoverDashboard, isDashboard] = useHover();
	const [hoverDashboard2, isDashboard2] = useHover();
	return (
		<SidebarBase>
			<ul>
				<Link to="/client-home" replace>
					<Li
						title="dashboard"
						ref={hoverDashboard}
						eventHover={isDashboard}
					>
						<Wrapper
							isActive={props.location.pathname.includes("/client-home")}
						>
							<FiUser />
							<Titile>List Tiket</Titile>
						</Wrapper>
					</Li>
				</Link>
				<Link to="/client-open-tiket" replace>
					<Li
						title="dashboard"
						ref={hoverDashboard2}
						eventHover={isDashboard2}
					>
						<Wrapper
							isActive={props.location.pathname.includes("/client-open-tiket")}
						>
							<FiUser />
							<Titile>Open Tiket</Titile>
						</Wrapper>
					</Li>
				</Link>
			</ul>
		</SidebarBase>
	);
};
export default withRouter(Dashboard);


const SidebarBase = styled.div`
	position: fixed;
	background-color: #fff;
	min-height: calc(100vh - 7.8rem);
`;
const Titile = styled.div`
	font-size: 14px;
	margin: 0 0 0 0.6rem;
`;

const Li = styled.li`
	cursor: pointer;
	color: #72777a;
	background-color: ${props => props.eventHover && "#f5f5f5"};
	border-radius: ${props => props.eventHover && "0 50px 50px 0"};
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0.8rem 2rem;
	width: 20rem;
	font-size: 23px;
	background-color: ${props => props.isActive && " #e8f0fe"};
	color: ${props => props.isActive && " #1967d2"};
	border-radius: 0 50px 50px 0;
`;
