import Head from "next/head";

const CustomHead = ({ title }) => {
	const getTitle = () => {
		if (title) {
			return `Laura - ${title}`;
		}
		return "Laura Cervantes";
	};

	return (
		<Head>
			<title>{getTitle()}</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>
	);
};

export default CustomHead;
