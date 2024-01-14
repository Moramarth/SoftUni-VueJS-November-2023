import axios from 'axios';

async function loginUser(userData) {
  try {
    const res = await axios.post('https://dummyjson.com/auth/login', userData);
    return res.data;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

export { loginUser };
