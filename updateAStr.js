// var str = "Nrupul"
// var arr = []
// for(var i=0;i<str.length;i++){
//     arr.push(str[i])
// }
// arr[0] = "A"
// var new_str = ""
// for(var i=0;i<arr.length;i++){
//     new_str += arr[i]
// }
//     console.log(new_str)


var str = "Nrupul"
var arr = []
for(var i=0;i<str.length;i++){
    arr.push(str[i])
}
arr[0] = "Z"
// console.log(arr)
var str2 = ""
for(var i=0;i<arr.length;i++){
    str2 += arr[i]
}
console.log(str2)



//method 2
var str = "Nrupul"
var box = ""
for(var i=0;i<str.length;i++){
    if(i==0){
        box += "Z"
    }else{
        box += str[i]
    }
}
    console.log(box)

