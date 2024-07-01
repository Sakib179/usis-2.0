INSERT INTO Users (
    user_email, gsuite_email, password, full_name, date_of_birth, gender, religion, blood_group, street, city, state_division, country, account_type
) VALUES
    ('john.doe@example.com', 'john.doe@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'John Doe', '1990-01-01', 'male', 'Christianity', 'O+', '123 Baker Street', 'Dhaka', 'Dhaka Division', 'Bangladesh', 'student'),
    ('alex.smith@example.com', 'alex.smith@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Alex Smith', '1994-03-03', 'other', 'Buddhism', 'B+', '789 Pine Street', 'Khulna', 'Khulna Division', 'Bangladesh', 'student'),
    ('sarah.connor@example.com', 'sarah.connor@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Sarah Connor', '1985-05-12', 'female', 'None', 'AB-', '321 Cyberdyne Way', 'Los Angeles', 'California', 'USA', 'student'),
    ('kyle.reese@example.com', 'kyle.reese@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Kyle Reese', '1984-10-26', 'male', 'None', 'O+', '123 Resistance Base', 'Los Angeles', 'California', 'USA', 'faculty'),
    ('miles.dyson@example.com', 'miles.dyson@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Miles Dyson', '1970-04-15', 'male', 'Christianity', 'A+', '456 Inventors Lane', 'Los Angeles', 'California', 'USA', 'faculty'),
    ('john.connor@example.com', 'john.connor@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'John Connor', '2002-02-28', 'male', 'None', 'B+', '789 Future St', 'Los Angeles', 'California', 'USA', 'non-faculty'),
    ('t800@example.com', 't800@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'T-800', '2029-08-29', 'other', 'None', 'O-', '101 Skynet HQ', 'Los Angeles', 'California', 'USA', 'non-faculty'),
    ('t1000@example.com', 't1000@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'T-1000', '2029-08-29', 'other', 'None', 'AB+', '102 Skynet HQ', 'Los Angeles', 'California', 'USA', 'non-faculty'),
    ('jane.doe@example.com', 'jane.doe@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Jane Doe', '1992-07-15', 'female', 'Hinduism', 'A-', '456 Maple Street', 'Chittagong', 'Chittagong Division', 'Bangladesh', 'non-faculty');

INSERT INTO Degrees (
    degree_name
) VALUES
    ('Bachelors in Computer Science and Engineering'),
    ('Masters in Computer Science and Engineering'),
    ('Bachelors in Computer Science'),
    ('Masters in Computer Science'),
    ('Bachelors in Theoretical Mathematics'),
    ('Masters in Theoretical Mathematics');

INSERT INTO Student (
    student_id, user_name, course_limit, degree_name
) VALUES
    ('21102420', 1, 5, 'Bachelors in Computer Science and Engineering'),
    ('20101768', 2, 6, 'Bachelors in Computer Science and Engineering'),
    ('23101768', 3, 3, 'Bachelors in Computer Science and Engineering');

INSERT INTO Student_Titles (
    student_id, title
) VALUES
    ('21102420', 'Regular Student'),
    ('21102420', 'Student Tutor'),
    ('20101768', 'Foreign Student'),
    ('23101768', 'Regular Student');


INSERT INTO Education (
    user_name, degree, year_of_completion, grade, institution	
) VALUES
    (1, 'SSC', 2018, 'A+', 'Khulna Zila School'),
    (1, 'HSC', 2020, 'A-', 'Rajshahi Pilot College'),
    (2, 'O Levels', 2017, 'A-', 'Some English Medium School'),
    (2, 'A Levels', 2019, 'A-', 'Some English Medium College');

INSERT INTO guardian (
    user_name, full_name, relation, phone_no	
) VALUES
    (1, 'John Sina', 'Father', '01765546791'),
    (1, 'Lily', 'Mother', '01765587781'),
    (2, 'Kim Kardashian', 'Uncle', '01365587781');

INSERT INTO phone_numbers (
    user_name, phone_num
) VALUES
    (1, '0195546791'),
    (1, '01465587781'),
    (2, '01365587781'),
    (2, '01469987781'),
    (2, '01567787781');

INSERT INTO Departments (
    dept_id, dept_name, since_date, dept_type
) VALUES
    ('CSE', 'Computer Science and Engineering', '2008-01-01', 'academic'),
    ('MNS', 'Mathematics and Natural Sciences', '2003-01-01', 'academic'),
    ('ESS', 'Economics and Social Sciences', '2005-01-01', 'academic'),
    ('IT', 'Information Technology', '2010-01-01', 'management'),
    ('REG', 'Office of Registrar', '2002-01-01', 'management'),
    ('PROC', 'Office of Proctor', '2002-01-01', 'management');


INSERT INTO AcademicDeptOffers (
    dept_id, degree_name
) VALUES
    ('CSE', 'Bachelors in Computer Science and Engineering'),
    ('CSE', 'Masters in Computer Science and Engineering'),
    ('CSE', 'Bachelors in Computer Science'),
    ('CSE', 'Masters in Computer Science');

INSERT INTO Courses (
    course_code, dept_id
) VALUES
    ('CSE110', 'CSE'),
    ('CSE111', 'CSE'),
    ('CSE220', 'CSE'),
    ('CSE221', 'CSE'),
    ('CSE230', 'CSE'),
    ('CSE250', 'CSE'),
    ('CSE251', 'CSE'),
    ('CSE260', 'CSE'),
    ('CSE320', 'CSE'),
    ('CSE321', 'CSE'),
    ('CSE330', 'CSE'),
    ('CSE331', 'CSE'),
    ('CSE340', 'CSE'),
    ('CSE341', 'CSE'),
    ('CSE350', 'CSE'),
    ('CSE360', 'CSE'),
    ('CSE370', 'CSE'),
    ('CSE420', 'CSE'),
    ('CSE421', 'CSE'),
    ('CSE422', 'CSE'),
    ('CSE423', 'CSE'),
    ('CSE460', 'CSE'),
    ('CSE461', 'CSE'),
    ('CSE470', 'CSE'),
    ('CSE471', 'CSE'),

    ('MAT120', 'MNS'),
    ('MAT215', 'MNS'),
    ('MAT216', 'MNS'),
    ('PHY112', 'MNS');

INSERT INTO Course_info (course_code, course_title, credit) VALUES
    ('CSE110', 'Programming Language I', 3),
    ('CSE111', 'Programming Language II', 3),
    ('CSE220', 'Data Structures', 3),
    ('CSE221', 'Algorithms', 3),
    ('CSE230', 'Discrete Mathematics', 3),
    ('CSE250', 'Circuits and Electronics', 3),
    ('CSE251', 'Electronic Devices and Circuits', 3),
    ('CSE260', 'Digital Logic Design', 3),
    ('CSE320', 'Data Communications', 3),
    ('CSE321', 'Operating System', 3),
    ('CSE330', 'Numerical Methods', 3),
    ('CSE331', 'Automata and Computability', 3),
    ('CSE340', 'Computer Architecture', 3),
    ('CSE341', 'Microprocessors', 3),
    ('CSE350', 'Digital Electronics and Pulse Techniques', 3),
    ('CSE360', 'Computer Interfacing', 3),
    ('CSE370', 'Database Systems', 3),
    ('CSE420', 'Compiler Design', 3),
    ('CSE421', 'Computer Networks', 3),
    ('CSE422', 'Artificial Intelligence', 3),
    ('CSE423', 'Computer Graphics', 3),
    ('CSE460', 'VLSI Design', 3),
    ('CSE461', 'Introduction to Robotics', 3),
    ('CSE470', 'Software Engineering', 3),
    ('CSE471', 'Systems Analysis and Design', 3),

    ('MAT120', 'MATH II: Integral Calculus and Differential Equations', 3),
    ('MAT215', 'MATH III: Complex Variables and Laplace Transformations', 3),
    ('MAT216', 'MATH IV: Linear Algebra and Fourier Analysis', 3),
    ('PHY112', 'Principles of Physics II', 3);


INSERT INTO DegreeRequireCourse (degree_name, course_code, core, core_credit) VALUES
    ('Bachelors in Computer Science and Engineering', 'CSE110', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE111', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE220', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE221', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE230', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE250', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE251', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE260', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE320', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE321', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE330', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE331', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE340', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE341', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE350', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE360', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE370', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE420', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE421', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE422', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE423', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE460', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE461', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE470', 'Program Core', 75),
    ('Bachelors in Computer Science and Engineering', 'CSE471', 'Program Core', 75),

    ('Bachelors in Computer Science and Engineering', 'MAT120', 'School Core', 12),
    ('Bachelors in Computer Science and Engineering', 'MAT215', 'School Core', 12),
    ('Bachelors in Computer Science and Engineering', 'MAT216', 'School Core', 12),
    ('Bachelors in Computer Science and Engineering', 'PHY112', 'School Core', 12);



INSERT INTO Sections (course_code, section_no, semester, faculty_initial, max_seats, class_schedule, lab_schedule)
VALUES ('CSE110', 1, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE110', 2, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE110', 3, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE110', 4, 'summer2024', 'ABC', 35, 'MON 11:00-12:20, WED 11:00-12:20', NULL),
       ('CSE110', 5, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE111', 1, 'summer2024', 'ABC', 40, 'MON 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE111', 2, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE111', 3, 'summer2024', 'ABC', 35, 'THU 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE111', 4, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE111', 5, 'summer2024', 'ABC', 30, 'WED 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE220', 1, 'summer2024', 'ABC', 35, 'THU 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE220', 2, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, THU 11:00-12:20', NULL),
       ('CSE220', 3, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE220', 4, 'summer2024', 'ABC', 35, 'THU 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE220', 5, 'summer2024', 'ABC', 30, 'FRI 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE221', 1, 'summer2024', 'ABC', 40, 'THU 11:00-12:20, SAT 11:00-12:20', NULL),
       ('CSE221', 2, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, SAT 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE221', 3, 'summer2024', 'ABC', 40, 'MON 11:00-12:20, SUN 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE221', 4, 'summer2024', 'ABC', 30, 'FRI 11:00-12:20, WED 11:00-12:20', NULL),
       ('CSE221', 5, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, SAT 11:00-12:20', NULL),
       ('CSE230', 1, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE230', 2, 'summer2024', 'ABC', 30, 'WED 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE230', 3, 'summer2024', 'ABC', 40, 'WED 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE230', 4, 'summer2024', 'ABC', 35, 'FRI 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE230', 5, 'summer2024', 'ABC', 35, 'TUE 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE250', 1, 'summer2024', 'ABC', 35, 'FRI 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE250', 2, 'summer2024', 'ABC', 30, 'THU 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE250', 3, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE250', 4, 'summer2024', 'ABC', 40, 'SAT 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE250', 5, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE260', 1, 'summer2024', 'ABC', 40, 'SAT 11:00-12:20, THU 11:00-12:20', NULL),
       ('CSE260', 2, 'summer2024', 'ABC', 40, 'WED 11:00-12:20, SAT 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE260', 3, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, SUN 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE260', 4, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE260', 5, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE320', 1, 'summer2024', 'ABC', 35, 'SAT 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE320', 2, 'summer2024', 'ABC', 30, 'THU 11:00-12:20, WED 11:00-12:20', NULL),
       ('CSE320', 3, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, SAT 11:00-12:20', NULL),
       ('CSE320', 4, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, FRI 11:00-12:20', NULL),
       ('CSE320', 5, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, WED 11:00-12:20', NULL),
       ('CSE321', 1, 'summer2024', 'ABC', 40, 'MON 11:00-12:20, SAT 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE321', 2, 'summer2024', 'ABC', 40, 'MON 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE321', 3, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE321', 4, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE321', 5, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, WED 11:00-12:20', NULL),
       ('CSE330', 1, 'summer2024', 'ABC', 40, 'FRI 11:00-12:20, THU 11:00-12:20', NULL),
       ('CSE330', 2, 'summer2024', 'ABC', 40, 'WED 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE330', 3, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE330', 4, 'summer2024', 'ABC', 30, 'THU 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE330', 5, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, FRI 11:00-12:20', NULL),
       ('CSE331', 1, 'summer2024', 'ABC', 30, 'SUN 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE331', 2, 'summer2024', 'ABC', 35, 'TUE 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE331', 3, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE331', 4, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE331', 5, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, THU 11:00-12:20', NULL),
       ('CSE340', 1, 'summer2024', 'ABC', 30, 'THU 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE340', 2, 'summer2024', 'ABC', 30, 'SUN 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE340', 3, 'summer2024', 'ABC', 30, 'THU 11:00-12:20, WED 11:00-12:20', NULL),
       ('CSE340', 4, 'summer2024', 'ABC', 35, 'SUN 11:00-12:20, SAT 11:00-12:20', NULL),
       ('CSE340', 5, 'summer2024', 'ABC', 40, 'THU 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE350', 1, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE350', 2, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE350', 3, 'summer2024', 'ABC', 30, 'WED 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE350', 4, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE350', 5, 'summer2024', 'ABC', 40, 'WED 11:00-12:20, FRI 11:00-12:20', NULL),
       ('CSE360', 1, 'summer2024', 'ABC', 40, 'THU 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE360', 2, 'summer2024', 'ABC', 35, 'SUN 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE360', 3, 'summer2024', 'ABC', 40, 'SUN 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE360', 4, 'summer2024', 'ABC', 35, 'SAT 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE360', 5, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE370', 1, 'summer2024', 'ABC', 35, 'MON 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE370', 2, 'summer2024', 'ABC', 30, 'THU 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE370', 3, 'summer2024', 'ABC', 30, 'SUN 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE370', 4, 'summer2024', 'ABC', 40, 'MON 11:00-12:20, SAT 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE370', 5, 'summer2024', 'ABC', 30, 'THU 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE420', 1, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE420', 2, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE420', 3, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE420', 4, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, SUN 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE420', 5, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE421', 1, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, SUN 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE421', 2, 'summer2024', 'ABC', 40, 'SAT 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE421', 3, 'summer2024', 'ABC', 30, 'WED 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE421', 4, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, FRI 11:00-12:20', NULL),
       ('CSE421', 5, 'summer2024', 'ABC', 40, 'SAT 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE422', 1, 'summer2024', 'ABC', 35, 'TUE 11:00-12:20, SAT 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE422', 2, 'summer2024', 'ABC', 35, 'SUN 11:00-12:20, SAT 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE422', 3, 'summer2024', 'ABC', 30, 'TUE 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE422', 4, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE422', 5, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE423', 1, 'summer2024', 'ABC', 40, 'FRI 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE423', 2, 'summer2024', 'ABC', 30, 'SUN 11:00-12:20, MON 11:00-12:20', NULL),
       ('CSE423', 3, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE423', 4, 'summer2024', 'ABC', 30, 'WED 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE423', 5, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE460', 1, 'summer2024', 'ABC', 35, 'SUN 11:00-12:20, WED 11:00-12:20', NULL),
       ('CSE460', 2, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, THU 11:00-12:20', NULL),
       ('CSE460', 3, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, FRI 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE460', 4, 'summer2024', 'ABC', 35, 'WED 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE460', 5, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, SUN 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE461', 1, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE461', 2, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE461', 3, 'summer2024', 'ABC', 40, 'WED 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE461', 4, 'summer2024', 'ABC', 30, 'WED 11:00-12:20, THU 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE461', 5, 'summer2024', 'ABC', 35, 'FRI 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE470', 1, 'summer2024', 'ABC', 30, 'SAT 11:00-12:20, TUE 11:00-12:20', NULL),
       ('CSE470', 2, 'summer2024', 'ABC', 35, 'THU 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE470', 3, 'summer2024', 'ABC', 35, 'SAT 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE470', 4, 'summer2024', 'ABC', 35, 'THU 11:00-12:20, SAT 11:00-12:20', NULL),
       ('CSE470', 5, 'summer2024', 'ABC', 35, 'SUN 11:00-12:20, FRI 11:00-12:20', NULL),
       ('CSE471', 1, 'summer2024', 'ABC', 35, 'SUN 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE471', 2, 'summer2024', 'ABC', 35, 'FRI 11:00-12:20, SUN 11:00-12:20', NULL),
       ('CSE471', 3, 'summer2024', 'ABC', 35, 'FRI 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE471', 4, 'summer2024', 'ABC', 40, 'FRI 11:00-12:20, SUN 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('CSE471', 5, 'summer2024', 'ABC', 30, 'SUN 11:00-12:20, THU 11:00-12:20', NULL),
       ('MAT120', 1, 'summer2024', 'ABC', 40, 'FRI 11:00-12:20, SUN 11:00-12:20', NULL),
       ('MAT120', 2, 'summer2024', 'ABC', 30, 'FRI 11:00-12:20, SAT 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('MAT120', 3, 'summer2024', 'ABC', 35, 'MON 11:00-12:20, FRI 11:00-12:20', NULL),
       ('MAT120', 4, 'summer2024', 'ABC', 35, 'SAT 11:00-12:20, MON 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('MAT120', 5, 'summer2024', 'ABC', 30, 'FRI 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('MAT215', 1, 'summer2024', 'ABC', 30, 'WED 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('MAT215', 2, 'summer2024', 'ABC', 35, 'MON 11:00-12:20, WED 11:00-12:20', NULL),
       ('MAT215', 3, 'summer2024', 'ABC', 40, 'FRI 11:00-12:20, SUN 11:00-12:20', NULL),
       ('MAT215', 4, 'summer2024', 'ABC', 35, 'TUE 11:00-12:20, MON 11:00-12:20', NULL),
       ('MAT215', 5, 'summer2024', 'ABC', 30, 'SUN 11:00-12:20, WED 11:00-12:20', NULL),
       ('MAT216', 1, 'summer2024', 'ABC', 30, 'SUN 11:00-12:20, THU 11:00-12:20', NULL),
       ('MAT216', 2, 'summer2024', 'ABC', 35, 'FRI 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('MAT216', 3, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, SUN 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('MAT216', 4, 'summer2024', 'ABC', 35, 'FRI 11:00-12:20, TUE 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50"),
       ('MAT216', 5, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, MON 11:00-12:20', NULL),
       ('PHY112', 1, 'summer2024', 'ABC', 40, 'TUE 11:00-12:20, MON 11:00-12:20', NULL),
       ('PHY112', 2, 'summer2024', 'ABC', 40, 'SAT 11:00-12:20, THU 11:00-12:20', NULL),
       ('PHY112', 3, 'summer2024', 'ABC', 30, 'MON 11:00-12:20, SAT 11:00-12:20', NULL),
       ('PHY112', 4, 'summer2024', 'ABC', 35, 'MON 11:00-12:20, TUE 11:00-12:20', NULL),
       ('PHY112', 5, 'summer2024', 'ABC', 40, 'MON 11:00-12:20, WED 11:00-12:20', "SAT 8:00-9:20, SAT 9:30-10:50");

INSERT INTO Enrolls (student_id, course_code, section_no, semester, status, grade)
VALUES
    ('21102420', 'CSE110', 1, 'summer2024', 'ongoing', null),
    ('21102420', 'CSE111', 1, 'summer2024', 'ongoing', null),
    ('21102420', 'MAT120', 1, 'summer2024', 'ongoing', null),

    ('20101768', 'CSE110', 1, 'summer2024', 'ongoing', null),
    ('20101768', 'CSE111', 1, 'summer2024', 'ongoing', null),
    ('20101768', 'MAT120', 1, 'summer2024', 'ongoing', null),
    
    ('23101768', 'CSE110', 1, 'summer2024', 'ongoing', null),
    ('23101768', 'CSE111', 1, 'summer2024', 'ongoing', null),
    ('23101768', 'MAT120', 1, 'summer2024', 'ongoing', null);