//Create aand Send Token and save in the Cookie
const sendToken = (user, statusCode, res) => {
  //Create JWT_TOKEN
  const token = user.getJwtToken();

  //Options for cookie

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token, user });
};
module.exports = sendToken;
