// Fetch data from API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Access the list container element
    const dataList = document.getElementById('data-list');

    // Iterate over the data and create list items
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.title; // Assuming each item has a "title" property
      dataList.appendChild(listItem);
    });
  });