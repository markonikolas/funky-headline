import PropTypes from 'prop-types';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { kicker, headline, subdeck } = attributes;

	return (
		<div { ...useBlockProps() }>
			<RichText
				tagName="span"
				value={ kicker }
				onChange={ ( value ) => setAttributes( { kicker: value } ) }
				placeholder={ __( 'Awesome Kicker…' ) }
				className="wp-block__kicker"
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
			<RichText
				tagName="h1"
				value={ headline }
				onChange={ ( value ) => setAttributes( { headline: value } ) }
				placeholder={ __( 'Awesome Headline…' ) }
				className="wp-block__headline"
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
			<RichText
				tagName="p"
				value={ subdeck }
				onChange={ ( value ) => setAttributes( { subdeck: value } ) }
				placeholder={ __( 'Awesome Subdeck…' ) }
				className="wp-block__subdeck"
			/>
		</div>
	);
}

Edit.propTypes = {
	attributes: PropTypes.object,
	setAttributes: PropTypes.func,
	kicker: PropTypes.string,
	headline: PropTypes.string,
	subdeck: PropTypes.string,
};
