import { useContext, useEffect , createContext, useState } from "react";
import { airports as allAirports } from '@nwpr/airport-codes';
export const AirportContext = createContext();

export const AirportProivder = ({children})=>{

    const [airports, setAirports] = useState([]);
    useEffect(()=>{
       setAirports([
     // India
  { name: 'Indira Gandhi International Airport', city: 'Delhi', id: 'DEL' },

  // Canada
  { name: 'Toronto Pearson International Airport', city: 'Toronto', id: 'YYZ' },

  // UK
  { name: 'London Heathrow Airport', city: 'London', id: 'LHR' },
  { name: 'Gatwick Airport', city: 'London', id: 'LGW' },
  { name: 'Manchester Airport', city: 'Manchester', id: 'MAN' },

  // USA
  { name: 'John F. Kennedy International Airport', city: 'New York', id: 'JFK' },
  { name: 'Los Angeles International Airport', city: 'Los Angeles', id: 'LAX' },
  { name: 'San Francisco International Airport', city: 'San Francisco', id: 'SFO' },
  { name: 'Chicago O\'Hare International Airport', city: 'Chicago', id: 'ORD' },
  { name: 'Miami International Airport', city: 'Miami', id: 'MIA' },

  // Europe
  { name: 'Charles de Gaulle Airport', city: 'Paris', id: 'CDG' },
  { name: 'Frankfurt am Main Airport', city: 'Frankfurt', id: 'FRA' },
  { name: 'Amsterdam Schiphol Airport', city: 'Amsterdam', id: 'AMS' },
  { name: 'Madrid-Barajas Airport', city: 'Madrid', id: 'MAD' },
  { name: 'Rome Fiumicino Airport', city: 'Rome', id: 'FCO' },
  { name: 'Vienna International Airport', city: 'Vienna', id: 'VIE' },
  { name: 'Zurich Airport', city: 'Zurich', id: 'ZRH' },
  { name: 'Brussels Airport', city: 'Brussels', id: 'BRU' },
  { name: 'Copenhagen Airport', city: 'Copenhagen', id: 'CPH' },
  { name: 'Stockholm Arlanda Airport', city: 'Stockholm', id: 'ARN' },

  // Russia
  { name: 'Sheremetyevo International Airport', city: 'Moscow', id: 'SVO' },
  { name: 'Domodedovo International Airport', city: 'Moscow', id: 'DME' },
  { name: 'Vnukovo International Airport', city: 'Moscow', id: 'VKO' },
  { name: 'Pulkovo Airport', city: 'Saint Petersburg', id: 'LED' },

  // Middle East
  { name: 'Dubai International Airport', city: 'Dubai', id: 'DXB' },
  { name: 'Hamad International Airport', city: 'Doha', id: 'DOH' },
  { name: 'King Khalid International Airport', city: 'Riyadh', id: 'RUH' },
  { name: 'Ben Gurion Airport', city: 'Tel Aviv', id: 'TLV' },

  // Asia
  { name: 'Tokyo Haneda Airport', city: 'Tokyo', id: 'HND' },
  { name: 'Tokyo Narita Airport', city: 'Tokyo', id: 'NRT' },
  { name: 'Singapore Changi Airport', city: 'Singapore', id: 'SIN' },
  { name: 'Hong Kong International Airport', city: 'Hong Kong', id: 'HKG' },
  { name: 'Incheon International Airport', city: 'Seoul', id: 'ICN' },
  { name: 'Shanghai Pudong International Airport', city: 'Shanghai', id: 'PVG' },
  { name: 'Beijing Capital International Airport', city: 'Beijing', id: 'PEK' },
  { name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur', id: 'KUL' },

  // Oceania
  { name: 'Sydney Kingsford Smith Airport', city: 'Sydney', id: 'SYD' },
  { name: 'Auckland Airport', city: 'Auckland', id: 'AKL' },

  // South America
  { name: 'São Paulo–Guarulhos International Airport', city: 'São Paulo', id: 'GRU' },
  { name: 'El Dorado International Airport', city: 'Bogotá', id: 'BOG' }
    ]);
    },[])
    return(
    <AirportContext.Provider value={{airports}}>
       {children}
    </AirportContext.Provider>
    )
}