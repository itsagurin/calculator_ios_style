# iOS Style Calculator

A simple web-based calculator inspired by the iOS calculator, built with vanilla JavaScript, HTML, and CSS. This calculator supports basic arithmetic operations, real-time calculation display, and additional features like backspace and toggle sign (`+/-`).

![Screenshot 2024-10-19 180510](https://github.com/user-attachments/assets/1b0ec80a-ac83-42b4-b142-4a7d1f2bf5a3)

## Features

- Addition, subtraction, multiplication, and division.
- Real-time calculation results displayed.
- Toggle between positive and negative numbers.
- Clear all (`AC`) and backspace functionality.
- Simple and clean iOS-style design.


### File Descriptions

- **backend/calculator.js**: Contains the main JavaScript logic for handling button clicks, performing calculations, and updating the display.
- **public/index.html**: The main HTML file that sets up the calculator layout and includes links to the CSS and JavaScript files.
- **public/style.css**: Provides the styling to mimic the iOS calculator look and feel.
- **index.js**: Node.js server configuration to serve the static files.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ios-style-calculator.git
   cd ios-style-calculator

2. Run the server:

   ```bash
   node server.js

3. Open your web browser and go to http://127.0.0.1:3000

## Usage

Click on the number buttons (0-9) to input numbers.
Click on the operator buttons (+, -, ×, ÷) to perform operations.
Use the AC button to clear all input.
Use the backspace button to delete the last digit entered.
Toggle the sign of a number using the +/- button.
Press = to see the final result.

## License

This project is licensed under the MIT License
