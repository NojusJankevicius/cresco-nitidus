export const getProducts = async () => {
  const res = await fetch('http://localhost:5000/api/products/');
  const data = await res.json();
  console.log(data);
};

export default {
  getProducts,
};
