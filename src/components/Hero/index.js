import styles from "./hero.module.css";
import { GitHub, Mail } from "react-feather";

const Hero = () => {
	return (
		<>
			<div className={styles.title}>
				<h1>Laura Cervantes</h1>
			</div>
			<div className={styles.subtitle}>
				<h2 style={{ flex: 8, textAlign: "center", color: "#575279" }}>
					Diseñadora Industrial
				</h2>
			</div>
		</>
	);
};

export default Hero;
