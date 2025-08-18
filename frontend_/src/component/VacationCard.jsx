import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { motion } from "framer-motion";
const VacationCard = () => {
  return (
    <div style={{display:"flex", flexWrap:"wrap", flexDirection:"row", gap:"20px", marginLeft:"60px", marginTop:"-140px"}}>

       <motion.div
  initial={{ opacity: 0, x: -50 }}  // Start 50px left & invisible
  animate={{ opacity: 1, x: 0 }}    // Slide into place & become visible
  transition={{ duration: 1.0 , delay: 1.3}}
>
 <Card style={{width:"280px", borderRadius:"30px", border:"2px solid white", height:"348px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image="https://res.cloudinary.com/dctdi6x4e/image/upload/v1751736538/pexels-mark-neal-201020-2225442_zb8fao.jpg"
          alt="green iguana"
        />
        <CardContent  style={{backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(0px)',
                 padding: '7px 9px',}} >

          <Typography style={{fontFamily:"Inter", fontSize:"19px"}}>
            Rome
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Discover Rome — where history, beauty, and espresso meet.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </motion.div>


   {/* Second Card */}

     <motion.div
  initial={{ opacity: 0, x: -50 }}  // Start 50px left & invisible
  animate={{ opacity: 1, x: 0 }}    // Slide into place & become visible
  transition={{ duration: 1.0 , delay: 0.8}}
>
    <Card style={{width:"280px", borderRadius:"30px", border:"2px solid white", height:"348px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image="https://res.cloudinary.com/dctdi6x4e/image/upload/v1751736639/pexels-tomas-malik-793526-3408354_lurs28.jpg"
          alt="green iguana"
        />
        <CardContent style={{backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(0px)', padding: '7px 9px'}} >
          <Typography style={{fontFamily:"Inter", fontSize:"19px"}}>
            Japan
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Experience Japan — tradition, tech, and tranquility in one journey.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</motion.div>


    {/* Third Card */}


     <motion.div
  initial={{ opacity: 0, x: -50 }}  // Start 50px left & invisible
  animate={{ opacity: 1, x: 0 }}    // Slide into place & become visible
  transition={{ duration: 1.0 , delay:0.5 }}
>
    <Card style={{width:"280px", borderRadius:"30px" , border:"1px solid white",height:"348px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image="https://res.cloudinary.com/dctdi6x4e/image/upload/v1751736847/pexels-gabriel-garcia-1263144-2404046_tovfn5.jpg"
          alt="green iguana"
        />
        <CardContent style={{backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(3px)', padding: '7px 9px'}} >
          <Typography style={{fontFamily:"Inter", fontSize:"19px"}}>
            Morocco
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Uncover Morocco — where deserts, souks, and magic collide.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </motion.div>
    </div>
  )
}
export default VacationCard;
