import React, { useContext, useEffect , useState} from 'react';
import { FlightContext } from '../../context/FlightContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ClearIcon from '@mui/icons-material/Clear';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import { useNavigate } from 'react-router-dom';
const LeftSection = () => {
  const { selectedFlight } = useContext(FlightContext);
  const flightPrice = 350;
    const [totalPrice, setTotalPrice] = useState(0);
    const [travelTime, setTravelTime] = useState(0);

    const navigate = useNavigate();
  // Handle loading state
  useEffect (()=>{
    if (selectedFlight?.departure?.scheduled && selectedFlight?.arrival?.scheduled) {
    const departureTime = new Date(selectedFlight.departure.scheduled);
    const arrivalTime = new Date(selectedFlight.arrival.scheduled);

    const durationMs = arrivalTime - departureTime;

    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    setTravelTime(`${hours}h ${minutes}m`);
  }



    const calculateTotal =((Price)=>{
const totalPrice = Price + ((Price*13)/100);
return totalPrice;
})
const result = calculateTotal(flightPrice);
setTotalPrice(result);

    
  },[flightPrice,selectedFlight])


  return (
    <div> 
      {/* trip info */}
      <div style={{fontFamily: "parkinsans", fontSize: "12px", marginLeft: "35px"}}> 
        <p>
          {selectedFlight.airline?.name || "N/A"}.{"  "}
          {selectedFlight.departure?.iata || "N/A"}
          <ArrowForwardIcon  style={{height: "2vh"}}/>
          {selectedFlight.arrival?.iata || "N/A"}
        </p>
      </div>

      <div style={{display:"flex", flexDirection:"row", gap:"20px"}} > 
      <div style={{display:"flex", flexDirection:"column"}}> 
          <div style={{display:"flex", flexDirection:"row", gap:"30px"}}>
              {/* LEFT SECTION */}

        <Card
        
          style={{ width: "135vh", height: "23vh", marginBottom: "10px" , marginLeft: "20px", borderRadius:"20px"}}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Typography variant="body2" style={{fontWeight: "bold", fontSize: "15px", fontFamily: "parkinsans"}}>
                  {selectedFlight.departure?.airport || "Unknown"} {"to"} {selectedFlight.arrival?.airport || "Unknown"}
                </Typography>
                <Typography variant="subtitle1">
                  {selectedFlight.departure?.scheduled.slice(11, 16)} {" - "}
                
                  {selectedFlight.arrival?.scheduled.slice(11, 16)}

                  
                </Typography>
                
                <Typography variant="body2">
                {selectedFlight.airline?.name || "Airline"} . {selectedFlight.departure?.scheduled.slice(0,9)}
                </Typography>

              </div>
               </div>
                 <div style={{display:"flex",flexDirection:"row",justifyContent:"end"}}>
                  <Button onClick={()=>navigate("/search")}>Change Flight</Button>
                </div>
           
          </CardContent>
        </Card>
        </div>
        
              {/* TripDetail */}
      <div>
        <Card style={{borderRadius:"20px",width: "135vh",marginLeft:"20px", backgroundColor: 'rgba(255, 255, 255, 0.9)',  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',backdropFilter: 'blur(2px)'}}>
          <CardContent>
            <div>
              <p style={{fontFamily:"parkinsans"}}>Trip Detail</p>
             <Divider />
             <Card style={{borderRadius:"20px", marginTop:"16px", width:"110vh"}}>
              <CardContent>
                <div style={{fontSize:"12px", fontFamily:"parkinsans", display:"flex", flexDirection:"row"}}>
                <p>{selectedFlight.airline?.name || "N/A"}.{"    "}</p> 
              <p style={{fontSize:"9px", fontFamily:"parkinsans", color:"grey"}}>{selectedFlight.flight?.number ||  "N/A"}</p>
             </div>
             <div>
              {/* //depature section */}
           <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

            <div style={{display:"flex", flexDirection:"column", fontFamily:"parkinsans", fontSize:"11px"}}>
            <p style={{fontSize:"20px", fontWeight:"bold", fontFamily:"parkinsans"}}>{selectedFlight.departure?.airport || "Unknown"} </p>
            <div style={{fontFamily:"parkinsans",fontSize:"12px", color:"grey",marginTop:"-20px"}}>
            <p>Terminal: {selectedFlight.departure?.terminal||"n/a"}{"  "}"{selectedFlight.departure?.iata || "N/A"}"</p>
            <p>Gate Number: {selectedFlight.departure?.gate||"n.a"}</p>
            </div>
            </div>

            <div style={{display:"flex", flexDirection:"column", fontSize:"11px", fontFamily: "sans-serif"}}>
              <p style={{fontSize:"20px", fontWeight:"bold", fontFamily:"parkinsans"}}>{selectedFlight.departure?.scheduled.slice(11, 16)} </p>
                  <div style={{fontFamily:"parkinsans",fontSize:"12px", color:"grey",marginTop:"-20px"}}>
              <p> {selectedFlight.departure?.timezone || "na"}</p>
              <p> {selectedFlight.departure?.scheduled.slice(0, 9)} </p>
              </div>
            </div>
          </div>   
           {/* //travel time */}
         <div style={{fontFamily:"parkinsans",fontSize:"16px", color:"grey"}}>
            <p>Travel Time: {travelTime} </p>
          </div>   
          {/* //arrival */}   
                     <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

            <div style={{display:"flex", flexDirection:"column", fontFamily:"parkinsans", fontSize:"11px"}}>
            <p style={{fontSize:"20px", fontWeight:"bold", fontFamily:"parkinsans"}}>{selectedFlight.arrival?.airport || "Unknown"} </p>
            <div style={{fontFamily:"parkinsans",fontSize:"12px", color:"grey",marginTop:"-20px"}}>
            <p>Terminal: {selectedFlight.arrival?.terminal||"N/A"}{"  "}"{selectedFlight.arrival?.iata || "N/A"}"</p>
            <p>Gate Number: {selectedFlight.arrival?.gate||"N.A"}</p>
            </div>
            </div>

            <div style={{display:"flex", flexDirection:"column", fontSize:"11px", fontFamily: "sans-serif"}}>
              <p style={{fontSize:"20px", fontWeight:"bold", fontFamily:"parkinsans"}}>{selectedFlight.arrival?.scheduled.slice(11, 16)} </p>
                  <div style={{fontFamily:"parkinsans",fontSize:"12px", color:"grey",marginTop:"-20px"}}>
              <p> {selectedFlight.arrival?.timezone || "na"}</p>
              <p> {selectedFlight.arrival?.scheduled.slice(0, 9)} </p>
              </div>
            </div>
          </div>   

          <div>

            </div>   
           </div>
              </CardContent>
             </Card>
            </div>
          <div style={{marginLeft:"20px"}}>
        <p style={{fontFamily:"parkinsans",fontSize:"20px", fontWeight:"bold"}}>Your Fare: Basic</p>
        <div style={{fontFamily:"parkinsans",fontSize:"13px"}}>
        <p><PaidSharpIcon style={{height:"3vh"}}/>seat choise for free</p>
        <p><ClearIcon style={{height:"3vh"}}/>Carry-on bag not allowed</p>
        <p><PaidSharpIcon style={{height:"3vh"}}/>1st checked bag for a fee: CA $65</p>
        <p><ClearIcon style={{height:"3vh"}}/>Non-refundable</p>
        <p><ClearIcon style={{height:"3vh"}}/>Changes not allowed</p>
        </div>
      </div>
          </CardContent>
        </Card>
 
      </div>
      </div>
      {/* Price summary */}
      <div>
       
       <Card style={{height:"60vh" , width:"80vh", borderRadius:"20px"}}>
      <CardContent>
        <div>

            <p style={{fontFamily:"parkinsans", fontWeight:"bold"}}>Price summary </p>
            <div  style={{display:"flex", flexDirection:"row", gap: "190px"}}>

            <div style={{display:"flex", flexDirection:"column", fontFamily:"parkinsans", fontSize:"11px"}}>
            <p>Traveller :Adults</p>
            <p>Air transportation charges</p>
            <p>Taxes, fees, and charges</p>
            </div>

            <div style={{display:"flex", flexDirection:"column", fontSize:"11px", fontFamily: "sans-serif"}}>
              <p style={{fontWeight: "bold"}}> CA ${totalPrice}</p>
              <p> CA ${flightPrice}</p>
              <p> CA ${((flightPrice*13)/100)}</p>
            </div>
          </div>
          <Divider />
      <div>
        <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <p style={{fontFamily:"parkinsans", fontWeight:"bold", fontSize:"22px"}}>Trip Total</p>
        <p style={{fontWeight:"bold", fontFamily:"sans-serif"}}>CA ${totalPrice}</p>
        </div>
        <p style={{fontFamily:"parkinsans",color:'grey', fontWeight:"bold", fontSize:"10px", marginTop: "-20px"}}>Rates are quoated in Canadian dollars</p>
      </div>
        <div style={{display:"flex" , flexDirection:"row", justifyContent:"center", marginTop: "19px"}}>
            <Button style={{borderRadius:"12px", color: "black", backgroundColor: "#f18a53", paddingLeft:"62px" ,paddingRight:"62px" }}>Check out</Button>
          </div> 
       
        </div>
      
      </CardContent>
       </Card>
        </div>
      
  </div>

    </div>
    

  );
};

export default LeftSection;
