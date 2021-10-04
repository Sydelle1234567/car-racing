canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "red.png";
car2_x = 10;
car2_y = 100;

background_img="racing.jpg";

function add(){
    b_img=new Image();
    b_img.onload=uploadbackground;
    b_img.src=background_img;
    
    car1_img=new Image();
    car1_img.onload=uploadcar1;
    car1_img.src=car1_image;

    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=car2_image;
}

function uploadbackground(){
    ctx.drawImage(b_img,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress=="38"){
        up();
    }

    if(keypress=="40"){
        down();
    }

    if(keypress=="37"){
        left();
    }

    if(keypress=="39"){
        right();
    }
    if(keypress=="87"){
        car2_up();
    }

    if(keypress=="83"){
        car2_down();
    }

    if(keypress=="65"){
        car2_left();
    }

    if(keypress=="69"){
        car2_right();
    }
    if(car1_x>700){
        console.log("car1 won")
        document.getElementById('game_status').innerHTML = "Car 1 Won ! !"
    }
    else if(car2_x>700){
        console.log("car1 won")
        document.getElementById('game_status').innerHTML = "Car 2 Won ! !"
    }
}

function up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function down(){
    if(car1_y<=700){
        car1_y=car1_y+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down(){
    if(car2_y<=700){
        car2_y=car2_y+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}