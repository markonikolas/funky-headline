import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Funky Headline – hello from the saved content!' }
		</p>
	);
}
