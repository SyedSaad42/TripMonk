import express from "express";
import { flightapidata, flightsearch } from "../controller/flightsearch.controller.js";

const route = express.Router();

route.get("/search", flightsearch);

export default route;