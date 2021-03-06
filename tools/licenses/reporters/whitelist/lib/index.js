'use strict';

/**
* Reporter which excludes from license results packages which have a license in a provided whitelist.
*
* @module @stdlib/tools/licenses/reporters/whitelist
*
* @example
* var licenses = require( '@stdlib/tools/licenses/licenses' );
* var reporter = require( '@stdlib/tools/licenses/reporters/whitelist' );
*
* var whitelist = [ 'MIT', 'BSD-2-Clause' ];
*
* licenses( onResults );
*
* function onResults( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     results = reporter( results, whitelist );
*     console.dir( results );
* }
*/

// MODULES //

var reporter = require( './reporter.js' );


// EXPORTS //

module.exports = reporter;
