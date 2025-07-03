import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext'; 
import { FlightContext } from '../../context/FlightContext';
import { useNavigate } from 'react-router-dom';
const MidSection = () => {
 
  const navigate = useNavigate();
    //extarctign values fromt he searchsection // one way
      const { depature, arrival, depature_date, return_date } = useContext(SearchContext);
    //declaring the array that will store the fetch flights
    const {flights, setFlights} = useContext(FlightContext);
 const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const {selectedFlight,setSelectedFlights} = useContext(FlightContext);
    // now search the flight
    useEffect(()=>{
      if(depature && arrival && depature_date && return_date){
        const fetchflight =  async () =>{
      setLoading(true);
      setError(null);
      try {
    //  const response = await fetch(`http://localhost:4000/flight/search?departure=${encodeURIComponent(depature)}&arrival=${encodeURIComponent(arrival)}&flight_date=${depature_date}`)
      const response = await fetch(
  `http://localhost:4000/flight/search?departure=${encodeURIComponent(depature)}&arrival=${encodeURIComponent(arrival)}&flight_date=${depature_date}&return_date=${return_date}`
);

        if(!response.ok) throw new Error("Failed to fetch flights");
      const data = await response.json();
        // store the flight
 const mappedFlights = data.flights.map(f => ({
          departure: {
            airport: f.departure_airport?.name || "Unknown",
            scheduled: f.departure_airport?.time || "TBD"
          },
          arrival: {
            airport: f.arrival_airport?.name || "Unknown",
            scheduled: f.arrival_airport?.time || "TBD"
          },
          airline: {
            name: f.airline || "Airline"
          },
          flight: {
            number: f.flight_number || "N/A"
          },
          price: Math.floor(Math.random() * 300) + 200  // 🧪 dummy price for now
        }));

     
      setFlights(mappedFlights);
           
      } catch (error) {
        setError(error.message);
      }finally{
        setLoading(false);
      }

        };
        fetchflight();
      }

    },[depature,arrival,depature_date,return_date])

const handleSubmit = (flight) =>{
  setSelectedFlights(flight);
  navigate("/tripcart");
}

return (
  <div>
    <div style={{ marginTop: "16px" }}>
      <label
        style={{
          fontFamily: "Parkinsans",
          fontWeight: "bold",
          fontSize: "17px",
        }}
      >
        Recommended departing flights
      </label>
    </div>

    <div style={{ marginTop: "13px" }}>
      {loading && <Typography>Loading flights, please wait...</Typography>}

      {error && <Typography color="error">Error: {error}</Typography>}

      {!loading && !error && flights.length === 0 && (
        <Typography>No flights found.</Typography>
      )}

      {!loading && !error && flights.map((flight, index) => (
        <Card
          key={index}
          style={{ width: "170vh", height: "20vh", marginBottom: "10px" }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              {/* LEFT SECTION */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Typography variant="subtitle1">
                  {flight.departure?.scheduled.slice(11, 16)} -------{" "}
                  <AirplanemodeActiveOutlinedIcon style={{ transform: "rotate(90deg)" }} /> -------{" "}
                  {flight.arrival?.scheduled.slice(11, 16)}
                </Typography>
                <Typography variant="body2">
                  {flight.departure?.airport || "Unknown"} - {flight.arrival?.airport || "Unknown"}
                </Typography>
                <Typography variant="body2">
                  Journey will be operated by {flight.airline?.name || "Airline"}
                </Typography>
              </div>

              {/* RIGHT SECTION */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  ${flight.price || 350}
                </Typography>
                <Button onClick={()=>{handleSubmit(flight)}} style={{ color: "black", backgroundColor: "#f18a53" }}>Book Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);


};

export default MidSection;
