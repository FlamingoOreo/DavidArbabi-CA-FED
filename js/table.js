const table = document.getElementById("personalTable");  // Targeting the table

const row1 = table.insertRow(1);  // Creating the rows
const row2 = table.insertRow(2);
const row3 = table.insertRow(3);
const row4 = table.insertRow(4);
const row5 = table.insertRow(5);

for(let i = 0; i<5;i++){            // Creating the cells 
    row1.insertCell(i);
    row2.insertCell(i);
    row3.insertCell(i);
    row4.insertCell(i);              
    row5.insertCell(i);

}

const rows = document.getElementsByTagName("tr");   // Targets all the rows
const icons = ["-circle","-square","-circle-fill","-square-fill","-circle"]; // The icons that we will use
const description = ["I like apples","I enjoy working out","I don't like drama","I love to help","Coding is fun!"]  // The descriptions we will use
const info = ["Food","Fitness","Social","Connections","Hobby"] // The info we will use
const images = ["./img/Apple.jpg","./img/Dumbell.jpg","./img/Drama.jpg","./img/Help.jpg","./img/Code.jpg"]  // The images we are using

for(let i = 1; i<6;i++){
    let currentRow = rows[i];
    currentRow.cells[0].innerHTML = i;   // Adds ID to all the rows
    currentRow.cells[1].setAttribute("class","bi-" + i + icons[i-1]) // Adds Icons to all the rows 
    currentRow.cells[2].innerHTML = description[i-1]; // Adds descriptions to all the rows
    currentRow.cells[3].innerHTML = info[i-1]; // Adds Info to all the rows
    currentRow.cells[4].innerHTML = '<img width=100px src=' + images[i-1] + " />" // Adds the image to all the rows
    
}

$(document).ready(function(){
    $("#personalTable img").on("click", function(){
        window.open(this.src);
    })
    $("#personalTable tr:odd").on("mouseenter mouseleave", highlight);
});

function highlight(){
   if($(this).css("color") == "rgb(255, 0, 0)"){
    $(this).css("color","rgb(33, 37, 41");
   }else{
    $(this).css("color","rgb(255, 0, 0)");
   }
   
   
};
