//count which string and how many string comtain given "u" || "U"
// var str = ["Nurupul", "ShuklaG","Yogesh","Chandra","ChandrU"]
// var count = 0;
// for(var i=0;i<str.length;i++){
//     for(var j=0;j<str[i].length;j++){
//         if(str[i][j] == "u" || str[i][j] == "U"){
//             count++
//             console.log(str[i])  //for name printing
//             break;
//         }
//     }
// }

//     console.log(count)





//count which string and how many string comtain given "u" || "U"

var str =   ["Nurupul", "ShuklaG","Yogesh","Chandra","ChandrU"]
var count = 0
for(var i=0;i<str.length;i++){
    var x = str[i]
    // console.log(str[i])
    for(var j=0;j<x.length;j++){
        if(x[j] == "U" || x[j] == "u"){
            count++
            console.log(x)
            break;
        }
    }
}
        console.log(count)


 

