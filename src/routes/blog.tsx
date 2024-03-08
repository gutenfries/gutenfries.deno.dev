import { Handlers, PageProps } from '$fresh/server.ts';
import { Navbar, Routes } from '@/src/components/Navbar.tsx';
import { listPosts, Post } from '@/src/utils/blogPosts.ts';

import { BlogPostPreview } from '@/src/components/BlogPostPreview.tsx';
import { Footer } from '@/src/components/Footer.tsx';
import { Head } from '@/src/components/Head.tsx';
import { NoScript } from '@/src/components/NoScript.tsx';

interface State {
	locales: string[];
}

interface Data extends State {
	posts: Post[];
}

export const handler: Handlers<Data, State> = {
	async GET(_req, ctx) {
		const posts = await listPosts();
		return ctx.render({ ...ctx.state, posts });
	},
};

export default function Home(props: PageProps<Data>) {
	const { posts } = props.data;
	return (
		<>
			<Head PageProps={props} />
			<Navbar active={Routes.blog} />
			<NoScript />
			<main id='main-content' className='bg-gray-100 dark:bg-gray-900'>
				<section className='p-4 pt-20'>
					<ul className='mt-16'>
						{posts.map((post) => (
							<li className='border-t'>
								<BlogPostPreview post={post} />
							</li>
						))}
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
}