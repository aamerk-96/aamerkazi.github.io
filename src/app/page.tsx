"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
	useEffect(() => {
		const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("show");
					}
				});
			},
			{ threshold: 0.15 }
		);
		els.forEach((el) => io.observe(el));
				// Position global ripple origin based on avatar position
				const updateRipple = () => {
					const overlay = document.getElementById("ripple-overlay");
					const avatar = document.querySelector<HTMLElement>(".avatar-circle");
					if (!overlay || !avatar) return;
					const vp = { width: window.innerWidth, height: window.innerHeight };
					const rect = avatar.getBoundingClientRect();
					const cx = rect.left + rect.width / 2;
					const cy = rect.top + rect.height / 2;
					const xPct = (cx / vp.width) * 100;
					const yPct = (cy / vp.height) * 100;
					overlay.style.setProperty("--rx", `${xPct}%`);
					overlay.style.setProperty("--ry", `${yPct}%`);
				};
			updateRipple();
			window.addEventListener("resize", updateRipple);
			return () => { io.disconnect(); window.removeEventListener("resize", updateRipple); };
	}, []);
	return (
		<main>
			<Header />
					<section id="home" className="section section-home reveal show">
				<Hero />
			</section>

					<section id="about" className="section reveal">
				<About />
			</section>

			<section id="projects" className="section reveal">
				<Projects />
			</section>

					<section id="contact" className="section reveal">
						<Contact />
					</section>
		</main>
	);
}

