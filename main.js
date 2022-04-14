let formStr = document.querySelector('#save-str-form');
let inputStr = document.querySelector('#inputted-str')
let displayStr = document.querySelector('#displayed-str')

// // //create a place to save info
let savedStrInfo = localStorage.getItem('savedStrInfo');

//set placeholder info
//if it doesnt have info display data
if (savedStrInfo === null) {
    displayStr.innerText = "this is placeholder for string saver"
} else {
    displayStr.innerText = savedStrInfo
}
//convert info and store it 
formStr.addEventListener('submit', (event)=> {
    event.preventDefault();
    localStorage.setItem("savedStrInfo", inputStr.value) ;
})

//challenge 2: PAGE LOAD COUNTER
//get html elements
let formReload = document.querySelector('#form-reload-count')
// let reloadedStr = document.querySelector("#reload-count") 
let currentCount = document.querySelector('#current-count')

//set placeholder info
let totalCount = localStorage.getItem('totalCount');

// if total count value doesnt exist, create item and set to num
if(totalCount === null) {
    currentCount.innerText = "0"
    // console.log(reloadedStr)
} else {
    currentCount.innerText = parseInt(totalCount)
}

formReload.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("totalCount",currentCount.value += 1)
    

})


// challenege 3: list builder
//get html elements
let listForm =document.querySelector('#list-form-builder');
let listItemInput = document.querySelector("#inputted-list-item");
let fullList = document.querySelector("#full-list");
//get or create a list to store item
let savedListInfo = localStorage.getItem('savedListInfo')
// save the info in local storage
if(savedListInfo === null) {
    savedListInfo = []
} else {
    savedListInfo = JSON.parse(savedListInfo)
}
//get the data and store it in list
listForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    let internalItem = {
        itemName:listItemInput.value
    }
    let newItem = document.createElement("li")
    newItem.innerText = listItemInput.value
    savedListInfo.push(internalItem)
    fullList.appendChild(newItem)
    // console.log(savedListInfo)
    localStorage.setItem('savedListInfo',JSON.stringify(savedListInfo))
})
