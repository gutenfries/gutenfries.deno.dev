import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import IconMoon from '@tabler/icons/moon.tsx';
import IconSun from '@tabler/icons/sun.tsx';

const modes = ['dark', 'light'] as const;

export default function ColorMode() {
	const initialTheme = localStorage.colorMode;
	const state = useSignal<(typeof modes)[number]>(initialTheme || 'light');

	function detectMode() {
		if (
			localStorage.colorMode === 'dark' ||
			(!('colorMode' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			state.value = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			state.value = 'light';
		}
	}

	function toggle() {
		state.value = modes[(modes.indexOf(state.value) + 1) % modes.length];

		localStorage.colorMode = state.value;

		if (
			localStorage.colorMode === 'dark' ||
			(!('colorMode' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	useEffect(detectMode, []);

	return (
		<div>
			<button
				onClick={toggle}
			>
				{state.value === 'dark'
					? <IconSun className='w-8 h-8 text-purple-600' />
					: <IconMoon className='w-8 h-8 text-yellow-500' />}
			</button>
		</div>
	);
}