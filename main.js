var  canvas = new fabric.Canvas("myCanvas"); 
player_object = "";
block_object = "";
player_x = 10;
player_y = 10;
block_object_width = 30;
block_object_height = 30;
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_object= Img;
        block_object.scaleToWidth(block_object_width);
        block_object.scaleToHeight(block_object_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
      keypress = e.keyCode;
      if (e.shiftKey == true && keypress == "80"){
          block_object_width = block_object_width + 10;
          block_object_height = block_object_height + 10;
          document.getElementById("current_width").innerHTML = block_object_width;
          document.getElementById("current_height").innerHTML = block_object_height;
      }
      if (e.shiftKey == true && keypress == "77"){
        block_object_width = block_object_width - 10;
        block_object_height = block_object_height - 10;
        document.getElementById("current_width").innerHTML = block_object_width;
        document.getElementById("current_height").innerHTML = block_object_height;
      }
       if (keypress == "38"){
           up();
       }
       if (keypress == "40"){
          down();
       }
       if (keypress == "37"){
         left();
       } 
       if (keypress == "39"){
         right();
       }
       if (keypress == "84"){
          new_image("trunk.jpg");
       }
       if (keypress == "68"){
           new_image("dark_green.png");
       }
       if (keypress == "76"){
         new_image("light_green.png");
       }
       if (keypress == "71"){
         new_image("ground.png");
       }
       if (keypress == "87"){
         new_image("wall.jpg");
       }
       if (keypress == "89"){
         new_image("yellow_wall.png");
       }
       if (keypress == "82"){
         new_image("roof.jpg");
       }
       if (keypress == "67"){
         new_image("cloud.jpg");
       }
       if (keypress == "85"){
         new_image("unique.png");
       }
}

function down(){
    if (player_y <= 290){
        player_y = player_y + block_object_height;
        canvas.remove(player_object);
        player_update();
    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - block_object_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - block_object_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <= 860){
        player_x = player_x + block_object_height;
        canvas.remove(player_object);
        player_update();
    }
}