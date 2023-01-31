let screen=document.getElementById("screen")
let buttons=document.querySelectorAll("button")
let input="";
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log("button text is " , buttonText);
    })
}