import  express  from "express";
import hotelSearch from "../controller/hotelsearch.controller.js";
// hotelSearch Controller

const route = express.Router();

route.get("/search",hotelSearch);

export default route;