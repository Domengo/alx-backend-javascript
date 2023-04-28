interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any,
}

interface Directors extends Teacher {
    numberOfReports: number,
}

function printTeacher(firstName:string, lastName:string) : string {
    return `${firstName.charAt(0)}. ${lastName}`;
}
interface printTeacherFunction {
    printTeacher: string
}
class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    workOnHomework = () : string => 'Currently working';

    displayName() : string{
        return this.firstName;
    }
}

interface StudentConstructor {
    (firstName: string, lastName: string): StudentClass;
}

const student = new StudentClass("Dominic", "Sengo");
console.log(student.displayName())
console.log(student.workOnHomework())

