// Store connected users
const users = [];

// Add a new user to the chat
function userJoin(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}

// Retrieve a user by their socket ID
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// Remove a user when they leave the chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0]; // Return removed user
  }
}

// Get all users in a specific chat room
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

// Export functions for use in other files
module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
