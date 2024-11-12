export const getUserNameById = (users, userId) => {
  const user = users.find(user => user.id === userId);
  return user ? user.name : 'Unknown';
};

