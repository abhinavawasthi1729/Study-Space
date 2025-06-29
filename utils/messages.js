// Import the 'moment' library to handle date/time formatting
const moment = require('moment');

/*
This function creates a formatted chat message object.
It includes:
- `username`: who sent the message
- `text`: the message content
- `time`: current time in 'h:mm a' format (e.g., 3:45 pm)
*/
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a') // Format current time as hour:minute am/pm
  };
}

// Export the function so it can be used in other files (e.g., chat server)
module.exports = formatMessage;
