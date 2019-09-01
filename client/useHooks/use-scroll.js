import { useEffect } from "react";

export default function useScroll(data) {
	useEffect(() => {
		window.addEventListener("scroll", function(event) {
			const scroll = this.scrollY;
			data(scroll);
		});
		return () => {
			window.removeEventListener("scroll", function(event) {
				const scroll = this.scrollY;
				data(scroll);
			});
		};
	});
}
