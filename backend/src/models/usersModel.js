const { pool } = require("../database/mysqlConnection");

// User info
const modelUserInfoLogin = async (user_email) => {
  try {
    // Execute queries using async/await
    const [rows, fields] = await pool.query(
      `
    SELECT user_email, password, account_type 
      FROM Users
      WHERE user_email = ?`,
      [user_email]
    );

    // Handle query results
    return rows;
  } catch (err) {
    console.error("Error executing query:", err);
  }
};

// Register new user
const modelRegisterUser = async (new_user_info) => {
  const { accountType, email, password } = new_user_info;

  try {
    const query = `
      INSERT INTO Users (user_email, password, account_type)
      VALUES (?, ?, ?)
    `;
    await pool.query(query, [email, password, accountType]);

    // Handle successful insertion
    console.log("User created successfully");
  } catch (err) {
    console.error("Error executing query:", err);
    throw err; // Rethrow to handle it in the controller
  }
};

const modelStudentProfileInfo = async (user_email) => {
  try {
    // Execute queries using async/await
    var [rows, fields] = await pool.query(
      `
    SELECT std.student_id, std.user_name, std.course_limit, usr.user_email, usr.gsuite_email, usr.full_name, usr.date_of_birth, usr.gender, usr.religion, usr.blood_group, usr.street, usr.city, usr.state_division, usr.country
      FROM Student AS std
      INNER JOIN Users as usr ON std.user_name = usr.user_name
      WHERE usr.user_email = ?`,
      [user_email]
    );

    // Handle query results
    rows = rows[0];
    const user_name = rows.user_name;
    var query_rows = {
      program_info: "",
      student_info: [
        { "Student ID:": rows.student_id },
        { "Full name:": rows.full_name },
        { "Gender:": rows.gender },
        { "Date of birth:": rows.date_of_birth },
        { "Religion:": rows.religion },
        { "Blood group:": rows.blood_group },
        { "Email:": rows.user_email },
        { "GSuite email:": rows.gsuite_email },
      ],
      address: {
        Country: rows.country,
        "State/division": rows.state_division,
        City: rows.city,
        Street: rows.street,
      },
    };

    const [query_rows1, fields1] = await pool.query(
      `
    SELECT title
      FROM Student_Titles
      WHERE student_id = ?`,
      [rows.student_id]
    );
    query_rows.titles = query_rows1;

    const [query_rows2, fields2] = await pool.query(
      `
    SELECT phone_num
      FROM phone_numbers
      WHERE user_name = ?`,
      [user_name]
    );

    query_rows.phone_numbers = query_rows2.map((item) => item.phone_num);

    const [query_rows3, fields3] = await pool.query(
      `
    SELECT degree, year_of_completion, grade, institution
      FROM Education
      WHERE user_name = ?`,
      [user_name]
    );

    query_rows.education = query_rows3;

    const [query_rows4, fields4] = await pool.query(
      `
    SELECT full_name, relation, phone_no
      FROM guardian
      WHERE user_name = ?`,
      [user_name]
    );

    query_rows.guardian = query_rows4;

    return query_rows;
  } catch (err) {
    console.error("Error executing query:", err);
  }
};

const modelStudentRoutine = async (user_email) => {
  var [rows, fields] = await pool.query(
    `
    SELECT std.student_id, std.user_name, std.course_limit, usr.user_email, usr.gsuite_email, usr.full_name, usr.date_of_birth, usr.gender, usr.religion, usr.blood_group, usr.street, usr.city, usr.state_division, usr.country
      FROM Student AS std
      INNER JOIN Users as usr ON std.user_name = usr.user_name
      WHERE usr.user_email = ?`,
    [user_email]
  );
};

// Exports
module.exports = {
  modelUserInfoLogin,
  modelRegisterUser,
  modelStudentProfileInfo,
};
