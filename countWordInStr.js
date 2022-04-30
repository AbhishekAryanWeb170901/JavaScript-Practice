//count total word in str
//run only for single str
var str = "Hi Nrupul"
var space = 0;
for(var i=0;i<str.length;i++){
    if(str[i] ==  " ") {
        space++
    }
}
console.log(space+1, "words")