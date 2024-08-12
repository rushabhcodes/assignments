const fs = require("fs");

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  // Print file contents to the console
  console.log("File contents:", data);

  // Perform an expensive operation
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  console.log("Expensive operation result:", sum);
});
