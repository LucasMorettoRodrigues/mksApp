import axios from "axios";

export async function fetchData() {
  try {
    const res = await axios.get(
      "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC"
    );
    return res.data.products;
  } catch (err) {
    console.log(err);
  }
}
