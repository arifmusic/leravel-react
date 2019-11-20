const list = ["/client-home"];
export default data => {
	if (list.includes(data)) {
		return data;
	}
	return;
};
