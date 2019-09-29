import express from "express";
import routes from "../routes";
import { home, search } from "../Controllers/videoController";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin
} from "../Controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.search, search);
globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPublic, logout);

export default globalRouter;
