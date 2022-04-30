var str = 'Nrupul'
var magicBox = ""
for(var i=0;i<str.length;i++){
    if(i==1){
        magicBox  += "u"
    }else{
        magicBox += str[i]
    }
}
console.log(magicBox)

//replace all single letter
var str = "Nrupul"
var magicBox = ""
for(var i=0;i<str.length;i++){
    if(str[i]=="u"){
        magicBox += "o"
    }else{
        magicBox += str[i]
    }
}
console.log(magicBox)