let data = [];

const postContainer = document.querySelector('.card-container');

const getData = () => {
  fetch('https://fakestoreapi.com/products/category/jewelery')
    .then((res) => res.json())
    .then((json) => {
      data = json;
      console.log(json);
      postMethods(data);
    });
};

const truncateWords = (text, limit) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
};

const postMethods = (data) => {
  data.map((postData) => {
    console.log(postData);
    const postElement = document.createElement('div');
    postElement.classList.add('card');
    postElement.innerHTML = `
     
      <img src=${postData.image} alt="no image from this url" style="width: 100%; height: 200px;">
      <h3 class="card-heading">${truncateWords(postData.title,5)}</h3>
      <p class="card-body">${truncateWords(postData.description, 10)}</p>
     
      <p class="card-body rate" > ${postData.rating.rate}</p>
      <p class="card-body" style="font-size:20px ; margin:10px">Rs. ${postData.price}</p>
    `;
    postContainer.appendChild(postElement);
  });
};

getData();
