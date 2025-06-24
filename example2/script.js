function calculateHash() {
      const input = document.getElementById("inputText").value;
      if (!input) {
        document.getElementById("output").innerHTML = `<p style="color: red;">Please enter some text to hash.</p>`;
        return;
      }
      // Calculate Keccak-256 hash using js-sha3
      const hash = sha3_256(input);
      // Display the hash
      document.getElementById("output").innerHTML = `<h3>Output:</h3><p>${hash}</p>`;
    }