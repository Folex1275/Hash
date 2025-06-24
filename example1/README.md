SHA-256 Hash Generator
A simple web application to generate SHA-256 hashes from user input using Vanilla JavaScript and the crypto-js library.
Features

Dynamic input field for entering text to hash.
Generates SHA-256 hashes instantly upon button click.
Input validation to prevent empty submissions.

Setup

Clone or download the repository.
Open index.html in a modern web browser (no server required, as it uses a CDN for dependencies).
Alternatively, if using a local setup:
Install crypto-js via npm: npm install crypto-js.
Update the script tag to import the local crypto-js.min.js file.



Usage

Open the application in a browser.
Enter text in the input field (e.g., "hello" or "Morning").
Click the "Generate SHA-256 Hash" button.
View the resulting 64-character hexadecimal hash below the button.

Dependencies

crypto-js (v4.1.1, included via CDN)

Example

Input: hello
Output: 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
