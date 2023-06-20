namespace Subjects {
    interface Teacher {
        firstName: any;
        experienceTeachingReact? : number;
    }
    export class React {
        teacher: Teacher;
        constructor() {}
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}