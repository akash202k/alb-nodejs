import express from 'express';
import os from 'os';
import axios from "axios"

const app = express();
const PORT = process.env.PORT || "8080"

// Function to get the server's IP address
const getServerPrivateIp = () => {
    const networkInterfaces = os.networkInterfaces();
    for (const iface of Object.values(networkInterfaces)) {
        for (const address of iface) {
            if (address.family === 'IPv4' && !address.internal) {
                return address.address;
            }
        }
    }
    return '127.0.0.1'; // Fallback to localhost if no external IP is found
};

const serverPublicIp = async () => {
    const response = await axios.get("https://ifconfig.me/all.json");
    const publicIp = await response.data.ip_addr;
    return publicIp;
}
// Define the root route
app.get('/', async (req, res) => {
    const privateIp = getServerPrivateIp();
    const publicIp = await serverPublicIp();
    const data = {
        "ping": "Pong",
        "public ip": publicIp,
        "private ip": privateIp,
    }
    res.json(data)
});

// Start the server on port 80
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
