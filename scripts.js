const elements = document.querySelectorAll("[draggable = 'true']") //Selecting all draggable elements.
const elements2 = document.querySelector("#putitens") //Same select.

elements.forEach((elements) => {
    elements.addEventListener('dragstart', startedDrag) //Calling function startedDrag for 'dragstart' event.
}) //dragstart if for when you start drag some elements draggable.

function startedDrag(){ //Function statedDrag, showing on console when the elements were dragged.
    console.log('Started Drag')
    this.classList.add('draggingitem') //Add a class for current dragging item.
}

elements2.addEventListener('dragover', endDrag) //Calling function endDrag for 'dragover' event.
 //dragover it's for any moment you pass by a dragover region, where you can let your element. 

function endDrag(){
    console.log('End Drag')
    const draggingitem = document.querySelector('.draggingitem') //Selecting class of current dragging item
    this.appendChild(draggingitem)
}