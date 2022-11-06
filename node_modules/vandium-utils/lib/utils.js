const isObject = require( './is_object' );

const parseBoolean = require( './parse_boolean' );

const templateString = require( './template_string' );

function isFunction( value ) {

    return (!!value && value.constructor === Function);
}

function isPromise( value ) {

    return ((!!value && isFunction( value.then ) && isFunction( value.catch ) ));
}

function isString( value ) {

    return !!value && ((typeof value === 'string') || (value instanceof String));
}

function clone( value ) {

    if( !isObject( value ) ) {

        return value;
    }

    return { ...value };
}

function isNullOrUndefined( value ) {

    return (value === null) || (value === undefined);
}

function isObjectEmpty( obj ) {

    if( isNullOrUndefined( obj ) ) {

        return true;
    }

    return (Object.keys( obj ).length === 0 );
}

function dateToISOString( date, milliseconds = false ) {

    let str = date.toISOString();

    if( !milliseconds ) {

        str = str.split('.')[0]+"Z";
    }

    return str;
}

module.exports = {

    clone,

    isObject,

    isString,

    isArray: Array.isArray,

    isFunction,

    isPromise,

    isObjectEmpty,

    dateToISOString,

    isNullOrUndefined,

    parseBoolean,

    templateString,
};
