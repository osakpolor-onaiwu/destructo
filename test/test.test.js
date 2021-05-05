const testFunction = require('./test_function');
const expect = require('chai').expect;
const destructo = require('../index');

describe('Tests the destructo function', () => {
    describe('valid test', () => {
        it('returns an array of objects with payload and response', () => {
            const result = destructo(testFunction,{a:'number',b:'number',c:'number'},'string')
            
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
            const result = destructo(testFunction,{a:'number',b:'array',c:'number'},'string')
            
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
                 destructo(testFunction,{a:'number',b:'number',c:'number'},'strin')
            } catch (error) {
                expect(error).to.be.a('string')
            }
           
                 
        })

        it('returns an error when the returns params datatype is not a string',() => {
            
            try {
                destructo(testFunction,{a:'number',b:'number',c:'number'},54);
            } catch (error) {
                expect(error).to.be.a('string');
            }
     
        })

        it('returns an error when argument params is supplied as an array',() => {
            
            try {
                destructo(testFunction,[{a:'number',b:'number',c:'number'}],'string');
            } catch (error) {
                expect(error).to.be.a('string')
            }   
        })

        it('returns an error when argument params is supplied as an empty object',() => {
            try {
                destructo(testFunction,{},'string');
            } catch (error) {
                expect(error).to.be.a('string')
            }    
        })

        it('returns an error when argument params is supplied as null', () => {
            try {
                destructo(testFunction,null,'string');
            } catch (error) {
                expect(error).to.be.a('string')
            }            
        })

        it('returns an error when argument params is supplied as undefined',() => {
            try {
                destructo(testFunction,undefined,'string');
            } catch (error) {
                expect(error).to.be.a('string')
            }    
        })

        it('returns an error when an invalid datatype is sent to the argument params ',() => {
            try {
                destructo(testFunction,{a:'numb',b:'number',c:'number'},'string');
            } catch (error) {
                expect(error).to.be.a('string')
            }   
        })

        it('returns an error when function params is not supplied as a function',() => {
            try {
                destructo(testFunction(),{a:'number',b:'number',c:'number'},'string')
            } catch (error) {
                expect(error).to.be.a('string')
            }       
        })
    })
    
})
