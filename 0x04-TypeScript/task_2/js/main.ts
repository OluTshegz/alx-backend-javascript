/**
 * Interface for Director with expected methods.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface for Teacher with expected methods.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Class representing a Director implementing DirectorInterface.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
 * Class representing a Teacher implementing TeacherInterface.
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 * Function to create an instance of Director or Teacher based on salary.
 * @param salary - The salary (either number or string).
 * @returns A new instance of Director or Teacher.
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

//   // Example usage
//   console.log(createEmployee(200));   // Output: Teacher { ... }
//   console.log(createEmployee(1000));  // Output: Director { ... }
//   console.log(createEmployee('$500')); // Output: Director { ... }
