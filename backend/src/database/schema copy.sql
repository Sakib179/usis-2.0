CREATE DATABASE usis2db;
USE usis2db;

-- user_table
CREATE TABLE Users (
    user_name INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_email VARCHAR(100) NOT NULL,
    gsuite_email VARCHAR(100),
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    gender ENUM('male', 'female', 'other'),
    religion VARCHAR(50),
    blood_group ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    photo BLOB,
    street VARCHAR(255),
    city VARCHAR(100),
    state_division VARCHAR(100),
    country VARCHAR(100) DEFAULT 'Bangladesh',
    CONSTRAINT email_unique UNIQUE (user_email)
);

-- education
CREATE TABLE Education (
    user_name INT,
    degree VARCHAR(20),
    year_of_completion YEAR,
    grade VARCHAR(10),
    institution VARCHAR(100),
    PRIMARY KEY (user_name, degree, year_of_completion, grade, institution),
    FOREIGN KEY (user_name) REFERENCES Users(user_name)
        ON DELETE CASCADE
);

-- phone_numbers
CREATE TABLE phone_numbers (
    user_name INT,
    phone_num VARCHAR(20),
    PRIMARY KEY (user_name, phone_num),
    FOREIGN KEY (user_name) REFERENCES Users(user_name)
        ON DELETE CASCADE
);

-- guardian
CREATE TABLE guardian (
    user_name INT,
    full_name VARCHAR(100),
    relation VARCHAR(50) DEFAULT 'Father',
    phone_no VARCHAR(15) NOT NULL,
    PRIMARY KEY (user_name, full_name, relation, phone_no),
    FOREIGN KEY (user_name) REFERENCES Users(user_name)
        ON DELETE CASCADE
);

-- department
CREATE TABLE Departments (
    dept_id VARCHAR(10) PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    since_date DATE,
    dept_type ENUM('academic', 'management') NOT NULL,
    UNIQUE (dept_name)
);

-- faculty
CREATE TABLE Faculty (
    initial VARCHAR(4) PRIMARY KEY,
    user_name INT,
    works_dept_id VARCHAR(10),
    fac_room_no VARCHAR(20),
    designation ENUM('contractual lecturer', 'lecturer', 'senior lecturer', 
                     'assistant professor', 'associate professor', 'professor', 
                     'distinguished professor', 'chairperson', 'dean') NOT NULL,
    FOREIGN KEY (user_name) REFERENCES Users(user_name)
        ON DELETE SET NULL,
    FOREIGN KEY (works_dept_id) REFERENCES Departments(dept_id)
        ON DELETE SET NULL
);

-- NonFaculty
CREATE TABLE NonFaculty (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name INT,
    role VARCHAR(100),
    FOREIGN KEY (user_name) REFERENCES Users(user_name)
        ON DELETE CASCADE
);

-- Student
CREATE TABLE Student (
    student_id VARCHAR(10) PRIMARY KEY,
    user_name INT,
    course_limit INT,
    FOREIGN KEY (user_name) REFERENCES Users(user_name)
        ON DELETE CASCADE
);


-- courses
CREATE TABLE Courses (
    course_code VARCHAR(6) PRIMARY KEY,
    dept_id VARCHAR(10),
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
        ON DELETE SET NULL
);

CREATE TABLE Course_info (
    course_code VARCHAR(6),
    course_title VARCHAR(255) NOT NULL,
    credit DECIMAL(3, 1),
    PRIMARY KEY (course_code),
    FOREIGN KEY (course_code) REFERENCES Courses(course_code)
        ON DELETE CASCADE
);

-- section
CREATE TABLE Sections (
    course_code VARCHAR(6),
    section_no INT,
    semester VARCHAR(50),
    PRIMARY KEY (course_code, section_no, semester),
    FOREIGN KEY (course_code) REFERENCES Courses(course_code)
        ON DELETE CASCADE
);


CREATE TABLE Section_Seat (
    course_code VARCHAR(6),
    section_no INT,
    max_seats INT,
    PRIMARY KEY (course_code, section_no),
    FOREIGN KEY (course_code, section_no) REFERENCES Sections(course_code, section_no)
        ON DELETE CASCADE
);

-- rooms
CREATE TABLE Rooms (
    room_no VARCHAR(12) PRIMARY KEY,
    room_type VARCHAR(20)
);

CREATE TABLE Time_Slot (
    days VARCHAR(50),
    time_range VARCHAR(50),
    course_code VARCHAR(6),
    semester VARCHAR(50),
    section_no INT,
    room_no VARCHAR(12),
    PRIMARY KEY (days, time_range, course_code, semester, section_no, room_no),
    FOREIGN KEY (course_code, section_no, semester) REFERENCES Sections(course_code, section_no, semester) 
	ON DELETE CASCADE,
    FOREIGN KEY (room_no) REFERENCES Rooms(room_no)
        ON DELETE CASCADE
);


CREATE TABLE Degrees (
    degree_name VARCHAR(255) PRIMARY KEY
);


CREATE TABLE NonFacultyWorksIn (
    employee_id INT,
    dept_id VARCHAR(10),
    PRIMARY KEY (employee_id, dept_id),
    FOREIGN KEY (employee_id) REFERENCES NonFaculty(employee_id)
        ON DELETE CASCADE,
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
        ON DELETE CASCADE
);

CREATE TABLE Student_Titles (
    student_id VARCHAR(10),
    title VARCHAR(30),
    PRIMARY KEY (student_id, title),
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
        ON DELETE CASCADE
);

CREATE TABLE AcademicDeptOffers (
    dept_id VARCHAR(10),
    degree_name VARCHAR(255),
    PRIMARY KEY (dept_id, degree_name),
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
        ON DELETE CASCADE,
    FOREIGN KEY (degree_name) REFERENCES Degrees(degree_name)
        ON DELETE CASCADE
);

CREATE TABLE DegreeRequireCourse (
    degree_name VARCHAR(255),
    course_code VARCHAR(6),
    stream VARCHAR(100),
    PRIMARY KEY (degree_name, course_code),
    FOREIGN KEY (degree_name) REFERENCES Degrees(degree_name)
        ON DELETE CASCADE,
    FOREIGN KEY (course_code) REFERENCES Courses(course_code)
        ON DELETE CASCADE
);

CREATE TABLE FacultyInstructs (
    section_no INT,
    semester VARCHAR(50),
    faculty_initial VARCHAR(4),
    course_code VARCHAR(6),
    type VARCHAR(20),
    PRIMARY KEY (section_no, semester, faculty_initial, course_code),
    FOREIGN KEY (course_code) REFERENCES Courses(course_code)
        ON DELETE CASCADE,
    FOREIGN KEY (faculty_initial) REFERENCES Faculty(initial)
        ON DELETE CASCADE
);

CREATE TABLE Enrolls (
    student_id VARCHAR(10),
    course_code VARCHAR(6),
    section_no INT,
    semester VARCHAR(50),
    status VARCHAR(50),
    grade DECIMAL(3, 2),
    PRIMARY KEY (student_id, course_code, section_no, semester),
    FOREIGN KEY (student_id) REFERENCES Student(student_id) 
	ON DELETE CASCADE,
    FOREIGN KEY (course_code) REFERENCES Courses(course_code) 
	ON DELETE CASCADE,
    FOREIGN KEY (course_code, section_no, semester) REFERENCES Sections(course_code, section_no, semester) 
	ON DELETE CASCADE
);









