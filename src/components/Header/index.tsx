import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTheme } from "../../hooks/theme";

import SwitchTheme from "../SwitchTheme";

import styles from "./header.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
	projectsRef?: React.RefObject<HTMLDivElement>;
	aboutRef?: React.RefObject<HTMLDivElement>;
	contactView?: boolean
}

const Header = ({
    projectsRef,
    aboutRef,
	contactView
}: HeaderProps) => {
	const {isDarkTheme} = useTheme();

	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {

		const ctx = gsap.context(() => {

			gsap.from(`.${styles.logo}`, {
				opacity: 0,
				x: -40,
				duration: .8,
				ease: "power3.out"
			});

			gsap.from(`.${styles.menuItem}`, {
				opacity: 0,
				y: -20,
				stagger: .08,
				duration: .6,
				delay: .2,
				ease: "power3.out"
			});

			ScrollTrigger.create({
				start: 0,
				end: "max",
				onUpdate: (self) => {

					gsap.to(headerRef.current, {
						y: self.direction === 1 ? -110 : 0,
						duration: .35,
						ease: "power2.out"
					});

				}
			});

		}, headerRef);

		return () => ctx.revert();

	}, []);

	return (

		<header
			ref={headerRef}
			className={`
                ${styles.container}
                ${isDarkTheme ? styles.dark : styles.light}
            `}
		>

			<div className={styles.content}>

				<Link
					href="/"
					className={styles.logo}
				>
					<span>{"<"}</span>
					LF
					<span>{" />"}</span>
				</Link>

				<nav>

					<ul className={styles.menu}>

						{contactView ? null : (
							<>
								<li className={styles.menuItem}>
									<button
										onClick={() => projectsRef.current?.scrollIntoView({
											behavior: "smooth"
										})}
									>
										Projetos
									</button>
								</li>
								<li className={styles.menuItem}>
									<button
										onClick={() => aboutRef.current?.scrollIntoView({
											behavior: "smooth"
										})}
									>
										Sobre
									</button>
								</li>
								<li className={styles.menuItem}>
									<Link href="/contato">
										Contato
									</Link>
								</li>
							</>
						)}

						<li className={styles.menuItem}>
							<Link
								href="https://github.com/Luiz-Suvilao"
								target="_blank"
								aria-label="Github"
							>
								<FaGithub/>
							</Link>
						</li>

						<li className={styles.menuItem}>
							<Link
								href="https://www.linkedin.com/in/luiz-filipe-da-silva-de-jesus-490a02182/"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin/>
							</Link>
						</li>

						<li className={styles.menuItem}>
							<SwitchTheme/>
						</li>

					</ul>

				</nav>

			</div>

		</header>

	);

};

export default Header;