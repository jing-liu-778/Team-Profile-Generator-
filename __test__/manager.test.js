const Manager = require('../lib/manager');

describe("Manager class", ()=>{
    it("Create a manager object ",()=>{
        const employee = new Manager('Jared', 1, 'jared@fakemail.com', 2);
        expect(employee.officeNumber).toBe(2);
      
    });
    
    describe("getRole method",()=>{
        it('return Manager', ()=>{
            expect(new Manager('Jared', 1, 'jared@fakemail.com',2).getRole()).toBe('Manager')
        })
    });
})
