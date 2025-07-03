import { useContext, useEffect , createContext, useState } from "react";
import { airports as allAirports } from '@nwpr/airport-codes';
export const AirportContext = createContext();

export const AirportProivder = ({children})=>{

    const [airports, setAirports] = useState([]);
    useEffect(()=>{
       setAirports([
      { name: 'Indira Gandhi International Airport', city: 'Delhi', iata: 'DEL' },
      { name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai', iata: 'BOM' },
      { name: 'Kempegowda International Airport', city: 'Bangalore', iata: 'BLR' },
      { name: 'Rajiv Gandhi International Airport', city: 'Hyderabad', iata: 'HYD' },
      { name: 'Chennai International Airport', city: 'Chennai', iata: 'MAA' },
      { name: 'Toronto Pearson International Airport', city: 'Toronto', iata: 'YYZ' },
      { name: 'London Heathrow Airport', city: 'London', iata: 'LHR' },
      { name: 'John F. Kennedy International Airport', city: 'New York', iata: 'JFK' },
      { name: 'Dubai International Airport', city: 'Dubai', iata: 'DXB' },
    ]);
    },[])
    return(
    <AirportContext.Provider value={{airports}}>
       {children}
    </AirportContext.Provider>
    )
}