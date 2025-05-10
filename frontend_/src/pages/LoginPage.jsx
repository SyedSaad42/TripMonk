
import { motion } from "framer-motion";
const LoginPage= ()=>{



return(
    <div>
          <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       Login Page is under development
      </motion.div>

      
    </div>
)

}
export default LoginPage;