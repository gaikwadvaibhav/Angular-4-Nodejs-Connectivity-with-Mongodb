const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Vaibhav your first app is works');
});



module.exports = router;