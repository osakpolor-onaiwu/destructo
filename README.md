## destructos
[![Build Status](https://travis-ci.com/osakpolor-onaiwu/destructo.svg?branch=main)](https://travis-ci.com/osakpolor-onaiwu/destructo)
  
### This Package is for running destructive/ negative tests on your functions
There are two methods in this package
1. compact
2. expects

1.**compact:**

It accepts 3 arguments.

-  **func**: This is the function you want to run the test on.

-  **arg**: This is an object where you specify the argument the function you are testing accepts and their datatypes.

-  **returns**: Here you state the datatype you expect the function to return. e.g string, number, object, array and boolean.

2.**expects:**

When using this method, you chain the function together. There are three methods you chain together.
- **Function:** Here you supply the function to test as an argument.
- **Accept:** You suplly the arguments of the function you want to test and their datatypes as an object to the Accept method.
- **Returns:** here you supply the datatype you expect the function you are testing to return.

Example

let's assume you want to test this function called add. The add function accepts three arguments a,b and c, and returns a number.  a , b  and c accepts number datatypes.

```javascript
function add(a,b,c) {
	if(a<b){
	throw `a is smaller than b`
	}
	return a + b * c;
}
```

To test it using the compact method, do
``` javascript
const {compact} = require('destructos')
const  test = compact(add,{a:'number',b:'number',c:'number'},'number')
console.log(test)
```

To test it using the expects method, do
```javascript
const {expects} = require('destructos')
const test = expects.Function(add).Accept({a:'number',b:'number',c:'number'}).Returns('string');
console.log(test)
```

output
```javascript
[
	{
	payload: {
		argument: 'a as string',
		value: 'joe',
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: 'joe2916',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as number',
		value: 54,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: 2970,
		datatype_returned: 'number',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as object with property',
		value: '{"name":"edward"}',
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: '[object Object]2916',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as true',
		value: true,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as array with element',
		value: '[3,4,2]',
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: '3,4,22916',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as false',
		value: false,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as empty string',
		value: '',
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as string with white space',
		value: 'test ',
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: 'test 2916',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as negative number',
		value: -23,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as empty array',
		value: [],
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as empty object',
		value: '{}',
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: '[object Object]2916',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as zero',
		value: 0,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as floating point',
		value: 2.34,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},
	{
	payload: {
		argument: 'a as NaN',
		value: NaN,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: NaN,
		datatype_returned: 'number',
		expected_return_dataType: 'string'
	}
	},

	{
		payload: {
		argument: 'a as null',
		value: **null**,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'error',
		returned: 'Error: a is smaller than b',
		datatype_returned: 'string',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as undefined',
		value: undefined,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: NaN,
		datatype_returned: 'number',
		expected_return_dataType: 'string'
	}
	},

	{
	payload: {
		argument: 'a as Infinity',
		value: Infinity,
		other_argument_names: '["b","c"]',
		dataypes_of_other_arguments: '["number","number"]',
		values_of_other_arguments: '[54,54]'
	},
	response: {
		status: 'success',
		returned: Infinity,
		datatype_returned: 'number',
		expected_return_dataType: 'string'
	}
	}
]

