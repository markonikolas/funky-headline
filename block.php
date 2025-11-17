<?php
/**
 * Plugin Name:       Funky Headline
 * Description:       Gutenberg game day block with an eye-catching look :)
 * Requires at least: 6.5
 * Requires PHP:      8.2
 * Version:           0.0.1
 * Author:            Marko Nikolaš
 * License:           GPL-2.0
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       funky-headline
 * Domain Path:       funky-headline
 *
 * @package funky-headline
 */

use FunkyHeadline\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if( ! file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	wp_admin_notice( 'Funky Headline plugin error: Please run "composer install" command from the plugin root directory to install required dependencies.' );

	return;
}

require_once __DIR__ . '/vendor/autoload.php';

( new Plugin() )->init();
