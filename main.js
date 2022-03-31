canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var mouseEvent = "empty";


color="blue";
width=2;



canvas.addEventListener("mouseDown" , my_mouseDown);
function my_mouseDown (e) {
     
      
     radius=document.getElementById("radius_input").value;
     color=document.getElementById("color_input").value;
     width=document.getElementById("width_input").value;
mouseEvent="mouseDown"
console.log("mouseDown");
      
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e) {
mouseEvent="mousemove";
     current_position_of_X = e.clientX - canvas.offsetLeft;
     current_position_of_Y = e.clientY - canvas.offsetTop;

     if(mouseEvent == "mouseDown"){
          console.log("current x coordinates are " + current_position_of_X );
          console.log("current y coordinates are " + current_position_of_Y );
         
          ctx.beginPath();
          ctx.lineWidth=width;
          ctx.strokeStyle=color;
          ctx.arc(current_position_of_X , current_position_of_Y , radius , 0 , 2*Math.PI);
          ctx.Stroke();
     }
     
    
    
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
     mouseEvent="mouseUP";
     console.log("mouseUP");
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave (e) {
     mouseEvent="mouseLeave";
     console.log("mouseleave");
}
