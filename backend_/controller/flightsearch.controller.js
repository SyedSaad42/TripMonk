import Flight from "../module/flight.module.js";
import axios from "axios";
export const flightapidata = async (req,res)=>{
    try {
        const response = await axios.get("http://api.aviationstack.com/v1/flights?access_key=e298aaab885093a4670d656524be38ff");
         const flights = response.data.data;

         let savedflights=[];


         for(const flightData of flights){
            const existingFlight = await Flight.findOne({
                flight_date: flightData.flight_date,
                "flight.number": flightData.flight.number,
            });
         
            if (!existingFlight) {
                const newflight = new Flight({
                    flight_date: flightData.flight_date || "Unknown Date",
                    flight_status: flightData.flight_status || "unknown",
                    airline: {
                        name: flightData.airline?.name || "Unknown Airline",
                        iata: flightData.airline?.iata || "N/A",
                        icao: flightData.airline?.icao || "N/A",
                    },
                    flight: {
                        number: flightData.flight?.number || "N/A",
                    },
                    departure: {
                        airport: flightData.departure?.airport || "Unknown Airport",
                        timezone: flightData.departure?.timezone || "N/A",
                        iata: flightData.departure?.iata || "N/A",
                        icao: flightData.departure?.icao || "N/A",
                        terminal: flightData.departure?.terminal || "N/A",
                        gate: flightData.departure?.gate || "N/A",
                        scheduled: flightData.departure?.scheduled || "N/A",
                        estimated: flightData.departure?.estimated || "N/A",
                        actual: flightData.departure?.actual || "N/A",
                    },
                    arrival: {
                        airport: flightData.arrival?.airport || "Unknown Airport",
                        timezone: flightData.arrival?.timezone || "N/A",
                        iata: flightData.arrival?.iata || "N/A",
                        icao: flightData.arrival?.icao || "N/A",
                        terminal: flightData.arrival?.terminal || "N/A",
                        gate: flightData.arrival?.gate || "N/A",
                        scheduled: flightData.arrival?.scheduled || "N/A",
                        estimated: flightData.arrival?.estimated || "N/A",
                        actual: flightData.arrival?.actual || "N/A",
                    },
                });

                await newflight.save();
                savedflights.push(newflight);
        }
         }
                //   res.status(200).json({
                //     message: `Saved ${savedflights.length} new flights`,
                //     savedflights,
                //   });

      
    } catch (error) {
        
        res.status(500).json({ error: error.message });

    }
}

export const flightsearch = async (req,res) =>{
    try {
        await flightapidata();
            // store the info from the client req
            const {departure,arrival,flight_date} = req.query;
            
        
    
         const query={} // insitalizing the query
        if(departure && arrival && flight_date) // chekcing if the departure exist
        {
          query["departure.airport"]={ $regex : new RegExp(departure,"i")},
          query["arrival.airport"]={$regex: new RegExp(arrival, "i")},
          query["flight_date"] ={ $regex: new RegExp(flight_date, "i")}
        }else {
            res.status(401).json({message: "Please Provide All Details"})
        }
          //comapring the query depture.airport (like  its in db) witht eh regex operature 
        
        // now that we are sure that we have the departure in out db so letes start searching for it
        const result = await Flight.find(query).limit(10).select("flight_date departure.airport arrival.airport");
        if(!result){
          res.status(401).json({message: "No Flights Available"})
        }else{
         res.status(200).json({results: result.length,flights: result})
        }
        
        } catch (error) {
            res.status(500).json({message: "server error", error:error.message})
        }
        
    
}