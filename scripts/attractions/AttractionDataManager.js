fetch('http://localhost:8088/bizarreries')
  .then(response => response.json())
  .then(data => console.log(data));