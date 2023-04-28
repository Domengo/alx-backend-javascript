import { Subjects as TeacherNamespace } from './Teacher';
export namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export class Subject {
        teacher: TeacherNamespace.Teacher;

        set setTeacher(teacher: TeacherNamespace.Teacher) {
        this.teacher = teacher;
        }

        // get teacher(): Teacher | undefined {
        // return this.teacher;
        // }
    }
}
