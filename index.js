// Code your solutions in this file

function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

function countDown(start) {
  let current = start;
  while (current >= 0) {
    console.log(current);
    current--;
  }
}

// Export functions for tests (if Node environment)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { writeCards, countDown };
}
