
import React, { useEffect, useState, useContext, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import { SearchContext } from '../../context/SearchContext'; 
import { FlightContext } from '../../context/FlightContext';
import { useNavigate } from 'react-router-dom';
import { Divider, LinearProgress } from '@mui/material';
import { motion } from "framer-motion";
import { separatorRecipe } from '@chakra-ui/react/theme';
import { TripCartContext } from '../../context/TripCartContext';
const MidSectionReturn = ({ moveToNextTab }) => {
 
  const navigate = useNavigate();

  const { departure, arrival, departure_date, return_date } = useContext(SearchContext);
  const { flights, setFlights,selectedArrivalFlight, setSelectedArrivalFlight} = useContext(FlightContext);
   
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCards, setShowCards] = useState(false);

  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => {});

   const { addToTripCart } = useContext(TripCartContext);

  const dummyFlights = [
     {
       departure_airport: {
         name: "Toronto Pearson International Airport",
         id: "YYZ",
         time: "2025-07-10 07:55",
       },
       arrival_airport: {
         name: "John F. Kennedy International Airport",
         id: "JFK",
         time: "2025-07-10 10:00",
       },
       duration: 125,
       airplane: "Boeing 737MAX 8 Passenger",
       airline: "Flair Airlines",
       airline_logo: "https:www.gstatic.com/flights/airline_logos/70px/F8.png",
       travel_class: "Economy",
       flight_number: "F8 1614",
       legroom: "29 in",
       extensions: [
         "Below average legroom (29 in)",
         "Carbon emissions estimate: 64 kg",
       ],
       price: 320,  
       trip_type: "Oneway",
     },
     {
       departure_airport: {
         name: "Toronto Pearson International Airport",
         id: "YYZ",
         time: "2025-07-10 06:04",
       },
       arrival_airport: {
         name: "John F. Kennedy International Airport",
         id: "JFK",
         time: "2025-07-10 07:59",
       },
       duration: 115,
       airplane: "Canadair RJ 900",
       airline: "Delta",
       airline_logo: "https:www.gstatic.com/flights/airline_logos/70px/DL.png",
       travel_class: "Economy",
       flight_number: "DL 5066",
       legroom: "31 in",
       extensions: [
         "Average legroom (31 in)",
         "Wi-Fi for a fee",
         "Carbon emissions estimate: 104 kg",
       ],
       plane_and_crew_by: "Endeavor Air DBA Delta Connection",
       price: 280,
       trip_type: "RoundTrip",
     },
     {
       departure_airport: {
         name: "Toronto Pearson International Airport",
         id: "YYZ",
         time: "2025-07-10 07:15",
       },
       arrival_airport: {
         name: "John F. Kennedy International Airport",
         id: "JFK",
         time: "2025-07-10 08:59",
       },
       duration: 104,
       airplane: "Embraer 175",
       airline: "American",
       airline_logo: "https:www.gstatic.com/flights/airline_logos/70px/AA.png",
       travel_class: "Economy",
       flight_number: "AA 4559",
       legroom: "30 in",
       extensions: [
         "Average legroom (30 in)",
         "Wi-Fi for a fee",
         "In-seat power & USB outlets",
         "Stream media to your device",
         "Carbon emissions estimate: 103 kg",
       ],
       plane_and_crew_by: "Republic Airways as American Eagle",
       price: 295,
       trip_type: "RoundTrip",
     },
  ];

  // Simulate fetching data
  useEffect(() => {
    if (departure && arrival && (departure_date || return_date)) {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        setFlights(dummyFlights);
        setLoading(false);
      }, 10);
    }
  }, [departure, arrival, departure_date, return_date]);

  //Progress animation logic
  useEffect(() => {
    progressRef.current = () => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 20));
      setBuffer(prev => {
        const newBuffer = prev + 1 + Math.random() * 10;
        return newBuffer > 100 ? 100 : newBuffer;
      });
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);
    return () => clearInterval(timer);
  }, []);

 // Show cards after progress hits 100
  useEffect(() => {
    if (progress >= 100) {
      setShowCards(true);
    }
  }, [progress]);

  const handleSubmit = (flight) => {
    setSelectedArrivalFlight(flight);
   addToTripCart("return",flight );

    if (moveToNextTab) {
      moveToNextTab();
    } else {
      navigate("/tripcart");
    }
  };

  const convertTo12Hour = (time24) => {
    if (typeof time24 !== "string" || !time24.includes(":")) return "TBD";
    const [hourStr, minute] = time24.split(":");
    let hour = parseInt(hourStr);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  const formatDuration = (minutes) => {
    if (!minutes) return "Unknown";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <label style={{  color: showCards ? "black" : "white", fontSize: "23px", fontFamily: "Inter" }}>
          Trip mOnk recommended {flights.length} flights
        </label>
        <br />
        <label  style={{ color: showCards ? "grey" : "white", fontFamily: "parkinsans", marginLeft: "10px", fontSize: "16px" }}>
          {`found the cheapest flight in ${Math.random().toFixed(2)}s`}
        </label>
      </div>

      <div style={{ marginTop: "13px" }}>
         { !showCards && (
  <div style={{ width: "600px", margin: "0 auto", marginTop: "10px" }}>
    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
  </div>)}
          { !showCards &&<Typography style={{fontFamily:"Inter", fontSize:"20px", marginTop:"7px", color:"#130c45"}}>Trip Monk is searching best flights for you, please wait...</Typography>}
        {error && <Typography color="error">Error: {error}</Typography>}

        {!loading && !error && showCards && (
          <Card style={{ backgroundColor: "black", borderRadius: "20px", padding: "25px", marginTop:"20px" }}>
            {flights.length === 0 ? (
              <Typography style={{ color: "white", fontSize: "20px" }}>No flights found...</Typography>
            ) : (
              <motion.div variants={containerVariants} initial="initial" animate="animate">
                {flights.map((flight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <Card
                      style={{
                        width: "130vh",
                        height: "16vh",
                        marginBottom: "10px",
                        borderRadius: "20px",
                        border: "0px solid black",
                      }}
                    >
                      <CardContent>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%" }}>
                          {/* Airline logo */}
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="body2">
                              <img
                                src={flight.airline_logo}
                                alt={`${flight.airline} logo`}
                                style={{ height: "22px", width: "auto", marginTop: "4px", marginRight: "10px" }}
                              />
                            </Typography>
                          </div>

                          {/* Main Flight Details */}
                          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontFamily: "Inter" }}>
                              <Typography
                                variant="subtitle1"
                                style={{ fontWeight: "bold", fontSize: "20px", color: "#130c45" }}
                              >
                                {convertTo12Hour(flight.arrival_airport.time.slice(11, 16))}----{" "}
                                <AirplanemodeActiveOutlinedIcon style={{ transform: "rotate(90deg)" }} /> ----{" "}
                                {convertTo12Hour(flight.departure_airport.time.slice(11, 16))}
                              </Typography>
                              <Typography variant="body2" style={{ color: "grey", fontSize: "17px" }}>
                                {flight.arrival_airport.name} - {flight.departure_airport.name}
                              </Typography>
                              <Typography variant="body2" style={{ color: "grey", fontSize: "17px" }}>
                                {flight.airline}
                              </Typography>
                              <Divider style={{ height: "1px", backgroundColor: "black" }} />
                              <Typography variant="body2" style={{ color: "grey", fontSize: "14px" }}>
                                Legroom: {flight.legroom}
                              </Typography>
                              {flight.extensions && (
                                <ul style={{ color: "grey", fontSize: "12px", marginTop: "5px" }}>
                                  {flight.extensions.map((ext, i) => <li key={i}>{ext}</li>)}
                                </ul>
                              )}
                            </div>

                            {/* Duration and price section */}
                            <div style={{ position: "static" }}>
                              <Typography
                                variant="body2"
                                style={{ color: "#130c45", fontSize: "19px", fontWeight: "bold" }}
                              >
                                {formatDuration(flight.duration)}
                              </Typography>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                              <Typography variant="h6" style={{ fontWeight: 600 }}>
                                ${flight.price}
                              </Typography>
                              <Typography style={{ color: "grey", fontSize: "13px" }}>
                                {flight.trip_type} per traveller
                              </Typography>
                              <Button
                                onClick={() => handleSubmit(flight)}
                                style={{
                                  color: "white",
                                  backgroundColor: "#f18a53",
                                  marginTop: "20px",
                                  borderRadius: "20px",
                                }}
                              >
                                Select
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default MidSectionReturn;