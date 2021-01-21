import { ParenthesisChecker } from './parenthesis_checker.js'

describe('Parenthesis Checker Suites', ()=>{
    
    it('It should be true if "{}[]()"',()=>{
        expect(ParenthesisChecker('{}[]()')).toBe(true);
    });

    it('It should be false if "{}[]("',()=>{
        expect(ParenthesisChecker('{}[](')).not.toBe(true);
    });

    it('It should be false for blank string',()=>{
        expect(ParenthesisChecker('')).not.toBe(true);
    });

    it('It shold be false for other string',()=>{
        expect(ParenthesisChecker('784{}')).not.toBe(true);
    });

    it('It should be false if ")()("',()=>{
        expect(ParenthesisChecker(')()(')).not.toBe(true);
    })

})