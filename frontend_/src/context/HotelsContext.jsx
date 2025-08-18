import { createContext, useState } from "react";

const HotelContext = createContext();

const HotelProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [propertyToken, setPropertyToken] = useState("");
  const [ratePerNight, setRatePerNight] = useState(null);
  const [hotelClass, setHotelClass] = useState("");
  const [overallRating, setOverallRating] = useState(null);
  const [reviews, setReviews] = useState(0);
  const [amenities, setAmenities] = useState([]);
const [selectedHotel,setSelectedHotel] = useState(null);
  return (
    <HotelContext.Provider
      value={{
        name,
        setName,
        description,
        setDescription,
        link,
        setLink,
        propertyToken,
        setPropertyToken,
        ratePerNight,
        setRatePerNight,
        hotelClass,
        setHotelClass,
        overallRating,
        setOverallRating,
        reviews,
        setReviews,
        amenities,
        setAmenities,
        selectedHotel,setSelectedHotel
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export { HotelContext, HotelProvider };
