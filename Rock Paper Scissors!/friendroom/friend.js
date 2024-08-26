const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");

const min = 1000;
const max = 9999;
let randomNum1;

myButton.onclick = function()
{
    randomNum1 = Math.floor(Math.random() * max) + min;
    if(randomNum1>=10000)
    {
        randomNum1=randomNum1-1000;
    }
    label1.textContent = randomNum1;
}
