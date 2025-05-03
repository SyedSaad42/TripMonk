import React from "react";

const Footer = () =>{

    return(
        <div style={{direction: 'flex', flexDirection: 'column'}}>
        <div style={{marginTop: '73px', display: 'flex',flexDirection: 'row', justifyContent: 'flex-start', gap: '30px'}}>
        {/* <Divider style={{borderColor: '#f18a53'}}/> */} <div style={{ marginLeft: '28px' , width: '650px', height: '2px', backgroundColor: '#FFFFFF',  }}></div><p style={{color: '#f18a53',fontSize: '23px', margin: '-10px' , fontWeight: 'bold', fontFamily: 'sans-serif'}}><i>Explore A Vast Array Of Options And Find The Perfect Tickets</i></p>
       
       </div>
     <div style={{marginLeft: '37px',marginTop: '40px',display: 'flex',flexDirection: 'row', justifyContent: 'flex-start',}}>
     <p style={{color: '#FFFFFF',fontSize: '23px', margin: '-10px' , fontWeight: 'bold', fontFamily: 'sans-serif'}}><i>For Your Journey Hassle-Free With Our Easy Online Booking.</i></p><div style={{ marginLeft: '28px' , width: '650px', height: '2px', backgroundColor: '#f18a53',  }}></div>
     </div>

       </div>
    )

}
export default Footer;