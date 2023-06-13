/* Using the database database.csv (provided in project description),
create a function countStudents in the file 2-read_file.js

Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students:
  NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format:
  Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
*/
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines
      .filter((line) => line)
      .map((line) => line.split(','))
      .slice(1);
    const NUMBER_OF_STUDENTS = students.length;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    const csStudents = students
      .filter((student) => student[3] === 'CS')
      .map((student) => student[0]);
    const SWEStudents = students
      .filter((student) => student[3] === 'SWE')
      .map((student) => student[0]);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(
        ', ',
      )}`,
    );
    console.log(
      `Number of students in SWE: ${
        SWEStudents.length
      }. List: ${SWEStudents.join(', ')}`,
    );
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
