import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';
const CATEGORY_URL = 'https://fakestoreapi.com/products/categories';

const getProducts = () => {
    return axios.get(API_URL);
};

const getProductsByCategory = (category) => {
    return axios.get(`${API_URL}/category/${category}`);
};

const getCategories = () => {
    return axios.get(CATEGORY_URL);
};

export default { getProducts, getProductsByCategory, getCategories };
