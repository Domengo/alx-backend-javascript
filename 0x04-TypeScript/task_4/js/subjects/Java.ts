namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingJava?: number;
    }

    export class Java {
            private _teacher: Teacher;

        constructor(teacher: Teacher) {
        this._teacher = teacher;
        }

        getRequirements(): string {
        return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
        if (this._teacher.experienceTeachingJava !== undefined) {
            return `Available Teacher: ${this._teacher.firstName}`;
        } else {
            return "No available teacher";
        }
        }
    }
}
