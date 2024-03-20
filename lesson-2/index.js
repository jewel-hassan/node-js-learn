// WRITEFILE

// var fs = require("fs");
// fs.writeFile("data.txt","this is demo data",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfull")
//     }
// })

// APPENDFILE

// var fs = require("fs")

// fs.appendFile("data.txt","my name is jewel",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("success")
//     }
// })

// RENAME

// var fs =require("fs")

// fs.rename("data.txt","data2.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successfull")
//     }
// })

// READFILE

// var fs =require("fs")

// fs.readFile("data.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// UNLINK OR DELETE FILE

// var fs = require("fs")

// fs.unlink("data2.txt",(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("succefull")
//     }
// })

// EXIST

var fs = require("fs");
fs.writeFileSync("data.txt", "this is demo data");

// (err)=>{
//     if(result==true){
//         console.log()
//     }else{
//         console.log("not found")
//     }
// })
