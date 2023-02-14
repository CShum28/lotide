# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @cshum28/lotide`

**Require it:**

`const _ = require('@cshum28/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArrayEqual(arr1, arr2)`: takes in arrays as arguments and returns if they are equal or not
- `assertEqual(a, b)`: takes in two arguemnts and returns if they are equal or not
- `assertObjectEqual(obj1, obj2)`: takes in two objects as arguments and returns if they are equal or not
- `countLetter(sentence)`: takes in sentenance, removes the spaces, and counts the number of letters
- `countOnly(arr, obj)`: takes in an array and object, look through the object and matches up the array of what is considered true and returning the total count that is true based for the array based on the object
- `eqArrays(arr1, arr2)`: takes in arrays as arguments and returns true if they are equal and false if they are not
- `eqObjects(obj2, obj2)`: takes in two objects as arguments and returns true if they are equal and false if they are not
- `findKey(obj, func)`: takes in two arguments (an object and a function), returns the first key in the object if the function matches correctly
- `findKeyByValue(obj, string)`: takes takes in two arguments (an object and string), returns the key that matches the string in the object
- `flatten(arr)`: takes an array and flattens it out, leaving everything inside of just a single array
- `head(arr)`: takes an array and returns the first variable in the array
- `letterPositions(sentence)`: takes a sentence as an argument and returns an object which states where all of the letters are positioned
- `map(arr, callback)`: takes in an arr and callback function, returns the arr after the running it through the callback
- `middle(arr)`: takes in an arr and returns the middle value of the arr
- `tail(arr)`: takes in an arr and returns everything except the first value of the arr
- `takeUntil(arr, callback)`: takes in an arr and runs it through the callback, the moment the callback is true - return the arr result that contains everything up to the callback
- `without(arr, string)`: takes in an arr and string, removes everything in the arr that is equal to the string
