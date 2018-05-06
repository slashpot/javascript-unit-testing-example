'use strict';

class Person {
    setFirstName(name) {
        this.firstName = name;
    }

    setLastName(name) {
        this.lastName = name;
    }

    getFullName(lastNameFirst) {
        if (lastNameFirst) {
            return this.lastName + " " + this.firstName;
        }
        return this.firstName + " " + this.lastName;
    }
}