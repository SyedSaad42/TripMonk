import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignupPage";
import HomePage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import FlightPage from "./pages/Flightpage";
import { SearchProvider } from "./context/SearchContext.jsx";
import { TripCart } from "./pages/TripCart.jsx";
import FlightProvider, { FlightContext } from "./context/FlightContext.jsx";
import { AirportProivder } from "./context/AirportContext.jsx";

function App() {

  return (

    <>
    <AirportProivder>
          <SearchProvider>
    <FlightProvider>

<Routes>
  {/* Home Page Route */}
  <Route
    path="/"
    element={
      <>
     <HomePage />
      </>
    }
  />

  {/* SignUp Page Route */}
  <Route path="/signup" element={<SignUpPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/search" element={<FlightPage />} />
  <Route path="/tripCart" element={<TripCart />} />
</Routes>

<Toaster/>

</FlightProvider>
</SearchProvider>
</AirportProivder>
    </>


    );
}

export default App;
