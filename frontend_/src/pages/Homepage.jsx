import "../styles/HomePage.css"
import Navbar from "../component/Navbar"
import Text from "../component/Main"
import SearchSection from "../component/searchsection"
import Footer from "../component/Footer"
import ChatBot from "../component/Chatbot"
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
        <Footer />
        <ChatBot />
        </div>
    )


}

export default HomePage;