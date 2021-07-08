var ball;
var db,position;
function setup(){
    createCanvas(500,500);
    db=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var dbref=db.ref("ball/position")
    dbref.on("value",readData,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(a,b){
    db.ref("ball/position").set({
        x:position.x+a,
        y:position.y+b,
    })
    
}

function readData(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}

function showError(){
    console.log("error")
}
