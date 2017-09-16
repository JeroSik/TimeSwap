/* content.js
var PTZ = ;//Page Time Zone
var UTZ = ;//User-defined Time Zone
*/
const ZONECODES = [];//hard code these later.
var page = ;//this is the current web page url
var str = document.getElementsByTagName('html')[0].outerHTML;
var index=0;
var indexSpace=0;
var[] possibleCodes;
var arrayIndex=0;

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

//get possible codes from the html page string
while((var temp="") != "</html>"){
  indexSpace = str.indexOf(" ",index);
  temp=str.substr(index,indexSpace);
  if(temp>=3&&temp<=5){
    for(var j=0; j<ZONECODES.length; j++){
      if(temp=ZONECODES[j]){
        for(var k=4; k<=7;k++){
          if(index==0||((index-k==" ")&&((index-(k-1)==isLetter(str.charAt(index-(k+1))))&&(index-(k+1)==Number.isInteger(str.charAt(index-(k-1)))))))){
            if(index==0){continue;}
            else{str.replace(str.substr(index,indexSpace),correctTime+" "+timeZone);}
          }
        }
      }
    }
  }
  index=indexSpace+1;
}
//compares possible codes with list of codes
/*
const ZONECODES = [];//hard code these later.
var[] codes;
var codeIndex=0;
for(int i=0; i<possibleCodes.length; i++){
  for(int j=0; j<ZONECODES.length; j++){
    if(possibleCodes[i]==ZONECODES[J]){codes[codeIndex]=possibleCodes[i];codeIndex++}
  }
var res = str.replace(PTZ, UTZ);
}
*/
