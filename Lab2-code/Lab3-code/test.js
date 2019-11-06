"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */

describe("nameComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(employees[0].name, "Dave");
    });
    it("Compares Employees by name", function() {
        assert.equal(employees[1].name, "George")
    });
    it("Compares Employees by name", function() {
        assert.equal(employees[2].name, "Richard")
    });
});

describe("salaryComparator", function() {
    it("Compares Employees by Salary", function() {
        assert.equal(employees[0].salary,40000);
    });
    it("Compares Employees by Salary", function() {
        assert.equal(employees[1].salary, 45000)
    });
    it("Compares Employees by Salary", function() {
        assert.equal(employees[2].salary, 50000 )
    });
});
describe("hireDateComparator", function() {
    it("Compares Employees by hiredate", function() {
        assert.equal(employees[0].hireDate,1996, 11, 5);
    });
    it("Compares Employees by hiredate", function() {
        assert.equal(employees[1].hireDate, 2000, 1, 3)
    });
    it("Compares Employees by hiredate", function() {
        assert.equal(employees[2].hireDate, 2001, 2, 7)
    });
});