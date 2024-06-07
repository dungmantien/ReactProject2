const Contact = {
  render: async () => {
    const data = await getProducts();
    console.log(data.userId);
    return `<div>Contact</div>`;
  },
  after_render: async () => {},
};
export default Contact;
