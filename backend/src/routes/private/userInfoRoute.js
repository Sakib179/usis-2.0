const express = require('express');
const router = express.Router();
const { controlGetStudenProfileInfo } = require('../../controllers/private/userInfoController')

router.get('/student-profile-info', async (req, res) => {
    await controlGetStudenProfileInfo(req, res); // Assuming postLogin returns a promise
})

// Export the router
module.exports = router;
