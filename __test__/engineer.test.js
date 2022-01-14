const Engineer = require('../lib/engineer');

describe("Emolyee class", ()=>{
    it("Create a employee object ",()=>{
        const employee = new Engineer('Jared', 1, 'jared@fakemail.com', "jared");
       
        expect(employee.github).toBe('jared')
    });
     describe("getGithub method",()=>{
         it('return name', ()=>{
             expect(new Engineer('Jared', 1, 'jared@fakemail.com',"jared").getGithub()).toBe('jared')
         })
     });
  
    describe("getRole method",()=>{
        it('return Engineer', ()=>{
            expect(new Engineer('Jared', 1, 'jared@fakemail.com',"jared").getRole()).toBe('Engineer')
        })
    });
})