//conver lower case str into Upper case str
var str = "nrupul"
var lowerCase = "nurupulnurulula"
var upperCase = "NURUPULNURUPULA"
var magicBox = ""
for(var i=0;i<str.length;i++){
    for(j=i;j<lowerCase.length;j++){
        if(str[i] == lowerCase[j]){
            magicBox += upperCase[j]
            break;
        }
    }
}
console.log(magicBox)


//convert lower case str into upper case

//intuition:

//1 --> declair variable & magicBox --> Nested loop -->
//..if str[i]==lower[i] --> then magicBox==upper[i]--> print magicBox

var str = "NRUPUL"
var magicBox = ""
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for(var i=0;i<str.length;i++){
    for(var j=0;j<upper.length;j++){
        if(str[i] == upper[j]){
            magicBox += lower[j]
        }
    }
}
console.log(magicBox)
