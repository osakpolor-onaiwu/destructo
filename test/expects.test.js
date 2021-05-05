const testFunction = require('./test_function');
const expect = require('chai').expect;
const {expects} = require('../index');

describe('Tests the expect method', () => {
    describe('valid test', () => {
        it('returns an array of objects with payload and response', () => {
            const result = expects.Function(testFunction).Accept({a:'number',b:'number',c:'number'}).Returns('string')
            
            expect(result).to.be.an('array')
            result.map(item =>{
                expect(item).to.be.an('object');
                expect(item).to.have.property('payload')
                expect(item).to.have.property('response')
                expect(item.payload).to.have.property('value')
                expect(item.response).to.have.property('status')
                expect(item.response).to.have.property('returned')
            })
        })

        it('returns an array of objects with payload and response', () => {
            const result = expects.Function(testFunction).Accept({a:'number',b:'array',c:'number'}).Returns('string');
            
            expect(result).to.be.an('array')
            result.map(item =>{
                expect(item).to.be.an('object');
                expect(item).to.have.property('payload')
                expect(item).to.have.property('response')
                expect(item.payload).to.have.property('value')
                expect(item.response).to.have.property('status')
                expect(item.response).to.have.property('returned')
            })
        })
    })
    
    describe('Error tests', () => {
        it('returns an error when invalid datatype is entered as the argument for the returns params',() => {
            try {
                expects.Function(testFunction).Accept({a:'number',b:'number',c:'number'}).Returns('strin');
            } catch (error) {
                expect(error).to.be.a('string')
            }
                        
        })

        it('returns an error when the returns params datatype is not a string',() => {
            
            try {
                expects.Function(testFunction).Accept({a:'number',b:'number',c:'number'}).Returns(54);
            } catch (error) {
                expect(error).to.be.a('string');
            }
     
        })

        it('returns an error when argument params is supplied as an array',() => {
            
            try {
                expects.Function(testFunction).Accept([{a:'number',b:'number',c:'number'}]).Returns('string');
            } catch (error) {
                expect(error).to.be.a('string')
            }   
        })

        it('returns an error when argument params is supplied as an empty object',() => {
            try {
                expects.Function(testFunction).Accept({}).Returns('string');
            } catch (error) {
                expect(error).to.be.a('string')
            }    
        })

        it('returns an error when argument params is supplied as null', () => {
            try {
                expects.Function(testFunction).Accept(null).Returns('string');
            } catch (error) {
                expect(error).to.be.a('string')
            }            
        })

        it('returns an error when argument params is not supplied as object', () => {
            try {
                expects.Function(testFunction).Accept('string').Returns('string');
            } catch (error) {
                expect(error).to.be.a('string')
            }            
        })

        it('returns an error when argument params is supplied as undefined',() => {
            try {
                expects.Function(testFunction).Accept(undefined).Returns('string');
            } catch (error) {
                expect(error).to.be.a('string')
            }    
        })

        it('returns an error when an invalid datatype is sent to the argument params ',() => {
            try {
                expects.Function(testFunction).Accept({a:'number',b:'number',c:'numbe'}).Returns('string');
            } catch (error) {
                expect(error).to.be.a('string')
            }   
        })

        it('returns an error when function params is not supplied as a function',() => {
            try {
                expects.Function(testFunction()).Accept({a:'number',b:'number',c:'number'}).Returns('string');
            } catch (error) {
                expect(error).to.be.a('string')
            }       
        })
    })
    
})
