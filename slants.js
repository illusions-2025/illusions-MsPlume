//to save and see - lower left corner github, then go to repository, then prss actions from th main menu to see all workflows and the last webpage will be there
//shift. and reload to clear the cache
let colourMode; //variable to create the radio button

//this function is called once at the start of a sketch, always called and only onece and it is automatic
function setup() {

    //create a drawing surface on to the web page
    //this drawing surface is 1000 X 600
    canvas = createCanvas(1000,600);

    //move canvas to make way for radio buttons
    canvas.position(20,20);

    //create the radio buttons that will allow us 
    //to choose between all black, all white and
    //illusion mode. place in top left
    
    colourMode = createRadio();
    colourMode.option("2","black");//the first one is values of the radiobuttons
    colourMode.option("1","white");
    colourMode.option("0","illusion");

    colourMode.selected("2");
    colourMode.position(1020,20);

    //by default positional information in processing
    //are defined as the position of the top left "corner"
    //of the shape.  For our purposes it is much simpler
    //to view the position as the centre of the shape
    //thus we need to shift the rec/ellipse modes to
    //refer to centre
    rectMode(CENTER);//by default it will be the corner, isntead of centere being the coordinate how the shape is defined
    ellipseMode(CENTER);

}

//if stillColour is truthy, image will be black or white
//but not both (ie no illusion)
function drawCircles(stillColour){
    
    let offset = 100;
    let lineWidth = width - (2*offset);
    let circleWidth = lineWidth/16;
    let x = offset+circleWidth/2; //semicolons keep consistent but not required
    let y = offset + circlewidth; 
    for(let i = 0; i < 16; i++){
         stroke(0);
        fill(0);//esc to stop the autocomplete
        ellipse(x+i*circleWidth,y,circleWidth,circleWidth);
        
    }

    
}

//if stillColour is truthy, image will be black or white
//but not both (ie no illusion)
function drawLines(stillColour){
    let offset = 100;
    let lineWidth = width - (2*offset);
    let circleWidth = lineWidth/16;
    let x = offset+circleWidth/2; //semicolons keep consistent but not required
    let y = 50; 
    for(let i = 0; i < 16; i++){
         stroke(0);
        fill(0);//esc to stop the autocomplete
        ellipse(x+i*circleWidth,y,circleWidth,circleWidth);

}
//this function is called once every 60 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
//called 60ties per second automatically by P5, can change the rate 
function draw() {
    background(150)//multiple colormodes, grayscale (shades from white255 to balck0 so 150is gray - in the middles)
    c = int(colourMode.value());//grabs the radiobutton value and turns it into an integer
    drawCircles(c);
    drawLines(c);
    //noLoop(); -calls it once and is done, if not called then it will continually draw
}
