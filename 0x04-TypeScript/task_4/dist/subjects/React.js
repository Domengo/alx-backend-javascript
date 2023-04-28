var Subjects;
(function (Subjects) {
    var React = /** @class */ (function () {
        function React() {
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
                return 'No available teacher';
            }
            return "Available Teacher: ".concat(this.teacher.firstName);
        };
        return React;
    }());
    Subjects.React = React;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=React.js.map