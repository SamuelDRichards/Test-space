//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let sx = 180 //lets you adjust the shape of the mouth
  let sy = 0 //lets you adjust the shape of the mouth
  let hx = 120 //lets you adjust the placement of the face
  let hy = 50 //lets you adjust the placement of the face
  face(180,0,50,50)
  face(0,180,50, 150)
  face(180,0,150,150)
  face(0,180,150,50)

  
}

function face(sx,sy,hx,hy) {

  strokeWeight(1.5);
  stroke(162, 0, 255);

  if( hx < 100 &&( hy < 100) ){
    fill(	255,	115,	115)
  }

  if(hx <100 &&(hy >100)){
    fill(244, 120, 53);
  }

  if(hx>100 && (hy < 100)){
    fill(106,13,131)
  }

  if(hx >100 && (hy > 100)){
    fill(234,0,217)
  }

  ellipse(hx, hy, 60, 90); //head

  line(hx-12, hy-36, hx-7, hy-26); //left brow

  line(hx+12, hy-36, hx+5, hy-26); //right brow

  ellipse(hx-13, hy-25, 5, 5); //left eye

  ellipse(hx+11, hy-25, 5, 5); //right eye

  arc(hx, hy+8, 20, 60, sy, sx); //mouth
}
