
const { User } = require("../db/models");

class UserServices {
  static getUser = async (email) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        return user;
      }
      return null;
    } catch ({ message }) {
      return { status: "error", message };
    }
  };

  static createUser = async (data) => {
    try {
      const { name, email, password } = data;

      let user = await User.findOne({ where: { email } })

      if (user === null) {
        user = await User.create({ name, email, password });
        console.log(user);

        return user;
      }

      return null;
    } catch ({ message }) {
      return { status: "error", message };
    }
  };
}

module.exports = UserServices;
