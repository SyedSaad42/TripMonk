import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
 const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);

  const getReturnDate = () => {
    const returnDate = new Date(today);
    returnDate.setDate(returnDate.getDate() + 8);
    return returnDate.toISOString().slice(0, 10);
  };

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure_date, setDeparture_date] = useState(today);
  const [return_date, setReturn_date] = useState(getReturnDate);
  const [people, setPeople] = useState(0);
 const [tripType, setTripType] = useState(2);
 const [headCount,setHeadCount] = useState(0);
 const [departureDisplay,setDepartureDisplay] = useState("");
 const [arrivalDisplay,setArrivalDisplay] = useState("");
 const [airlineLogo, setairlineLogo] = useState("");
  return (
    <SearchContext.Provider
      value={{
        departure,
        setDeparture,
        arrival,
        setArrival,
        departure_date,
        return_date,
        setReturn_date,
        setDeparture_date,
        today,
        tripType,
        setTripType,
        headCount,
        setHeadCount,
        departureDisplay,
        setDepartureDisplay,
        arrivalDisplay,
        setArrivalDisplay,
        airlineLogo,
        setairlineLogo
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
