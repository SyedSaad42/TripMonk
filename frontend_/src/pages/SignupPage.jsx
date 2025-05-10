
import LeftSidePage from "../component/SignupPageCompoenent/Leftside"
import NavbarSignup from "../component/SignupPageCompoenent/NavbarSignup";
import Righside from "../component/SignupPageCompoenent/Rightside";


const SignUpPage = ()=>{
return(
    <div>
        <NavbarSignup />
                <div style={{display:"flex", flexDirection: "row", justifyContent:"flex-start",alignItems:"center", gap: "200px",marginTop: "-20px"}}>
             <LeftSidePage/>
             <Righside />
        </div>
    </div>
)
}
export default SignUpPage;