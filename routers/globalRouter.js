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

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.search, search);
globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);

export default globalRouter;
