let productsArray = [{}];
const cardData =[
    {
        heading:'card 1',
        body:'this is card body1',
    },
    {
        heading:'card 2',
        body:'this is card body2'
    },{
        heading:'card 3',
        body:'this is card body3'
    },
    {
        heading:'card 4',
        body:'this is card body4'
    },
    {
        heading:'card 5',
        body:'this is card body5'
    },
    {
        heading:'card 6',
        body:'this is card body6'
    },
    {
        heading:'card 7',
        body:'this is card body7'
    },
    {
        heading:'card 8',
        body:'this is card body8'
    },
    {
        heading:'card 1',
        body:'this is card body1',
    },
    {
        heading:'card 2',
        body:'this is card body2'
    },{
        heading:'card 3',
        body:'this is card body3'
    },
    {
        heading:'card 4',
        body:'this is card body4'
    },
    {
        heading:'card 5',
        body:'this is card body5'
    },
];

const postContainer = document.querySelector('.card-container');

const getData = () =>{
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data => {
                // Store the data in the productsArray
                productsArray = data;
        
                // Now you can use productsArray as needed
                
                console.log(productsArray)
            })
            console.log("after")
            console.log(productsArray)
            console.log(productsArray);
            console.log("hi")
}


const postMethods = ()=>{
    cardData.map((postData)=>{
        console.log("pdata:"+postData)

        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML=`
        <h3 class="card-heading">${postData.heading}</h3>
        <p class="card-body">${postData.body}</p>
        
        `
        postContainer.appendChild(postElement)
    })
}
postMethods()
getData();