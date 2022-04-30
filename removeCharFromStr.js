//remove the character from str

var str = "Nurupul"
var magicBox = ""
for(var i=0;i<str.length;i++){
    if(i==1){
        continue;
    }
    magicBox += str[i]
}
console.log(magicBox)