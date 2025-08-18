 
//  import React from 'react'
//  import { Card,CardContent } from '@mui/material'
// import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
// import { motion } from "framer-motion";
// import Alert from '@mui/material/Alert';
// import { useState } from 'react';
// import Stack from '@mui/material/Stack';

// const RighSection = () => {
//     const [showAlert, setShowAlert] = useState(false);

// const handleSubmit = async () =>{
//     setShowAlert(true); 

//     const userId = localStorage.getItem('userId'); // adjust depending on your auth system

//   const payload = {
//     userId,
//     departure: selectedFlight,
//     returnFlight: selectedReturn,
//     hotel: selectedHotel,
//     totalPrice
//   };

//   try {
//     const res = await fetch('/api/trip/save-tripcart', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert('Trip saved to MongoDB');
//       navigate('/tripcart'); // or thank you page
//     } else {
//       console.error(data);
//       alert('Error saving trip');
//     }
//   } catch (error) {
//     console.error('Checkout error:', error);
//   }
// }


//    return (
//         <div>
//             <motion.div
//                           initial={{opacity: 0, y:20}}
//                           animate={{opacity: 1, y: 0}}
//                           transition={{duration: 1.0}}>
//              {showAlert && (
                
//   <Stack sx={{ width: '100%', mt: 2 , marginLeft:"30px"}} spacing={2}>
//     <Alert style={{padding:"20px", fontSize:"20px"}} severity="success">You are all set for your trip. Bon voyage!</Alert>
//   </Stack>
// )}
// </motion.div>
//               <motion.div
//                           initial={{opacity: 0, y:20}}
//                           animate={{opacity: 1, y: -20}}
//                           transition={{duration: 1.0}}>
//           <Card style={{ marginTop:"50px",marginLeft:"40px",height: '55vh', width: '60vh', borderRadius: '20px' , backgroundColor:"black" , border:"1px solid white",  }}>
//             <CardContent>
//               <div>
//                 <p style={{color:"white" ,fontFamily: 'Inter', fontWeight: 'bold', fontSize:"30px", marginTop:"7px" }}>Price summary </p>
//                 <div style={{ display: 'flex', flexDirection: 'row', gap: '220px' }}>
//                   <div
//                     style={{ color: "white",display: 'flex', flexDirection: 'column', fontFamily: 'parkinsans', fontSize: '15px', }}>
//                     <p>Traveller : Adults</p>
//                     <p>Air transportation charges</p>
//                     <p>Taxes, fees, and charges</p>
//                   </div>

//                   <div
//                     style={{ color: "white",display: 'flex', flexDirection: 'column', fontSize: '16px', fontFamily: 'sans-serif' }}>
//                     <p style={{ fontWeight: 'bold' }}> CA $139</p>
//                     <p> CA $184</p>
//                     <p> CA $111</p>
//                   </div>
//                 </div>
//                 <Divider style={{height:"1px", backgroundColor:"white"}} />
//                 <div>
//                   <div style={{color:"white", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//                     <p style={{ fontFamily: 'parkinsans', fontWeight: 'bold', fontSize: '27px' }}>Trip Total</p>
//                     <p style={{ fontWeight: 'bold', fontSize:"20px",fontFamily: 'Inter', marginTop:"38px" }}>CA $174</p>
//                   </div>
//                   <p
//                     style={{
//                       fontFamily: 'parkinsans',
//                       color: 'grey',
//                       fontWeight: 'bold',
//                       fontSize: '10px',
//                       marginTop: '-20px',
//                     }}
//                   >
//                     Rates are quoted in Canadian dollars
//                   </p>
//                 </div>
//                 <div
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     marginTop: '32px',
//                   }}
//                 >
//                   <Button
//                     style={{
//                       borderRadius: '12px',
//                       color: 'black',
//                       backgroundColor: '#f18a53',
//                       paddingLeft: '62px',
//                       paddingRight: '62px',
//                       fontWeight:"bold",
//                       fontSize:"20px"
//                     }}
//                     onClick={handleSubmit}
//                   >
//                     Check out
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           </motion.div>
//         </div>


//  )
//  }
 
//  export default RighSection;
import React, { useState, useContext } from 'react';
import { Card, CardContent } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { TripCartContext } from '../../context/TripCartContext';
import { useNavigate } from 'react-router-dom';

const RightSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { tripItems } = useContext(TripCartContext);
  const navigate = useNavigate();

  const selectedFlight = tripItems?.departure;
  const selectedReturn = tripItems?.return;
  const selectedHotel = tripItems?.hotel;

  const basePrice = selectedFlight?.price || 350;
  const totalPrice = basePrice + (basePrice * 13) / 100;

  const handleSubmit = async () => {
    setShowAlert(true);

    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('You must be logged in to check out.');
      return;
    }

    const payload = {
      userId,
      departure: selectedFlight,
      returnFlight: selectedReturn,
      hotel: selectedHotel,
      totalPrice,
    };

    try {
      const res = await fetch('/api/trip/save-tripcart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Trip saved to MongoDB');
        navigate('/tripcart');
      } else {
        console.error(data);
        alert('Error saving trip');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        {showAlert && (
          <Stack sx={{ width: '100%', mt: 2, marginLeft: '30px' }} spacing={2}>
            <Alert style={{ padding: '20px', fontSize: '20px' }} severity="success">
              You are all set for your trip. Bon voyage!
            </Alert>
          </Stack>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 1.0 }}
      >
        <Card
          style={{
            marginTop: '50px',
            marginLeft: '40px',
            height: '55vh',
            width: '60vh',
            borderRadius: '20px',
            backgroundColor: 'black',
            border: '1px solid white',
          }}
        >
          <CardContent>
            <div>
              <p
                style={{
                  color: 'white',
                  fontFamily: 'Inter',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  marginTop: '7px',
                }}
              >
                Price summary
              </p>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '220px' }}>
                <div
                  style={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'parkinsans',
                    fontSize: '15px',
                  }}
                >
                  <p>Traveller : Adults</p>
                  <p>Air transportation charges</p>
                  <p>Taxes, fees, and charges</p>
                </div>

                <div
                  style={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '16px',
                    fontFamily: 'sans-serif',
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}> CA $139</p>
                  <p> CA $184</p>
                  <p> CA $111</p>
                </div>
              </div>
              <Divider style={{ height: '1px', backgroundColor: 'white' }} />
              <div>
                <div
                  style={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <p style={{ fontFamily: 'parkinsans', fontWeight: 'bold', fontSize: '27px' }}>
                    Trip Total
                  </p>
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                      fontFamily: 'Inter',
                      marginTop: '38px',
                    }}
                  >
                    CA ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: 'parkinsans',
                    color: 'grey',
                    fontWeight: 'bold',
                    fontSize: '10px',
                    marginTop: '-20px',
                  }}
                >
                  Rates are quoted in Canadian dollars
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '32px',
                }}
              >
                <Button
                  style={{
                    borderRadius: '12px',
                    color: 'black',
                    backgroundColor: '#f18a53',
                    paddingLeft: '62px',
                    paddingRight: '62px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}
                  onClick={handleSubmit}
                >
                  Check out
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RightSection;
