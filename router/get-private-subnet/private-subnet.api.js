import { Router } from "express";
import axios from "axios";
export function PrivateAPI() {
    const router = Router();

    router.get('/get-data', async(req, res) => {
        const BASE_URL = `http://${process.env.PRIVATE_IP}:${process.env.PRIVATE_PORT}/get-data`;
        console.log(BASE_URL);
        const fetchData = await axios.get(BASE_URL);

        return res.json(fetchData);
    })
    return router;
}