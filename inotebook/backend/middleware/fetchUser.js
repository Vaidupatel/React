const jwt = require("jsonwebtoken");
const jWT_SECRET = "OmfoooTuDekhengaMeraToken";

const fetchUser = (req, res, next) => {
  // Get the user from the jwt token and add id to request object
  const token = req.header("auth-token");
  if (!token) {
    res
      .status(401)
      .send({ error: "Please authenticate using the valid token" });
  }
  try {
    const data = jwt.verify(token, jWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "Please authenticate using the valid token" });
  }
};

module.exports = fetchUser;
