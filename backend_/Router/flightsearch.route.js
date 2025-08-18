import express from "express";
import { flightapidata} from "../controller/flightsearch.controller.js";

const route = express.Router();

route.get("/search", flightapidata);



export default route;