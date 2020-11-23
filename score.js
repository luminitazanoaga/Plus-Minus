let score = 1
function plus(){
    score ++;
  document.getElementById("result").innerHTML = score;
}

function minus(){
  if(score>0){
    score --;
  }
  document.getElementById("result").innerHTML = score;
}