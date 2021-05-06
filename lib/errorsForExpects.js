const errors={
    returnsInvalidError: `please supply a valid datatype you expect the function to return, e.g "string", "number", "object", "array", "boolean".`,
    functionError:`please supply a function to the Function method. e.g if your function name is add, put add and not add(). NB: ensure the Returns method is called after the Function and Accept Method`,   
    argObjectError:`please supply an object as an argument to the Accept method`,
    argNullUndefined:`you supplied null or undefined as the argument to the Accept Method, you are expected to supply an object. NB: Ensure the Returns method is called after the Function and Accept Method`,
    emptyArg:`you supplied an empty object as the argument to the Accept method,the object should contain the parameters of your function and their data types. e.g {a:"number",b:"string"}`,
    argArrayError:`you supplied an array instead of an object as the argument to the Accept method`,
    argDatatype:`please supply a valid datatype you expect the function argument to be, e.g "string", "number", "object", "array", "boolean".`,
}

module.exports = errors