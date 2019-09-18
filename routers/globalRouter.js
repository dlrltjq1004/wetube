import express from "express";
import routes from "../routes";
import { home, search } from "../Controllers/videoController";
import {
  getJoin,
  login,
  logout,
  postJoin
} from "../Controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.search, search);
globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
