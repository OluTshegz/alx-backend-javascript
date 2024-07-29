/** */
export default function getListStudents() {
  const studentsArray = [];
  const studentObject = {};

  studentObject.id = 1;
  studentObject.firstName = 'Guillaume';
  studentObject.location = 'San Francisco';
  studentsArray.push({ ...studentObject });

  studentObject.id = 2;
  studentObject.firstName = 'James';
  studentObject.location = 'Columbia';
  studentsArray.push({ ...studentObject });

  studentObject.id = 5;
  studentObject.firstName = 'Serena';
  studentObject.location = 'San Francisco';
  studentsArray.push({ ...studentObject });

  return studentsArray;
}
