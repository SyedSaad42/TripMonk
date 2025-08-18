
import BaseFooter from "../component/BaseFooter";
import LeftSidePage from "../component/SignupPageCompoenent/Leftside"
import NavbarSignup from "../component/SignupPageCompoenent/NavbarSignup";



const SignUpPage = ()=>{
return(
    <div>
        <NavbarSignup />
                <div style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",  // changed from center
  gap: "200px",
 
  backgroundImage: `url("https://res.cloudinary.com/dctdi6x4e/image/upload/v1747155671/b3fyjwvwulyxvdtrbghu.svg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  alignContent: "flex-start",
  marginTop: "5px"
}}>
             <LeftSidePage />
            
        </div>
        <BaseFooter />
    </div>
)
}
export default SignUpPage;