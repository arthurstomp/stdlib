'use strict';

/**
* Generate an HTML string for inlining an SVG equation in Markdown.
*
* @module @stdlib/tools/markdown/inline-svg-equation
*
* @example
* var createElement = require( '@stdlib/tools/markdown/inline-svg-equation' );
*
* var opts = {
*     'className': 'equation',
*     'align': 'center',
*     'raw': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt'
*     'label': 'eqn:erf'
* };
* createElement( opts, done );
*
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
* }
*/

// MODULES //

var createElement = require( './main.js' );


// EXPORTS //

module.exports = createElement;
