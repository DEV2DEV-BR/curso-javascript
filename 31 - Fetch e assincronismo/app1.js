let result = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    result = json;

    for (const item of result) {
      console.log(item.name);
    }
  });
