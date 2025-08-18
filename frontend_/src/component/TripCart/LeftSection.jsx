

// export default LeftSection;
import React, { useContext, useEffect, useState } from 'react';
import { TripCartContext } from '../../context/TripCartContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ClearIcon from '@mui/icons-material/Clear';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import { useNavigate } from 'react-router-dom';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

const LeftSection = () => {
  const { tripItems, addToTripCart, clearTripCart } = useContext(TripCartContext);
  const selectedFlight = tripItems.departure;
  const selectedReturn = tripItems.return;
  const selectedHotel = tripItems.hotel;

  const flightPrice = selectedFlight?.price || 350;
  const [totalPrice, setTotalPrice] = useState(0);
  const [travelTime, setTravelTime] = useState('0h 0m');
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      selectedFlight?.departure_airport?.time &&
      selectedFlight?.arrival_airport?.time
    ) {
      const departureTime = new Date(selectedFlight.departure_airport.time);
      const arrivalTime = new Date(selectedFlight.arrival_airport.time);
      const durationMs = arrivalTime - departureTime;
      const hours = Math.floor(durationMs / (1000 * 60 * 60));
      const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
      setTravelTime(`${hours}h ${minutes}m`);
    } else if (selectedFlight?.duration) {
      const min = Number(selectedFlight.duration);
      const hours = Math.floor(min / 60);
      const mins = min % 60;
      setTravelTime(`${hours}h ${mins}m`);
    }

    setDuration(selectedFlight?.duration || 0);
    const calculateTotal = (Price) => Price + (Price * 13) / 100;
    const result = calculateTotal(flightPrice);
    setTotalPrice(result);
 console.log("yo the component is visible");
 console.log("the item tray",tripItems );
  }, [flightPrice, selectedFlight]);

  const convertTo12Hour = (time24) => {
    if (typeof time24 !== 'string' || !time24.includes(':')) return 'TBD';
    const [hourStr, minute] = time24.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  const formatDuration = (minutes) => {
    const min = parseInt(minutes, 10);
    const hours = Math.floor(min / 60);
    const remainingMinutes = min % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div style={{ fontFamily: 'parkinsans', paddingBottom: '40px' }}>
      {/* DEPARTURE CARD */}
      {selectedFlight && (
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h6" style={styles.title}>Departure Flight</Typography>
            <Typography variant="body2">
              {selectedFlight?.airline || 'N/A'} - {selectedFlight?.flight_number || 'N/A'}
            </Typography>
            <Typography variant="body2">
              {selectedFlight?.departure_airport?.id || 'N/A'}
              <ArrowForwardIcon style={{ verticalAlign: 'middle' }} />
              {selectedFlight?.arrival_airport?.id || 'N/A'}
            </Typography>
            <Typography variant="body2">
              {convertTo12Hour(selectedFlight?.departure_airport?.time?.slice(11, 16))} -{' '}
              {convertTo12Hour(selectedFlight?.arrival_airport?.time?.slice(11, 16))} (
              {formatDuration(duration)})
            </Typography>
            <img
              src={selectedFlight?.airline_logo}
              alt={selectedFlight?.airline || 'Airline'}
              style={{ height: '24px', marginTop: '10px' }}
            />
          </CardContent>
        </Card>
      )}

      {/* RETURN CARD */}
      {selectedReturn && (
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h6" style={styles.title}>Return Flight</Typography>
            <Typography variant="body2">
              {selectedReturn?.airline || 'N/A'} - {selectedReturn?.flight_number || 'N/A'}
            </Typography>
            <Typography variant="body2">
               {selectedReturn?.arrival_airport?.id || 'N/A'}
                <ArrowForwardIcon style={{ verticalAlign: 'middle' }} />
              {selectedReturn?.departure_airport?.id || 'N/A'}
             
             
            </Typography>
            <Typography variant="body2">
              {convertTo12Hour(selectedReturn?.departure_airport?.time?.slice(11, 16))} -{' '}
              {convertTo12Hour(selectedReturn?.arrival_airport?.time?.slice(11, 16))} (
              {formatDuration(selectedReturn?.duration)})
            </Typography>
            <img
              src={selectedReturn?.airline_logo}
              alt={selectedReturn?.airline || 'Airline'}
              style={{ height: '24px', marginTop: '10px' }}
            />
          </CardContent>
        </Card>
      )}

      {/* HOTEL CARD */}
      {selectedHotel && (
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h6" style={styles.title}>Hotel</Typography>
            <Typography variant="body2">{selectedHotel?.name || 'Hotel Name'}</Typography>
            <Typography variant="body2">{selectedHotel?.hotel_class || 'Hotel Class'}</Typography>
            <Typography variant="body2">
              Price/Night: ${selectedHotel?.rate_per_night?.extracted_lowest || 'N/A'}
            </Typography>
            <Typography variant="body2">{selectedHotel?.description || 'N/A'}</Typography>
          </CardContent>
        </Card>
      )}

      {/* CLEAR CART BUTTON */}
      <div style={{ marginTop: '20px', marginLeft: '10px' }}>
        <Button
          variant="outlined"
          color="error"
          onClick={clearTripCart}
          startIcon={<ClearIcon />}
        >
          Clear Trip Cart
        </Button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '85%',
    margin: '20px auto',
    padding: '15px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontFamily: 'parkinsans',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#130c45',
    marginBottom: '10px'
  }
};

export default LeftSection;
