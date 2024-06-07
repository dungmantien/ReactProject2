import { getProducts } from "../helper/api.js";

const Home = {
  render: async () => {
    const data = await getProducts();
    console.log(data.userId);
    return `<div>Home</div>`;
  },
  after_render: async () => {}
};
export default Home;
