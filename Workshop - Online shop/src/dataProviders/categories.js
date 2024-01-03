import axios from 'axios';

async function getAllCategories() {
  try {
    const res = await axios.get('https://dummyjson.com/products/categories');
    return res.data;
  }
  catch (error) {
    console.error(error);
    return [];
  }
}

export { getAllCategories };
