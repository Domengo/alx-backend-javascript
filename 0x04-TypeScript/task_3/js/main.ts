import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement ={...row, age: 23};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
