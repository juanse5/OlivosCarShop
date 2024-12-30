import axios from 'axios';

export const registerUserProfile = async (userProfile) => {
  const response = await axios.post('/api/InfoUsers', userProfile);
  return response.data;
};
