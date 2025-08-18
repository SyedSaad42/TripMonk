import React, { useEffect, useState, useContext, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SearchContext } from '../../context/SearchContext'; 
import { HotelContext } from '../../context/HotelsContext';
import { useNavigate } from 'react-router-dom';
import { Divider, LinearProgress, Chip } from '@mui/material';
import { motion } from "framer-motion";
import { TripCartContext } from '../../context/TripCartContext';

const MidSectionHotel = ({ moveToNextTab }) => {
  const navigate = useNavigate();

  const { departure, arrival, departure_date, return_date } = useContext(SearchContext);
  const { 
    name, setName, 
    description, setDescription,
    link, setLink,
    propertyToken, setPropertyToken,
    ratePerNight, setRatePerNight,
    hotelClass, setHotelClass,
    overallRating, setOverallRating,
    reviews, setReviews,
    amenities, setAmenities, selectedHotel,setSelectedHotel
  } = useContext(HotelContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [hotels, setHotels] = useState([]);

  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => {});



  const { addToTripCart } = useContext(TripCartContext);

  const dummyHotels = [
  {
    name: "Hotel du Jardin Secret",
    description: "Elegant hotel with chic decor and a tranquil garden courtyard, featuring a rooftop café and free Wi-Fi.",
    link: "https://www.hoteldujardinsecret.com/",
    property_token: "ChgIabcd1234efghARoLL2cvMXZ5c2VjcmV0aGQAQ",
    rate_per_night: {
      lowest: "$120",
      extracted_lowest: 120,
      before_taxes_fees: "$100",
      extracted_before_taxes_fees: 100
    },
    hotel_class: "4-star boutique hotel",
    overall_rating: 4.4,
    reviews: 589,
    amenities: [
      "Free Wi-Fi",
      "Breakfast included",
      "Rooftop café",
      "Garden",
      "Air conditioning",
      "Bicycle rental",
      "Non-smoking rooms"
    ]
  },
  {
    name: "The Urban Nest Inn",
    description: "Modern, minimalistic hotel with city views and coworking space; perfect for digital nomads.",
    link: "https://www.urbannestinn.com/",
    property_token: "ChgIjklm5678nopqARoLL2cvMXZ1cmJhbm5lc3QAQ",
    rate_per_night: {
      lowest: "$78",
      extracted_lowest: 78,
      before_taxes_fees: "$65",
      extracted_before_taxes_fees: 65
    },
    hotel_class: "3-star urban hotel",
    overall_rating: 4.1,
    reviews: 342,
    amenities: [
      "High-speed Wi-Fi",
      "Coworking lounge",
      "Airport pickup",
      "Self check-in",
      "Coffee bar",
      "Fitness corner",
      "Eco-friendly practices"
    ]
  },
  {
    name: "Château Belle Rive",
    description: "Lavish rooms in a restored riverside château offering gourmet dining and scenic boat tours.",
    link: "https://www.chateaubellerive.com/",
    property_token: "ChgIqwer7890stuvARoLL2cvMXpjaGF0ZWF1aQAQ",
    rate_per_night: {
      lowest: "$210",
      extracted_lowest: 210,
      before_taxes_fees: "$180",
      extracted_before_taxes_fees: 180
    },
    hotel_class: "5-star luxury hotel",
    overall_rating: 4.8,
    reviews: 978,
    amenities: [
      "Gourmet restaurant",
      "River view rooms",
      "Spa & sauna",
      "Concierge service",
      "Boat tours",
      "In-room massage",
      "Helipad access"
    ]
  }
];

  // Simulate fetching data
  useEffect(() => {
    if (departure && arrival && (departure_date || return_date)) {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        setHotels(dummyHotels);
        setLoading(false);
      }, 10);
    }
  }, [departure, arrival, departure_date, return_date]);

  // Progress animation logic
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

  const handleSubmit = (hotel) => {
    setName(hotel.name);
    setDescription(hotel.description);
    setLink(hotel.link);
    setPropertyToken(hotel.property_token);
    setRatePerNight(hotel.rate_per_night);
    setHotelClass(hotel.hotel_class);
    setOverallRating(hotel.overall_rating);
    setReviews(hotel.reviews);
    setAmenities(hotel.amenities);
    setSelectedHotel(hotel);
 addToTripCart("hotel", hotel);

    if (moveToNextTab) {
      moveToNextTab();
    } else {
      navigate("/tripcart");
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} style={{ color: '#ffd700', fontSize: '16px' }} />);
    }

    if (hasHalfStar) {
      stars.push(<StarIcon key="half" style={{ color: '#ffd700', fontSize: '16px', opacity: 0.5 }} />);
    }

    return stars;
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
        <label style={{ color: showCards ? "black" : "white", fontSize: "23px", fontFamily: "Inter" }}>
          Trip mOnk recommended {hotels.length} hotels
        </label>
        <br />
        <label style={{ color: showCards ? "grey" : "white", fontFamily: "parkinsans", marginLeft: "10px", fontSize: "16px" }}>
          {`found the best hotels in ${Math.random().toFixed(2)}s`}
        </label>
      </div>

      <div style={{ marginTop: "13px" }}>
        {!showCards && (
          <div style={{ width: "600px", margin: "0 auto", marginTop: "10px" }}>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          </div>
        )}
        {!showCards && (
          <Typography style={{ fontFamily: "Inter", fontSize: "20px", marginTop: "7px", color: "#130c45" }}>
            Trip Monk is searching best hotels for you, please wait...
          </Typography>
        )}
        {error && <Typography color="error">Error: {error}</Typography>}

        {!loading && !error && showCards && (
          <Card style={{ backgroundColor: "black", borderRadius: "20px", padding: "25px", marginTop: "20px" }}>
            {hotels.length === 0 ? (
              <Typography style={{ color: "white", fontSize: "20px" }}>No hotels found...</Typography>
            ) : (
              <motion.div variants={containerVariants} initial="initial" animate="animate">
                {hotels.map((hotel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <Card
                      style={{
                        width: "130vh",
                        minHeight: "20vh",
                        marginBottom: "10px",
                        borderRadius: "20px",
                        border: "0px solid black",
                      }}
                    >
                      <CardContent>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%" }}>
                          {/* Hotel icon */}
                          <div style={{ display: "flex", flexDirection: "column", marginRight: "15px" }}>
                            <HotelOutlinedIcon style={{ fontSize: "30px", color: "#130c45", marginTop: "4px" }} />
                          </div>

                          {/* Main Hotel Details */}
                          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "Inter", flex: 1 }}>
                              <Typography
                                variant="h6"
                                style={{ fontWeight: "bold", fontSize: "22px", color: "#130c45" }}
                              >
                                {hotel.name}
                              </Typography>
                              
                              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                {renderStars(hotel.overall_rating)}
                                <Typography variant="body2" style={{ color: "grey", fontSize: "14px" }}>
                                  {hotel.overall_rating} ({hotel.reviews} reviews)
                                </Typography>
                              </div>

                              <Typography variant="body2" style={{ color: "grey", fontSize: "16px", marginBottom: "8px" }}>
                                {hotel.hotel_class}
                              </Typography>

                              <Typography variant="body2" style={{ color: "#333", fontSize: "14px", lineHeight: "1.4" }}>
                                {hotel.description}
                              </Typography>

                              <Divider style={{ height: "1px", backgroundColor: "black", margin: "8px 0" }} />

                              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px" }}>
                                {hotel.amenities.slice(0, 4).map((amenity, i) => (
                                  <Chip
                                    key={i}
                                    label={amenity}
                                    size="small"
                                    style={{
                                      backgroundColor: "#f0f0f0",
                                      color: "#666",
                                      fontSize: "11px",
                                      height: "24px"
                                    }}
                                  />
                                ))}
                                {hotel.amenities.length > 4 && (
                                  <Chip
                                    label={`+${hotel.amenities.length - 4} more`}
                                    size="small"
                                    style={{
                                      backgroundColor: "#e0e0e0",
                                      color: "#666",
                                      fontSize: "11px",
                                      height: "24px"
                                    }}
                                  />
                                )}
                              </div>
                            </div>

                            {/* Price section */}
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", minWidth: "150px" }}>
                              <Typography variant="h5" style={{ fontWeight: "bold", color: "#130c45" }}>
                                {hotel.rate_per_night.lowest}
                              </Typography>
                              <Typography style={{ color: "grey", fontSize: "12px", textAlign: "right" }}>
                                per night
                              </Typography>
                              <Typography style={{ color: "grey", fontSize: "11px", textAlign: "right", marginTop: "2px" }}>
                                {hotel.rate_per_night.before_taxes_fees} before taxes
                              </Typography>
                              <Button
                                onClick={() => handleSubmit(hotel)}
                                style={{
                                  color: "white",
                                  backgroundColor: "#130c45",
                                  marginTop: "20px",
                                  borderRadius: "20px",
                                  padding: "8px 20px",
                                  fontSize: "14px",
                                  fontWeight: "bold"
                                }}
                              > Select
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

export default MidSectionHotel;