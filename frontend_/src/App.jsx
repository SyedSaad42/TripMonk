
import Navbar from "./component/Navbar";
import "./App.css";
import SearchSection from "./component/searchsection";
import Text from "./component/Main";
import Footer from "./component/Footer";
import ChatBot from "./component/Chatbot";

function App() {

  return (
    <>
        <Navbar />
        <div style={{display: 'flex',gap: '270px'}}>
          <div style={{marginLeft: '30px', marginTop: '50px'}}>
        <Text />
        </div>
         <SearchSection />
         </div>
        
           <Footer />
        
         <ChatBot />
    </>
  );
}

export default App;
