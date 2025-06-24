Keccak-256 Hash Generator
A simple web application to generate Keccak-256 hashes from user input using Vanilla JavaScript and the js-sha3 library.
Features

Dynamic input field for entering text to hash.
Generates Keccak-256 hashes instantly upon button click.
Input validation to prevent empty submissions.

Setup

Clone or download the repository.
Open index.html in a modern web browser (no server required, as it uses a CDN for dependencies).
Alternatively, if using a local setup:
Install js-sha3 via npm: npm install js-sha3.
Update the script tag to import the local sha3.min.js file.



Usage

Open the application in a browser.
Enter text in the input field (e.g., "hello" or "Morning").
Click the "Generate Keccak-256 Hash" button.
View the resulting 64-character hexadecimal hash below the button.

Dependencies

js-sha3 (v0.8.0, included via CDN)

Example

Input: hello
Output: a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a
