import axios from "axios";
const hotelSearch = async (req, res) => {

    //   console.log("Received query:", req.query);
  try {
      const { destination, checkin_date, checkout_date, adults } = req.query;

  if (!destination || !checkin_date || !checkout_date || !adults) {
    return res.status(400).json({ message: "Please provide all inputs" });
  }
    try {
      const response = await axios.get("https://serpapi.com/search", {
        params: {
          engine: "google_hotels",
          q: destination, // dynamic search term
          check_in_date: checkin_date,
          check_out_date: checkout_date,
          adults: adults,
          currency: "USD",
          gl: "us",
          hl: "en",
          api_key: "1089d607e4fa3a1a086211459c46a876874d95ae4a6db06d6b77def5e3b144e8"
        }
      });

      const data = response.data.properties; // Correct access here

      if (!data || data.length === 0) {
        return res.status(404).json({ message: "No results found." });
      }

      const hotels = data.map(item => ({
  name: item.name,
  description: item.description,
  link: item.link,
  property_token: item.property_token,
  rate_per_night: item.rate_per_night,
  hotel_class: item.hotel_class,
  overall_rating: item.overall_rating,
  reviews: item.reviews,
  amenities: item.amenities,
}));

// Then send this filteredData as response
res.status(200).json(hotels);
console.log("the result lenght: ", hotels.length);
   

    } catch (apiError) {
      res.status(500).json({ message: "Error fetching hotel data", error: apiError.message });
    }

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default hotelSearch;