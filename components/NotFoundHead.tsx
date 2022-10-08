/** @jsx h */
import { h } from 'preact';
import { UnknownPageProps } from '$fresh/server.ts';
import { asset, Head as FreshHead } from '$fresh/runtime.ts';

interface NotFoundHeadProps {
	notFoundPageProps_: UnknownPageProps;
}

function NotFoundHead({ notFoundPageProps_ }: NotFoundHeadProps) {
	const ogImageUrl = new URL(asset('/images/screenshot.png'), notFoundPageProps_.url).href;

	let pipe: string;
	if (notFoundPageProps_.url.pathname.slice(1) != '') {
		pipe = '|';
	} else {
		pipe = '';
	}

	return (
		<FreshHead>
			<title>
				{notFoundPageProps_.url.pathname.slice(1)} {pipe} Marcus Gutenberger
			</title>

			<link rel='icon' href={asset('/icons/favicon.ico')}></link>

			{/* if your browser supports it, why not? */}

			{/* Chrome, Firefox OS and Opera */}
			<meta name='theme-color' content='#27272a' />
			{/* Windows Phone */}
			<meta name='msapplication-navbutton-color' content='#27272a' />
			<meta name='msapplication-TileColor' content='#27272a' />
			{/* iOS Safari */}
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='#27272a' />

			{/* Open Graph meta data */}
			<meta
				name='description'
				content='Marcus Gutenberger is a software engineer and designer'
			/>
			<meta
				property='og:title'
				content={`${notFoundPageProps_.url.pathname.slice(1)} ${pipe} Marcus Gutenberger`}
			/>
			<meta
				property='og:description'
				content='Marcus Gutenberger is a software engineer and designer'
			/>
			<meta property='og:type' content='website' />
			<meta property='og:url' content={notFoundPageProps_.url.href} />
			<meta property='og:image' content={ogImageUrl} />

			{/* google fonts */}
			<link rel='preconnect' href='https://fonts.googleapis.com'></link>
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'></link>
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
				rel='stylesheet'
			>
			</link>

			<style type='text/css'>
				{`*, html {overscroll-behavior: none;}html, body {position: fixed;overflow: auto;}* {scrollbar-color: #3b82f6 #d1d5db ;z-index: 100;}*::-webkit-scrollbar {width: 16px;z-index: 100;}*::-webkit-scrollbar-track {background: #d1d5db ;border-radius: 6px;z-index: 99;}*::-webkit-scrollbar-thumb {background-color: #3b82f6 ;border-radius: 6px;z-index: 100;}`}
			</style>
		</FreshHead>
	);
}

export { NotFoundHead };
