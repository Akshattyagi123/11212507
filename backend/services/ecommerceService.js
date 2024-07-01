const axios = require('axios');
const { param } = require('../routes/productsRoutes');

const baseURL = 'http://20.244.56.144/test';
const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5ODIyNjA4LCJpYXQiOjE3MTk4MjIzMDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImMxNzM0ODM3LTBhZDctNGU0Mi05NDU2LWQ0ZTQwOGQwNmFlZiIsInN1YiI6ImFrc2hhdHQ5NjFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJjMTczNDgzNy0wYWQ3LTRlNDItOTQ1Ni1kNGU0MDhkMDZhZWYiLCJjbGllbnRTZWNyZXQiOiJuRnBkY0lKZVlwRlpGWlBkIiwib3duZXJOYW1lIjoiQWtzaGF0IFR5YWdpIiwib3duZXJFbWFpbCI6ImFrc2hhdHQ5NjFAZ21haWwuY29tIiwicm9sbE5vIjoiMTEyMTI1MDcifQ.5RwZ3Z2Urw8-nGBFqeaKTeC6NFGKzGnk-BbRIeidxpI';
const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
    const url = `${baseURL}/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    console.log(url)

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        throw error;
    }
};

module.exports = {
    fetchProducts
};