async function selection(){
  console.log('In selection()');
  const ele=document.querySelectorAll(".bar");
  for(let i=0;i<ele.length;i++){
    console.log('tn ith loop');
    let min_index=i;
    //change color of the position to swap with the next min
    ele[i].style.background='blue';
    for(let j=i+1;j<ele.length;j++){
      console.log('in jth loop');
      ele[j].style.background='red';

      await waitforme(delay);
      if(parseInt(ele[j].style.height)<parseInt(ele[min_index].style.height)){
        console.log('in if condition height comparison');
        if(min_index!==i){
          ele[min_index].style.background='cyan';
        }
        min_index=j;
      }
      else{
        ele[j].style.background='cyan';
      }
    }
    await waitforme(delay);
    swap(ele[min_index],ele[i]);
    //change the min element index back to normal as it is swapped
    ele[min_index].style.background='cyan';
    //change the sorted elements color to green
    ele[i].style.background='green';
  }
}

const selectionSortbtn=document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click',async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})
