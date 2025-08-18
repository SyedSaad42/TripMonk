import React from 'react'
import {Input} from "@heroui/react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const LeftSection = () => {
  return (
    <div>
     <Card style={{width: "26vh" , marginTop: "45px" , height:"850px"}}>
      <CardContent>
        <div style={{display: "flex", flexDirection:"column" , gap:"20px"}}>
          <img style={{ width: "100%",    
      height: "auto",   
      objectFit: "contain" }} src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1751660571/Screenshot_2025-07-04_155354_bno0nd.png"></img>
       
          {/* <img style={{ width: "100%",    
      height: "auto",   
      objectFit: "contain" }} src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1751612205/Screenshot_2025-07-04_025622_elryte.png"></img> */}
        </div>
      </CardContent>
     </Card>
    </div>
  )
}

export default LeftSection;