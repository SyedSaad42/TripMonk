import {create} from "zustand";
import axios from "../lib/axios.js";
import {toast} from "react-hot-toast";

const useUserStore = create((set,get) => ({
 user: null,
 loading: false,
 checkingAuth: true,
 signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    if (password !== confirmPassword) {
        console.log("this is working ")
        set({ loading: false });
        return toast.error("Passwords do not match");
    }

    try {
        const res = await axios.post("/auth/signup", { name, email, password });
        set({ user: res.data, loading: false });
    } catch (error) {
        set({ loading: false });
        toast.error(error.response.data.message || "An error occurred");
    }
},
checkAuth: async () => {
    set({ checkingAuth: true });
    try {
        const response = await axios.get("/auth/profile");
        set({ user: response.data, checkingAuth: false });
    } catch (error) {
        console.log(error.message);
        set({ checkingAuth: false, user: null });
    }
},


}));
export default useUserStore;