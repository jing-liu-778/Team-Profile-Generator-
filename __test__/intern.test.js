const Intern = require('../lib/intern');

describe("Intern class", ()=>{
    it("Create a employee object ",()=>{
        const employee = new Intern('Jared', 1, 'jared@fakemail.com', "GT");
      
        expect(employee.school).toBe('GT')
    });
     describe("getSchool method",()=>{
         it('return school', ()=>{
             expect(new Intern('Jared', 1, 'jared@fakemail.com','GT').getSchool()).toBe('GT')
         })
     });
     
    describe("getRole method",()=>{
        it('return Intern', ()=>{
            expect(new Intern('Jared', 1, 'jared@fakemail.com','GT').getRole()).toBe('Intern')
        })
    });
});

