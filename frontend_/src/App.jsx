import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignupPage";
import HomePage from "./pages/Homepage";

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
</Routes>
    </>
  );
}

export default App;
