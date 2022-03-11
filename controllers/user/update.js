const hash = require('../../routes/hush');
const User = require('../../models/User.js');
const updater = async (req, res) => {
  const data = {};
  if (req.body.password) {
    const { passwordHash, salt } = await hash(req.body.password);
    data.password = passwordHash;
    data.salt = salt;
  }
  data.firstname = req.body.firstname;
  data.lastname = req.body.lastname;
  data.username = req.body.username;
  const updatedUserUsername = req.updatedUserUsername;
  const user = await User.findOneAndUpdate(
    { username: updatedUserUsername },
    data
  );
  return res.status(200).send({ user });
};
module.exports = updater;
