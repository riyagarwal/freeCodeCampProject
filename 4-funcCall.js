const names = require('./4-data.js');   // ./ implies we are referring to a user-defined folder. else it refers to a built-in module
const func = require('./4-function.js');

// console.log(names);

func('susan');
func(names.peter);
func(names.john);