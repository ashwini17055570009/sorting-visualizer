function swap(el1,el2){
  console.log('In swa()');

  let temp=el1.style.height;
  el1.style.height=el2.style.height;
  el2.style.height=temp;
}
// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}
// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

//disables newArray button so that we can disable it during Sorting
function disableNewArrayBtn(){
  document.querySelector(".newArray").disabled=true;
}
//enables newArray buttoons used in conjunction with disable
function enableNewArrayBtn(){
  document.querySelector(".newArray").disabled=false;
}
//used in sync function so that we can so animations of sorting takes input time in ms(1000=12)
function waitforme(milisec){
  return new Promise(resolve=>{
    setTimeout(()=>{resolve('')},milisec);
  })
}
//selecing size slider from DOM
let arraySize=document.querySelector('#arr_sz');

//Event listener to update bars on the UI
arraySize.addEventListener('input',function(){
  console.log(arraySize.value,typeof(arraySize.value));
  createNewArray(parseInt(arraySize.value));
});
//default input for wait for me function
let delay=260;

//selcting speed slider from dom
let delayElement=document.querySelector('#speed_input');

//eventlistener to update dalay time
delayElement.addEventListener('input',function(){
  console.log(delayElement.value,typeof(delayElement.value));
  delay=320-parseInt(delayElement.value);
})
//creating array to store randomly generated numbers
let array=[];
//call to display bar right when you visit the site
createNewArray();

//to create new Array
function createNewArray(noOfBars=60){
  //calling helper function to delete old bars from dom
  deleteChild();
  //creating an array of random numbers
  array=[];
  for(let i=0;i<noOfBars;i++){
    array.push(Math.random()*250)+1;
  }
  console.log(array);

  //select the #bars element
  const bars=document.querySelector("#bars");

  for(let i=0;i<noOfBars;i++){
    const bar=document.createElement("div");
    bar.style.height=`${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}
//deleting previous bars so that new can be added
function deleteChild(){
  const bar=document.querySelector("#bars");
  bar.innerHTML='';
}

//selecting newarray button from DOM and adding eventlistener
const newArray=document.querySelector(".newArray");
newArray.addEventListener("click",function(){
  console.log("from newArray "+arraySize.value);
  console.log("from newArray "+delay);
  //enableSortingBtn();
  //enableSizeSlider();
  createNewArray(arraySize.value);
});
