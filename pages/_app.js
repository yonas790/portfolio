import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import "@/styles/globals.css";

import { PreLoader } from "@/components/Loader";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	const title = "Yonas Tesera ";
	const description =
      "Yonas Tesera is a Software Engineer and Full-Stack Web Developer with a strong academic background in Computer Science. I specialize in backend development, microservices architecture, DevOps practices, and AI-driven solutions. Explore my portfolio showcasing scalable APIs, distributed systems, cloud deployments, and expertise in technologies like React, Node.js, and modern web engineering."
	const avatar =
		"https://yonas-tesera.vercel.app/assets/avatar.png";
	const url = "https://yonas-tesera.vercel.app/";

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="google-site-verification" content="Hn79VF8zVokdIZ9f3pZY5hppVcVLTUlwWAq_SXXW31E" />
				<meta name="description" content={description} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="keywords" content="Yonas Tesera, Yonas Portfolio, Software Engineer, DevOps Engineer, Software Developer, Web Developer, Full-Stack Developer, React Developer, Node.js Developer, Programming Projects, Developer Portfolio, Frontend Developer, Backend Developer, JavaScript Projects, Personal Branding, Software Engineering, Responsive Web Development, Modern Web Design, Developer Showcase" />
				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title}></meta>
				<meta property="og:description" content={description} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@Yoniyyoo" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />

				<meta property="og:image" content={avatar} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta name="image" content={avatar} />
				<meta property="twitter:image" content={avatar} />
				<meta name="twitter:card" content="summary_large_image" />


				<link rel="canonical" href={url} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/assets/icons/favicon/site.webmanifest"
				/>
			</Head>


			<ThemeProvider attribute="class" defaultTheme="dark">
				<Component {...pageProps} loading={loading} />
                <Analytics />
				{loading && <PreLoader />}
			</ThemeProvider>
		</>
	);
}
