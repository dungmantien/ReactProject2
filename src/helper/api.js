export const getProducts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    return { error: err.message };
  }
};

