# Crypto Server

This project is a simple server built using Node.js, Express, and Socket.IO to simulate cryptocurrency data updates in real-time. The server generates mock cryptocurrency data and sends updates to connected clients at regular intervals.

## Features

- **Real-time Updates**: The server simulates the price fluctuations of cryptocurrencies and sends updated values to all connected clients via Socket.IO.
- **API Endpoint**: The server provides a `/cryptos` endpoint to get the current values of cryptocurrencies in JSON format.
- **Randomized Price Simulation**: Cryptocurrency values change randomly by up to 5% every second to simulate market fluctuations.

## Technologies Used

- **Node.js**: JavaScript runtime used for server-side development.
- **Express**: Framework for building the web server and handling API requests.
- **Socket.IO**: Library for real-time communication between the server and clients.
- **HTTP Module**: Core Node.js module used to integrate Express with Socket.IO.

## Prerequisites

- Node.js (version 14.x or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/crypto-server.git
    cd crypto-server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Running the Server

Once you have installed the dependencies, you can start the server by running:

    npm start

## Running the Server with Docker
If you prefer to run the server in a Docker container, follow these steps:

1. Build the Docker image:
    ```
    docker build -t crypto-server .
    ```
    
2. Run the Docker container:
    ```
    docker run -p 3000:3000 crypto-server
    ```

## Available Endpoints

- **GET /:** Returns a simple message to indicate that the server is running.

Example:
    Crypto Server is running..

- **GET /cryptos:** Returns the current cryptocurrency values in JSON format.

Example response:

    [
     {
        "name": "Bitcoin",
        "symbol": "BTC",
        "value": 50000,
        "changePer": 0,
        "history": []
     },
     {
        "name": "Ethereum",
        "symbol": "ETH",
        "value": 3500,
        "changePer": 0,
        "history": []
     },
     {
        "name": "Ripple",
        "symbol": "XRP",
        "value": 1.2,
        "changePer": 0,
        "history": []
     },
     {
        "name": "Litecoin",
        "symbol": "LTC",
        "value": 200,
        "changePer": 0,
        "history": []
     }
    ]

## Real-time Data (Socket.IO)
Once connected to the server using Socket.IO, clients will receive updates every second with the latest cryptocurrency prices.

## How it Works
1. The server initializes with mock data for several cryptocurrencies (Bitcoin, Ethereum, Ripple, and Litecoin).
2. Every second, the server updates the values of these cryptocurrencies by randomly changing them within a range of -5% to +5%.
3. The updated values are emitted to all connected clients via Socket.IO.
4. Clients can also access the /cryptos endpoint to get the current values of the cryptocurrencies in JSON format.

## Notes
- The values of the cryptocurrencies are randomly generated and do not reflect real-world data.
- The client needs to establish a WebSocket connection with the server to receive real-time updates.
