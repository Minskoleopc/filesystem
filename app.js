const fs = require('fs');
const dirpath = "./file-repo/";
const filepath = "./file-repo/me.txt";
const filepath2 = "./file-repo/hello.txt";

// file manage???
// cy.readFile()
//cy.write()

// browser
// db access -- excel file system

// server -- files , db connect
// function()
// task ---->>>  output 
// testcase run 
// cy.task() ===> server --- data ---- browser access


// sync ---- blocking in nature
// async ---- non - blocking in nature

// readWrite , writeFile , rename , delete , fileexisit, append

// program 1
// let obj = fs.readFileSync(filepath,{encoding:"utf8"})
// console.log(obj)

//program 2
//console.log(fs.existsSync(filepath))

// if(fs.existsSync(filepath)){
//     console.log(obj)
// }
// else {
//     console.log(`${filepath} does not exist`)
// }

// program3

// if(fs.existsSync(dirpath)){
//     fs.writeFileSync(filepath,"hello i am learning javascript")
// }
// else {
//     console.log(`${dirpath} does not exist`)
// }

// if(fs.existsSync(dirpath)){
//     fs.writeFileSync(filepath,"\n hello i am learning js2",{flag:'a'})
// }
// else {
//     console.log(`${dirpath} does not exist`)
// }

// if(fs.existsSync(dirpath)){
//     fs.appendFileSync(filepath,"\n hello i am learning cloud")
// }
// else {
//     console.log(`${dirpath} does not exist`)
// }


// if(fs.existsSync(dirpath)){
//     fs.renameSync(filepath,filepath2)
// }
// else {
//     console.log(`${dirpath} does not exist`)
// }

// if(fs.existsSync(dirpath)){
//     fs.unlinkSync(filepath2)
// }
// else {
//     console.log(`${dirpath} does not exist`)
// }

// // async 

// // program for reading the file

// fs.readFile(filepath,"utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })


// // program -2 writing the asyn file

// fs.writeFile(filepath,"new to python",function(err){
//     if(err){
//         console.log(err)
//     }
//     else {
//         console.log('Data is saved')
//     }
// })

// // program 3 to append to existing file 
// fs.appendFile(filepath,"new to js",function(err){
//     if(err){
//         console.log(err)
//     }
//     else {
//         console.log('data append successfully')
//     }
// })

// // program - delete file
fs.unlink(filepath,function(err){
    if(err){
        console.log(err)
    }
    else {
        console.log('file deleted succesully')
    }
})
































