const { modelStudentProfileInfo } = require("../../models/usersModel");

const controlGetStudenProfileInfo = async (req, res) => {
  const { user_email } = req.user;

  try {
    const data = await modelStudentProfileInfo(user_email);

    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error looking for information");
  }
};

module.exports = { controlGetStudenProfileInfo };
