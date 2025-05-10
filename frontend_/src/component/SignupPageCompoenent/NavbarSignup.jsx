import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const NavbarSignup = () => {
    
const navigate = useNavigate();
return(
    <div>
         <motion.div
      initial={{opacity: 0,y: 20}}
      animate={{opacity:1, y: 0}}
      transition={{duration: 0.8}}
      style={{ display: 'flex',justifyContent:"center",alignItems: 'center'}}
      >
        <img style={{height: '13vh', width: '13vh',}} src="https://res.cloudinary.com/dctdi6x4e/image/upload/v1746883200/pj9ndyi579jrvvcixe7z.png" onClick={()=>{navigate('/')}} />
      </motion.div>
    </div>
)

}
export default NavbarSignup;