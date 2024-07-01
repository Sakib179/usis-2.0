const {
  modelStudentAdvisingInfo,
  modelCourseInfo,
} = require("../../models/advisingModel");

const controlGetStudentAdvisingInfo = async (req, res) => {
  // student_id, fullname, completed_credit, degree_name, required_credit

  const { user_email } = req.user;

  try {
    const data = await modelStudentAdvisingInfo(user_email);

    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error looking for information");
  }
};

const controlGetCourseInfo = async (req, res) => {
  // student_id, fullname, completed_credit, degree_name, required_credit

  const { course_code } = req.body;

  try {
    const data = await modelCourseInfo(course_code);

    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error looking for information");
  }
};

module.exports = { controlGetStudentAdvisingInfo, controlGetCourseInfo };
