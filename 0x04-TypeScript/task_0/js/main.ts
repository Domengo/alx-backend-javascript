interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

    const student1: Student = {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        location: "Stockholm"
    };

    const student2: Student = {
        firstName: "Jane",
        lastName: "Doe",
        age: 22,
        location: "Gothenburg"
};

const studentsList: Array<Student> = [student1, student2];
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.textContent = "firstName";
th2.textContent = "location";
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';

thead.appendChild(th1);
thead.appendChild(th2);

table.appendChild(thead);

studentsList.forEach(student => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const column1: HTMLTableCellElement = document.createElement('td');
    const column2: HTMLTableCellElement = document.createElement('td');
    
    column1.textContent = student.firstName;
    column2.textContent = student.lastName;
    column1.style.border = '1px solid gray';
    column2.style.border = '1px solid gray';
    column1.style.padding = '.5rem';
    column2.style.padding = '.5rem';
    row.appendChild(column1);
    row.appendChild(column2);
    table.appendChild(row);
});

document.body.appendChild(table);
