const Employee = require('../lib/employee');

describe("Emolyee class", ()=>{
    it("Create a employee object ",()=>{
        const employee = new Employee('Jared', 1, 'jared@fakemail.com');
        expect(employee.name).toBe('Jared');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('jared@fakemail.com')
    });
     describe("getName method",()=>{
         it('return name', ()=>{
             expect(new Employee('Jared', 1, 'jared@fakemail.com').getName()).toBe('Jared')
         })
     });
     describe("getId method",()=>{
        it('return id', ()=>{
            expect(new Employee('Jared', 1, 'jared@fakemail.com').getId()).toBe(1)
        })
    });
    describe("getEmail method",()=>{
        it('return email', ()=>{
            expect(new Employee('Jared', 1, 'jared@fakemail.com').getEmail()).toBe('jared@fakemail.com')
        })
    });
    describe("getRole method",()=>{
        it('return Employee', ()=>{
            expect(new Employee('Jared', 1, 'jared@fakemail.com').getRole()).toBe('Employee')
        })
    });
})