# Standardize

> Standardize a `package.json` object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var standardize = require( '@stdlib/tools/pkg-json/standardize' );
```

#### standardize( pkg\[, keys] )

Standardizes a `package.json` object.

```javascript
var pkg = {
    'license': 'MIT',
    'name': 'beep'
};

var out = standardize( pkg );
// returns {'name':'beep','license':'MIT'}
```

To specify an alternative key order, provide an array of `keys`.

```javascript
var pkg = {
    'c': 1,
    'b': 2,
    'a': 3
};

var keys = [ 'b', 'a', 'c' ];

var out = standardize( pkg, keys );
// returns {'b':2,'a':3,'c':1}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation relies on engines using insertion order for key ordering. This is **not** specified by the ECMAScript specification; however, most engines order keys according to insertion order.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var standardize = require( '@stdlib/tools/pkg-json/standardize' );
var pkg = require( './../package.json' );

var out = standardize( pkg );
console.dir( out );
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```bash
Usage: standardize-json [options] [json]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --keys k1,k2,k3,...   Keys in order of insertion.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ standardize-json '{"license":"MIT","name":"beep"}'
{"name":"beep","license":"MIT"}
```

To use as a standard stream,

```bash
$ echo '{"license":"MIT","name":"beep"}' | standardize-json
{"name":"beep","license":"MIT"}
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
