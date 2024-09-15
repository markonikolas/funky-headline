import PropTypes from 'prop-types';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { Content } = RichText;
	const { kicker, headline, subdeck } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<Content
				tagName="span"
				value={ kicker }
			/>
			<Content
				tagName="h2"
				value={ headline }
			/>
			<Content
				tagName="p"
				value={ subdeck }
			/>

		</div>
	);
}

Save.PropTypes = {
	attributes: PropTypes.object,
	kicker: PropTypes.string,
	headline: PropTypes.string,
	subdeck: PropTypes.string,
}
