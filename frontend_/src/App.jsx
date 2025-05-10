import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignupPage";
import HomePage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <>
          

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
</Routes>

<Toaster/>
    </>
  );
}

export default App;
