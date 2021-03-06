const router = require('express').router()
const thoughtRoutes = require('./thought-routes')
const userRoutes = require('./user-routes')

router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes)

module.exports = router;