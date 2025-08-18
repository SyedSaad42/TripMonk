import React from 'react'
import { createContext, useState} from 'react' ///using createContext coz we are creating the context

const FlightContext = createContext(); // the contianer

const FlightProvider = ({children}) => {  /// input taking children and children is the any future nested component
const [flights, setFlights] = useState([]); // declaring the value
const [selectedFlight,setSelectedFlights] = useState(null);
const [selectedArrivalFlight,setSelectedArrivalFlight] = useState(null);

  return (
    <FlightContext.Provider value={{ flights, setFlights,selectedFlight,
    setSelectedFlights,
    selectedArrivalFlight,setSelectedArrivalFlight
     }}>
      {children}
    </FlightContext.Provider>
  );
}
export { FlightContext };
export default FlightProvider;