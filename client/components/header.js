import React from "react";
import { Link } from "react-router-dom";

export default props => {
	return (
		<div>
			<ul>
				<label>----------client-------------</label>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/signature">Signature</Link>
				</li>
				<label>--------------support-----------</label>
				<li>
					<Link to="/support">Home</Link>
				</li>
				<li>
					<Link to="/support/signature">Signature</Link>
				</li>
			</ul>
		</div>
	);
};
