// start minimazing functions
function getElement(elem){
    return document.querySelector(elem)
}
// function getStyle(elem,style){
//       return elem.style.display=style;
//   }
function showHideDisplays(last,disp,textA){
      lastCalls.style.display=last;
     display.style.display=disp;
     textArea.style.display=textA;      
}

// end minimazing functions

// global variabless
      let callingNum=[];
// global variabless

// start getting ellements
let downPart=getElement('.down-part'),
apPart=getElement('.up-part')
textArea=getElement('#screen1'),
display=document.querySelector('.display'),
lastCalls=document.querySelector('.last-cals');
// Start Events
downPart.addEventListener('click',dailNumberFunc);
apPart.addEventListener('click', okAndCancelFunc)
// End Events

// start functions
function dailNumberFunc(e){           
     let clickBtn=e.target.textContent; 
     showHideDisplays('none','none','block')
     let dailNumber=['1','2','3','4','5','6','7','8','9','0','*','#'];  
     let addingNumber=dailNumber.find(elem=>{
      return clickBtn===elem?elem:null;    })
      if(addingNumber===undefined){
         return;    
      }  else{             
            if(textArea.textContent.length>=7){
                  textArea.style.fontSize='1.5em'; 
            }
             if(textArea.textContent.length>=20){
                  textArea.style.fontSize='1em';
            }
            if(textArea.textContent.length>=30){
                  return
            }
            textArea.textContent += addingNumber;            
      } }  

function okAndCancelFunc(e){
let clasBack=e.target.classList;
if(clasBack.contains('ok1')){
      showHideDisplays('block','none','none') 
     lastCalls.insertAdjacentHTML('afterbegin',`<p>0634608385 </p> `)           
}
else if(clasBack.contains('ok2')){
      showHideDisplays('none','none','none') 
      edahabFun(); 
}
else if(clasBack.contains('ok3')){

}
else if(clasBack.contains('exit')){
      if(textArea.style.display='block'){
            let numbers=textArea.textContent;
             if(numbers.length<=1){
                   textArea.textContent='';
                   showHideDisplays('none','block','none') 
             } 
             else{
                  numbers= numbers.slice(0,numbers.length-1)
                  textArea.textContent=numbers;   
             }
      }
}
else if(clasBack.contains('clear')){
      textArea.textContent='';
      showHideDisplays('none','block','none')
}
}
// start edahab function
function edahabFun(e){
       
}
// end edahab function
//end functions
// Start Hide Function 
function hide(textArea,){

}
// End Hide Function




 

  
 