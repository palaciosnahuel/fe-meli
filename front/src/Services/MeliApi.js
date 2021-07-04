export const getProducts = async (query,limit=4) => {
    try {
      let url = `http://localhost:5000/api/items?q=${query}&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  