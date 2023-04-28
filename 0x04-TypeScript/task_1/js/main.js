function printTeacher(firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.workOnHomework = function () { return 'Currently working'; };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Dominic", "Sengo");
console.log(student.displayName());
console.log(student.workOnHomework());
