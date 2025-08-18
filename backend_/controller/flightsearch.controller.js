
import axios from "axios";

export const flightapidata = async (req, res) => {
  try {
    const { departure, arrival, flight_date, return_date,HeadCount} = req.query;

    if (!departure || !arrival || !flight_date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await axios.get("https://serpapi.com/search", {
      params: {
        engine: "google_flights",
        departure_id: departure,
        arrival_id: arrival,
        outbound_date: flight_date,
        return_date: return_date || undefined,
        adults: HeadCount,
        currency: "USD",
        hl: "en",
        api_key: "1089d607e4fa3a1a086211459c46a876874d95ae4a6db06d6b77def5e3b144e8",
      }
    });

    const bestFlights = response.data.best_flights;

    if (!bestFlights || bestFlights.length === 0) {
      return res.status(404).json({ message: "No flights found" });
    }

    // Flatten all flights inside best_flights
    const allFlights = bestFlights.flatMap(flightSet => flightSet.flights);

    res.status(200).json({ results: allFlights.length, flights: allFlights });

  } catch (error) {
    console.error("Flight API error:", error.response?.data || error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

