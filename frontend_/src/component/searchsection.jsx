import React from "react";
import { useState } from "react";
import Button  from "@mui/material/Button"
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Input from '@mui/material/Input';

const SearchSection = ()=>{
    const today = new Date().toISOString().slice(0,10);
    const [depature,setDepature] = useState('');
    const [arrival, setArrival] =useState('');
    const [depature_date, setDepature_date] =useState(today);
    const [arrival_date, setArrival_date] =useState(today);
    const [people, setPeople] =useState(0);
   
return(
  
    // whole section
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '30px',  width: '500px', height: '300px'  }}> 
     <Card style={{padding: '30px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.7)',  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',backdropFilter: 'blur(10px)' }} >
       <div>
     <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column', minheight: '100vh'}}>
     <div > 
     <label>From</label><br />
     <Input type="search" value={depature} onChange={(e)=> setDepature(e.target.value)} placeholder="Enter your departure Airport"></Input>
     </div>
     
     <Divider />
     <div>
     <label>Destination</label><br />
     <Input type="search" value={arrival} onChange={(e)=> setArrival(e.target.value)} placeholder="Enter your Arrival Airport"></Input>
     </div>
    </div>
    <Divider />
    <div style={{display:'flex', flexDirection:'row',justifyContent: 'space-between',marginTop: '20px', gap: '20px'}}>
    <div>
    <label>Start Date</label><br />
    <Input type="date" value={depature_date} onChange={(e)=>setDepature_date(e.target.value)} placeholder={today}></Input>
    </div>

    <div>
    <label>End Date</label><br />
    <Input type="date" value={arrival_date} onChange={(e)=>setArrival_date(e.target.value)} placeholder={today}></Input>
    </div>

    <div>
    <label>Head Count</label><br />
    <Input type="positive number" value={people} onChange={(e)=>setPeople(e.target.value)} placeholder="0"></Input>
    </div><br />
    </div>
    <div style={{display:"flex", justifyContent: "center", marginTop: "18px"}}>
     <Button type="submit" style={{ background: "#f18a53", color:"black", borderRadius: "20px", paddingLeft: "20px", paddingRight: "20px" }}>Search packages</Button>
     </div>
     </div>
     </Card>
   
    </div>



)
};

export default SearchSection;