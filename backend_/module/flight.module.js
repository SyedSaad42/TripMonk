import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
    flight_date: { type: String, required: true },
    flight_status: { type: String, default: "unknown" },
    airline: {
        name: { type: String, default: "Unknown Airline" },
        iata: { type: String, default: "N/A" },
        icao: { type: String, default: "N/A" }
    },
    flight: {
        number: { type: String, default: "N/A" }
    },
    departure: {
        airport: { type: String, default: "Unknown Airport" },
        timezone: { type: String, default: "N/A" },
        iata: { type: String, default: "N/A" },
        icao: { type: String, default: "N/A" },
        terminal: { type: String, default: "N/A" },
        gate: { type: String, default: "N/A" },
        scheduled: { type: String, default: "N/A" },
        estimated: { type: String, default: "N/A" },
        actual: { type: String, default: "N/A" }
    },
    arrival: {
        airport: { type: String, default: "Unknown Airport" },
        timezone: { type: String, default: "N/A" },
        iata: { type: String, default: "N/A" },
        icao: { type: String, default: "N/A" },
        terminal: { type: String, default: "N/A" },
        gate: { type: String, default: "N/A" },
        scheduled: { type: String, default: "N/A" },
        estimated: { type: String, default: "N/A" },
        actual: { type: String, default: "N/A" }
    }
});

const Flight = mongoose.model("Flight", flightSchema);
export default Flight;
