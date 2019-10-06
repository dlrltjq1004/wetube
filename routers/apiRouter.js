import express from "express";
import routes from "../routes";
import { postRegisterView } from "../Controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);

export default apiRouter;
