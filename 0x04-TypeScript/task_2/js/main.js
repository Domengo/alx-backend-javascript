var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (Number(salary) < 500) {
        return new Teacher;
    }
    return new Director;
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    }
    else {
        console.log(employee.workDirectorTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        console.log('Teaching Math');
    }
    else {
        console.log('Teaching History');
    }
}
// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));
// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));
teachClass('Math');
teachClass('History');
