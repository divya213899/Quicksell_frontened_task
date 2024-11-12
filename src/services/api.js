// src/services/api.js
export const fetchTickets = async () => {
  try {
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    if (!response.ok) throw new Error('Failed to fetch tickets');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
};
