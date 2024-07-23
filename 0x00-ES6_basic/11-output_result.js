createEmployeesObject = (departmentName, employees) => {
    return {
        [departmentName]: [
            ...employees
        ]
    };
}
