import { useState } from "react";
import { motion } from "framer-motion";
import { InputLabel, FormControl, Input, Button } from "@mui/material";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   // Replace with signup(formData) when ready
   <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
  The form is submitted succesfully
</Alert>
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ color: "#000000" }}>Create Account</h2>
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
          background: "rgb(236, 212, 107)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jeff Epstein"
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="confirmpassword">Confirm Password</InputLabel>
          <Input
            id="confirmpassword"
            type="password"
            required
            value={formData.confirmpassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmpassword: e.target.value })
            }
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </motion.form>
    </div>
  );
};

export default SignUpPage;
