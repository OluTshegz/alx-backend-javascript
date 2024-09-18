// Display the welcome message when the program starts
console.log('Welcome to Holberton School, what is your name?');

// Listen for input from stdin (user input from the console)
process.stdin.on('data', (userInput) => {
  // Trim any extra whitespace and newlines from the input
  const name = userInput.toString().trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Exit the program after showing the name
  process.exit();
});

// Handle the 'exit' event of the process,
// showing a message before the program closes
process.on('exit', () => {
  console.log('This important software is now closing');
});
