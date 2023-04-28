var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function () {
        function Java(teacher) {
            this._teacher = teacher;
        }
        Java.prototype.getRequirements = function () {
            return "Here is the list of requirements for Java";
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this._teacher.experienceTeachingJava !== undefined) {
                return "Available Teacher: ".concat(this._teacher.firstName);
            }
            else {
                return "No available teacher";
            }
        };
        return Java;
    }());
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Java.js.map