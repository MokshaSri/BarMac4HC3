

// we will create an array of JS objects with the properties of our elephants

// we use const here cause the variable doesn't change after

// we have 4 items inside the array, each item is an object with 6 properties. An id, title, color, age, image and alt description.

let onMenuArray = [
  {
    id: 1,
    label: "Margarita",
    pictureUrl:"./images/editmenu/margarita.jpg",
    imageAlt: "Margarita"
  },
  {
    id: 2,
    label: "Clover Cocktail",
    pictureUrl:"./images/editmenu/cloverclub.jpg",
    imageAlt: "Clover Cocktail"
  },
  {
    id: 3,
    label: "Fruit Cocktail",
    pictureUrl:"./images/editmenu/fruitblast.jpg",
    imageAlt: "Fruit Cocktail"
  },
  {
    id: 4,
    label: "Grasshopper",
    pictureUrl:"./images/editmenu/grasshopper.jpg",
    imageAlt: "Grasshopper"
  },
];


let offMenuArray = [
    {
      id: 5,
      label: "Paloma",
      pictureUrl:"./images/editmenu/paloma.jpg",
      imageAlt: "Paloma"
    },
    {
      id: 6,
      label: "Rainbow Cocktail",
      pictureUrl:"./images/editmenu/rainbow.jpg",
      imageAlt: "Rainbow Cocktail"
    },
    {
      id: 7,
      label: "Sunset Cocktail",
      pictureUrl:"./images/editmenu/sunset.jpg",
      imageAlt: "Sunset Cocktail"
    },
    {
    id: 8,
    label: "Rasberry Cocktail",
    pictureUrl:"./images/editmenu/cocktail.jpg",
    imageAlt: "Margarita"
  },
  ];



function createOnMenu(){
let htmlCode = '';
htmlCode =
htmlCode +
`
<div class="container py-2 yellowbox rounded >
<h2 class="font-weight-light">Active Menu Items</h2>
<div class="row flex-nowrap wrapScroll" >
`
onMenuArray.forEach(function(onMenuObjects) {
  htmlCode =
    htmlCode +
    `
    <div class="card" style="width: 200px; ">
        <img class="card-img-top" src="${onMenuObjects.pictureUrl}"  width="200" height="200" alt="${onMenuObjects.imageAlt}">
        <div class="card-body">
        <h5 class="card-title">${onMenuObjects.label}</h5>
        <a href="#" class="btn btn-danger" onclick="removeItem(${onMenuObjects.id});">Remove</a>
        </div>
    </div>
  `;
});
htmlCode =
htmlCode +
`</div>
</div>
`;


const onMenuCards = document.querySelector(".on-menu-cards");
onMenuCards.innerHTML = htmlCode;
}




function createOffMenu(){
let htmlCode = '';
htmlCode =
htmlCode +
`
<div class="container py-2 yellowbox rounded >
<h2 class="font-weight-light">Inactive Menu Items</h2>
<div class="row flex-nowrap wrapScroll" >
`

offMenuArray.forEach(function(offMenuObjects) {
  htmlCode =
    htmlCode +
    `
    <div class="card" style="width: 200px;">
        <img class="card-img-top" src="${offMenuObjects.pictureUrl}" width="200" height="200" alt="${offMenuObjects.imageAlt}">
        <div class="card-body">
        <h5 class="card-title">${offMenuObjects.label}</h5>
        <a href="#" class="btn btn-success" onclick="addItem(${offMenuObjects.id});">Add</a>
        </div>
    </div>
  `;
});
htmlCode =
htmlCode +
`</div>
</div>
`;

const offMenuCards = document.querySelector(".off-menu-cards");
offMenuCards.innerHTML = htmlCode;
}





function removeItem(itemId){

    const arrCopy = Array.from(onMenuArray);
    const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === itemId);

    offMenuArray.push(onMenuArray[objWithIdIndex]);
    arrCopy.splice(objWithIdIndex, 1);
    onMenuArray = arrCopy;


    createOnMenu();
    createOffMenu();


    

}


function addItem(itemId){

    const arrCopy = Array.from(offMenuArray);
    const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === itemId);

    onMenuArray.push(offMenuArray[objWithIdIndex]);
    arrCopy.splice(objWithIdIndex, 1);
    offMenuArray = arrCopy;


    createOnMenu();
    createOffMenu();


    

}


createOffMenu();
createOnMenu();