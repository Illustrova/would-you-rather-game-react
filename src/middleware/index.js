import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "./logger";

const rootMiddleware = applyMiddleware(thunk, logger);

export default rootMiddleware;
