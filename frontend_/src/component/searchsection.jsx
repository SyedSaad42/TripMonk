import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import { AirportContext } from "../context/AirportContext.jsx";

const SearchSection = () => {
  const navigate = useNavigate();
  const { airports } = useContext(AirportContext);

  const [depature, setDepature] = useState('');
  const [arrival, setArrival] = useState('');
  const [depatureResults, setDepartureResults] = useState([]);
  const [arrivalResults, setArrivalResults] = useState([]);
  const [depature_date, setDepature_date] = useState('');
  const [return_date, setReturn_date] = useState('');
  const [people, setPeople] = useState('');

  const filterAirports = (value) => {
    const q = value.toLowerCase();
    return airports.filter(({ name, city, iata }) =>
      (name && name.toLowerCase().includes(q)) ||
      (city && city.toLowerCase().includes(q)) ||
      (iata && iata.toLowerCase().includes(q))
    );
  };

  const handleDepatureChange = (value) => {
    setDepature(value);
    setDepartureResults(value.trim() ? filterAirports(value).slice(0, 8) : []);
  };

  const handleArrivalChange = (value) => {
    setArrival(value);
    setArrivalResults(value.trim() ? filterAirports(value).slice(0, 8) : []);
  };

  const handleSubmit = () => {
    navigate("/search");
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <Card style={{ padding: '20px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.9)' }}>
        <div>
          {/* Departure Input */}
          <div style={{ position: 'relative', marginBottom: '20px' , fontFamily:"Inter"}}>
            <label>From</label><br />
            <Input
              type="search"
              value={depature}
              onChange={e => handleDepatureChange(e.target.value)}
              placeholder="Enter your departure Airport"
              fullWidth
            />
            {depatureResults.length > 0 && (
              <ul style={suggestionStyles.ul}>
                {depatureResults.map(({ name, iata }) => (
                  <li
                    key={iata}
                    style={suggestionStyles.li}
                    onClick={() => {
                      setDepature(`${name} (${iata})`);
                      setDepartureResults([]);
                    }}
                  >
                    {name} ({iata})
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Divider />

          {/* Arrival Input */}
          <div style={{ position: 'relative', margin: '20px 0', fontFamily:"Inter"}}>
            <label>Destination</label><br />
            <Input
              type="search"
              value={arrival}
              onChange={e => handleArrivalChange(e.target.value)}
              placeholder="Enter your Arrival Airport"
              fullWidth
            />
            {arrivalResults.length > 0 && (
              <ul style={suggestionStyles.ul}>
                {arrivalResults.map(({ name, iata }) => (
                  <li
                    key={iata}
                    style={suggestionStyles.li}
                    onClick={() => {
                      setArrival(`${name} (${iata})`);
                      setArrivalResults([]);
                    }}
                  >
                    {name} ({iata})
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Divider />

          {/* Date & Headcount */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '20px'  ,fontFamily:"Inter"}}>
            <div>
              <label>Start Date</label><br />
              <Input type="date" value={depature_date} onChange={e => setDepature_date(e.target.value)} />
            </div>
            <div>
              <label>End Date</label><br />
              <Input type="date" value={return_date} onChange={e => setReturn_date(e.target.value)} />
            </div>
            <div>
              <label>Head Count</label><br />
              <Input type="number" value={people} onChange={e => setPeople(e.target.value)} placeholder="0" />
            </div>
          </div>

          {/* Search Button */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#f18a53', color: 'black', borderRadius: '20px', padding: '8px 30px' }}
              onClick={handleSubmit}
            >
              Search packages
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const suggestionStyles = {
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '4px 0 0 0',
    border: '1px solid #ccc',
    maxHeight: '140px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
  li: {
    padding: '8px 12px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
  },
};

export default SearchSection;
