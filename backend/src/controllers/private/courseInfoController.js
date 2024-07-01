// all courses for the degree (Value: Array) for a degree arranged by "Cores" (Key)
// {
//     "degree": "Bachelor's Degree in CSE",
//     "all_courses: {
//         "University Core": [{"course_code": "CSE110", "course_title": "Programming Language I", "credit": 3, "schedule": {"theory": "SUN 11:00-12:20, TUE 11:00-12:20", "lab": "SAT 8:00-9:20, SAT 9:30-10:50"}, "prerequisites": ["CSE101", "MAT101”]
//     }
// }

// all courses completed by the student
// ["CSE110", "MAT120"];

var data = {
  degree_name: "Bachelors in Computer Science and Engineering",
  all_courses: {
    "Program Core": [
      {
        course_code: "MAT110",
        course_title: "Differential Calculus",
        credit: 3,
        schedule: {
          theory: "SUN 11:00-12:20, TUE 11:00-12:20",
          lab: "SAT 8:00-9:20, SAT 9:30-10:50",
        },
        prerequisites: ["CSE101", "MAT101"],
        necessity: "mandatory",
      },
      {
        course_code: "MAT120",
        course_title: "Ingral Calculus",
        credit: 3,
        schedule: {
          theory: "SUN 11:00-12:20, TUE 11:00-12:20",
          lab: "SAT 8:00-9:20, SAT 9:30-10:50",
        },
        prerequisites: ["CSE101", "MAT101"],
        necessity: "mandatory",
      },
    ],
    "University Core": [
      {
        course_code: "CSE110",
        course_title: "Programming Language I",
        credit: 3,
        schedule: {
          theory: "SUN 11:00-12:20, TUE 11:00-12:20",
          lab: "SAT 8:00-9:20, SAT 9:30-10:50",
        },
        prerequisites: ["CSE101", "MAT101"],
        necessity: "mandatory",
      },
      {
        course_code: "CSE111",
        course_title: "Programming Language I",
        credit: 3,
        schedule: {
          theory: "SUN 11:00-12:20, TUE 11:00-12:20",
          lab: "SAT 8:00-9:20, SAT 9:30-10:50",
        },
        prerequisites: ["CSE101", "MAT101"],
        necessity: "mandatory",
      },
    ],
  },

  completed_courses: ["CSE110", "CSE111", "ENG091", "MAT110"],
  advised_courses: [
    {
      course_name: "CSE220",
      semester: "spring2024",
      section: 4,
      schedule: {
        theory: "SUN 11:00-12:20, TUE 11:00-12:20",
        lab: "SAT 8:00-9:20, SAT 9:30-10:50",
      },
    },
    {
      course_name: "CSE221",
      semester: "spring2024",
      section: 5,
      schedule: {
        theory: "SUN 11:00-12:20, TUE 11:00-12:20",
        lab: "SAT 8:00-9:20, SAT 9:30-10:50",
      },
    },
  ],
};

