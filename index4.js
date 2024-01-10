const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["indiogo","blue","pink","red","green","yellow","orange"];
body.style.backgroundColor='black';
document.querySelector("button").addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];

});