let data=[];
const postContainer = document.querySelector('.card-container');

const getData = () =>{
    
    fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json => {
                // Store the API response in the variable
                data = json;
        
                console.log(json)
                postMethods(data);
            });
            
}

const postMethods = (data)=>{
    data.map((postData)=>{
        console.log(postData)
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML=`
        <img src=${postData.image}
        alt="no image from this url"
        style="width: 100%;height: 200px;object-fit: cover;"
        >
        <h3 class="card-heading">${postData.title}</h3>
        <p class="card-body"> ${postData.description}</p>
        <p class="card-body">${postData.price}</p>
        
        `
        postContainer.appendChild(postElement)
    })
}
<<<<<<< HEAD
postMethods()
getData();
=======

getData();
postMethods()
>>>>>>> 991ef84fe1e95ff1e4a1a7fa67d7b88e7d4d60e5
