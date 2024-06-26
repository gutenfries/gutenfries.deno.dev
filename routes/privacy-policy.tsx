import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';
import { readFile } from '@/utils/readFile.ts';
import { render as renderGFM } from 'gfm';

interface Data {
	privPolicy: string | null;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		// cache for 1 day
		asset('/privacy-policy.md');
		const privPolicy = await readFile('./static/privacy-policy.md');
		if (!privPolicy) {
			return ctx.renderNotFound();
		}
		return ctx.render({ ...ctx.state, privPolicy });
	},
};

function PrivacyPolicyPage(props: PageProps<Data>) {
	const privPolicy = props.data.privPolicy;
	return (
		<section>
			{privPolicy
				? (
					<>
						<link rel='stylesheet' href={asset('/styles/markdown.css')} />
						<article
							data-color-mode='auto'
							data-light-theme='light'
							data-dark-theme='dark'
							className='shadow-xl p-10 rounded-lg markdown-body'
							dangerouslySetInnerHTML={{
								__html: renderGFM(privPolicy),
							}}
						/>
					</>
				)
				: (
					<h1 className='mt-28 rounded-lg font-bold text-5xl'>
						Loading...
					</h1>
				)}
		</section>
	);
}

export default PrivacyPolicyPage;
