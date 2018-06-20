//var Person = (function () {
//    function Person() {
//    }
//    Person.prototype.setFirstName = function (value) {
//        this.firstName = value;
//    };
//    Person.prototype.setLastName = function (value) {
//        this.lastName = value;
//    };
//    Person.prototype.getFullName = function (lastNameFirst) {
//        if (lastNameFirst === true) {
//            return this.lastName + ", " + this.firstName;
//        }
//        return this.firstName + ", " + this.lastName;
//    };
//    return Person;
//}());

class Person {
    constructor() {

    }
    setFirstName(value) {
        this.firstName = value;
    }

    setLastName(value) {
        this.lastName = value;
    }

    getFullName(lastNameFirst) {
        if (lastNameFirst) {
            return this.lastName + ", " + this.firstName;
        }
        return this.firstName + ", " + this.lastName;
    }
}