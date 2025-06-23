import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignupPage";
import HomePage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import FlightPage from "./pages/Flightpage";
import { SearchProvider } from "./context/SearchContext.jsx";

function App() {

  return (

    <>
          <SearchProvider>
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
</Routes>

<Toaster/>
</SearchProvider>
    </>


    );
}

export default App;
