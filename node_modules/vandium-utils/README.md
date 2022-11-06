[![Build Status](https://travis-ci.org/vandium-io/vandium-utils.svg?branch=master)](https://travis-ci.org/vandium-io/vandium-utils)
[![npm version](https://badge.fury.io/js/vandium-utils.svg)](https://badge.fury.io/js/vandium-utils)

# vandium-utils

Common utility functions used throughout the vandium projects.

## Installation

Install via npm.

	npm install vandium-utils --save

## APIs

### `clone( obj )`

Clones an object. If the value is not an object or `null` then the existing value
is returned.

### `dateToISOString( data, milliseconds = false )`

Creates an ISO string for a given date.

### `isArray( value )`

Determines if a values is an array. This implementation uses `Array.isArray()`.

### `isFunction( value )`

Determines if a value is a function.

### `isNullOrUndefined( value )`

Determines if a value is `null` or `undefined`.

### `isObject( value )`

Determines if a value is an `Object`.

### `isObjectEmpty( obj )`

Determines if the object is empty

## `isPromise( value )`

Determines if a value is a `Promise`

### `isString( value )`

Determines if a value is a string

### `parseBoolean( value )`

Parses a value to a boolean result. Values can be:
* "on" "yes", "true", "off", "no", "false" (case insensitive)
* `true`, `false`

### `templateString( template, obj )`

Creates a string from a `template` and substitutes values from `obj`.

```js
	const { templateString } = require( 'vandium-utils' );

	// str1 = "Hello Fred"
	let str1 = templateString( 'Hello ${name}', { name: 'Fred' } );

	// str2 = "Hello Fred, I see you live in Toronto"
	let str = templateString( 'Hello ${name}, I see you live in ${place.city}', {
			name: 'Fred',
			place: {

				city: 'Toronto'
			}
		});
```


## Feedback

We'd love to get feedback on how to make this tool better. Feel free to contact us at `feedback@vandium.io`


## License

[BSD-3-Clause](https://en.wikipedia.org/wiki/BSD_licenses)
