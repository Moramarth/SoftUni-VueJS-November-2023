import axios from 'axios';

async function getAllProducts() {
  try {
    const res = await axios.get('https://dummyjson.com/products');
    return res.data;
  }
  catch (error) {
    console.error(error);
    return {
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  }
}

async function getProductById(id) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

export { getAllProducts, getProductById };
