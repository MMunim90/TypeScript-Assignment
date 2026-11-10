const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier || multiplier == 0) {
    return value * multiplier;
  }

  return value * 2;
};





type dataType = string | number | boolean;

const processInput = (value: dataType): dataType => {
  if (typeof value == "string") {
    return value.trim().toLowerCase();
  } else if (typeof value == "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    }
    return "Inactive";
  }
};






const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  latitude: number,
  longitude: number,
  locationName: string,
]): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};






const concatenateArrays = <T>(...array: T[][]): T[] => {
  return array.reduce((arr, curr) => [...arr, ...curr], []);
};





interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courseArray: Course[],
  minStudents: number,
): Course[] => {
  const filteredCourse: Course[] = [];
  for (let course of courseArray) {
    if (course.isPublished == true && course.students >= minStudents) {
      filteredCourse.push(course);
    }
  }

  return filteredCourse;
};





const pluckValues = <T, K extends keyof T> (items: T[], key: K) : T[K][] => {
    const newArray = items.map((item) => item[key]);
    return newArray;
};






class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}





const validateAgeAsync = async (age: number): Promise<string> => {
  if (age >= 18) {
    return new Promise((resolved) => {
      setTimeout(() => {
        resolved("Access Granted");
      }, 1000);
    });
  }
  throw new Error("Access Denied: Must be 18 or older");
};

