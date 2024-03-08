import { asset } from '$fresh/runtime.ts';

import { Link } from './Link.tsx';
import IconBrandCodepen from '@tabler/icons/brand-codepen.tsx';
import IconBrandGit from '@tabler/icons/brand-git.tsx';
import IconBrandGithub from '@tabler/icons/brand-github.tsx';
import IconBrandInstagram from '@tabler/icons/brand-instagram.tsx';
import IconBrandLinkedIn from '@tabler/icons/brand-linkedin.tsx';
import IconBrandFacebook from '@tabler/icons/brand-facebook.tsx';
import IconCode from '@tabler/icons/code.tsx';
import IconCookie from '@tabler/icons/cookie.tsx';
import IconFileCertificate from '@tabler/icons/file-certificate.tsx';
import IconLetterW from '@tabler/icons/letter-w.tsx';
import IconRSS from '@tabler/icons/rss.tsx';
import IconSquareRoundedLetterP from '@tabler/icons/square-rounded-letter-p.tsx';

function Footer() {
	return (
		<footer className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
			<ul className='flex jutify-around flex-wrap text-xs sm:text-base text-center pt-20'>
				<li className='p-4 w-1/3 w-full'>
					<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
						SOCIAL
					</h3>
					<nav className='list-none mb-5'>
						<ul>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://linkedin.com/in/gutenfries'
								>
									<span className='mr-1'>
										LinkedIn
									</span>
									<IconBrandLinkedIn className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://peerlist.io/gutenfries'
								>
									<span className='mr-1'>
										Peerlist
									</span>
									<IconSquareRoundedLetterP className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									href='https://instagram.com/gutenfries'
									className='hover:text-underline flex items-center justify-center'
								>
									<span className='mr-1'>
										Instagram
									</span>
									<IconBrandInstagram className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://facebook.com/maybe.gutenfries'
								>
									<span className='mr-1'>
										Facebook
									</span>
									<IconBrandFacebook className='inline-block h-5 w-5' />
								</Link>
							</li>
						</ul>
					</nav>
				</li>
				<li className='p-4 w-1/3 w-full'>
					<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
						CODE
					</h3>
					<nav className='list-none mb-5'>
						<ul>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://github.com'
								>
									<span className='mr-1'>
										GitHub
									</span>
									<IconBrandGithub className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://wakatime.com/@gutenfries'
								>
									<span className='mr-1'>
										Wakatime
									</span>
									<IconLetterW className='inline-block h-4 w-4' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://codepen.io/gutenfries'
								>
									<span className='mr-1'>
										Codepen
									</span>
									<IconBrandCodepen className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://leetcode.com/gutenfries'
								>
									<span className='mr-1'>
										Leetcode
									</span>
									<IconCode className='inline-block h-5 w-5' />
								</Link>
							</li>
						</ul>
					</nav>
				</li>

				<li className='p-4 w-1/3 w-full'>
					<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
						OTHER
					</h3>
					<nav className='list-none mb-5'>
						<ul>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='/blog/feed.rss'
									internal
								>
									<span className='mr-1'>
										Feed
									</span>
									<IconRSS className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='https://github.com/gutenfries/gutenfries.deno.dev'
								>
									<span className='mr-1'>
										Source Code
									</span>
									<IconBrandGit className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='/license'
									internal
								>
									<span className='mr-1'>
										License
									</span>
									<IconFileCertificate className='inline-block h-5 w-5' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex items-center justify-center'
									href='/privacy-policy'
									internal
								>
									<span className='mr-1'>
										Privacy Policy
									</span>
									<IconCookie className='inline-block h-5 w-5' />
								</Link>
							</li>
						</ul>
					</nav>
				</li>
			</ul>

			<section className='w-full mx-auto p-4 flex flex-wrap flex-row items-center justify-between shadow-lg bg-gray-800'>
				<span className='w-1/3 hover:text-underline text-lg mt-2 text-sm text-center md:text-left text-gray-400'>
					<Link
						color={false}
						href='/license'
						className='ml-1'
						internal
					>
						© {new Date().getFullYear()} Marc Gutenberger
					</Link>
				</span>
				<span className='w-1/3 inline-flex mt-2 justify-center'>
					<Link
						color={false}
						href='https://fresh.deno.dev/'
					>
						<span className='sr-only'>
							Made with Fresh
						</span>
						<img
							src={asset('/images/made-with-fresh.svg')}
							alt='Made with Fresh'
						/>
					</Link>
				</span>
				<span className='w-1/3 mt-2 text-sm text-center md:text-right text-gray-400'>
					Created with {'<'}3 and
					<Link
						color={false}
						href='https://deno.land'
						className='ml-1'
					>
						Deno
					</Link>
				</span>
			</section>
		</footer>
	);
}

export { Footer };