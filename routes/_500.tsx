/** @jsx h */
import { h } from 'preact';

import { ErrorPageProps } from '$fresh/server.ts';

import { ErrorPageLayout } from '@/layouts/ErrorPageLayout.tsx';

function ErrorPage(errorPageProps_: ErrorPageProps) {
	return (
		<ErrorPageLayout errorPageProps_={errorPageProps_}>
			<div className='flex flex-col items-center justify-center h-full'>
				<h2 className='text-4xl font-bold text-center text-gray-200'>
					500 - Internal Server Error :(
				</h2>
				<p className='text-center text-gray-200'>
					{(errorPageProps_.error as Error).message}
				</p>
			</div>
		</ErrorPageLayout>
	);
}

export default ErrorPage;
