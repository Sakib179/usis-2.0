const express = require('express');
const router = express.Router();
const { controlGetStudentAdvisingInfo, controlGetCourseInfo } = require('../../controllers/private/advisingController')

router.get('/student-advising-info', async (req, res) => {
  await controlGetStudentAdvisingInfo(req, res); // Assuming postLogin returns a promise
})

router.get('/course-info', async (req, res) => {
  await controlGetCourseInfo(req, res); // Assuming postLogin returns a promise
})

// Export the router
module.exports = router;
