const { pool } = require("../database/mysqlConnection");

const modelStudentAdvisingInfo = async (user_email) => {
  try {
    // Execute queries using async/await
    var [rows, fields] = await pool.query(
      `
    SELECT std.student_id, std.user_name, std.course_limit, std.degree_name, usr.user_email, usr.gsuite_email, usr.full_name
      FROM Student AS std
      INNER JOIN Users as usr ON std.user_name = usr.user_name
      WHERE usr.user_email = ?`,
      [user_email]
    );

    // Handle query results
    rows = rows[0];
    const user_name = rows.user_name;
    const student_id = rows.student_id;
    const degree_name = rows.degree_name;
    var query_rows = {
      program_info: "",
      student_info: [
        { "Student ID": rows.student_id },
        { "Full name": rows.full_name },
        { "Course limit": rows.course_limit },
        { Email: rows.user_email },
        { "GSuite email": rows.gsuite_email },
        { "Degree name": rows.degree_name },
      ],
    };

    const [query_rows1, fields1] = await pool.query(
      `
    SELECT dr.course_code, ci.course_title, ci.credit, dr.core
      FROM DegreeRequireCourse AS dr
      INNER JOIN Course_info as ci ON dr.course_code = ci.course_code
      WHERE dr.degree_name = ?`,
      [degree_name]
    );
    query_rows.degree_courses = query_rows1;

    return query_rows;
  } catch (err) {
    console.error("Error executing query:", err);
  }
};

const modelCourseInfo = async (course_code) => {
  try {
    // Execute queries using async/await
    var [rows, fields] = await pool.query(
      `
    SELECT
        s.section_no,
        s.faculty_initial,
        s.max_seats - COUNT(e.student_id) AS remaining_seats,
        s.max_seats,
        s.class_schedule,
        s.lab_schedule
    FROM
        Sections AS s
    LEFT JOIN Enrolls AS e
        ON s.course_code = e.course_code AND s.section_no = e.section_no AND s.semester = e.semester
    WHERE
        s.course_code = ?
    GROUP BY
        s.section_no,
        s.faculty_initial,
        s.max_seats,
        s.class_schedule,
        s.lab_schedule;
      `,
      [course_code]
    );

    // Handle query results
    //rows = rows[0];
    return rows;
  } catch (err) {
    console.error("Error executing query:", err);
  }
};

// Exports
module.exports = {
  modelStudentAdvisingInfo,
  modelCourseInfo,
};
