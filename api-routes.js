const router = require('express').Router();

router.get('/', (req, res)=>{
  res.json({
    status: 'API is UP!!',
    message: 'welcome'
  })
})

var accountController = require('./accountController');

router.route('/test-scenario')
    .get(accountController.index)
    .post(accountController.new)

module.exports = router;