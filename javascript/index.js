let data = [];
const postContainer = document.querySelector('.card-container');

// Function to handle button click
document.getElementById("showButton").addEventListener("click", function () {
    // Get the value of the ID field
    var idValue = document.getElementById("id").value;
    // Print the ID value to the console
    console.log("ID:", idValue);


    fetch('https://fakestoreapi.com/products?limit='+idValue)
        .then(res => res.json())
        .then(json => {
            // Store the API response in the variable
            data = json;

            console.log(json)
            postMethods(data);
        });
});


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
