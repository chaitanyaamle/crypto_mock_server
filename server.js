const express = require('express'); // Importing the Express library for creating the server
const http = require('http'); // Core HTTP module to integrate with Socket.IO
const { Server } = require('socket.io'); // Importing Socket.IO for real-time communication

const app = express(); // Initializing the Express app
const server = http.createServer(app); // Creating an HTTP server
const io = new Server(server); // Initializing Socket.IO with the server
const port = 3000; // Port where the server will listen

app.get('/', (req, res) => {
    res.send("Crypto Server is running..");
})

// Mock data for cryptocurrencies
const cryptos = [
    { name: 'Bitcoin', symbol: 'BTC', value: 50000, changePer: 0 },
    { name: 'Ethereum', symbol: 'ETH', value: 3500, changePer: 0 },
    { name: 'Ripple', symbol: 'XRP', value: 1.2, changePer: 0 },
    { name: 'Litecoin', symbol: 'LTC', value: 200, changePer: 0 }
];

// Function to simulate value changes for cryptocurrencies
function updateCryptoValues() {
    cryptos.forEach(crypto => {
        // Randomly increase or decrease the value by up to 5%
        const changePercent = (Math.random() * 10 - 5) / 100;
        crypto.changePer = changePercent * 100;
        crypto.value = parseFloat((crypto.value * (1 + changePercent)).toFixed(2));
    });
    io.emit('cryptoUpdate', cryptos.toString); // Emit updated values to all connected clients
}

// Endpoint to get the current values of cryptocurrencies
app.get('/cryptos', (req, res) => {
    res.json(cryptos); // Send the updated crypto values as a JSON response
});

// Simulate value changes every second
setInterval(updateCryptoValues, 1000);

// Handle client connections with Socket.IO
io.on('connection', (socket) => {
    console.log('A client connected');

    // Send initial crypto values to the client
    socket.emit('cryptoUpdate', cryptos.toString);

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Crypto server is running at http://localhost:${port}`);
});
