const Errors = require('./error');
const Datatypes = require('./Datatypes');
const dataDes = require('./DataDescription')

const datatype=['string','object','number','boolean','array','function']


/**
 * @param {function} func the fuction you want to test
 * @param {object} arg an object containing the parameters and their datatypes e.g {a:string,b:'number'}
 * @param {string} returns the datatype you expect your function to return
 */
function compact(func,arg,returns){
   //checks the value sent to the returns
    const returnCheck = datatype.filter(item=>{
        return returns === item
    });

   
    if(returnCheck.length == 0){
        const ErrorMessage = Errors.returnsInvalidError
        throw ErrorMessage
    }
    
    if(typeof func !== 'function'){
        const ErrorMessage = Errors.functionError
        throw ErrorMessage
    }

    if(typeof arg !== 'object'){
            const ErrorMessage = Errors.argObjectError
            throw ErrorMessage
    }

    if(arg == null || arg ==undefined){
        const ErrorMessage = Errors.argNullUndefined
        throw ErrorMessage
    }
    const isEmpty = Object.keys(arg).length

    if(isEmpty == 0){
        const ErrorMessage = Errors.emptyArg
        throw ErrorMessage
    }

    if(Array.isArray(arg)){
        const ErrorMessage = Errors.argArrayError
        throw ErrorMessage
    }

    //gets key names of object properties
    let argKey = Object.keys(arg);

    //gets values (i.e the specified datatype) of object properties
    let argValues = Object.values(arg);

    //checks the datatype stated for the arguments
    for(let i = 0; i<argValues.length;i++){
        const argsCheck = datatype.filter(item=>{
            return argValues[i] === item
        });

        if(argsCheck.length ==0){
            const ErrorMessage = Errors.argDatatype
            throw ErrorMessage
        }
    }
    

    //removes the first one
    let otherArgs = argValues.slice(1,argValues.length)
    let otherArgsNames = argKey.slice(1,argKey.length)

    //checks the datatypes of all destructive value and gets which one matches the arguments the function should accept
    let checkArray = [];

    for(let i=0;i <otherArgs.length;i++){
        const check = Datatypes.find((item)=>{
            const itemDatatype = typeof item
            return otherArgs[i] === itemDatatype
        })

        checkArray.push(check)
    }
    

    //replaces all undefined whith an array, if the user specify the datatype is an array
    for(let i=0;i <checkArray.length;i++){
        if(checkArray[i]== undefined){
            checkArray[i]=Datatypes[4]
        }
    }
   
    let result = [];
    // test the function with the arguments an gets the response/ result
    for (let i= 0; i < Datatypes.length; i++) {
        const valuesOfArgs = [...checkArray]
        try {
            const output = func(Datatypes[i],...checkArray);
            const description = dataDes[i]
    
            const full = {
                status:'success',
                output,
                description,
                value:Datatypes[i],
                name:otherArgsNames,
                otherValues: valuesOfArgs
            }
            
            result.push(full)
        } catch (error) {

            const full = {
                status:'error',
                output:`Error: ${error}`,
                description:dataDes[i],
                value:Datatypes[i],
                name:otherArgsNames,
                otherValues: valuesOfArgs
            }
            result.push(full)
        }
    }
    
    let responses = [];

    // generates a response
    let res = result.map(item=>{
        const outputType = typeof item.output

        let value;

        //stringify the response value if it is an object with properties
        if(typeof item.value == 'object' && item.value !== null && item.value.length != 0 ){
            value = JSON.stringify(item.value)
        }
        else{
            value = item.value
        }

        return {
            payload:{
                argument:`${argKey[0]} as ${item.description}`,
                value:value,
                other_argument_names:JSON.stringify(item.name),
                dataypes_of_other_arguments:JSON.stringify(otherArgs),
                values_of_other_arguments:JSON.stringify(item.otherValues)
            },
            response:{
                status:item.status,
                returned:item.output,
                datatype_returned:outputType,
                expected_return_dataType:returns
            }       
        }
    })

    responses.push(res)

    return responses[0]
}


module.exports = compact