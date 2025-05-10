
import { motion } from "framer-motion";

const Righside= () => {
    return(
        <div>
            
            <motion.div
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration: 0.8}}
            style={{
                width: "650px",
                height: "500px",
                marginRight: "20px",
                 backgroundSize: "cover",
                backgroundPosition: "left",
                backgroundImage: `url(https://res.cloudinary.com/dctdi6x4e/image/upload/v1746595975/oddrycd2nzw6vgmf5dpi.jpg)`,
                borderRadius: "20px" ,
             }}>
            </motion.div>
        </div>
    )
}
export default Righside;