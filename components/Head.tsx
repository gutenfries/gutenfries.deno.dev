/** @jsx h */
import { Fragment, h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { asset, Head as FreshHead } from '$fresh/runtime.ts';

interface HeadProps {
	title?: string;
	pageProps_: PageProps;
}

function Head({ pageProps_, title }: HeadProps) {
	const ogImageUrl = new URL(asset('/icons/logo.svg'), pageProps_.url).href;

	let pipe: string;
	if (pageProps_.url.pathname.slice(1) != '') pipe = '|';
	else pipe = '';

	return (
		<FreshHead>
			<title>
				{pageProps_.url.pathname.slice(1)} {pipe} Marcus Gutenberger
			</title>

			<meta
				name='description'
				content='Marcus Gutenberger is a software engineer and designer'
			/>
			<meta property='og:title' content={title} />
			<meta
				property='og:description'
				content='Marcus Gutenberger is a software engineer and designer'
			/>
			<meta property='og:type' content='website' />
			<meta property='og:url' content={pageProps_.url.href} />
			<meta property='og:image' content={ogImageUrl} />

			<link rel='preconnect' href='https://fonts.googleapis.com'></link>
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'></link>
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
				rel='stylesheet'
			>
			</link>

			<link rel='stylesheet' href={asset('/global.css')}></link>

			<script src='/icons/feather.min.js'></script>
			<script>
				feather.replace();
			</script>
		</FreshHead>
	);
}

export { Head };
