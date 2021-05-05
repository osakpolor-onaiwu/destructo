## destructo

npm install destructo

### This Package is for running destructive/ negative tests on your functions

It accepts 3 arguments.

-  **func**: this is the function you want to run the test on.

-  **arg**: this is an object where you specify the argument the function you are testing accepts and their datatypes.

-  **returns**: here you state the datatype you expect the function to return. e.g string, number, object, array and boolean.

  example

let's assume you want to test this function called add. The add function accepts three arguments a,b and c, and returns a number.  a , b  and c accepts a number datatypes.

```javascript
function add(a,b,c) {
	if(a<b){
	throw `a is smaller than b`
	};
	return a + b * c;
}
```

To test it using the package, do
``` javascript
const destructo = require('destructo');
const test = destructo(add,{a:'number',b:'number',c:'number'},'number');
console.log(test);
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


