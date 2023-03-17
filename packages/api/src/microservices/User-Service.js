const bcrypt = require(`bcrypt`);
const { User } = require(`../database/models`);

exports.login = async (user) => {
  // eslint-disable-next-line no-console
  console.log(`user data`, user.username);
  const userData = await User.findOne({ where: { username: user.username } });
  // eslint-disable-next-line no-console
  console.log(`userData`, userData);
  if (userData) {
    return bcrypt.compare(user.password, userData.dataValues.password).then((result) => {
      if (result) {
        return {
          message: `Successfully logged In`,
          userData,
        };
      }
      return {
        message: `Please check the Password you have entered`,
      };
    });
  } return {
    message: `Please check your Username you have entered`,
  };
};
