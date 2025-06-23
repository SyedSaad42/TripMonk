import  LeftSection  from "../component/FlightPage/LeftSection.jsx"
import MidSection from "../component/FlightPage/MidSection.jsx";
import TopSection from "../component/FlightPage/TopSection.jsx";
import Navbar from "../component/Navbar.jsx";


const FlightPage = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Navbar />
      <div style={{marginLeft: "40px"}}>  <TopSection /></div>
    
      
      <div style={{display:"flex", flexDirection:"row", gap:"20px", marginLeft: "20px"}}>
        <LeftSection />
     <MidSection /></div>
      
    </div>
  )
}

export default FlightPage;