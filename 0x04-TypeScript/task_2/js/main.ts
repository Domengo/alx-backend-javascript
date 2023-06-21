interface DirectorInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workTeacherTasks(): string;
}
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeBreak (): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

}
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }

}
function createEmployee(salary: number | string): Director | Teacher {
    if (Number(salary) < 500) {
        return new Teacher;
    }
    return new Director;
}
function isDirector(employee: Teacher | Director): boolean{
    return employee instanceof Director;
}
function executeWork(employee: Teacher | Director): void{
    if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    } else {
        console.log(employee.workDirectorTasks());
    }
}
type Subjects = 'Math' | 'History';
function teachClass(todayClass: string) {
    if (todayClass === 'Math') {
        console.log('Teaching Math');
    } else {
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