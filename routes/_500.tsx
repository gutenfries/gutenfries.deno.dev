import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';

import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { asset } from '$fresh/runtime.ts';

function ErrorPage(PageProps: PageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar
				active={Routes.notFound}
			/>

			<NoScript />
			<link
				rel='stylesheet'
				href={asset('/styles/animations/glitch.css')}
			/>

			<main
				id='main-content'
				className='flex flex-col justify-center bg-gray-100 dark:bg-gray-900 p-6 pt-20 h-screen text-center text-gray-900 dark:text-gray-200 overflow-x-hidden'
			>
				<span>
					<h2>Error 500:</h2>
					<h2>Error 500:</h2>
					<h2>Error 500:</h2>
				</span>
				<br />
				<br />
				<span>
					<h3>Server Error</h3>
					<h3>Server Error</h3>
					<h3>Server Error</h3>
				</span>

				{PageProps.error instanceof Error
					? (
						<>
							<br />
							<br />
							<span>
								<hr />
								<hr />
								<hr />
							</span>
							<br />
						</>
					)
					: null}
				<span>
					<p>
						{PageProps.error instanceof Error
							? (PageProps.error as Error).message
							: null}
					</p>
					<p>
						{PageProps.error instanceof Error
							? (PageProps.error as Error).message
							: null}
					</p>
					<p>
						{PageProps.error instanceof Error
							? (PageProps.error as Error).message
							: null}
					</p>
				</span>
			</main>
		</>
	);
}

export default ErrorPage;
