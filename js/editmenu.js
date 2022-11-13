

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
    label: "Margarita",
    pictureUrl:"./images/editmenu/margarita.jpg",
    imageAlt: "Margarita"
  },
  {
    id: 3,
    label: "Margarita",
    pictureUrl:"./images/editmenu/margarita.jpg",
    imageAlt: "Margarita"
  },
  {
    id: 4,
    label: "Margarita",
    pictureUrl:"./images/editmenu/margarita.jpg",
    imageAlt: "Margarita"
  },
  {
    id: 5,
    label: "Margarita",
    pictureUrl:"./images/editmenu/margarita.jpg",
    imageAlt: "Margarita"
  }
];


let offMenuArray = [
    {
      id: 6,
      label: "Margarita",
      pictureUrl:"./images/editmenu/margarita.jpg",
      imageAlt: "Margarita"
    },
    {
      id: 7,
      label: "Margarita",
      pictureUrl:"./images/editmenu/margarita.jpg",
      imageAlt: "Margarita"
    },
  ];



function createOnMenu(){
let htmlCode = '';
htmlCode =
htmlCode +
`
<div class="container-fluid mt-4">
<div class="row justify-content-center">
`

onMenuArray.forEach(function(onMenuObjects) {
  htmlCode =
    htmlCode +
    `
    <div class="col-auto mb-3">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${onMenuObjects.pictureUrl}" alt="${onMenuObjects.imageAlt}">
        <div class="card-body">
        <h5 class="card-title">${onMenuObjects.label}</h5>
        <a href="#" class="btn btn-danger" onclick="removeItem(${onMenuObjects.id});">Remove</a>
    </div>
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
  <div class="container-fluid mt-4">
    <div class="row justify-content-center">
`

offMenuArray.forEach(function(offMenuObjects) {
  htmlCode =
    htmlCode +
    `
    <div class="col-auto mb-3">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${offMenuObjects.pictureUrl}" alt="${offMenuObjects.imageAlt}">
        <div class="card-body">
        <h5 class="card-title">${offMenuObjects.label}</h5>
        <a href="#" class="btn btn-success" onclick="addItem(${offMenuObjects.id});">Add</a>
    </div>
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