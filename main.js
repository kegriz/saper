var board = [];
var click = '"none"';
var click2 = '"hide"';
var goodmove = 0;

function success() {
  goodmove++;
  if (goodmove == 71) {
    for(i=0;i<81;i++){
      if (document.getElementsByClassName("hide")[i]){
        document.getElementsByClassName("hide")[i].style.display="none";
      }
    }
    alert("you win!!!")
  }
}

function fail() {
  for(i=0;i<81;i++){
    if (document.getElementsByClassName("hide")[i]) {
      document.getElementsByClassName("hide")[i].style.display="none";
    }
  }
  alert("fail");
}

function show() {
  var text="<table border='0' cellpadding='0' cellspacing='0'>";
  for(var y=0;y<=8;y++){
    text+="<tr>"
    for(var x=0;x<=8;x++){
    text+= "<td><div class='field'><center>";

      if (board[y][x]=="@") {
        text+= "<div class='elem'><img height='18' src='https://cdn4.iconfinder.com/data/icons/SUNNYDAY/networking/png/400/bomb.png'></div><div class='hide' onClick='fail();'></div></center></div></td>"
      } else {
        text+= "<div class='elem'>"+board[y][x]+"</div><div class='hide' onClick='this.style.display="+click+";success();'></div></center></div></td>"
      }

    text+="";
    }
    text+="</tr>";
  }
  text+="</table>";
document.getElementById('game').innerHTML= text;
}

function count(y,x) {
  if((x<8)&&(y>0)&&(board[y-1][x+1]!="@")){
  board[y-1][x+1]++;};
  if((x<8)&&(board[y][x+1]!="@")){
  board[y][x+1]++;};
  if((x<8)&&(y<8)&&(board[y+1][x+1]!="@")){
  board[y+1][x+1]++;};

  if((y>0)&&(board[y-1][x]!="@")){
  board[y-1][x]++;};
  if((y<8)&&(board[y+1][x]!="@")){
  board[y+1][x]++;};

  if((x>0)&&(y>0)&&(board[y-1][x-1]!="@")){
  board[y-1][x-1]++;};
  if((x>0)&&(board[y][x-1]!="@")){
  board[y][x-1]++;};
  if((x>0)&&(y<8)&&(board[y+1][x-1]!="@")){
  board[y+1][x-1]++;};
}

function bomb() {
  for (var i=1; i<=10;) {
    var y= Math.round(Math.random()*8);
    var x= Math.round(Math.random()*8);
    if (board[y][x]!="@") {
      board[y][x]="@";
      i++;
      count(y,x);
    }
  }
}

function start() {
  for (var y=0; y<=8; y++) {
    board[y]=[];
    for(var x=0;x<=8;x++){
    board[y][x]=0;
    }
  }
  bomb();
  show();
}
