// ok1=getElement('#ok1'),
// ok2=getElement('#ok2'),
// one=getElement('#one'),
// two=getElement('#two'),
// three=getElement('#three'),
// four=getElement('#four'),
// five=getElement('#five'),
// six=getElement('#six'),
// seven=getElement('#seven'),
// eight=getElement('#eight'),
// nine=getElement('#nine'),
// zero=getElement('#zero'),
// star=getElement('#star'),
// hash=getElement('#hash');
// end getting ellements

// // //
   
//      switch(clickBtn){
//          case '1': 
//              textArea.textContent +=1;
//              break
//         case '2':
//              textArea.textContent +=2
//              break
//         case '3':
//              textArea.textContent +=3;
//              break
//        case '4':
//              textArea.textContent +=4;
//              break
//        case '5':
//              textArea.textContent +=5;
//              break
//        case '6':
//              textArea.textContent +=6;
//              break
//        case '7':
//              textArea.textContent +=7;
//              break 
//      case '8':
//                 textArea.textContent +=8;
//                 break
//     case '9':
//                 textArea.textContent +=9;
//                 break
//     case '*':
//                     textArea.textContent +='*';
//                     break
//     case '#':
//                     textArea.textContent +='#';
//                     break
//     case '0':
//                     textArea.textContent +=0;
//                     break
//      }
// functions that changes string into number
// isNaN ()
// isFinite()
// +()
// parseInt();


//  //  //  //
function getElement(elem){
    return document.querySelector(elem)
}

let downPart=getElement('.down-part'),
apPart=getElement('.up-part')
textArea=getElement('#screen1'),
display=document.querySelector('.display'),
lastCalls=document.querySelector('.last-cals');

function getStyle(elem,style){
    return elem.style.display=style;
}

downPart.addEventListener('click',dailNumberFunc);
apPart.addEventListener('click', okAndCancelFunc);

function dailNumberFunc(e){
    let clickBtn=e.target.textContent; 
    display.style.display='none';
    textArea.style.display='block';  
    let dailNumber=['1','2','3','4','5','6','7','8','9','0','*','#'];  
    let addingNumber=dailNumber.find(elem=>{
     return clickBtn===elem?elem:null;    })
     if(addingNumber===undefined){
            
     }  else{             
           if(textArea.textContent.length>=7){
                 textArea.style.fontSize='1.5em'; 
           }
            if(textArea.textContent.length>=20){
                 textArea.style.fontSize='1em';
                 return
           }
           textArea.textContent += addingNumber;            
     }    


}