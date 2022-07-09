import "../styles/global.css";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title="Laura Cervantes"
				description="Laura Cervantes - Designer."
			/>
			<Component {...pageProps} />
		</>
	);
}
