fetch('http://localhost:8088/eateries')
  .then(response => response.json())
  .then(data => console.log(data));