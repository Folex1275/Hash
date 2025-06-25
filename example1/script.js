function calculateHash() {
      const input = document.getElementById("inputText").value;
      if (!input) {
        document.getElementById("output").innerHTML = `<p style="color: red;">Please enter some text to hash.</p>`;
        return;
      }
      
      const hash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
      document.getElementById("output").innerHTML = `<h3>Output:</h3><p>${hash}</p>`;
    }