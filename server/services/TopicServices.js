const { Topic, Question } = require("../db/models");

class TopicServices {
  static getTopics = async () => {
    try {
      const topics = await Topic.findAll();
      if (topics) {
        return topics;
      }
      return null;
    } catch ({ message }) {
      return { status: "error", message };
    }
  };

  static getTopic = async (id) => {
    try {
      const topic = await Topic.findOne({
        where: { id },
        include: [{ model: Question }],
      });
      if (topic) {
        return topic.get();
      }
      return null;
    } catch ({ message }) {
      return { status: "error", message };
    }
  };

  static getOneQuestion = async (topicId, id) => {
    try {
      const question = await Question.findOne({ where: { id, topicId } });
      if (question) {
        return question;
      }
      return null;
    } catch ({ message }) {
      return { status: "error", message };
    }
  };
}

module.exports = TopicServices;
