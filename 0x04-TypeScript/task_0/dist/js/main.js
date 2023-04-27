var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Stockholm"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Gothenburg"
};
var studentsList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement('table');
var thead = document.createElement('thead');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
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
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var column1 = document.createElement('td');
    var column2 = document.createElement('td');
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
//# sourceMappingURL=main.js.map