import { Router } from "express";
const router = Router();
import dotenv from "dotenv"
dotenv.config();
import axios from "axios";

const URL = "http://10.167.162.108:5000";


router.post("/chat",async (req,res)=>{
    const { message } = req.body as {
        message: string;
    }

    try
    {
        const response = await axios.post(`${URL}/api/chat`, { message });
        res.json(response.data);
        console.log(response.data);
    }
    catch (err)
    {
        console.log(err);
        res.json({message:"Error"})
    }

});

export default router;