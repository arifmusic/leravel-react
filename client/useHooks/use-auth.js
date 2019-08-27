import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const authContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

function useProvideAuth() {
	const [user, setUser] = useState(null);
	const [support, setSupport] = useState(null);

	const signin = async ({ dataForm, type }) => {
		const access = [
			{
				type: "client",
				url: "/api/v1/clients-login",
				token: "token_client",
				setData: setUser("isLoginClient")
			},
			{
				type: "support",
				url: "/api/v1/supports-login",
				token: "token_support",
				setData: setSupport("isLoginSupport")
			}
		];
		const types = access.filter(i => type.includes(i.type));
		const { url, token , setData} = types[0];

		const response = await axios
			.post(url, dataForm)
			.then(res => {
				const expiresIn = new Date(
					new Date().getTime() + res.data.expires_in * 60 * 1000
				);
				Cookies.set(token, res.data.access_token, {
					expires: expiresIn
				});
				setData
			})
			.catch(error => {
				return error.response.data;
			});

		return response;
	};
	useEffect(() => {
		const clientCookie = Cookies.get("token_client");
		const supportCookie = Cookies.get("token_support");
		if (clientCookie) {
			setUser("isLoginClient");
		} else {
			setUser(false);
		}
		if (supportCookie) {
			setSupport("isLoginSupport");
		} else {
			setSupport(false);
		}
		// Cleanup subscription on unmount
	}, []);
	// console.log(user);
	return { user, support, signin };
}

export default useProvideAuth;
