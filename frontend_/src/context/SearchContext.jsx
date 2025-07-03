import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const today = new Date().toISOString().slice(0, 10);

  const [depature, setDepature] = useState("");
  const [arrival, setArrival] = useState("");
  const [depature_date, setDepature_date] = useState(today);
  const [return_date, setReturn_date] = useState(today);
  const [people, setPeople] = useState(0);

  return (
    <SearchContext.Provider
      value={{
        depature,
        setDepature,
        arrival,
        setArrival,
        depature_date,
        return_date,
        setReturn_date,
        setDepature_date,
        people,
        setPeople,
        today,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
