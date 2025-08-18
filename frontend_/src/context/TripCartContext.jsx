import React, { createContext, useState } from "react";

export const TripCartContext = createContext();

export const TripCartProvider = ({ children }) => {
  const [tripItems, setTripItems] = useState({
    departure: null,
    return: null,
    hotel: null
  });

  const addToTripCart = (type, data) => {
    setTripItems(prev => ({ ...prev, [type]: data }));
  };

  const clearTripCart = () => {
    setTripItems({ departure: null, return: null, hotel: null });
  };

  return (
    <TripCartContext.Provider value={{ tripItems, addToTripCart, clearTripCart }}>
      {children}
    </TripCartContext.Provider>
  );
};
