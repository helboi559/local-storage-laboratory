let formStr = document.querySelector('#save-str-form');
let inputStr = document.querySelector('#inputted-str')
let displayStr = document.querySelector('#displayed-str')

//create a place to save info
let savedStrInfo = localStorage.getItem('savedStrInfo') ;

//set placeholder info
//if it doesnt have info display data
if (savedStrInfo === null) {
    displayStr.innerText = "this is playholder"
} else {
    displayStr.innerText = savedStrInfo
}
//convert info and store it 
formStr.addEventListener('submit', (event)=> {
    event.preventDefault();
    localStorage.setItem("savedStrInfo", inputStr.value) ;
})