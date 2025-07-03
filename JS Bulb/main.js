//title (yes you can do this too)
document.title = 'JS Only Bulb';

//Body styling
document.body.style.display = 'flex';
document.body.style.minHeight = '90svh';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';

//HTML Nodes creation
const container = document.createElement('section');
const bulb = document.createElement('div');
const lampHolder = document.createElement('div');
const lightSwitch = document.createElement('button');

//container styling
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';

//bulb styling
bulb.style.backgroundColor = 'gray';
bulb.style.padding = '1em';
bulb.style.minHeight = '200px';
bulb.style.minWidth = '200px';
bulb.style.maxHeight = '200px';
bulb.style.maxWidth = '200px';
bulb.style.borderRadius = '150px';
bulb.style.cursor = 'pointer';
bulb.style.transition = 'all 0.1s linear';
bulb.style.justifyContent = 'center';
bulb.style.alignItems = 'center';
bulb.style.textAlign = 'center';
bulb.style.display = 'flex';

//lamp holder styling
lampHolder.style.minHeight = '100px';
lampHolder.style.minWidth = '100px';
lampHolder.style.maxHeight = '100px';
lampHolder.style.maxWidth = '100px';
lampHolder.style.marginBottom = '16px';
lampHolder.style.backgroundColor = 'black';

//light switch styling
lightSwitch.innerHTML = 'Light Switch';
lightSwitch.style.padding = '1em';
lightSwitch.style.fontSize = '1em'
lightSwitch.style.margin = 'auto';
lightSwitch.style.cursor = 'pointer';


//Toggle Damaged
//This checks if the bulb has been touched 
//It is set to false as originally the bulb has not been touched

let isClicked = false;
 
//this is the script for what to do when the bulb is clicked/moved

bulb.addEventListener('click', ()=>{
  if(isClicked == false){
    isClicked = true; //set it to true telling the browser yes bro just clicked the bulb
    bulb.style.marginRight = '30px'; //then it moves the bulp to the left to show it has been misaligned
    console.log(isClicked)
  }
  else{
    isClicked = false; //when the user clicks/moves the bulb again it goes back to position
    bulb.style.marginRight = '0px'; //returns the bulb to aligned state
    console.log(isClicked)
  }
});


//Now pay attention (peep game & lock in let me cook)

//Toggle On/Off script

//originally this is just a normal script that when you press the button it toggles it from off/bg-gray to on/bg-yellow
// but remember is clicked that goes fron false to true whn clicked it will help change the color to red but only whwn we try to turn it on



lightSwitch.addEventListener('click', ()=>{
  if(bulb.style.backgroundColor == 'gray'){ //if the bulb is off/gray to goes in to our if condition to see if it is off or on
    

    if(isClicked == false){ 
      bulb.style.backgroundColor = 'yellow'; //if it has not been clicked/moved yellow else red 
      //it just a simple nested if but i thought it up by myself no AI so it was impressive in the moment
      bulb.innerHTML = '';
      console.log(isClicked)
    }else{
      bulb.style.backgroundColor = 'red';
      bulb.innerHTML = 'By touching the bulb you have moved it from the lamp holder click it again to position it well';
      console.log(isClicked)
    }
  }
  else{ //i mean nothing magical here else just toggles off/gray
    bulb.style.backgroundColor = 'gray';
    bulb.innerHTML = '';
  }
});

//this entire project was just an excuse to use append and appendChild also and .createElement

container.append(bulb,lampHolder,lightSwitch);  //append allows more than one node pr parameter


//Rendering on Page
document.body.appendChild(container) //allows only one


//Extra
//The Styling is just a flex body to centralize a section 
//and the section is flexed to centralize the contents (bulb, lamp holder and switch)
