const router = require("express").Router();
const TopicController = require('../controllers/topicController')

router
.route('/')
.get(TopicController.getTopics)

router
.route('/:topicId')
.get(TopicController.getOneTopic)


router
.route('/:topicId/questions/:questionId')
.get(TopicController.getOneQuestion)


module.exports = router