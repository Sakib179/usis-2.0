INSERT INTO Users (
    user_name, user_email, gsuite_email, password, full_name, date_of_birth, gender, religion, blood_group, street, city, state_division, country
) VALUES
    ('johndoe', 'john.doe@example.com', 'john.doe@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'John Doe', '1990-01-01', 'male', 'Christianity', 'O+', '123 Baker Street', 'Dhaka', 'Dhaka Division', 'Bangladesh'),
    ('alexsmith', 'alex.smith@example.com', 'alex.smith@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Alex Smith', '1994-03-03', 'other', 'Buddhism', 'B+', '789 Pine Street', 'Khulna', 'Khulna Division', 'Bangladesh'),
    ('sarahconnor', 'sarah.connor@example.com', 'sarah.connor@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Sarah Connor', '1985-05-12', 'female', 'None', 'AB-', '321 Cyberdyne Way', 'Los Angeles', 'California', 'USA'),
    ('kyle_reese', 'kyle.reese@example.com', 'kyle.reese@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Kyle Reese', '1984-10-26', 'male', 'None', 'O+', '123 Resistance Base', 'Los Angeles', 'California', 'USA'),
    ('milesdyson', 'miles.dyson@example.com', 'miles.dyson@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Miles Dyson', '1970-04-15', 'male', 'Christianity', 'A+', '456 Inventors Lane', 'Los Angeles', 'California', 'USA'),
    ('johnconnor', 'john.connor@example.com', 'john.connor@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'John Connor', '2002-02-28', 'male', 'None', 'B+', '789 Future St', 'Los Angeles', 'California', 'USA'),
    ('t800', 't800@example.com', 't800@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'T-800', '2029-08-29', 'other', 'None', 'O-', '101 Skynet HQ', 'Los Angeles', 'California', 'USA'),
    ('t1000', 't1000@example.com', 't1000@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'T-1000', '2029-08-29', 'other', 'None', 'AB+', '102 Skynet HQ', 'Los Angeles', 'California', 'USA'),
    ('janedoe', 'jane.doe@example.com', 'jane.doe@gsuite.example.com', '$2b$10$olRKtEadiCmf8lLJ678nJualFYtrFnBom7N1qflIQ3XdWg1XLWmqy', 'Jane Doe', '1992-07-15', 'female', 'Hinduism', 'A-', '456 Maple Street', 'Chittagong', 'Chittagong Division', 'Bangladesh');

INSERT INTO Education (user_name, degree, year_of_completion, grade, institution) VALUES
    ('johndoe', 'BSc', 2012, 'A', 'University A'),
    ('janedoe', 'MSc', 2015, 'A-', 'University B'),
    ('alexsmith', 'PhD', 2020, 'B+', 'University C');

INSERT INTO phone_numbers (user_name, phone_num) VALUES
    ('johndoe', '+880123456789'),
    ('janedoe', '+880987654321'),
    ('alexsmith', '+8801122334455'),
    ('johndoe', '+88012456789'),
    ('janedoe', '+88097654321'),
    ('alexsmith', '+880122334455');

INSERT INTO guardian (user_name, full_name, relation, phone_no) VALUES
    ('johndoe', 'John Doe Sr.', 'Father', '+8801234567890'),
    ('janedoe', 'Jane Doe Sr.', 'Mother', '+8801234567891'),
    ('alexsmith', 'Alex Smith Sr.', 'Father', '+8801234567892');

INSERT INTO Departments (dept_id, dept_name, since_date, dept_type) VALUES
    (1, 'Computer Science', '2000-01-01', 'academic'),
    (2, 'Business Administration', '2001-02-02', 'academic'),
    (3, 'Human Resources', '2002-03-03', 'management');

INSERT INTO Faculty (initial, user_name, works_dept_id, fac_room_no, designation) VALUES
    ('JD', 'johndoe', 1, '101', 'professor'),
    ('JE', 'janedoe', 2, '102', 'assistant professor'),
    ('AS', 'alexsmith', 3, '103', 'senior lecturer');

INSERT INTO NonFaculty (employee_id, user_name, role) VALUES
    (1, 'sarahconnor', 'Accountant'),
    (2, 'milesdyson', 'Librarian'),
    (3, 'kyle_reese', 'Administrator');

INSERT INTO Student (student_id, user_name, course_limit) VALUES
    (1, 't800', 5),
    (2, 't1000', 4),
    (3, 'johnconnor', 6);

INSERT INTO Courses (course_code, dept_id) VALUES
    ('CS101', 1),
    ('BA101', 2),
    ('HR101', 3);

INSERT INTO Course_info (course_code, course_title, credit) VALUES
    ('CS101', 'Introduction to Computing', 3.0),
    ('BA101', 'Principles of Management', 3.0),
    ('HR101', 'Human Resources Basics', 3.0);

INSERT INTO Sections (course_code, section_no, semester) VALUES
    ('CS101', 1, 'Spring 2024'),
    ('BA101', 1, 'Fall 2023'),
    ('HR101', 1, 'Summer 2024');

INSERT INTO Section_Seat (course_code, section_no, max_seats) VALUES
    ('CS101', 1, 30),
    ('BA101', 1, 25),
    ('HR101', 1, 20);

INSERT INTO Rooms (room_no, room_type) VALUES
    ('R101', 'Lecture'),
    ('R102', 'Lab'),
    ('R103', 'Theatre');

INSERT INTO Time_Slot (days, time_range, course_code, semester, section_no, room_no) VALUES
    ('Monday', '09:30-10:50', 'CS101', 'Spring 2024', 1, 'R101'),
    ('Tuesday', '11:00-12:50', 'BA101', 'Fall 2023', 1, 'R102'),
    ('Wednesday', '11:00-12:50', 'HR101', 'Summer 2024', 1, 'R103');

INSERT INTO Degrees (degree_name) VALUES
    ('Bachelor of Science'),
    ('Master of Science'),
    ('PhD');

INSERT INTO NonFacultyWorksIn (employee_id, dept_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);

INSERT INTO Student_Titles (student_id, title) VALUES
    (1, 'Regular'),
    (2, 'ST'),
    (3, 'Regular');

INSERT INTO AcademicDeptOffers (dept_id, degree_name) VALUES
    (1, 'Bachelor of Science'),
    (2, 'Master of Science'),
    (3, 'PhD');

INSERT INTO FacultyInstructs (section_no, semester, faculty_initial, course_code, type) VALUES
    (1, 'Spring 2024', 'JD', 'CS101', 'Lecture'),
    (1, 'Fall 2023', 'JE', 'BA101', 'Lecture'),
    (1, 'Summer 2024', 'AS', 'HR101', 'Lecture');

INSERT INTO Enrolls (student_id, course_code, section_no, semester, status, grade) VALUES
    (1, 'CS101', 1, 'Spring 2024', 'Enrolled', 3.0),
    (2, 'BA101', 1, 'Fall 2023', 'Enrolled', 3.3),
    (3, 'HR101', 1, 'Summer 2024', 'Enrolled', NULL);
