import {Subjects as sub} from './Subjects'
export namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
    export class Cpp extends sub.Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
}