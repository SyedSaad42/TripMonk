import { useState } from "react";
import { motion } from "framer-motion";
import  { Loader, UserPlus,ArrowBigRight } from "lucide-react"
import { FormControl, Button, TextField, Checkbox} from "@mui/material";
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Key from '@mui/icons-material/Key';
import { Link } from "react-router-dom";
import  useUserStore from "../../stores/useUserStore"
const LeftSidePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //  const [Loading, setLoading] = useState();
   const {signup,loading} = useUserStore();
  const handleSubmit = (e) => {
    e.preventDefault();
  // setLoading(true);
  // setTimeout(()=>{
  //   setLoading(false)
  // },1000)

  signup(formData);
  };
  const minLength = 12;
  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto" }}>

     
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{display:"flex",flexDirection:"column"}}>
        <h1 style={{ color: "#000000", fontFamily:"Parkinsans", alignContent:"center" }}>Create Your Account</h1>
        <h5 style={{ color:"rgb(133, 138, 138)", fontFamily: "sans-serif", marginTop:"-10px", marginLeft: "20px"}}>Let's get started with the 30 days Free trial</h5>
        </div>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: "rgb(253, 253, 253)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <FormControl fullWidth style={{color:"rgb(188, 178, 178)",borderRadius:"20px"}}>
          <TextField
          required
          id="name"
          label="Full Name"
          defaultValue="Jeff Epstien"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        </FormControl>

        <FormControl fullWidth>
         
          <TextField
            id="email"
            type="email"
            label="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </FormControl>

        <FormControl fullWidth sx={{ '--hue': Math.min(formData.password.length * 10, 120) }}
        >
          <TextField
            id="password"
            type="password"
            label="password"
            startDecorator={<Key />}
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <LinearProgress
        determinate
        size="sm"
        value={Math.min((formData.password.length * 100) / minLength, 100)}
        sx={{ bgcolor: 'background.level3', color: 'hsl(var(--hue) 80% 40%)' }}
      />
      <Typography
        level="body-xs"
        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
      >
        {formData.password.length < 3 && 'Very weak'}
        {formData.password.length >= 3 && formData.password.length < 6 && 'Weak'}
        {formData.password.length >= 6 && formData.password.length < 10 && 'Strong'}
        {formData.password.length >= 10 && 'Very strong'}
      </Typography>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="confirmPassword"
            type="password"
            required
            label="confirm password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
           
        </FormControl>
            <div style={{display:"flex", flexDirection: "row"}}>
            <Checkbox /><p style={{fontFamily:"sans-serif", fontSize: "12px"}}>I agree to all terms & Condition</p>

            </div>
  
        <Button type="submit" variant="contained" color= "primary" style={{backgroundColor: "#000000", borderRadius: "15px", marginTop: "-20px"}}  disabled={loading}>
          {loading ? (
           <>
           <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' color="#FFFFFF" /><p style={{color:"#FFFFFF"}}>Loading...</p>
           </>
        ): (
          <>
          
               <UserPlus aria-hidden="true" />Sign Up
               </>
        )}
         
        </Button>
      </motion.form>
     <div>
     <p style={{fontFamily: "parkisans", fontSize:"16px", marginTop: "-10px"}}>Already have an account? Please <Link to ="/login">Login</Link><ArrowBigRight/></p>
     </div>
    </div>
  );
};

export default LeftSidePage;
