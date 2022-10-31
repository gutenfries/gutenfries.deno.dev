/** @jsx h */
import { h } from 'preact';
import type { ComponentChildren } from 'preact';

type Props = {
	children: ComponentChildren;
};

export function Container(props: Props) {
	return <div className='px-4 mx-auto max-w-screen-md'>{props.children}</div>;
}