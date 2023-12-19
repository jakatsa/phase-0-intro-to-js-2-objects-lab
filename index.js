/**** */
const employee = {
  name: "joe",
  streetAddress: "race",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee, "name", "mike");
/*console.log(updateEmployee)*/
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "name",
  "akatsa"
);
/*console.log(newEmployee);*/
function deleteFromEmployeeByKey(employee, key) {
  const deleteEmployee = { ...employee };
  delete deleteEmployee[key];
  return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
