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
import {HeroUIProvider, Input} from "@heroui/react";
import { HotelProvider } from "./context/HotelsContext.jsx";
import { TripCartProvider } from "./context/TripCartContext.jsx";
function App() {

  return (

    <>
    <HeroUIProvider>
      <TripCartProvider>
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
  <Route path="/search" element={   <HotelProvider><FlightPage /></HotelProvider>} />
  <Route path="/tripcart" element={<TripCart />} />
</Routes>

<Toaster/>

</FlightProvider>
</SearchProvider>
</AirportProivder>
</TripCartProvider>
</HeroUIProvider>
    </>


    );
}

export default App;
