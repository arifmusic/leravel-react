import { useEffect } from "react";

export default function useOutside(ref, data) {
	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			data(false);
		}
	}
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
}