const errors={
    returnsInvalidError: `please supply a valid datatype you expect the function to return, e.g "string", "number", "object", "array", "boolean". `,
    functionError:"please supply a function as the first argument. e.g if your function name is add, put add and not add()",   
    argObjectError:`please supply the second argument as an object.`,
    argNullUndefined:`you supplied null or undefined as the second argument, you are expected to supply an object.`,
    emptyArg:`you supplied an empty object as the second argument,the object should contain the parameters of your function and their data types.`,
    argArrayError:`you supplied an array instead of an object as the second argument.`,
    argDatatype:`please supply a valid datatype you expect the function argument to be, e.g "string", "number", "object", "array", "boolean".`,
}

module.exports = errors