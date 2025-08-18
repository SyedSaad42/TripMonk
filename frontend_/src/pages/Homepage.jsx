import "../styles/HomePage.css"
import Navbar from "../component/Navbar"
import Text from "../component/Main"
import SearchSection from "../component/searchsection"
import Footer from "../component/Footer"
import ChatBot from "../component/Chatbot"
import BaseFooter from "../component/BaseFooter"
import VacationCard from "../component/VacationCard"
const HomePage = ()=>{

    return (
        <div className="Homepagebody">
          
        <Navbar />
        
        <div style={{ display: 'flex', gap: '270px' }}>
          <div style={{ marginLeft: '30px', marginTop: '50px' }}>
            <Text />
          </div>
          <SearchSection />
        </div>
        <VacationCard />
         <div style={{marginTop: "-130px", marginRight:"60px"}}>
           <ChatBot />
        </div>
        <div style={{marginTop:"10px",display: "flex",
    justifyContent: "center", alignItems: "center"}}>
            <Footer />
        </div>
        
       
       
        <BaseFooter />
        </div>
    )


}

export default HomePage;