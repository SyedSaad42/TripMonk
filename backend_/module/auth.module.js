import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,

        },
        email:{
            type: String,
            required: [true,"emails is required"],
            unique: true,
            lowercase: true,

        },
        password:{
          type: String,
          required: [true,"password is required"],
          minlength: [6, "Password must be at least 6 char long"],
        },
        
    },{
        timestamps: true,
    }
);

// this method is meant to work before pre save
// so before we save the login credentials
UserSchema.pre("save",async function ( next ){ 
    if(!this.isModified("password")) return next(); // we check wether the password field has been modified from nothing to something or not ?
    try {
        const salt = await bcrypt.genSalt(10); // bcrypt is used for generaing hash apsssword .. the gensalt is a async funcition that just add randome string before and after the 
        // passwrod and the 10 reflects the number of time the hashing is done
        this.password = await bcrypt.hash(this.password, salt); // now we assigning the current password to hash passowrd using bcrypt and the randome strng under the salt variable and making a hashed up passwords 
        next();  // as this is a middle wear we are proceesing to teh next step 

    } catch (error) {
        next(error); /// now we are refelcting to the the eeror 
    }
});

// to check if the passowrd matches the credentials 
UserSchema.methods.comparePassword = async function( password) {
    return bcrypt.compare(password, this.password); 
};


const User = mongoose.model("User", UserSchema);
export default User;