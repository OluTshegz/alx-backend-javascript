/** */
export default function createIteratorObject(report) {
  const list = [];
  for (const item of Object.values(report.allEmployees)) {
    list.push(...item);
  }

  return list;
}

// export default function createIteratorObject(report) {
//   let employees = [];
//   for (const department of Object.values(report.allEmployees)) {
//     employees = employees.concat(department);
//   }
//   return employees[Symbol.iterator]();
// }
