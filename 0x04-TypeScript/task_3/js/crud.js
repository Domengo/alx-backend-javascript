"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRow = exports.deleteRow = exports.insertRow = void 0;
function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
}
exports.insertRow = insertRow;
function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
}
exports.deleteRow = deleteRow;
function updateRow(rowId, row) {
    console.log("Update row ".concat(rowId), row);
    return rowId;
}
exports.updateRow = updateRow;
