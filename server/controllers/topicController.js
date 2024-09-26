// controller for topics
const TopicServices = require("../services/TopicServices");

exports.getTopics =  async (req, res) => {
  try {
    const topics = await TopicServices.getTopics();
    res.status(200).json({ topics });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
}


exports.getOneTopic = async (req, res) => {
  try {
    const { topicId } = req.params;
    const topic = await TopicServices.getTopic(Number(topicId));
    if (character) {
      res.status(200).json({ message: "success", topic });
      return;
    } else {
      res.status(400).json({ error: "Wrong id of topic" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
}

exports.getOneQuestion = async (req, res) => {
  try {
    const { questionId, topicId } = req.params;
    const question = await TopicServices.getOneQuestion(Number(topicId,questionId));
    if (question) {
      res.status(200).json({ message: "success", question });
      return;
    } else {
      res.status(400).json({ error: "Wrong id of question" });
    }

  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
}     

    