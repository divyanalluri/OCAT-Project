const { Router } = require(`express`);
const { ResponseHandler } = require(`../utils`);
const { UserService } = require(`../microservices`);

const userRouter = Router();

userRouter.post(
  `/login`,
  async (req, res, next) => {
    try {
      const userDetails = await UserService.login(req.body);
      ResponseHandler(
        res,
        `Successfully verified user`,
        { userDetails },
      );
    } catch (err) {
      next(err);
    }
  },
);

module.exports = { userRouter };
