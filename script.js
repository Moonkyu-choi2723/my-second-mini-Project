'use strict';

const show = () =>{

const select = document.getElementById('select');
const selectValue = select.value;

const text = document.getElementById('text');
const textValue = text.value;

const timeone = document.getElementById('time1');
const timeoneValue = timeone.value;

const timetwo = document.getElementById('time2');
const timetwoValue = timetwo.value;



if (selectValue === "" || textValue === ""){
    alert ('Add your Plan')
}

else if(timeoneValue === "" || timetwoValue === ""){
    alert ('Add your Time')
}

else if(timeoneValue >= timetwoValue){
    alert('Check your Time');
}


else {                                                                                            
const orderList = document.getElementById('orderList')                                            
                                                                                                  
const li = document.createElement('li');          
                                                                                                        
const checkbox = document.createElement('input');                                                 
checkbox.type = "checkbox";                                                                       
const complete = document.createElement('input');                                                 
complete.type = "button"                                                                          
complete.value = 'complete'                                                                       
                                                                                                   

orderList.appendChild(li);
li.appendChild(checkbox);

const allValue = document.createTextNode(`${selectValue} : ${textValue} / ${timeoneValue} ~ ${timetwoValue}`);
li.appendChild(allValue);
li.appendChild(complete);



complete.addEventListener('click' , () => {
    if(checkbox.checked === true){
    li.style.color = 'gray' ;
    li.style.textDecoration = 'line-through';
    checkbox.checked = false;
    alert('COMPLETE / *리스트를 더블클릭하면 복구가 됩니다.*' );
    }
})

li.addEventListener('dblclick' , () => {
    li.style.color = 'black';
    li.style.textDecoration = 'none';
})





document.getElementById('select').value = "";
document.getElementById('text').value = ""; 
document.getElementById('time1').value = "";
document.getElementById('time2').value = "";




}
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click' , show);


// ------------------------------------------------------------------------------------------------------------------------------------------------------- //

                                                                                                 
const Select = document.querySelector('#Select');                                                
Select.addEventListener('click' , ()=>{                                                          
    const checkbox = document.querySelectorAll('#orderList input[type="checkbox"]')

    let count = 0;
    for(let value of checkbox){
        if(value.checked === true){
            count++
        };
    }
    if(count === checkbox.length) {
        for(let i = 0; i < checkbox.length; i++){
            checkbox[i].checked = false;
        }    
    }


    else{
    for(let i = 0; i < checkbox.length; i++){
        checkbox[i].checked = true ;
    }
    }
})

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //

                                                                                                
const Delete = document.querySelector('#Delete');

Delete.addEventListener('click' , () =>{
    const orderList = document.getElementById('orderList');
    const checkbox = document.querySelectorAll('#orderList input[type="checkbox"]');

for (let value of checkbox){    
        if(value.checked === true){
            const all = value.parentNode;
            orderList.removeChild(all);
        }
    }
})


// ------------------------------------------------------------------------------------------------------------------------------------------------------- //


