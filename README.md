# hello-world-backend

A simple Node.js Express server with a "Hello World" endpoint.

## Installing Git on Windows

1. **Download Git**
   - Visit the [Git for Windows](https://git-scm.com/download/win) website
   - The download should start automatically. If not, click on the download link

2. **Install Git**
   - Run the downloaded Git installer
   - Accept the license agreement and click "Next"
   - Choose the installation location (default is recommended) and click "Next"
   - Select components (default options are recommended) and click "Next"
   - Choose the default editor (Notepad is simplest for beginners, but you can choose VS Code or others if preferred)
   - Adjust the PATH environment settings (recommended: "Git from the command line and also from 3rd-party software")
   - Configure line ending conversions (recommended: "Checkout Windows-style, commit Unix-style line endings")
   - Configure the terminal emulator (recommended: "Use Windows' default console window")
   - Configure extra options (defaults are recommended)
   - Click "Install"

3. **Verify Installation**
   - Open Command Prompt
   - Type `git --version`
   - If installed correctly, you should see the Git version number

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Setup and Running on Windows

1. **Install Node.js and npm**
   - Download the Node.js installer from the [official website](https://nodejs.org/)
   - Run the installer and follow the instructions
   - Verify installation by opening Command Prompt and typing:
     ```
     node --version
     npm --version
     ```

2. **Clone or download this repository**
   - Download and extract the ZIP file or clone using Git:
     ```
     git clone [repository-url]
     ```

3. **Install dependencies**
   - Open Command Prompt
   - Navigate to the project directory:
     ```
     cd path\to\hello-world-backend
     ```
   - Install the required packages:
     ```
     npm install
     ```

4. **Run the server**
   - Start the server with:
     ```
     node server.ts
     ```
   - You should see: `Server is running on http://localhost:3000`

## Available Endpoints

- **GET /** - Returns a welcome message
- **GET /hello** - Returns a JSON response with a "Hello, World!" message

## Testing with Postman

### Installing Postman

1. Download Postman from the [official website](https://www.postman.com/downloads/)
2. Run the installer and follow the prompts
3. Launch Postman after installation

### Testing Endpoints with Postman

1. **Launch Postman**

2. **Create a new request**
   - Click the "+" button to create a new request tab

3. **Testing the root endpoint**
   - Set the request type to "GET" using the dropdown
   - Enter the URL: `http://localhost:3000/`
   - Click "Send"
   - You should receive the welcome message in the response

4. **Testing the hello endpoint**
   - Set the request type to "GET"
   - Enter the URL: `http://localhost:3000/hello`
   - Click "Send"
   - You should receive a JSON response: `{ "message": "Hello, World!" }`

## Stopping the Server

- To stop the server, press `Ctrl+C` in the Command Prompt window where the server is running
