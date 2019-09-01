import { useAuth } from "./use-auth";

export default ({ type }) => {
	const auth = useAuth();
	if (type === "client") {
		return { auth: auth.user, redirect: "/client-home" };
	}
	return { auth: auth.support, redirect: "/support" };
};
