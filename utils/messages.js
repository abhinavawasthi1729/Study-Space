// Handle time formatting
const moment = require('moment');

// Create formatted chat message
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a') // e.g., 3:45 pm
  };
}

// Export for reuse
module.exports = formatMessage;
